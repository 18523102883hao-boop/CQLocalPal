/* CQLocalPal service worker v2 — scope: /en/
 * 契约（见 docs/plans/2026-11-04-PWA开发PRD-v1-Codex.md 缓存矩阵）：
 * - 只缓存公共只读资源；交易/私有路径 NetworkOnly，永不入 Cache Storage
 * - 不做"缓存所有GET"通配；不把失败请求写入缓存；导航失败回 /en/offline/，绝不回首页冒充
 * - 新版本不无条件 skipWaiting；由 Travel kit 页询问用户后再激活
 * 版本占位符由 scripts/build-offline-pack.mjs 在构建后回填。
 */
const SHELL_VERSION = '__SHELL_BUILD_ID__';
const SHELL_CACHE = `cqpal-shell-${SHELL_VERSION}`;
const SHELL = [
  '/en/travel-kit/',
  '/en/offline/',
  '/icon.svg',
];

// 迁移：删除 v1 骨架的已知旧缓存（其中曾包含 booking 页面），不动其他来源缓存
const LEGACY_CACHES = ['cqlocalpal-v1'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      // 单个 shell 资源失败不阻断安装（离线说明页本身尽力而为）
      .then((c) => Promise.allSettled(SHELL.map((u) => c.add(u))))
  );
  // 不调用 skipWaiting：新版本进入 waiting，由 Travel kit 页询问用户后再激活
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((k) => (k.startsWith('cqpal-shell-') && k !== SHELL_CACHE) || LEGACY_CACHES.includes(k))
          .map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function isPrivatePath(url) {
  const p = url.pathname;
  return p.startsWith('/en/booking') ||
    p.startsWith('/api/') ||
    p.startsWith('/ops/') ||
    p.startsWith('/en/reviews/write') ||
    url.searchParams.has('token') ||
    url.searchParams.has('order') ||
    url.searchParams.has('payment');
}

async function offlinePage() {
  const hit = await caches.match('/en/offline/');
  return hit || new Response('Offline. Please reconnect and try again.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
}

async function fromAnyPack(request) {
  const keys = (await caches.keys()).filter((k) => k.startsWith('cqpal-pack-') && !k.includes('staging'));
  for (const k of keys) {
    const hit = await (await caches.open(k)).match(request);
    if (hit) return hit;
  }
  return null;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // 跨域：网络直连，不做代理缓存

  // latest.json：NetworkOnly + no-store，由页面决定如何展示
  if (url.pathname === '/offline-pack/en/latest.json') {
    event.respondWith(fetch(req, { cache: 'no-store' }));
    return;
  }

  // 交易/私有路径：永不缓存；失败给公共离线说明（无订单号/金额/按钮）
  if (isPrivatePath(url)) {
    event.respondWith(
      fetch(req).catch(() => (req.mode === 'navigate' ? offlinePage() : new Response('', { status: 503 })))
    );
    return;
  }

  // 资料包文章页：已保存的完整包优先（离线可读），否则网络
  if (url.pathname.startsWith('/en/travel-kit/') && url.pathname !== '/en/travel-kit/') {
    event.respondWith(
      fromAnyPack(req).then((hit) => hit || fetch(req).catch(() => offlinePage()))
    );
    return;
  }

  // 导航：网络优先；失败回 shell 内的公共页（kit 首页/离线说明），最后兜底离线说明；不回首页
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(async () => {
        const shellHit = await caches.match(req);
        return shellHit || offlinePage();
      })
    );
    return;
  }

  // shell 静态资产：cache-first，后台不更新（体积小，版本随构建走）
  event.respondWith(
    caches.match(req).then((hit) => hit || fetch(req))
  );
});

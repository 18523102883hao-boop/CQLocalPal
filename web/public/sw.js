/* CQLocalPal service worker — v1
 * 策略：同源自研页面 network-first（内容常新），失败回退缓存；
 * 静态资产 cache-first；跨域仅缓存字体文件。核心页面预缓存，
 * 保证客人在机场落地无网时仍能打开确认信息与落地指引。
 */
const VERSION = 'cqlocalpal-v1';
const CORE = [
  '/en/',
  '/en/tours/',
  '/en/tours/first-night-chongqing/',
  '/en/tours/concierge/',
  '/en/tours/private/',
  '/en/tours/first-night-family/',
  '/en/add-ons/non-spicy-food-tour/',
  '/en/booking/',
  '/en/faq/',
  '/en/hosts/',
  '/en/guide/',
  '/en/guide/first-night-in-chongqing/',
  '/en/guide/payments-and-money/',
  '/en/guide/sim-card-and-internet/',
  '/en/guide/non-spicy-food-in-chongqing/',
  '/en/guide/airport-to-your-hotel/',
  '/en/reviews/',
  '/en/about/',
  '/en/legal/refunds/',
  '/en/legal/no-shopping/',
  '/manifest.webmanifest',
  '/icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) =>
      // 单个页面缓存失败不阻断安装
      Promise.allSettled(CORE.map((url) => cache.add(url)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 跨域：字体 cache-first，其余（Google Fonts CSS / wa.me 等）走网络
  if (url.origin !== self.location.origin) {
    if (url.hostname === 'fonts.gstatic.com') {
      event.respondWith(
        caches.match(req).then((hit) => hit || fetch(req).then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(VERSION).then((c) => c.put(req, clone));
          }
          return res;
        }))
      );
    }
    return;
  }

  // 同源页面：network-first，失败回退缓存，文档兜底回首页
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((res) => {
        const clone = res.clone();
        caches.open(VERSION).then((c) => c.put(req, clone));
        return res;
      }).catch(async () => {
        const hit = await caches.match(req);
        return hit || caches.match('/en/');
      })
    );
    return;
  }

  // 同源静态资源：network-first 并更新缓存
  event.respondWith(
    fetch(req).then((res) => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(VERSION).then((c) => c.put(req, clone));
      }
      return res;
    }).catch(() => caches.match(req))
  );
});

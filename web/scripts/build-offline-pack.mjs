// 构建期生成公共离线资料包清单：
// dist/offline-pack/en/{version}.json + latest.json
// version = 内容 hash（内容变则版本变），并回填 dist/en/sw.js 的 shell 版本占位符。
// 只允许白名单内的公共路径进入清单——交易/私有路径混入即构建失败。
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '../dist');

// 白名单：五篇离线阅读页（travel-kit 子页）。字体/图标在 SW shell，不入包。
const KIT_PAGES = [
  '/en/travel-kit/first-night-in-chongqing/',
  '/en/travel-kit/payments-and-money/',
  '/en/travel-kit/sim-card-and-internet/',
  '/en/travel-kit/non-spicy-food-in-chongqing/',
  '/en/travel-kit/airport-to-your-hotel/',
];
const FORBIDDEN = /(\/booking|\/api\/|\/ops\/|[?&](token|order|payment)=)/i;

function entryFor(url) {
  if (FORBIDDEN.test(url)) throw new Error(`私有/交易路径混入资料包: ${url}`);
  const file = join(dist, url, 'index.html');
  if (!existsSync(file)) throw new Error(`页面未生成: ${url}`);
  const buf = readFileSync(file);
  return {
    url,
    sha256: createHash('sha256').update(buf).digest('hex'),
    bytes: buf.byteLength,
    contentType: 'text/html; charset=utf-8',
    role: 'required',
  };
}

const entries = KIT_PAGES.map(entryFor);
const contentHash = createHash('sha256')
  .update(entries.map((e) => e.sha256).join(''))
  .digest('hex')
  .slice(0, 12);
const version = `2026.${contentHash}`;
const totalBytes = entries.reduce((s, e) => s + e.bytes, 0);
if (totalBytes > 3 * 1024 * 1024) throw new Error(`资料包超过 3MiB 预算: ${totalBytes}`);

// 核验日期取内容 frontmatter 中最新的 verified 日期（构建时由页面输出，这里取 mtime 近似为构建日）
const manifest = {
  packId: 'cqpal-trip-essentials',
  locale: 'en',
  version,
  publishedAt: new Date().toISOString(),
  reviewedAt: new Date().toISOString().slice(0, 10),
  totalBytes,
  entries,
};

const outDir = join(dist, 'offline-pack/en');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, `${version}.json`), JSON.stringify(manifest, null, 2));
writeFileSync(join(outDir, 'latest.json'), JSON.stringify({ version, publishedAt: manifest.publishedAt }, null, 2));

// 回填 SW shell 版本
const swPath = join(dist, 'en/sw.js');
if (existsSync(swPath)) {
  const sw = readFileSync(swPath, 'utf8');
  writeFileSync(swPath, sw.replaceAll('__SHELL_BUILD_ID__', version));
}

console.log(`offline pack v${version}: ${entries.length} entries, ${(totalBytes / 1024).toFixed(1)} KiB`);

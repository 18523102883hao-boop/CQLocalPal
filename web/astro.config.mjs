import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.cqbuddy.com',
  output: 'static',
  i18n: {
    locales: ['en', 'ms', 'ko', 'ja'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
  integrations: [
    sitemap({
      // 只收录已发布的公开页面；离线版/noindex 页不进 sitemap
      filter: (page) =>
        !page.includes('/travel-kit/') &&
        !page.includes('/offline/') &&
        !page.includes('/ms/') &&
        !page.includes('/ko/') &&
        !page.includes('/ja/'),
    }),
  ],
  build: { format: 'directory' },
});

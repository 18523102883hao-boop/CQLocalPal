import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.cqlocalpal.com',
  output: 'static',
  i18n: {
    locales: ['en', 'ms', 'ko', 'ja'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
  build: { format: 'directory' },
});

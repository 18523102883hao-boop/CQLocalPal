// ⚠️ 全局品牌与运营配置。上线前逐项替换 TODO 值；代码中所有页面均从此处取值。
export const site = {
  name: 'CQLocalPal',
  tagline: 'Chongqing, with someone local by your side.',
  url: 'https://www.cqlocalpal.com',
  // TODO_CONFIG: 换成真实 WhatsApp Business 号码（国际格式，无 + 号）
  whatsapp: '8615012345678',
  supportEmail: 'hello@cqlocalpal.com',
  operatorLegalName: 'CQLocalPal (pending registered entity — TODO_CONFIG)',
  supportHours: '08:00–24:00 (Beijing time)',
  responsePromise: 'A real reply within 30 minutes',
  deposit: { cny: 100, usd: 15 },
};

export const publishedLocales = ['en'];
export const allLocales = ['en', 'ms', 'ko', 'ja'];

export const nav = [
  { href: '/en/tours/', label: 'Tours' },
  { href: '/en/hosts/', label: 'Meet your host' },
  { href: '/en/guide/', label: 'Guide' },
  { href: '/en/reviews/', label: 'Reviews' },
  { href: '/en/about/', label: 'About' },
];

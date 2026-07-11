/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  i18n: {
    locales: ['en', 'ka'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;

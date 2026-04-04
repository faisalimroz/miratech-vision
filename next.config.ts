// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n.ts' // Points to the i18n.ts file in your image
);

const nextConfig = {};

export default withNextIntl(nextConfig);
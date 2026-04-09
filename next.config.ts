import type { NextConfig } from 'next'; // Import the type
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = { // Explicitly type the config

  images: {
    unoptimized: true, // Usually required for static exports
  },
};

export default withNextIntl(nextConfig);
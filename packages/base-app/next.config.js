const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  transpilePackages: [
    '@app/state',
    '@app/utils',
    '@app/helpers',
    '@app/components',
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['i.dummyjson.com', 'i.vimeocdn.com'],
  },
};

module.exports = withBundleAnalyzer(config);

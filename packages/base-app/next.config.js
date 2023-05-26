const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['i.dummyjson.com', 'i.vimeocdn.com'],
  },
  transpilePackages: [
    '@app/state',
    '@app/utils',
    '@app/helpers',
    '@app/components',
  ],
};

module.exports = withBundleAnalyzer(config);

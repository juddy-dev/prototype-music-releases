/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: false,

  images: {
    domains: [
      ''
    ],
    unoptimized: true,
  },
  experimental: {
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: false, // changed this to false

  images: {
    domains: [
      ''
    ],
    // Make ENV
    unoptimized: true,
  },
  experimental: {
  },
};

// module.exports = withTM(nextConfig);
module.exports = nextConfig;

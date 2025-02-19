/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  basePath: '/prototype-music-releases',
  assetPrefix:  '/prototype-music-releases',
  reactStrictMode: false, // changed this to false

  images: {
    domains: [
      ''
    ],
    unoptimized: true,
  },
  experimental: {
  },
};

// module.exports = withTM(nextConfig);
module.exports = nextConfig;

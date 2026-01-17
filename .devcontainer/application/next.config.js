/** @type {import('next').NextConfig} */
/** @jsxImportSource @emotion/react */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
  },
  compiler: {
    emotion: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://yota-maeda.pages.dev',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

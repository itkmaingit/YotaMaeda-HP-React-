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
};

module.exports = nextConfig;

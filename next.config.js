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
};

module.exports = nextConfig;

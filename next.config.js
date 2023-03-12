/** @type {import('next').NextConfig} */
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

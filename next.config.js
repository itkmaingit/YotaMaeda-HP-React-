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
  webpack(config, { isServer }) {
    if (!isServer) {
      // クライアント側でのみEmotionを有効にする
      config.resolve.alias["@emotion/core"] = "@emotion/react";
      config.resolve.alias["emotion-theming"] = "@emotion/react";
    }
    return config;
  },
  babel(config) {
    // EmotionのJSXプラグインをBabelに追加する
    config.plugins.push(["@emotion/babel-plugin"]);
    return config;
  },
};

module.exports = nextConfig;

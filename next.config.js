/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.glitch.global", "res.cloudinary.com"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp4/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;

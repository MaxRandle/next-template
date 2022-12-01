/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

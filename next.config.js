/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["songha.ir"],
  },
};

module.exports = nextConfig;

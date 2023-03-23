/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["musicplayer.robnsiov.ir"],
  },
};

module.exports = nextConfig;

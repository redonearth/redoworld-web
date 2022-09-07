/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.notion.so', 'ninetail.vercel.app', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;

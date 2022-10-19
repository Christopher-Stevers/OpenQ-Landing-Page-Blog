/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['avatars.githubusercontent.com'] },
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;

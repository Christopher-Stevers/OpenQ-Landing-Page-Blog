/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['avatars.githubusercontent.com'] },
  env: {
    NEXT_PUBLIC_CONVERTKIT_KEY: process.env.CONVERTKIT_KEY,
    NEXT_PUBLIC_CONVERTKIT_FORM: process.env.CONVERTKIT_FORM,

  },
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

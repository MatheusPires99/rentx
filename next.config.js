/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    API: process.env.API,
  },
  images: {
    domains: ["github.githubassets.com"],
  },
};

export default nextConfig;

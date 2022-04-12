/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/travigo",
  },
};

module.exports = nextConfig;

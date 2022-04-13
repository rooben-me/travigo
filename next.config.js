/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/travigo",
    DB_URI:
      "mongodb+srv://ruban:Goodgame6190@cluster0.vbfzh.mongodb.net/bookit?retryWrites=true&w=majority",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

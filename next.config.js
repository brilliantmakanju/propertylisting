/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "soge.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

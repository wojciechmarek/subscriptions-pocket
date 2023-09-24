/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com", port: "" },
      { protocol: "https", hostname: "dsc.cloud", port: "" },
    ],
  },
};

module.exports = nextConfig;

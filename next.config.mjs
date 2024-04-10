/** @type {import('next').NextConfig} */

import withPWA from "next-pwa"

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true
  }),
  reactStrictMode: true,
  images: {
    domains: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

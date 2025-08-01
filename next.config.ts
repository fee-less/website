import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://randomuser.me/**")],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
};

export default nextConfig;

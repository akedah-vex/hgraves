import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  // include hostname for images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icon.icepanel.io"
      }
    ]
  }
};

export default nextConfig;

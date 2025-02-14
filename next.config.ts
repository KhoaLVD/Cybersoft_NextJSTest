import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apistore.cybersoft.edu.vn",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/conductor-playground" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/conductor-playground" : "",
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: [
    "cat-plead-merge"
  ]
};

export default nextConfig;

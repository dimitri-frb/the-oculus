import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/the-oculus",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

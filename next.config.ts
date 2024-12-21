import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Disable default image optimization
  },
  reactStrictMode: true,
  assetPrefix: isProd ? '/my-portfolio/' : '',
  basePath: isProd ? '/my-portfolio' : '',
  output: 'export'

};

export default nextConfig;

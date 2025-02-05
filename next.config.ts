import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rhythm-up.seojaewan.com',
      },
      {
        protocol: 'https',
        hostname: 'mafia-game.seojaewan.com',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  output: 'standalone' as const,
  reactStrictMode: false,
};

export default nextConfig;

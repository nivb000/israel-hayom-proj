import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['plus.unsplash.com', 'your-other-domains.com'], // Add other domains you want to allow
  },
}

export default nextConfig;

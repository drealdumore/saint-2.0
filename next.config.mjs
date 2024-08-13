/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Leave it empty to allow all domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Matches any hostname
        port: "",
        pathname: "/**", // Matches any pathname
      },
    ],
    deviceSizes: [390, 435, 768, 1024, 1280],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

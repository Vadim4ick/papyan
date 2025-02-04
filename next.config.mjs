/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "147.45.246.176",
        port: "8055",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "admin.drpapyan.ru",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;

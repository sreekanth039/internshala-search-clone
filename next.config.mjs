/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "internshala-uploads.internshala.com",
      },
    ],
  },
};

export default nextConfig;

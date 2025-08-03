/** @type {import('next').NextConfig} */
const nextConfig = {
  // The 'output: "export"' line has been removed to enable a dynamic server.
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

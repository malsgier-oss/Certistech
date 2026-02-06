/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Cloudflare build: don't fail the deploy on TS/Eslint
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

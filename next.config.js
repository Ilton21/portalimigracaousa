/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Temporary: Next.js 15 build invokes legacy ESLint options with this repository's config.
  // Run a standalone lint check after aligning the ESLint toolchain.
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;

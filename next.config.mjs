/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputFileTracing: true,
    incrementalCacheHandlerPath: "./cache-handler.js",
  },
  compiler: {
    styledComponents: true,
  },
  optimizeFonts: true,
};

export default nextConfig;

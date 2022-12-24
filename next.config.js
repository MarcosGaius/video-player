/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  experimental: {
    fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};

module.exports = nextConfig;

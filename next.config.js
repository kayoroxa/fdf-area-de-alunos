/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.prismic.io', 'prismic.io'],
  },
}

module.exports = nextConfig

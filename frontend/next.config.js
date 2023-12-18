/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.technodom.kz', 'www.ico.kz', 'aizyldyz-bucket.s3.amazonaws.com'],
  },
}

module.exports = nextConfig

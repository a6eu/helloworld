/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add all the domains you need here
    domains: [
      'api.technodom.kz',
      'www.ico.kz',
      'aizyldyz-bucket.s3.amazonaws.com',
      'b2b.marvel.kz', // Added this domain as per your requirement
      'www.google.com',
      '01itgroup.s3.amazonaws.com'
    ],
  },
  // Include any other configurations you need here
}

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['api.technodom.kz', 'www.ico.kz', 'aizyldyz-bucket.s3.amazonaws.com'],
//   },
// }

// module.exports = nextConfig

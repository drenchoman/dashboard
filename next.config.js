/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

module.exports = nextConfig;

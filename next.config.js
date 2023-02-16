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
      {
        protocol: 'https',
        hostname: 'media.giphy.com',

        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media0.giphy.com',

        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media1.giphy.com',

        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media2.giphy.com',

        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media3.giphy.com',

        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',

        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;

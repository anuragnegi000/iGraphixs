// next.config.js

const nextConfig = {
    images: {
      domains: ['assets.aceternity.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
      ],
    }, 
    Image: {
        hostname: "images.unsplash.com"
    }
  };
  
  module.exports = nextConfig;
  
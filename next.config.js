/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devgallery-db-bucket.s3.eu-north-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io'
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com'
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com'
      },
      {
        protocol: 'https',
        hostname: 'robohash.org'
      },
      {
        protocol: 'https',
        hostname: 'github.com'
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
};

module.exports = nextConfig;



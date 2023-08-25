/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "devgallery-db-bucket.s3.eu-north-1.amazonaws.com",
            "avatars.githubusercontent.com",
            "img.shields.io",
            "www.gravatar.com",
            "ui-avatars.com",
            "robohash.org"
        ],
    },
}

module.exports = nextConfig

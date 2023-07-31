/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "devgallery-db-bucket.s3.eu-north-1.amazonaws.com",
            "avatars.githubusercontent.com"
        ],
    },
}

module.exports = nextConfig

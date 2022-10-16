/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        localeDetection: false,
        locales: ['en', 'cz', 'uk'],
        defaultLocale: 'en'
    }
}

module.exports = nextConfig
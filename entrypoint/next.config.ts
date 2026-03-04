import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: '',
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    '@ui/footer',
    '@ui/menu',
    '@ui/slider',
    '@ui/hooks',
    '@ui/buttons',
    '@ui/advertisements',
    '@ui/event-board',
    '@ui/modals',
    '@ui/stars-background',
    '@ui/text-footer',
    '@ui/text-header',
    '@ui/text-main',
    '@pages/landing',
    '@pages/afisha',
    '@shared/consts',
    '@shared/interfaces',
    '@shared/types',
  ],
}

export default nextConfig

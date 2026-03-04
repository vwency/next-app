import { NextConfig } from 'next'
import path from 'path'

const root = path.resolve(__dirname, '..')
const pkg = (p: string) => path.resolve(root, 'packages', p, 'src')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: '',
  images: { unoptimized: true },
  turbopack: {},
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ui/footer':           pkg('ui/footer'),
      '@ui/menu':             pkg('ui/menu'),
      '@ui/slider':           pkg('ui/slider'),
      '@ui/hooks':            pkg('ui/hooks'),
      '@ui/buttons':          pkg('ui/buttons'),
      '@ui/advertisements':   pkg('ui/advertisements'),
      '@ui/event-board':      pkg('ui/event-board'),
      '@ui/modals':           pkg('ui/modals'),
      '@ui/stars-background': pkg('ui/stars-background'),
      '@ui/text-footer':      pkg('ui/text-footer'),
      '@ui/text-header':      pkg('ui/text-header'),
      '@ui/text-main':        pkg('ui/text-main'),
      '@pages/landing':       pkg('pages/landing'),
      '@pages/afisha':        pkg('pages/afisha'),
      '@shared/consts':       pkg('shared/consts'),
      '@shared/interfaces':   pkg('shared/interfaces'),
      '@shared/types':        pkg('shared/types'),
    }
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules\/(?!(@ui|@pages|@shared))/,
      }
    }
    return config
  },
  transpilePackages: [
    '@ui/footer', '@ui/menu', '@ui/slider', '@ui/hooks', '@ui/buttons',
    '@ui/advertisements', '@ui/event-board', '@ui/modals', '@ui/stars-background',
    '@ui/text-footer', '@ui/text-header', '@ui/text-main',
    '@pages/landing', '@pages/afisha',
    '@shared/consts', '@shared/interfaces', '@shared/types',
  ],
}

export default nextConfig

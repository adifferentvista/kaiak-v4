import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kaiak.io' }],
        destination: 'https://kaiak.io/:path*',
        permanent: true,
      },
      // Redirect /contact to /booking
      {
        source: '/contact',
        destination: '/booking',
        permanent: true,
      },
      // Redirect /services to /work-with-me
      {
        source: '/services',
        destination: '/work-with-me',
        permanent: true,
      },
      // Redirect /second-brain to /products/second-brain-guide
      {
        source: '/second-brain',
        destination: '/products/second-brain-guide',
        permanent: true,
      },
    ];
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)

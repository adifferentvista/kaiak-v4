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
      // Common pages people look for
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/work-with-me',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/work-with-me',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/work-with-me',
        permanent: true,
      },
      {
        source: '/academy',
        destination: '/work-with-me',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/ai-toolkit',
        permanent: true,
      },
      {
        source: '/tools',
        destination: '/ai-toolkit',
        permanent: true,
      },
      // Old/partial blog slugs
      {
        source: '/blog/jagged-frontier',
        destination: '/blog/what-to-automate-what-to-protect',
        permanent: true,
      },
      {
        source: '/blog/ai-meeting-notes-pipeline',
        destination: '/blog/automated-research-pipeline',
        permanent: true,
      },
      {
        source: '/blog/ai-toolkit-guide',
        destination: '/ai-toolkit',
        permanent: true,
      },
      {
        source: '/blog/ai-report-comments',
        destination: '/blog/ai-report-comments-teachers',
        permanent: true,
      },
      {
        source: '/blog/heygen',
        destination: '/blog/heygen-ai-avatar-video-guide',
        permanent: true,
      },
      {
        source: '/blog/elevenlabs',
        destination: '/blog/elevenlabs-voice-cloning-guide',
        permanent: true,
      },
      {
        source: '/products/academy',
        destination: '/work-with-me',
        permanent: true,
      },
      {
        source: '/courses/ai-jumpstart',
        destination: '/work-with-me',
        permanent: true,
      },
      {
        source: '/workshop',
        destination: '/work-with-me',
        permanent: true,
      },
      {
        source: '/products/second-brain-guide',
        destination: '/ai-toolkit',
        permanent: true,
      },
      {
        source: '/journal',
        destination: '/blog',
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

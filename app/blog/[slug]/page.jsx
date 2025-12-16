import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import MDXComponents from '@/app/components/MDXComponents'
import { Logo } from '@/app/components/Icons'

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  const title = `${post.title} | KAIAK`
  const description = post.description
  const url = `https://kaiak.io/blog/${slug}`
  const publishedTime = new Date(post.date).toISOString()
  
  return {
    title,
    description,
    authors: [{ name: 'Benedict' }],
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: 'KAIAK',
      locale: 'en_US',
      type: 'article',
      publishedTime,
      authors: ['Benedict'],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}

// Inline SVG for back arrow
const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

// Pillar labels for display
const pillarLabels = {
  'practical-ai': 'Practical AI',
  'systems-thinking': 'Systems Thinking',
  'leadership': 'Leadership',
  'no-admin-life': 'The No-Admin Life',
}

// JSON-LD structured data component
function ArticleJsonLd({ post, slug }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: 'Benedict',
      url: 'https://kaiak.io/#about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KAIAK',
      url: 'https://kaiak.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kaiak.io/benedict.png',
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kaiak.io/blog/${slug}`,
    },
    articleSection: pillarLabels[post.pillar] || post.category,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const allPosts = getAllPosts()

  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3)

  const pillarLabel = pillarLabels[post.pillar] || post.category

  return (
    <>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd post={post} slug={slug} />
      
      <div className="min-h-screen bg-cream">
        {/* Navigation */}
        <nav className="border-b border-slate-200/50 bg-cream/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/">
                <Logo />
              </a>
              <a
                href="/blog"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium"
              >
                <ArrowLeftIcon />
                Back to Blog
              </a>
            </div>
          </div>
        </nav>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-amber-100 text-amber-800">
                {pillarLabel}
              </span>
              <span className="text-sm text-slate-400">{post.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-navy mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600">{post.description}</p>
            <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-4">
              <img
                src="/benedict.png"
                alt="Benedict"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-navy">Benedict</p>
                <p className="text-sm text-slate-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-strong:text-navy">
            <MDXRemote source={post.content} components={MDXComponents} />
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 rounded-xl bg-blue-gray border border-slate-200">
            <div className="flex items-start gap-4">
              <img
                src="/benedict.png"
                alt="Benedict"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-lg text-navy mb-1">Written by Benedict</p>
                <p className="text-slate-600 text-sm mb-3">
                  20 years in international education. Now helping leaders reclaim their time through AI and smart systems.
                </p>
                <a
                  href="/#contact"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  Work with me →
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="font-serif text-xl text-navy mb-6">Keep Reading</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <a
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
                  >
                    <p className="font-medium text-navy">{relatedPost.title}</p>
                    <p className="text-sm text-slate-500 mt-1">{relatedPost.readTime}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Footer CTA */}
        <section className="py-12 bg-navy text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl mb-4">Ready to get your time back?</h3>
            <p className="text-slate-300 mb-6">
              Book a free 30-minute call and let&apos;s talk about what&apos;s eating your time.
            </p>
            <button
              onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/ben-kaiak/30min'})}
              className="inline-block px-8 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Book Your Free Call
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

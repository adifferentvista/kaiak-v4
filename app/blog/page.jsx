import { getAllPosts } from '@/lib/posts'
import { Logo } from '../components/Icons'
import NewsletterForm from '../components/NewsletterForm'

export const metadata = {
  title: 'Blog | KAIAK - AI & Systems for Leaders',
  description: 'Practical insights on AI automation, productivity systems, and leadership. Notes from the trenches of building systems that actually work.',
  openGraph: {
    title: 'Blog | KAIAK',
    description: 'Practical insights on AI automation, productivity systems, and leadership.',
    url: 'https://kaiak.io/blog',
    siteName: 'KAIAK',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | KAIAK',
    description: 'Practical insights on AI automation, productivity systems, and leadership.',
  },
  alternates: {
    canonical: 'https://kaiak.io/blog',
  },
}

// Pillar labels for display
const pillarLabels = {
  'practical-ai': 'Practical AI',
  'systems-thinking': 'Systems',
  'leadership': 'Leadership',
  'no-admin-life': 'No-Admin Life',
}

// JSON-LD for blog listing page
function BlogJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'KAIAK Blog',
    description: 'Practical insights on AI automation, productivity systems, and leadership.',
    url: 'https://kaiak.io/blog',
    author: {
      '@type': 'Person',
      name: 'Benedict',
      url: 'https://kaiak.io/#about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KAIAK',
      url: 'https://kaiak.io',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  
  // Featured posts (marked with featured: true in frontmatter)
  const featuredPosts = allPosts.filter((post) => post.featured)
  
  // Recent posts (non-featured, sorted by date)
  const recentPosts = allPosts.filter((post) => !post.featured)

  return (
    <>
      <BlogJsonLd />
      
      <div className="min-h-screen bg-cream">
        {/* Navigation */}
        <nav className="border-b border-slate-200/50 bg-cream/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/">
                <Logo />
              </a>
              <div className="flex items-center gap-6">
                <a href="/" className="text-slate-600 hover:text-slate-900 text-sm font-medium">
                  Home
                </a>
                <a href="/#services" className="text-slate-600 hover:text-slate-900 text-sm font-medium">
                  Services
                </a>
                <a href="/#contact" className="hidden md:block px-4 py-2 rounded-lg text-sm font-medium text-white bg-navy hover:bg-navy-light transition-colors">
                  Work With Me
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="font-serif text-4xl text-navy mb-4">Thinking Out Loud</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Notes on building AI systems that actually work, from someone still figuring it out in the trenches.
            </p>
          </header>

          {/* Start Here - Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Start Here
                </h2>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-amber-100 text-amber-800">
                        {pillarLabels[post.pillar] || post.category}
                      </span>
                      <span className="text-sm text-slate-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl text-navy mb-2">{post.title}</h3>
                    <p className="text-slate-600 text-sm">{post.description}</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                All Posts
              </h2>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-amber-100 text-amber-800">
                        {pillarLabels[post.pillar] || post.category}
                      </span>
                      <span className="text-sm text-slate-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-lg text-navy">{post.title}</h3>
                  </div>
                  <span className="hidden sm:block text-sm text-slate-400 ml-4">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* Newsletter CTA */}
        <section className="py-12 bg-navy text-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl mb-4">Get the weekly dispatch</h3>
            <p className="text-slate-300 mb-6">
              Practical AI strategies for leaders. No fluff, no spam.
            </p>
            <NewsletterForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-navy-dark text-slate-400">
          <div className="max-w-4xl mx-auto px-6 text-center text-sm">
            <p>© {new Date().getFullYear()} KAIAK. Less admin. More impact.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

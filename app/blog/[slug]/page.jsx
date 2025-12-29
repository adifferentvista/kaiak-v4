import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts, getAllPosts, pillarLabels, pillarColors } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '../../components/MDXComponents';
import ThemeToggle from '../../components/ThemeToggle';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found | KAIAK' };
  }
  
  const url = `https://kaiak.io/blog/${params.slug}`;
  
  return {
    title: `${post.title} | KAIAK`,
    description: post.description,
    authors: [{ name: 'Benedict' }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'KAIAK',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: ['Benedict'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

// JSON-LD structured data for SEO
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
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kaiak.io/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Arrow icons
const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

// Logo with dark mode support
const Logo = () => (
  <Link href="/" className="block hover:opacity-90 transition-opacity">
    <svg width="100" height="34" viewBox="0 0 260 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <rect x="10" y="20" width="12" height="60" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
      <path d="M28 50 L48 20 L62 20 L38 55 L62 80 L48 80 L28 55" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
      <text x="85" y="80" textAnchor="middle" className="fill-[#0F172A] dark:fill-[#F8FAFC]" fontFamily="monospace" fontWeight="bold" fontSize="64">A</text>
      <rect x="122" y="15" width="16" height="15" fill="#EA580C"/>
      <rect x="122" y="35" width="16" height="45" className="fill-[#334155] dark:fill-[#F8FAFC]"/>
      <text x="175" y="80" textAnchor="middle" className="fill-[#0F172A] dark:fill-[#F8FAFC]" fontFamily="monospace" fontWeight="bold" fontSize="64">A</text>
      <g transform="translate(260, 0) scale(-1, 1)">
        <rect x="10" y="20" width="12" height="60" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
        <path d="M28 50 L48 20 L62 20 L38 55 L62 80 L48 80 L28 55" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
      </g>
    </svg>
  </Link>
);

// Sidebar post link (compact)
function SidebarPostLink({ post, isCurrentPost = false }) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className={`
        block py-2 px-3 -mx-3 rounded-lg text-sm transition-colors
        ${isCurrentPost 
          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium' 
          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
        }
      `}
    >
      <span className="line-clamp-2">{post.title}</span>
      <span className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 block">
        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </span>
    </Link>
  );
}

// Filter button for sidebar
function FilterButton({ pillarKey, label, count, isActive }) {
  return (
    <Link
      href={`/blog?pillar=${pillarKey}`}
      className={`
        flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-colors
        ${isActive 
          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium' 
          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
        }
      `}
    >
      <span>{label}</span>
      <span className={`text-xs ${isActive ? 'text-orange-600 dark:text-orange-400' : 'text-slate-400 dark:text-slate-500'}`}>
        {count}
      </span>
    </Link>
  );
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const colors = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };
  
  // Get posts in the same pillar for sidebar
  const samePillarPosts = allPosts.filter(p => p.pillar === post.pillar);
  
  // Count posts per pillar
  const pillarCounts = Object.keys(pillarLabels).reduce((acc, key) => {
    acc[key] = allPosts.filter(p => p.pillar === key).length;
    return acc;
  }, {});

  return (
    <>
      <ArticleJsonLd post={post} slug={params.slug} />
      
      <div className="min-h-screen font-sans bg-cream dark:bg-navy transition-colors">
        {/* Navigation */}
        <nav className="border-b border-slate-200/50 dark:border-slate-700/50 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center gap-4">
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Home</Link>
                <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Blog</Link>
                <Link href="/products/second-brain-guide" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">The Guide</Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                
                {/* Current Pillar Posts */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide"
                      style={{ backgroundColor: colors.bg, color: colors.text }}
                    >
                      {pillarLabels[post.pillar]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {samePillarPosts.length} posts in this topic
                  </p>
                  
                  <div className="space-y-1 max-h-[300px] overflow-y-auto">
                    {samePillarPosts.map((p) => (
                      <SidebarPostLink 
                        key={p.slug} 
                        post={p} 
                        isCurrentPost={p.slug === params.slug}
                      />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200 dark:border-slate-700 my-6" />

                {/* Other Topics */}
                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                    Other Topics
                  </h3>
                  <div className="space-y-1">
                    {Object.entries(pillarLabels)
                      .filter(([key]) => key !== post.pillar)
                      .map(([key, label]) => (
                        <FilterButton
                          key={key}
                          pillarKey={key}
                          label={label}
                          count={pillarCounts[key]}
                          isActive={false}
                        />
                      ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  <h3 className="font-medium text-navy dark:text-white text-sm mb-2">
                    Get the Guide
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                    The No-Admin Second Brain — templates & systems for school leaders.
                  </p>
                  <Link
                    href="/products/second-brain-guide"
                    className="block text-center text-xs font-medium bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 order-1 lg:order-2">
              {/* Back link */}
              <Link
                href="/blog"
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 mb-6 inline-flex items-center gap-1"
              >
                <ArrowLeftIcon /> All posts
              </Link>

              {/* Article Header */}
              <header className="mb-10 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <Link 
                    href={`/blog?pillar=${post.pillar}`}
                    className="text-xs font-medium px-2 py-1 rounded-full hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: colors.bg, color: colors.text }}
                  >
                    {pillarLabels[post.pillar]}
                  </Link>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{post.readTime}</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="text-sm text-slate-400 dark:text-slate-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-serif text-navy dark:text-white mb-4 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300">
                  {post.description}
                </p>
              </header>

              {/* Article Content */}
              <article className="prose-kaiak">
                <MDXRemote source={post.content} components={MDXComponents} />
              </article>

              {/* Bottom CTA */}
              <div className="mt-16 p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-serif text-navy dark:text-white mb-2">
                  Want help building systems like this?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  I help school leaders automate the chaos and get their time back.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/booking"
                    className="inline-block bg-navy dark:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-orange-700 transition-colors"
                  >
                    Book a Call
                  </Link>
                  <Link
                    href="/products/second-brain-guide"
                    className="inline-block bg-white dark:bg-slate-700 text-navy dark:text-white border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                  >
                    Get the Guide
                  </Link>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <Link
                  href="/blog"
                  className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  <ArrowLeftIcon /> Back to all posts
                </Link>
              </div>
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-200 dark:border-slate-700 bg-cream dark:bg-navy mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} KAIAK. <Link href="/" className="text-orange-600 dark:text-orange-400 hover:underline">Back to home</Link></p>
          </div>
        </footer>
      </div>
    </>
  );
}

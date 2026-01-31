import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostSlugs, getPostBySlug, getSeriesPosts, pillarLabels, pillarColors } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '../../components/MDXComponents';
import ThemeToggle from '../../components/ThemeToggle';
import AuthorBio from '../../components/AuthorBio';
import TableOfContents from '../../components/TableOfContents';
import SeriesNav from '../../components/SeriesNav';

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
  
  const metadata = {
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

  if (post.image) {
    const imageUrl = `https://kaiak.io${post.image}`;
    metadata.openGraph.images = [{ url: imageUrl, alt: post.imageAlt || post.title }];
    metadata.twitter.images = [imageUrl];
  }

  return metadata;
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
    dateModified: new Date(post.updated || post.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kaiak.io/blog/${slug}`,
    },
    ...(post.image && { image: `https://kaiak.io${post.image}` }),
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

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const colors = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };

  // Get series posts if this post belongs to a series
  const seriesPosts = getSeriesPosts(post.series);

  // Parse headings for right-side TOC
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const tocHeadings = [];
  let hMatch;
  while ((hMatch = headingRegex.exec(post.content)) !== null) {
    const text = hMatch[2].trim();
    tocHeadings.push({
      level: hMatch[1].length,
      text,
      id: text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    });
  }

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

        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex gap-12">

            {/* Main Content */}
            <main className="flex-1 min-w-0">
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
                    {post.updated && (
                      <span className="ml-1">
                        · Updated {new Date(post.updated).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    )}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-serif text-navy dark:text-white mb-4 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300">
                  {post.description}
                </p>

                {post.image && (
                  <div className="mt-8 relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority
                    />
                  </div>
                )}
              </header>

              {/* Series Navigation */}
              {post.series && (
                <SeriesNav seriesName={post.series} posts={seriesPosts} currentSlug={params.slug} />
              )}

              {/* Article Content */}
              <article className="prose-kaiak">
                <MDXRemote source={post.content} components={MDXComponents} />
              </article>

              {/* Author Bio */}
              <AuthorBio />

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

            {/* Right-side Table of Contents */}
            <TableOfContents headings={tocHeadings} />
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

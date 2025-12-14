import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts, pillarLabels, pillarColors } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '../../components/MDXComponents';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found | KAIAK' };
  }
  return {
    title: `${post.title} | KAIAK`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Benedict'],
    },
  };
}

// Simple arrow icon as inline SVG (avoids client component issues)
const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

// Related post card
function RelatedPostCard({ post }) {
  const colors = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };
  
  return (
    <Link href={`/blog/${post.slug}`} className="block group py-4 border-b border-slate-100 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors">
      <div className="flex items-center gap-2 mb-1">
        <span 
          className="text-xs font-medium px-2 py-0.5 rounded-full"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          {pillarLabels[post.pillar]}
        </span>
      </div>
      <h4 className="font-medium text-navy group-hover:text-slate-600">
        {post.title}
      </h4>
      <p className="text-sm text-slate-500 mt-1 line-clamp-2">
        {post.description}
      </p>
    </Link>
  );
}

// Simple Logo for Server Component
const Logo = () => (
  <Link href="/" className="block hover:opacity-90 transition-opacity">
    <svg width="100" height="34" viewBox="0 0 260 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <rect x="10" y="20" width="12" height="60" fill="#0F172A"/>
      <path d="M28 50 L48 20 L62 20 L38 55 L62 80 L48 80 L28 55" fill="#0F172A"/>
      <text x="85" y="80" textAnchor="middle" fill="#0F172A" fontFamily="monospace" fontWeight="bold" fontSize="64">A</text>
      <rect x="122" y="15" width="16" height="15" fill="#EA580C"/>
      <rect x="122" y="35" width="16" height="45" fill="#334155"/>
      <text x="175" y="80" textAnchor="middle" fill="#0F172A" fontFamily="monospace" fontWeight="bold" fontSize="64">A</text>
      <g transform="translate(260, 0) scale(-1, 1)">
        <rect x="10" y="20" width="12" height="60" fill="#0F172A"/>
        <path d="M28 50 L48 20 L62 20 L38 55 L62 80 L48 80 L28 55" fill="#0F172A"/>
      </g>
    </svg>
  </Link>
);

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);
  const colors = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };

  return (
    <div className="min-h-screen font-sans bg-cream">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 bg-cream/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Home</Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link 
          href="/blog"
          className="text-sm text-slate-500 hover:text-slate-700 mb-8 inline-flex items-center gap-1"
        >
          <ArrowLeftIcon /> Back to all posts
        </Link>

        {/* Article Header */}
        <header className="mb-12 mt-6">
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="text-xs font-medium px-2 py-1 rounded-full"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {pillarLabels[post.pillar]}
            </span>
            <span className="text-sm text-slate-500">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-navy mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-slate-600 mb-6">
            {post.description}
          </p>

          <p className="text-sm text-slate-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose-kaiak">
          <MDXRemote source={post.content} components={MDXComponents} />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <aside className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-6">
              Keep Reading
            </h2>
            <div className="space-y-2">
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </aside>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-white rounded-xl border border-slate-200 text-center">
          <h3 className="text-xl font-serif text-navy mb-2">
            Want help building systems like this?
          </h3>
          <p className="text-slate-600 mb-6">
            I help leaders automate the chaos and get their time back.
          </p>
          <Link 
            href="/#contact"
            className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-light transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-cream mt-16">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} KAIAK. <Link href="/" className="text-orange-600 hover:underline">Back to home</Link></p>
        </div>
      </footer>
    </div>
  );
}

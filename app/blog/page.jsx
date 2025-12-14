import Link from 'next/link';
import { getAllPosts, getFeaturedPosts, pillarLabels, pillarColors } from '@/lib/posts';
import { Icons, Logo } from '../components/Icons';

export const metadata = {
  title: 'Blog | KAIAK',
  description: 'Thoughts on AI, systems, and reclaiming your time from administrative chaos.',
};

// Post Card Component
function PostCard({ post, featured = false }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };
  
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className={`
        border border-slate-200 rounded-xl p-6 
        hover:border-slate-300 hover:shadow-sm 
        transition-all duration-200 bg-white
        ${featured ? 'md:p-8' : ''}
      `}>
        <div className="flex items-center gap-3 mb-3">
          <span 
            className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: pillar.bg, color: pillar.text }}
          >
            {pillarLabels[post.pillar] || post.pillar}
          </span>
          <span className="text-xs text-slate-400">{post.readTime}</span>
          {post.contentType === 'evergreen' && (
            <span className="text-xs text-slate-400">✦ Evergreen</span>
          )}
        </div>

        <h3 className={`
          font-serif text-navy group-hover:text-slate-600 transition-colors
          ${featured ? 'text-2xl mb-3' : 'text-lg mb-2'}
        `}>
          {post.title}
        </h3>

        <p className={`text-slate-600 leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
          {post.description}
        </p>

        <p className="text-xs text-slate-400 mt-4">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const recentPosts = allPosts.filter(p => !p.featured).slice(0, 6);

  return (
    <div className="min-h-screen font-sans bg-cream">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 bg-cream/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Home</Link>
              <Link href="/blog" className="text-slate-900 text-sm font-medium">Blog</Link>
              <Link href="/products/second-brain-guide" className="text-slate-600 hover:text-slate-900 text-sm font-medium">The Guide</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-serif text-navy mb-4">
            Thinking Out Loud
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Notes on building AI systems that actually work, 
            from someone still figuring it out in the trenches.
          </p>
        </header>

        {/* Start Here - Featured/Evergreen */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                Start Here
              </h2>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                Recent Posts
              </h2>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Browse by Pillar */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Browse by Topic
            </h2>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(pillarLabels).map(([key, label]) => {
              const count = allPosts.filter(p => p.pillar === key).length;
              const colors = pillarColors[key];
              return (
                <Link 
                  key={key}
                  href={`/blog?pillar=${key}`}
                  className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors bg-white"
                >
                  <h3 className="font-medium text-navy">{label}</h3>
                  <p className="text-sm text-slate-500 mt-1">{count} posts</p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} KAIAK. <Link href="/" className="text-orange-600 hover:underline">Back to home</Link></p>
        </div>
      </footer>
    </div>
  );
}

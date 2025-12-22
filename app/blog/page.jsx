import Link from 'next/link';
import { getAllPosts, getFeaturedPosts, pillarLabels, pillarColors } from '@/lib/posts';
import { Logo } from '../components/Icons';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'Blog | KAIAK',
  description: 'Thoughts on AI, systems, and reclaiming your time from administrative chaos.',
};

// Post Card Component with dark mode
function PostCard({ post, featured = false }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className={`
        border border-slate-200 dark:border-slate-700 rounded-xl p-6
        hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm
        transition-all duration-200 bg-white dark:bg-slate-800
        ${featured ? 'md:p-8' : ''}
      `}>
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: pillar.bg, color: pillar.text }}
          >
            {pillarLabels[post.pillar] || post.pillar}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{post.readTime}</span>
        </div>

        <h3 className={`
          font-serif text-navy dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors
          ${featured ? 'text-2xl mb-3' : 'text-lg mb-2'}
        `}>
          {post.title}
        </h3>

        <p className={`text-slate-600 dark:text-slate-300 leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
          {post.description}
        </p>

        <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
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

// Accept searchParams to read query parameters
export default function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  
  // Read the pillar filter from URL query params
  const activePillar = searchParams?.pillar || null;
  
  // Filter posts if a pillar is selected
  const filteredPosts = activePillar 
    ? allPosts.filter(p => p.pillar === activePillar)
    : null;
  
  // Only show recent posts when not filtering
  const recentPosts = allPosts.filter(p => !p.featured).slice(0, 6);

  return (
    <div className="min-h-screen font-sans bg-cream dark:bg-navy transition-colors">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-700/50 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="KAIAK Home">
              <Logo />
            </Link> 
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Home</Link>
              <Link href="/blog" className="text-slate-900 dark:text-white text-sm font-medium">Blog</Link>
              <Link href="/products/second-brain-guide" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">The Guide</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-serif text-navy dark:text-white mb-4">
            {activePillar ? pillarLabels[activePillar] || 'Posts' : 'Thinking Out Loud'}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            {activePillar 
              ? `${filteredPosts?.length || 0} posts in this topic`
              : 'Notes on building AI systems that actually work, from someone still figuring it out in the trenches.'
            }
          </p>
          
          {/* Back to all posts link when filtering */}
          {activePillar && (
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 mt-4 text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium"
            >
              ← Back to all posts
            </Link>
          )}
        </header>

        {/* Filtered Posts (when a pillar is selected) */}
        {activePillar && filteredPosts && (
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <p className="text-slate-500 dark:text-slate-400 text-center py-8">
                No posts found in this topic yet.
              </p>
            )}
          </section>
        )}

        {/* Start Here - Featured/Evergreen (only when NOT filtering) */}
        {!activePillar && featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Start Here
              </h2>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            </div>
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts (only when NOT filtering) */}
        {!activePillar && recentPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Recent Posts
              </h2>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
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
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              Browse by Topic
            </h2>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(pillarLabels).map(([key, label]) => {
              const count = allPosts.filter(p => p.pillar === key).length;
              const isActive = activePillar === key;
              return (
                <Link
                  key={key}
                  href={isActive ? '/blog' : `/blog?pillar=${key}`}
                  className={`
                    p-4 border rounded-lg transition-colors
                    ${isActive 
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-500' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-medium ${isActive ? 'text-orange-700 dark:text-orange-400' : 'text-navy dark:text-white'}`}>
                        {label}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{count} posts</p>
                    </div>
                    {isActive && (
                      <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                        ✓ Active
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-700 bg-cream dark:bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} KAIAK. <Link href="/" className="text-orange-600 dark:text-orange-400 hover:underline">Back to home</Link></p>
        </div>
      </footer>
    </div>
  );
}

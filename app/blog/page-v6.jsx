import Link from 'next/link';
import { getAllPosts, getFeaturedPosts, pillarLabels, pillarColors } from '@/lib/posts';
import { Logo } from '../components/Icons';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'Blog | KAIAK',
  description: 'Thoughts on AI, systems, and reclaiming your time from administrative chaos.',
};

// Compact Post Row (like Jeff Su's list)
function PostRow({ post }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="py-5 border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 -mx-4 px-4 transition-colors">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-lg text-navy dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {post.description}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{ backgroundColor: pillar.bg, color: pillar.text }}
            >
              {pillarLabels[post.pillar] || post.pillar}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">
              {new Date(post.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Featured Post Card (for Start Here section)
function FeaturedCard({ post }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-sm transition-all duration-200 bg-white dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: pillar.bg, color: pillar.text }}
          >
            {pillarLabels[post.pillar] || post.pillar}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{post.readTime}</span>
        </div>

        <h3 className="font-serif text-xl text-navy dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
          {post.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {post.description}
        </p>
      </article>
    </Link>
  );
}

// Sidebar Filter Button
function FilterButton({ pillarKey, label, count, isActive }) {
  return (
    <Link
      href={isActive ? '/blog' : `/blog?pillar=${pillarKey}`}
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

export default function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  
  const activePillar = searchParams?.pillar || null;
  
  // Filter posts if a pillar is selected, otherwise show all
  const displayPosts = activePillar 
    ? allPosts.filter(p => p.pillar === activePillar)
    : allPosts;
  
  // Count posts per pillar for sidebar
  const pillarCounts = Object.keys(pillarLabels).reduce((acc, key) => {
    acc[key] = allPosts.filter(p => p.pillar === key).length;
    return acc;
  }, {});

  return (
    <div className="min-h-screen font-sans bg-cream dark:bg-navy transition-colors">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-700/50 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
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

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              {/* Filter Header */}
              <div className="mb-4">
                <h2 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                  Filter by Topic
                </h2>
                
                {/* All Posts */}
                <Link
                  href="/blog"
                  className={`
                    flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-colors mb-1
                    ${!activePillar 
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }
                  `}
                >
                  <span>All Posts</span>
                  <span className={`text-xs ${!activePillar ? 'text-orange-600 dark:text-orange-400' : 'text-slate-400 dark:text-slate-500'}`}>
                    {allPosts.length}
                  </span>
                </Link>
              </div>

              {/* Pillar Filters */}
              <div className="space-y-1">
                {Object.entries(pillarLabels).map(([key, label]) => (
                  <FilterButton
                    key={key}
                    pillarKey={key}
                    label={label}
                    count={pillarCounts[key]}
                    isActive={activePillar === key}
                  />
                ))}
              </div>

              {/* CTA in Sidebar */}
              <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
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
          <main className="flex-1 min-w-0">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl font-serif text-navy dark:text-white mb-2">
                {activePillar ? pillarLabels[activePillar] : 'All Posts'}
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {activePillar 
                  ? `${displayPosts.length} posts on ${pillarLabels[activePillar].toLowerCase()}`
                  : 'Notes on building AI systems that actually work, from someone still figuring it out.'
                }
              </p>
            </header>

            {/* Start Here - Only show when viewing all posts */}
            {!activePillar && featuredPosts.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Start Here
                  </h2>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredPosts.slice(0, 3).map((post) => (
                    <FeaturedCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* Posts List */}
            <section>
              {!activePillar && (
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {activePillar ? '' : 'All Posts'}
                  </h2>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                </div>
              )}
              
              <div>
                {displayPosts.map((post) => (
                  <PostRow key={post.slug} post={post} />
                ))}
              </div>

              {displayPosts.length === 0 && (
                <p className="text-slate-500 dark:text-slate-400 text-center py-12">
                  No posts found in this topic yet.
                </p>
              )}
            </section>
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
  );
}

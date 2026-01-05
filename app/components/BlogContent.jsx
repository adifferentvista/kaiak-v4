'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Logo } from './Icons';
import ThemeToggle from './ThemeToggle';

const pillarLabels = {
  'leadership': 'Leadership',
  'systems-thinking': 'Systems Thinking',
  'practical-ai': 'Practical AI',
  'no-admin-life': 'No-Admin Life',
};

const pillarColors = {
  'leadership': { bg: '#FEE2E2', text: '#991B1B' },
  'systems-thinking': { bg: '#D1FAE5', text: '#065F46' },
  'practical-ai': { bg: '#DBEAFE', text: '#1E40AF' },
  'no-admin-life': { bg: '#FEF3C7', text: '#92400E' },
};

// Search Icon
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// Clear Icon
const ClearIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Post Card Component (your original design)
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

// Filter Pill Component
function FilterPill({ label, isActive, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
        ${isActive 
          ? 'bg-navy dark:bg-orange-600 text-white shadow-sm' 
          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
        }
      `}
    >
      {label}
      {count !== undefined && (
        <span className={`ml-2 text-xs ${isActive ? 'text-white/70' : 'text-slate-400 dark:text-slate-500'}`}>
          {count}
        </span>
      )}
    </button>
  );
}

export default function BlogContent({ allPosts, featuredPosts, initialPillar, initialSearch }) {
  const router = useRouter();
  const [activePillar, setActivePillar] = useState(initialPillar);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by pillar
    if (activePillar) {
      posts = posts.filter(p => p.pillar === activePillar);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [allPosts, activePillar, searchQuery]);

  // Get posts for "All Posts" section (includes featured posts)
const recentPosts = useMemo(() => {
  if (activePillar || searchQuery.trim()) {
    return filteredPosts;
  }
  return allPosts;
}, [filteredPosts, allPosts, activePillar, searchQuery]);

  // Count posts per pillar
  const pillarCounts = useMemo(() => {
    return Object.keys(pillarLabels).reduce((acc, key) => {
      acc[key] = allPosts.filter(p => p.pillar === key).length;
      return acc;
    }, {});
  }, [allPosts]);

  // Handle filter change
  const handleFilterChange = (pillar) => {
    setActivePillar(pillar);
    setSearchQuery(''); // Clear search when changing filters
    
    // Update URL
    if (pillar) {
      router.push(`/blog?pillar=${pillar}`, { scroll: false });
    } else {
      router.push('/blog', { scroll: false });
    }
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      setActivePillar(null); // Clear pillar filter when searching
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  const showFeatured = !activePillar && !searchQuery.trim() && featuredPosts.length > 0;
  const isFiltering = activePillar || searchQuery.trim();

  return (
    <div className="min-h-screen font-sans bg-cream dark:bg-navy transition-colors">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-700/50 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="KAIAK Home">
              <Logo />
            </Link> 
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Home</Link>
              <Link href="/blog" className="text-slate-900 dark:text-white text-sm font-medium">Blog</Link>
              <Link href="/work-with-me" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Services</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header - UPDATED TAGLINE */}
        <header className="mb-8">
          <h1 className="text-4xl font-serif text-navy dark:text-white mb-4">
            The KAIAK Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            Practical notes on AI, systems, and school leadership.
          </p>
        </header>

        {/* Search and Filter Bar */}
        <div className="sticky top-0 z-40 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm py-4 -mx-6 px-6 mb-8 border-b border-slate-200/50 dark:border-slate-700/50">
          {/* Search Input */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`
                w-full pl-10 pr-10 py-3 rounded-xl border text-sm
                bg-white dark:bg-slate-800 
                text-slate-900 dark:text-white
                placeholder-slate-400 dark:placeholder-slate-500
                transition-all
                ${isSearchFocused 
                  ? 'border-orange-500 dark:border-orange-500 ring-2 ring-orange-500/20' 
                  : 'border-slate-200 dark:border-slate-700'
                }
              `}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <ClearIcon />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <FilterPill
              label="All"
              isActive={!activePillar && !searchQuery.trim()}
              onClick={() => handleFilterChange(null)}
              count={allPosts.length}
            />
            {Object.entries(pillarLabels).map(([key, label]) => (
              <FilterPill
                key={key}
                label={label}
                isActive={activePillar === key}
                onClick={() => handleFilterChange(key)}
                count={pillarCounts[key]}
              />
            ))}
          </div>
        </div>

        {/* Search Results Header */}
        {searchQuery.trim() && (
          <div className="mb-8">
            <p className="text-slate-600 dark:text-slate-400">
              {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Pillar Filter Header */}
        {activePillar && !searchQuery.trim() && (
          <div className="mb-8">
            <p className="text-slate-600 dark:text-slate-400">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} in {pillarLabels[activePillar]}
            </p>
          </div>
        )}

        {/* Start Here - Featured/Evergreen (only when NOT filtering) */}
        {showFeatured && (
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

        {/* Posts Section */}
        <section>
          {!isFiltering && (
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                All Posts
              </h2>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            </div>
          )}
          
          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                No posts found{searchQuery.trim() ? ` for "${searchQuery}"` : ''}.
              </p>
              {(searchQuery.trim() || activePillar) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleFilterChange(null);
                  }}
                  className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
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

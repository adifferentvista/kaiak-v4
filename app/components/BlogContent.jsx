'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import NewsletterForm from './NewsletterForm';
import HeroBackdrop from './HeroBackdrop';

const pillarLabels = {
  'leadership': 'Leadership',
  'systems-thinking': 'Systems Thinking',
  'practical-ai': 'Practical AI',
  'no-admin-life': 'No-Admin Life',
  'education': 'AI in Education',
};

const pillarColors = {
  'leadership': { bg: '#FEE2E2', text: '#991B1B' },
  'systems-thinking': { bg: '#D1FAE5', text: '#065F46' },
  'practical-ai': { bg: '#DBEAFE', text: '#1E40AF' },
  'no-admin-life': { bg: '#FEF3C7', text: '#92400E' },
  'education': { bg: '#EDE9FE', text: '#7C3AED' },
};

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ClearIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Tag pills — shown on post cards, link to /blog?tag=X
function TagPills({ tags, onTagClick }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onTagClick(tag);
          }}
          className="text-[10px] font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded-full hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white transition-colors"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

// Large featured card — hero style
function FeaturedCardLarge({ post, onTagClick }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };
  return (
    <article className="relative border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800 h-full group">
      {post.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: pillar.bg, color: pillar.text }}
          >
            {pillarLabels[post.pillar] || post.pillar}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{post.readTime}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-3 relative z-10">
            <TagPills tags={post.tags} onTagClick={onTagClick} />
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-serif font-medium text-navy dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors leading-snug mb-3">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base line-clamp-3">
          {post.description}
        </p>
      </div>
    </article>
  );
}

// Small featured card — sidebar style
function FeaturedCardSmall({ post, onTagClick }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };
  return (
    <article className="relative border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800 h-full flex flex-col group">
      {post.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: pillar.bg, color: pillar.text }}
          >
            {pillarLabels[post.pillar] || post.pillar}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">{post.readTime}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-2 relative z-10">
            <TagPills tags={post.tags} onTagClick={onTagClick} />
          </div>
        )}
        <h3 className="text-lg font-serif font-medium text-navy dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors leading-snug mb-2 flex-1">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
          {post.description}
        </p>
      </div>
    </article>
  );
}

// Compact list row for "Latest" section
function PostRow({ post, index, onTagClick }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };
  return (
    <article className={`relative flex gap-4 md:gap-6 py-5 group ${index > 0 ? 'border-t border-slate-200/70 dark:border-slate-700/70' : ''}`}>
      {post.image && (
        <div className="relative w-24 h-24 md:w-32 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="128px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: pillar.bg, color: pillar.text }}
          >
            {pillarLabels[post.pillar] || post.pillar}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">{post.readTime}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-1.5 hidden md:block relative z-10">
            <TagPills tags={post.tags} onTagClick={onTagClick} />
          </div>
        )}
        <h3 className="text-base md:text-lg font-serif font-medium text-navy dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors leading-snug mb-1">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 hidden md:block">
          {post.description}
        </p>
      </div>
    </article>
  );
}

// Grid card for "All Posts" section
function PostCard({ post, onTagClick }) {
  const pillar = pillarColors[post.pillar] || { bg: '#f3f4f6', text: '#374151' };
  return (
    <article className="relative border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all duration-200 bg-white dark:bg-slate-800 group">
      {post.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: pillar.bg, color: pillar.text }}
          >
            {pillarLabels[post.pillar] || post.pillar}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">{post.readTime}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-2 relative z-10">
            <TagPills tags={post.tags} onTagClick={onTagClick} />
          </div>
        )}
        <h3 className="text-lg font-serif font-medium text-navy dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors leading-snug mb-2">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
          {post.description}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </article>
  );
}

// Filter Pill
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

export default function BlogContent({ allPosts, featuredPosts, allTags = [], initialPillar, initialTag, initialSearch }) {
  const router = useRouter();
  const [activePillar, setActivePillar] = useState(initialPillar);
  const [activeTag, setActiveTag] = useState(initialTag || null);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(!!(initialPillar || initialTag || initialSearch));

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let posts = allPosts;
    if (activePillar) {
      posts = posts.filter(p => p.pillar === activePillar);
    }
    if (activeTag) {
      posts = posts.filter(p => (p.tags || []).includes(activeTag));
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }
    return posts;
  }, [allPosts, activePillar, activeTag, searchQuery]);

  // Latest posts (most recent, excluding featured)
  const latestPosts = useMemo(() => {
    const featuredSlugs = new Set(featuredPosts.map(p => p.slug));
    return allPosts.filter(p => !featuredSlugs.has(p.slug)).slice(0, 8);
  }, [allPosts, featuredPosts]);

  // Posts for the "All Posts" grid (when filtering or browsing all)
  const gridPosts = useMemo(() => {
    if (activePillar || activeTag || searchQuery.trim()) {
      return filteredPosts;
    }
    return allPosts;
  }, [filteredPosts, allPosts, activePillar, activeTag, searchQuery]);

  // Count posts per pillar
  const pillarCounts = useMemo(() => {
    return Object.keys(pillarLabels).reduce((acc, key) => {
      acc[key] = allPosts.filter(p => p.pillar === key).length;
      return acc;
    }, {});
  }, [allPosts]);

  const handleFilterChange = (pillar) => {
    setActivePillar(pillar);
    setActiveTag(null);
    setSearchQuery('');
    setShowAllPosts(true);
    if (pillar) {
      router.push(`/blog?pillar=${pillar}`, { scroll: false });
    } else {
      router.push('/blog', { scroll: false });
    }
  };

  const handleTagChange = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null);
      setShowAllPosts(false);
      router.push('/blog', { scroll: false });
    } else {
      setActiveTag(tag);
      setActivePillar(null);
      setSearchQuery('');
      setShowAllPosts(true);
      router.push(`/blog?tag=${encodeURIComponent(tag)}`, { scroll: false });
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      setActivePillar(null);
      setActiveTag(null);
      setShowAllPosts(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const isFiltering = activePillar || activeTag || searchQuery.trim();
  const showHeroSections = !isFiltering && !showAllPosts;

  return (
    <div className="min-h-screen font-sans bg-cream dark:bg-navy transition-colors">
      <Navbar />
      <div className="h-[73px]" />

      <section className="relative overflow-hidden">
        <HeroBackdrop />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-12">
          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif text-navy dark:text-white mb-2">
                  The KAIAK Blog
                </h1>
                <p className="text-base text-slate-500 dark:text-slate-400">
                  AI systems, workflow automation, and building things that run without you.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                  <svg className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>The Weekly Edge</span>
                </div>
                <NewsletterForm />
              </div>
            </div>
          </header>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 pb-12">

        {/* Search + Filter Bar */}
        <div className="sticky top-[73px] z-40 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm py-4 -mx-6 px-6 mb-8 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
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
                  w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm
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
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <FilterPill
              label="All"
              isActive={!activePillar && !searchQuery.trim()}
              onClick={() => {
                handleFilterChange(null);
                setShowAllPosts(false);
              }}
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

        {/* Search/Filter Results Header */}
        {searchQuery.trim() && (
          <div className="mb-6">
            <p className="text-slate-600 dark:text-slate-400">
              {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}
        {activePillar && !searchQuery.trim() && (
          <div className="mb-6">
            <p className="text-slate-600 dark:text-slate-400">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} in {pillarLabels[activePillar]}
            </p>
          </div>
        )}
        {activeTag && !searchQuery.trim() && (
          <div className="mb-6">
            <p className="text-slate-600 dark:text-slate-400">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} tagged &ldquo;{activeTag}&rdquo;
            </p>
          </div>
        )}

        {/* ===== HERO SECTIONS (only when not filtering) ===== */}
        {showHeroSections && (
          <>
            {/* Most Popular — horizontal scroll on mobile, 3-col grid on desktop */}
            {featuredPosts.length > 0 && (
              <section className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Most Popular
                  </h2>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                </div>
                {/* Mobile: horizontal scroll row */}
                <div className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
                  {featuredPosts.slice(0, 6).map((post) => (
                    <div key={post.slug} className="min-w-[280px] max-w-[300px] flex-shrink-0 snap-start">
                      <FeaturedCardSmall post={post} onTagClick={handleTagChange} />
                    </div>
                  ))}
                </div>
                {/* Desktop: grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-5">
                  {featuredPosts.slice(0, 6).map((post) => (
                    <FeaturedCardSmall key={post.slug} post={post} onTagClick={handleTagChange} />
                  ))}
                </div>
              </section>
            )}

            {/* Latest Posts — compact list */}
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Latest
                </h2>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 px-5 md:px-6">
                {latestPosts.map((post, index) => (
                  <PostRow key={post.slug} post={post} index={index} onTagClick={handleTagChange} />
                ))}
              </div>
            </section>

            {/* Browse All button */}
            <div className="text-center mb-14">
              <button
                onClick={() => setShowAllPosts(true)}
                className="px-8 py-3 rounded-xl text-sm font-semibold bg-navy dark:bg-orange-600 text-white hover:bg-slate-800 dark:hover:bg-orange-700 transition-colors"
              >
                Browse All {allPosts.length} Posts
              </button>
            </div>
          </>
        )}

        {/* ===== ALL POSTS GRID (when filtering or "browse all") ===== */}
        {(showAllPosts || isFiltering) && (
          <section>
            {!isFiltering && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 flex-1">
                  <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    All Posts
                  </h2>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                </div>
                <button
                  onClick={() => setShowAllPosts(false)}
                  className="text-sm text-orange-600 dark:text-orange-400 hover:underline font-medium ml-4"
                >
                  Back to top
                </button>
              </div>
            )}

            {gridPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {gridPosts.map((post) => (
                  <PostCard key={post.slug} post={post} onTagClick={handleTagChange} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  No posts found{searchQuery.trim() ? ` for "${searchQuery}"` : ''}.
                </p>
                {(searchQuery.trim() || activePillar || activeTag) && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveTag(null);
                      handleFilterChange(null);
                      setShowAllPosts(false);
                    }}
                    className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </section>
        )}
      </main>

      <footer className="py-8 border-t border-slate-200 dark:border-slate-700 bg-cream dark:bg-navy">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} KAIAK. <Link href="/" className="text-orange-600 dark:text-orange-400 hover:underline">Back to home</Link></p>
        </div>
      </footer>
    </div>
  );
}

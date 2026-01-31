import Link from 'next/link';

export default function SeriesNav({ seriesName, posts, currentSlug }) {
  if (!posts || posts.length < 2) return null;

  return (
    <div className="mb-10 p-6 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-200 dark:border-orange-800/30">
      <p className="text-sm font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide mb-3">
        Part of a series: {seriesName}
      </p>
      <ol className="space-y-2">
        {posts.map((post, i) => {
          const isCurrent = post.slug === currentSlug;
          return (
            <li key={post.slug} className="flex items-baseline gap-2">
              <span className="text-xs font-bold text-orange-400 dark:text-orange-600 w-5 flex-shrink-0">
                {i + 1}.
              </span>
              {isCurrent ? (
                <span className="text-sm font-medium text-navy dark:text-white">
                  {post.title}
                </span>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {post.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -75% 0px' }
    );

    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length < 3) return null;

  return (
    <nav className="hidden xl:block w-[200px] flex-shrink-0 order-3">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
        <h2 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
          On this page
        </h2>
        <ul className="space-y-1.5 border-l border-slate-200 dark:border-slate-700">
          {headings.map((heading, i) => (
            <li key={i}>
              <a
                href={`#${heading.id}`}
                className={`
                  block text-[13px] leading-snug transition-colors border-l-2 -ml-px
                  ${heading.level === 3 ? 'pl-5' : 'pl-3'}
                  ${activeId === heading.id
                    ? 'border-orange-500 text-orange-600 dark:text-orange-400 font-medium'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }
                `}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

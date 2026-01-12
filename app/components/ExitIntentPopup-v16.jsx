'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem('toolkitPopupShown');
    if (alreadyShown) return;

    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem('toolkitPopupShown', 'true');
      }
    };

    // Delay before enabling exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <p className="text-orange-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Before You Go...
          </p>
          <h2 className="font-serif text-2xl text-navy dark:text-white mb-3">
            Get the Free AI Toolkit
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            NotebookLM vs. Claude vs. ChatGPT — which tool for which task? Get my decision matrix and 15+ copy-paste prompts.
          </p>

          {/* CTA Button */}
          <Link
            href="/ai-toolkit"
            onClick={handleClose}
            className="inline-block w-full py-3 px-6 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-colors mb-3"
          >
            Get the Free Toolkit →
          </Link>

          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm transition-colors"
          >
            No thanks, I'm good
          </button>
        </div>
      </div>
    </div>
  );
}

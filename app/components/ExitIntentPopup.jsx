'use client';

import { useState, useEffect } from 'react';

const CONVERTKIT_FORM_ID = '8964474'; // AI Toolkit form

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown this session
    const alreadyShown = sessionStorage.getItem('exitPopupShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e) => {
      // Only trigger when mouse leaves from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Add delay before enabling exit intent (don't show immediately)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before enabling

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      setStatus('success');
      return;
    }

    if (!email.trim()) return;

    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('email_address', email);

      const response = await fetch(
        `https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          body: formData,
        }
      );

      setStatus('success');
      setEmail('');

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);

    } catch (error) {
      // ConvertKit might redirect on success, treat as success
      setStatus('success');
      setEmail('');

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500"></div>

        {/* Content */}
        <div className="p-8">
          {status !== 'success' ? (
            <>
              {/* Header */}
              <div className="text-center mb-5">
                <p className="text-orange-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  Free 15-Page Guide
                </p>
                <h3 className="font-serif text-2xl text-navy dark:text-white mb-2">
                  4 AI Tools Every School Leader Needs
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  The decision matrix I used to save 15 hours a week as a Head of School.
                </p>
              </div>

              {/* What you get */}
              <div className="space-y-2.5 mb-6">
                {[
                  'The right tool for every school task',
                  '20+ copy-paste prompts you can use today',
                  'The 10 admin tasks to automate first',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute -left-[9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@school.edu"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 rounded-lg font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors disabled:opacity-50 uppercase tracking-wide text-sm"
                >
                  {status === 'loading' ? 'Sending...' : 'Get My 20 Free Prompts'}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>

              {/* Footer */}
              <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-4">
                Instant download. No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-4">
              <svg className="w-14 h-14 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl text-navy dark:text-white mb-2">
                Check your inbox
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Your toolkit is on its way. Look for an email from KAIAK.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

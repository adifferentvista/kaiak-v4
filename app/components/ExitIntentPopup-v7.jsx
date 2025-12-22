'use client';

import { useState, useEffect } from 'react';

const CONVERTKIT_FORM_ID = '8895661'; // Newsletter form
const CONVERTKIT_API_KEY = 'QURGsDf8S5wli698VTrBtg';

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
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email: email,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      const data = await response.json();
      
      if (data.subscription) {
        setStatus('success');
        setEmail('');
        
        // Auto-close after 3 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        throw new Error('Subscription failed');
      }

    } catch (error) {
      setStatus('error');
      
      // Reset error after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
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
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {status !== 'success' ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">⚡</span>
                <h3 className="font-serif text-2xl text-navy dark:text-white mb-2">
                  Wait — before you go!
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Get my weekly AI strategies for leaders. Practical tips, no fluff.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="you@company.com"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 rounded-lg font-medium text-white bg-navy dark:bg-amber-500 dark:text-navy hover:bg-navy-light dark:hover:bg-amber-400 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Send me the tips'}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>

              {/* Footer */}
              <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-4">
              <span className="text-5xl mb-4 block">🎉</span>
              <h3 className="font-serif text-2xl text-navy dark:text-white mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Check your inbox for a welcome email.
              </p>
            </div>
          )}
        </div>

        {/* Decorative bottom bar */}
        <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
      </div>
    </div>
  );
}

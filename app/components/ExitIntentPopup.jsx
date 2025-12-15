'use client';

import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    // Later you can connect to Mailchimp, ConvertKit, etc.
    console.log('Email captured:', email);
    setSubmitted(true);
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">⚡</span>
                <h3 className="font-serif text-2xl text-navy mb-2">
                  Wait — before you go!
                </h3>
                <p className="text-slate-600">
                  Get my weekly AI strategies for leaders. Practical tips, no fluff.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-medium text-white bg-navy hover:bg-navy-light transition-colors"
                >
                  Send me the tips
                </button>
              </form>

              {/* Footer */}
              <p className="text-xs text-slate-400 text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-4">
              <span className="text-5xl mb-4 block">🎉</span>
              <h3 className="font-serif text-2xl text-navy mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-slate-600">
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

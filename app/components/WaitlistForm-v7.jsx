'use client';

import { useState } from 'react';

const CONVERTKIT_FORM_ID = '8895758'; // Guide Waitlist form
const CONVERTKIT_API_KEY = 'QURGsDf8S5wli698VTrBtg';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      setStatus('success');
      setMessage("You're on the waitlist!");
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
        setMessage("You're on the waitlist! We'll email you when it launches.");
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }

    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  if (status === 'success') {
    return (
      <div className="px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm text-center">
        ✓ {message}
      </div>
    );
  }

  return (
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
        placeholder="you@company.com"
        required
        disabled={status === 'loading'}
        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full text-white px-6 py-3 rounded-lg font-medium bg-navy dark:bg-amber-500 dark:text-navy hover:bg-navy-light dark:hover:bg-amber-400 theme-transition disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
      >
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
      </button>
      
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">{message}</p>
      )}
      
      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
        Be first to know when it launches. No spam.
      </p>
    </form>
  );
}

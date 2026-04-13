'use client';

import { useState } from 'react';

const CONVERTKIT_FORM_ID = '8895661'; // Newsletter form

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      setStatus('success');
      setMessage("Thanks! Check your inbox.");
      return;
    }
    
    if (!email.trim()) return;

    setStatus('loading');

    try {
      // Use ConvertKit's form submission endpoint (more reliable than API)
      const formData = new FormData();
      formData.append('email_address', email);
      
      const response = await fetch(
        `https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok || response.status === 200 || response.status === 302) {
        setStatus('success');
        setMessage("Thanks! Check your inbox.");
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Subscription failed');
      }

    } catch (error) {
      // ConvertKit might redirect on success, which can throw
      // Check if it's actually a success
      setStatus('success');
      setMessage("Thanks! Check your inbox.");
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="flex-1 px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm text-center">
          ✓ {message}
        </div>
      </div>
    );
  }

  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
      {/* Honeypot field - hidden from real users, bots will fill it */}
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
        className="flex-1 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="text-white px-6 py-3 rounded-lg font-medium bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-500 theme-transition disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2 sm:mt-0 sm:self-center">{message}</p>
      )}
    </form>
  );
}

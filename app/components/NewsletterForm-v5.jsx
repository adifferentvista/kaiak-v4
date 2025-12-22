'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    setStatus('loading');

    try {
      // TODO: Replace with your ConvertKit form endpoint
      // Example ConvertKit endpoint:
      // const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ api_key: 'YOUR_API_KEY', email }),
      // });
      // if (!response.ok) throw new Error('Subscription failed');

      // For now, simulate success (remove this when you connect ConvertKit)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setStatus('success');
      setMessage("Thanks! Check your inbox.");
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);

    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      
      // Reset after 5 seconds
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
        className="text-white px-6 py-3 rounded-lg font-medium bg-navy dark:bg-amber-500 dark:text-navy hover:bg-navy-light dark:hover:bg-amber-400 theme-transition disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2">{message}</p>
      )}
    </form>
  );
}

'use client';

import { useState } from 'react';
import { Logo, Icons } from '../../components/Icons';

export default function SecondBrainGuideWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    // Later you can connect to Mailchimp, ConvertKit, etc.
    console.log('Waitlist email:', email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 bg-cream/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <Logo />
            </a>
            <a href="/" className="text-slate-600 hover:text-slate-900 text-sm font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* Badge */}
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide bg-amber-100 text-amber-800 mb-6">
            Coming Soon
          </span>

          {/* Icon */}
          <div className="text-6xl mb-6">📘</div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6">
            The No-Admin Second Brain Guide
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto">
            A complete system for capturing, organizing, and retrieving everything—without spending hours on maintenance. Built specifically for busy leaders.
          </p>

          {/* What's included */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-10 text-left">
            <h3 className="font-serif text-xl text-navy mb-4 text-center">What&apos;s Inside</h3>
            <ul className="space-y-3">
              {[
                '25+ page implementation guide',
                'NotebookLM prompt library',
                'Monthly logbook template',
                'Quick-start video walkthrough',
                'Lifetime updates included',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <Icons.Check className="w-5 h-5 flex-shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing preview */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl text-slate-400 line-through">$97</span>
              <span className="text-4xl font-bold text-navy">$49</span>
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">LAUNCH PRICE</span>
            </div>
            <p className="text-sm text-slate-500">Early supporters get the best price</p>
          </div>

          {/* Email signup */}
          {!submitted ? (
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-serif text-xl mb-2">Be the first to know</h3>
              <p className="text-slate-300 text-sm mb-6">
                Join the waitlist and get notified when the guide launches—plus a special early-bird discount.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="text-xs text-slate-400 mt-4">No spam. Just one email when we launch.</p>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <span className="text-4xl mb-4 block">🎉</span>
              <h3 className="font-serif text-xl text-green-800 mb-2">You&apos;re on the list!</h3>
              <p className="text-green-700">
                We&apos;ll email you as soon as the guide is ready.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} KAIAK. Less admin. More impact.</p>
        </div>
      </footer>
    </div>
  );
}

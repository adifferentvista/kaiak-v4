'use client';

import { useState } from 'react';

// ============================================
// COLORS
// ============================================
const colors = {
  cream: '#fdfbf7',
  navy: '#102a43',
  navyDark: '#0f172a',
  blueGray: '#f0f4f8',
  amber: '#f59e0b',
  orange: '#ea580c',
};

// ============================================
// ICONS
// ============================================
const Icons = {
  ArrowLeft: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  ),
};

// ============================================
// MAIN PAGE
// ============================================
export default function AcademyPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: Connect to email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <div className="font-sans antialiased min-h-screen" style={{ backgroundColor: colors.cream, color: '#1e293b' }}>

      {/* Navigation */}
      <nav className="border-b border-slate-200/50" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium">
            <Icons.ArrowLeft className="w-4 h-4" />
            Back to KAIAK
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="inline-block text-6xl mb-8">🎓</span>
          
          <h1 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: colors.navy }}>
            KAIAK Academy
          </h1>
          
          <p className="text-xl text-slate-600 mb-4">
            Video courses on AI for School Leaders and The No-Admin System.
          </p>
          
          <p className="text-slate-500 mb-12">
            In-depth training at your own pace. Coming soon.
          </p>

          {/* Waitlist Form */}
          <div className="rounded-2xl p-8 border border-slate-200" style={{ backgroundColor: colors.blueGray }}>
            {status === 'success' ? (
              <div className="py-8">
                <span className="text-4xl mb-4 block">✅</span>
                <p className="font-medium text-lg" style={{ color: colors.navy }}>You're on the list!</p>
                <p className="text-slate-600 text-sm mt-2">I'll email you when the Academy launches.</p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl mb-4" style={{ color: colors.navy }}>
                  Join the Waitlist
                </h2>
                <p className="text-slate-600 mb-6">
                  Be the first to know when the Academy opens. Plus get early-bird pricing.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="you@school.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3 rounded-lg font-medium text-white disabled:opacity-50"
                    style={{ backgroundColor: colors.navy }}
                  >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* What to Expect */}
          <div className="mt-16 text-left">
            <h3 className="font-serif text-xl mb-6 text-center" style={{ color: colors.navy }}>
              What to Expect
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { emoji: "🤖", title: "AI for School Leaders", desc: "Practical AI tools and workflows for educational leaders" },
                { emoji: "🧠", title: "The No-Admin System", desc: "Build a second brain that doesn't require maintenance" },
                { emoji: "📹", title: "Video Lessons", desc: "Concise, hands-on training you can do at your own pace" },
                { emoji: "📋", title: "Templates & Prompts", desc: "Ready-to-use resources you can implement immediately" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-medium" style={{ color: colors.navy }}>{item.title}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In the meantime */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <p className="text-slate-500 mb-4">In the meantime, check out:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products/second-brain-guide"
                className="px-6 py-3 rounded-lg font-medium border-2 border-slate-300 hover:bg-slate-50"
              >
                The No-Admin Guide ($37)
              </a>
              <a 
                href="/journal"
                className="px-6 py-3 rounded-lg font-medium border-2 border-slate-300 hover:bg-slate-50"
              >
                Read the Journal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-slate-400 text-sm text-center" style={{ backgroundColor: colors.navyDark }}>
        <p>© {new Date().getFullYear()} KAIAK. All rights reserved.</p>
      </footer>
    </div>
  );
}

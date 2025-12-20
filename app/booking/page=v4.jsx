import Link from 'next/link';

export const metadata = {
  title: 'Book a Call | KAIAK',
  description: 'Schedule a free 30-minute discovery call. We\'ll talk about what\'s eating your time and whether I can help.',
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      {/* Simple Nav */}
      <nav className="border-b border-slate-200/50 dark:border-slate-700/50 bg-cream dark:bg-navy">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="font-serif text-xl text-navy dark:text-white hover:opacity-80">
            KAIAK
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
            Free 30-Minute Call
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-navy dark:text-white">
            Let's Talk
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Book a free discovery call. We'll talk about what's eating your time and figure out if I can help.
          </p>
        </div>

        {/* What to Expect */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 mb-10">
          <h2 className="font-serif text-xl mb-4 text-navy dark:text-white">What to Expect</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">✓</span>
              <span><strong className="text-navy dark:text-white">No pitch, no pressure.</strong> This is a conversation, not a sales call.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">✓</span>
              <span><strong className="text-navy dark:text-white">We'll diagnose the problem.</strong> Where's your time actually going?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">✓</span>
              <span><strong className="text-navy dark:text-white">You'll leave with clarity.</strong> Even if we don't work together, you'll know your next step.</span>
            </li>
          </ul>
        </div>

        {/* Calendly Embed */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <iframe
            src="https://calendly.com/ben-kaiak/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=ea580c"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a call with Benedict"
            className="dark:hidden"
          />
          <iframe
            src="https://calendly.com/ben-kaiak/30min?hide_gdpr_banner=1&background_color=1e293b&text_color=f8fafc&primary_color=ea580c"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a call with Benedict"
            className="hidden dark:block"
          />
        </div>

        {/* Alternative Contact */}
        <div className="text-center mt-10 text-slate-500 dark:text-slate-400">
          <p>
            Prefer email? Reach me at{' '}
            <a href="mailto:ben@kaiak.io" className="text-orange-600 dark:text-orange-400 hover:underline">
              ben@kaiak.io
            </a>
          </p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200/50 dark:border-slate-700/50 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300">
            ← Back to KAIAK
          </Link>
        </p>
      </footer>
    </div>
  );
}

import Link from 'next/link';
import { Logo, Icons } from '../../components/Icons';
import WaitlistForm from '../../components/WaitlistForm';

export const metadata = {
  title: 'The No-Admin Second Brain Guide | KAIAK',
  description: 'A complete system for capturing, organizing, and retrieving everything—without spending hours on maintenance. Built specifically for busy school leaders.',
};

export default function SecondBrainGuideWaitlist() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-700/50 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="KAIAK Home">
              <Logo />
            </Link>
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* Icon */}
          <div className="text-6xl mb-6">📘</div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-white mb-6">
            The No-Admin Second Brain Guide
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            A complete system for capturing, organizing, and retrieving everything—without spending hours on maintenance. Built specifically for busy school leaders.
          </p>

          {/* What's included */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-10 text-left">
            <h3 className="font-serif text-xl text-navy dark:text-white mb-4 text-center">What&apos;s Inside</h3>
            <ul className="space-y-3">
              {[
                '25+ page implementation guide',
                'NotebookLM prompt library',
                'Monthly logbook template',
                'Quick-start video walkthrough',
                'Lifetime updates included',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Icons.Check className="w-5 h-5 flex-shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing preview - FIXED DISPLAY */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl text-slate-400 line-through" aria-label="Original price">$97</span>
              <span className="text-4xl font-bold text-navy dark:text-white" aria-label="Launch price">$49</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-block px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium text-xs mr-2">LAUNCH PRICE</span>
              Early supporters get the best price
            </p>
          </div>

          {/* Email signup */}
          <div className="bg-navy dark:bg-slate-800 rounded-2xl p-8 text-white border border-transparent dark:border-slate-700">
            <h3 className="font-serif text-xl mb-2">Be the first to know</h3>
            <p className="text-slate-300 dark:text-slate-400 text-sm mb-6">
              Join the waitlist and get notified when the guide launches—plus a special early-bird discount.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} KAIAK. Less admin. More impact.</p>
        </div>
      </footer>
    </div>
  );
}

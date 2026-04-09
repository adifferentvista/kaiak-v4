import Link from 'next/link';
import Navbar from '../components/Navbar';
import { ArrowRight, Clock, Zap, Target, Users, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Find Your 10 Hidden Hours | Free AI Workflow Audit | KAIAK',
  description: 'A free 30-minute audit of your workflow. I\'ll show you exactly what to automate this week — whether we work together or not.',
  alternates: { canonical: '/booking' },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      <Navbar />
      <div className="h-[73px]" />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
            Free 30-Minute Audit
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-navy dark:text-white leading-tight">
            Find Your 10 Hidden Hours
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A free 30-minute audit of your workflow. I&apos;ll show you exactly what to automate this week.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left column — value proposition */}
          <div className="lg:col-span-2 space-y-8">

            {/* What You'll Get */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
              <h2 className="font-serif text-xl mb-5 text-navy dark:text-white">In 30 Minutes, You&apos;ll Get:</h2>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <Target className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span><strong className="text-navy dark:text-white">A map of where your time actually goes.</strong> Most people are shocked by what we find.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span><strong className="text-navy dark:text-white">3-5 tasks you can automate immediately.</strong> Using tools you probably already have.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span><strong className="text-navy dark:text-white">A concrete action plan.</strong> Whether we work together or not — you leave with clarity.</span>
                </li>
              </ul>
            </div>

            {/* Social Proof */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
              <h2 className="font-serif text-xl mb-5 text-navy dark:text-white">The Numbers</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: "1,000+", label: "Educators Trained" },
                  { icon: BarChart3, value: "50+", label: "Schools Served" },
                  { icon: Clock, value: "10+", label: "Hours Saved / Week" },
                  { icon: Zap, value: "90%", label: "Time Savings on Reports" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3">
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
                    <div className="text-2xl font-bold text-navy dark:text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Is For */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
              <h2 className="font-serif text-xl mb-4 text-navy dark:text-white">This Is For You If:</h2>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                {[
                  "You spend more time on operations than strategy",
                  "You know AI could help but don't know where to start",
                  "You've tried tools but nothing stuck",
                  "You're ready to build systems, not just use apps",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-orange-500">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Ready */}
            <div className="text-center text-sm text-slate-500 dark:text-slate-400 space-y-2">
              <p className="font-medium text-slate-600 dark:text-slate-300">Not ready for a call?</p>
              <div className="flex flex-col gap-1">
                <Link href="/ai-toolkit" className="text-orange-600 dark:text-orange-400 hover:underline">
                  Get the Free AI Toolkit →
                </Link>
                <Link href="/blog" className="text-orange-600 dark:text-orange-400 hover:underline">
                  Read the Blog →
                </Link>
              </div>
            </div>
          </div>

          {/* Right column — Calendly */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden sticky top-24">
              <iframe
                src="https://calendly.com/ben-kaiak/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=ea580c"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a free AI workflow audit with Benedict Rinne"
                className="dark:hidden"
              />
              <iframe
                src="https://calendly.com/ben-kaiak/30min?hide_gdpr_banner=1&background_color=1e293b&text_color=f8fafc&primary_color=ea580c"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a free AI workflow audit with Benedict Rinne"
                className="hidden dark:block"
              />
            </div>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="text-center mt-12 text-slate-500 dark:text-slate-400">
          <p>
            Prefer email? Reach me at{' '}
            <a href="mailto:ben@kaiak.io" className="text-orange-600 dark:text-orange-400 hover:underline">
              ben@kaiak.io
            </a>
          </p>
        </div>
      </main>

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

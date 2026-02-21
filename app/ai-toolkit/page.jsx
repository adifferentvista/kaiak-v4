import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = {
  title: "Free AI Toolkit for School Leaders | NotebookLM, Claude, ChatGPT Guide | KAIAK",
  description: "Download the free guide: NotebookLM vs. Claude vs. ChatGPT for school leaders. Get 15+ copy-paste prompts for board reports, parent emails, policy lookup, and more.",
  keywords: ["AI for school leaders", "NotebookLM for schools", "ChatGPT for principals", "school administration AI", "AI toolkit education"],
  alternates: { canonical: '/ai-toolkit' },
  openGraph: {
    title: "The School Leader's AI Toolkit — Free Download",
    description: "NotebookLM vs. Claude vs. ChatGPT: The Decision Matrix (With My Exact Prompts)",
  },
};

export default function AIToolkitLandingPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      {/* Shared Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-[73px]" />

      <main className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            
            {/* Left Column: The Pitch (3 cols) */}
            <div className="md:col-span-3">
              <p className="text-orange-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-3">
                Free 15-Page Guide
              </p>
              
              <h1 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mb-4 leading-tight">
                NotebookLM vs. Claude vs. ChatGPT
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                The School Leader's Decision Matrix<br />
                <span className="text-orange-600 dark:text-amber-400 font-medium">(With My Exact Prompts)</span>
              </p>

              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                The exact workflows, decision framework, and copy-paste prompts I used to save 15 hours a week as a Head of School. <strong className="text-navy dark:text-white">Stop guessing which tool to use and start automating your admin.</strong>
              </p>

              {/* 3 Feature Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default">
                  <div className="text-2xl mb-2">🧠</div>
                  <h3 className="font-semibold text-navy dark:text-white text-sm mb-1">The "Second Brain"</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    How to use NotebookLM to answer IB policy & accreditation questions in seconds.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default">
                  <div className="text-2xl mb-2">📄</div>
                  <h3 className="font-semibold text-navy dark:text-white text-sm mb-1">The "Chief of Staff"</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    Claude prompts for empathetic board reports and crisis communications.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default">
                  <div className="text-2xl mb-2">✉️</div>
                  <h3 className="font-semibold text-navy dark:text-white text-sm mb-1">Inbox Zero System</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    The Gmail + AI workflow that clears your inbox every Friday.
                  </p>
                </div>
              </div>

              {/* The Problem */}
              <div className="mb-8">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  <strong className="text-navy dark:text-white">Most "AI for Schools" advice is fluff.</strong> It tells you that you <em>should</em> use AI, but not <em>how</em> to fit it into a Principal's insane schedule.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I spent 20 years in education and founded an IB World School in Indonesia. I didn't build these systems to be a "guru." I built them because I was drowning in 60-hour weeks.
                </p>
              </div>

              {/* What's Inside */}
              <div className="mb-8">
                <p className="font-semibold text-navy dark:text-white mb-4">Inside this free 15-page toolkit:</p>
                <ul className="space-y-3">
                  {[
                    { title: 'The Decision Matrix', desc: 'When to use ChatGPT (Speed) vs. Claude (Strategy) vs. NotebookLM (Accuracy)' },
                    { title: '15+ Copy-Paste Prompts', desc: 'For difficult parent emails, meeting summaries, and curriculum gap analysis' },
                    { title: 'The "Kill Switch" List', desc: '10 admin tasks you can automate today' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <strong className="text-navy dark:text-white">{item.title}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How It Works - Chapter Marker Pattern */}
              <div className="mb-10">
                <p className="font-semibold text-navy dark:text-white mb-4">How the toolkit works:</p>
                <div className="space-y-4">
                  {[
                    { num: 1, title: 'Pick the task', desc: 'Use the Decision Matrix to choose the right tool' },
                    { num: 2, title: 'Copy the prompt', desc: 'Paste one of 15+ ready-made prompts' },
                    { num: 3, title: 'Get time back', desc: 'Watch hours of admin disappear' },
                  ].map((step) => (
                    <div 
                      key={step.num} 
                      className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 transition-transform cursor-default"
                    >
                      <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy dark:text-white text-sm">{step.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-serif text-orange-600 dark:text-orange-400">BR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-white">Benedict Rinne</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                      Former Head of School • Founder, KAIAK
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm italic">
                      "I built these systems because I was drowning. Now I help other school leaders get their evenings back."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form (2 cols) */}
            <div className="md:col-span-2 md:sticky md:top-24">
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-orange-500 shadow-xl">
                <h2 className="font-serif text-xl text-navy dark:text-white mb-2 text-center">
                  Get the Toolkit for Free
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 text-center">
                  Instant download. No spam.
                </p>

                {/* ConvertKit Form Embed */}
                {/* Replace YOUR_FORM_ID with your actual ConvertKit form ID */}
                <form 
                  action="https://app.convertkit.com/forms/8964474/subscriptions" 
                  method="post"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-navy dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email_address"
                      placeholder="you@school.edu"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-navy dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors uppercase tracking-wide"
                  >
                    Send Me the Toolkit
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center mb-3">
                    Trusted by leaders at IB World Schools & International Schools
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Secure
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Instant
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      No Spam
                    </span>
                  </div>
                </div>
              </div>

              {/* Optional: Add testimonial when you have one */}
              {/*
              <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic text-center">
                  "The parent handbook that would have taken 3 weeks was done in 3 days."
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2">
                  — Head of School, Singapore
                </p>
              </div>
              */}
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} KAIAK. Less admin. More impact.
          </p>
        </div>
      </footer>
    </div>
  );
}

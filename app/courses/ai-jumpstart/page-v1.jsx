import Link from 'next/link';
import { Logo, Icons } from '../../components/Icons';
import ThemeToggle from '../../components/ThemeToggle';
import { 
  Play, 
  FileText, 
  Award, 
  Clock, 
  CheckCircle2,
  Users,
  ArrowRight,
  Quote
} from 'lucide-react';

export const metadata = {
  title: 'AI for School Leaders: 5-Day Jumpstart | KAIAK',
  description: 'Learn to use AI tools like ChatGPT, Claude, and NotebookLM to save 10+ hours a week. Self-paced course for school leaders. Certificate included.',
};

export default function AIJumpstartPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-700/50 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="KAIAK Home">
              <Logo />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Blog</Link>
              <Link href="/work-with-me" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Services</Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                  Self-Paced Online Course
                </div>
                <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-navy dark:text-white">
                  AI for School Leaders: 5-Day Jumpstart
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Learn to use ChatGPT, Claude, and NotebookLM to save 10+ hours a week — without becoming a tech expert.
                </p>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-4xl font-bold text-navy dark:text-white">$147</span>
                  <span className="text-slate-500">Lifetime access</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#enroll"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-500 dark:bg-amber-500 dark:text-navy dark:hover:bg-amber-400 transition-colors"
                  >
                    Enroll Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#curriculum"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                  >
                    See Curriculum
                  </Link>
                </div>
              </div>

              {/* Right: Course Preview Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-orange-600 dark:text-orange-400 ml-1" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-navy dark:text-white">5</div>
                    <div className="text-xs text-slate-500 uppercase">Modules</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy dark:text-white">2h</div>
                    <div className="text-xs text-slate-500 uppercase">Total Video</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy dark:text-white">20+</div>
                    <div className="text-xs text-slate-500 uppercase">Prompts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center text-navy dark:text-white">
              Perfect For You If...
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "You're a Head of School, Principal, or Director at an international school",
                "You've heard about AI but don't know where to start",
                "You want to save time on emails, reports, and documentation",
                "You need to show your board you're staying current with technology",
                "You prefer learning at your own pace over live sessions",
                "You have PD budget to spend before the end of the year",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-cream dark:bg-slate-800">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section id="curriculum" className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-amber-400">Course Curriculum</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">What You&apos;ll Learn</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Five focused modules designed to get you using AI immediately — not someday.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  day: "Day 1",
                  title: "The AI Landscape for School Leaders",
                  description: "Understand what AI can (and can't) do for you. Learn the difference between ChatGPT, Claude, and NotebookLM — and when to use each.",
                  duration: "25 min"
                },
                {
                  day: "Day 2",
                  title: "Email Triage & Communication",
                  description: "Set up a system to draft parent emails, staff communications, and responses in minutes. Includes 10 copy-paste prompts for common scenarios.",
                  duration: "30 min"
                },
                {
                  day: "Day 3",
                  title: "Reports That Write Themselves",
                  description: "Learn to generate board report drafts, compliance documentation, and parent newsletters using AI assistance. Walk through real examples.",
                  duration: "25 min"
                },
                {
                  day: "Day 4",
                  title: "Building Your Second Brain",
                  description: "Set up NotebookLM as your searchable knowledge base. Upload policies, handbooks, and procedures for instant retrieval during tough conversations.",
                  duration: "30 min"
                },
                {
                  day: "Day 5",
                  title: "Integration & Your AI Roadmap",
                  description: "Put it all together. Create your personal AI workflow and a 30-day plan to embed these tools into your daily routine.",
                  duration: "20 min"
                },
              ].map((module, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="w-16 h-16 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-xs text-orange-600 dark:text-orange-400 font-bold">{module.day}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl text-navy dark:text-white mb-2">{module.title}</h3>
                      <span className="text-sm text-slate-500 flex items-center gap-1 flex-shrink-0">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{module.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-12 text-center text-navy dark:text-white">
              Everything You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Play,
                  title: "5 Video Modules",
                  description: "2+ hours of focused, practical training. No fluff, no filler."
                },
                {
                  icon: FileText,
                  title: "20+ Prompts & Templates",
                  description: "Copy-paste prompts for emails, reports, and documentation. Ready to use immediately."
                },
                {
                  icon: Award,
                  title: "Certificate of Completion",
                  description: "Show your board you're investing in professional development. Perfect for PD records."
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-serif text-lg text-navy dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-cream dark:bg-navy">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
              <Quote className="w-10 h-10 text-orange-200 dark:text-slate-700 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;The parent handbook that would have taken 3 weeks was done in 3 days. And it was better than anything I could have written alone.&rdquo;
              </p>
              <div>
                <p className="font-medium text-navy dark:text-white">IB School Principal</p>
                <p className="text-slate-500 text-sm">Southeast Asia</p>
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              <Users className="w-4 h-4 inline mr-1" />
              1,000+ educators trained by Benedict Rinne
            </p>
          </div>
        </section>

        {/* About the Instructor */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-navy dark:text-white">Your Instructor</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-serif text-xl text-navy dark:text-white mb-2">Benedict Rinne, M.Ed.</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Former Head of School with 20 years in international education. I built and led an IB World School in Indonesia, facing 500+ emails a week with a lean team. I built AI-powered systems to survive — now I teach other school leaders to do the same.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing / Enroll CTA */}
        <section id="enroll" className="py-20 md:py-28 bg-navy dark:bg-navy-dark text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Start?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Get lifetime access to all course materials, prompts, and templates.
            </p>
            
            <div className="bg-navy-light dark:bg-slate-800 p-8 rounded-2xl border border-navy-border dark:border-slate-700 inline-block mb-8">
              <div className="text-5xl font-bold mb-2">$147</div>
              <p className="text-slate-400 mb-6">One-time payment • Lifetime access</p>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "5 video modules (2+ hours)",
                  "20+ copy-paste prompts",
                  "Email & report templates",
                  "NotebookLM setup guide",
                  "Certificate of completion",
                  "Perfect for PD budgets",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="block w-full py-4 text-center bg-amber-500 hover:bg-amber-400 text-navy font-bold rounded-lg transition-colors text-lg"
              >
                Enroll Now →
              </Link>
            </div>

            <p className="text-slate-400 text-sm">
              Questions? <a href="mailto:ben@kaiak.io" className="text-amber-400 hover:underline">Email me</a> or <Link href="/booking" className="text-amber-400 hover:underline">book a call</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl mb-12 text-center text-navy dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: "Is this suitable for someone who's never used AI?",
                  a: "Absolutely. This course is designed for busy school leaders, not tech experts. If you can use Google Docs, you can do this."
                },
                {
                  q: "How long do I have access?",
                  a: "Lifetime access. Watch at your own pace, revisit whenever you need a refresher."
                },
                {
                  q: "Can I use my school's PD budget?",
                  a: "Yes! This course qualifies as professional development. I can provide an invoice and certificate of completion for your records."
                },
                {
                  q: "What if I want more hands-on help?",
                  a: "This course is perfect as a starting point. If you want 1:1 implementation support after, check out my consulting services."
                },
                {
                  q: "Is there a refund policy?",
                  a: "Yes — 14-day money-back guarantee. If the course isn't right for you, email me for a full refund."
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-medium text-navy dark:text-white mb-2">{item.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-slate-400 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-xl text-white mb-1">KAIAK</p>
              <p className="text-sm">AI & systems for school leaders</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/work-with-me" className="hover:text-white transition-colors">Services</Link>
              <Link href="/#about" className="hover:text-white transition-colors">About</Link>
              <a 
                href="https://linkedin.com/in/benedictrinne" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 text-sm text-center border-t border-navy-mid">
            <p>© {new Date().getFullYear()} KAIAK. Less admin. More impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

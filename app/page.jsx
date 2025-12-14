'use client';

import { useState } from 'react';
import { Icons, Logo } from './components/Icons';

// ============================================
// SAMPLE POSTS (for Latest from Blog)
// ============================================
const latestPosts = [
  {
    slug: 'claude-parent-emails',
    title: 'How I Use Claude to Draft 20 Parent Emails in 15 Minutes',
    category: 'Practical AI',
    date: 'Jan 15, 2025',
  },
  {
    slug: 'notion-cathedral-kitchen',
    title: 'Your Notion Setup Failed Because You Built a Cathedral, Not a Kitchen',
    category: 'Systems',
    date: 'Jan 29, 2025',
  },
  {
    slug: 'running-school-vs-run-by-school',
    title: 'The Difference Between Running a School and Being Run By One',
    category: 'Leadership',
    date: 'Feb 19, 2025',
  },
];

// ============================================
// MAIN PAGE
// ============================================
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-sans antialiased bg-cream text-slate-800">

      {/* ========== NAVIGATION ========== */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200/50 bg-cream/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              <a href="/blog" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Blog</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Services</a>
              <a href="/products/second-brain-guide" className="text-slate-600 hover:text-slate-900 text-sm font-medium">The Guide</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 text-sm font-medium">About</a>
            </div>
            <a href="#contact" className="hidden md:block px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-navy-mid hover:bg-navy-light transition-colors">
              Work With Me
            </a>
            <button className="md:hidden text-slate-600 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 absolute w-full shadow-xl bg-cream">
            <div className="px-6 py-4 space-y-4">
              <a href="/blog" className="block text-slate-600 font-medium">Blog</a>
              <a href="#services" className="block text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="/products/second-brain-guide" className="block text-slate-600 font-medium">The Guide</a>
              <a href="#about" className="block text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="block text-white px-5 py-3 rounded-lg text-center font-medium bg-navy-mid" onClick={() => setMobileMenuOpen(false)}>Work With Me</a>
            </div>
          </div>
        )}
      </nav>

      {/* ========== HERO ========== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600">
            AI & Systems for Leaders
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-navy">
            You became a leader to make a difference.<br />
            <span className="text-slate-500">Not to drown in admin.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
            I help leaders reclaim 10+ hours a week through AI automation, smart systems, and operational foundations that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="text-white px-8 py-4 rounded-lg font-medium text-center shadow-lg bg-navy-mid hover:bg-navy transition-colors">
              See How I Can Help
            </a>
            <a href="/blog" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-medium text-center hover:bg-slate-50 transition-colors">
              Read the Blog
            </a>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600">About</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-navy">I've been where you are.</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>For 20 years, I led international schools—managing staff, parents, budgets, accreditation, and the endless stream of emails that never stops.</p>
                <p>I've built handbooks from scratch. Created policy frameworks. Designed reporting systems. Survived IB authorization visits.</p>
                <p>Now I help new leaders skip the painful parts. I combine that operational experience with AI tools to build systems that <strong className="text-navy">actually stick</strong>.</p>
              </div>
            </div>
            <div className="rounded-2xl p-8 text-center bg-blue-gray">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
              <p className="font-serif text-xl text-navy">Benedict</p>
              <p className="text-slate-500 text-sm mb-4">Founder, KAIAK</p>
              <p className="text-xs text-slate-400">20 years in international education<br />IB PYP, MYP, DP experience<br />Based in Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-20 md:py-28 text-white bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-medium text-sm tracking-wide uppercase mb-4 text-amber-400">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Two Ways I Can Help</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Whether you need to get your time back or build your foundations, I've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1: AI Systems */}
            <div className="rounded-2xl p-8 flex flex-col bg-navy-light border border-navy-border">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="font-serif text-2xl mb-2">AI Systems Implementation</h3>
              <p className="text-slate-400 text-sm mb-6">For established leaders drowning in admin</p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                I'll build your second brain, automate your workflows, and train you to use AI tools that actually save time. Done-with-you in 6 weeks.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'AI-powered second brain setup',
                  'NotebookLM & ChatGPT workflows',
                  'Email & meeting automation',
                  'Training + documentation',
                  '30 days of support',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <Icons.Check className="w-5 h-5 flex-shrink-0 text-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-navy-border">
                <p className="text-2xl font-serif mb-1">$2,500 – $4,000</p>
                <p className="text-xs text-slate-400 mb-4">6-week engagement</p>
                <a href="#contact" className="block text-center px-6 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 transition-colors">
                  Book Discovery Call
                </a>
              </div>
            </div>

            {/* Service 2: School Ops */}
            <div className="rounded-2xl p-8 flex flex-col bg-navy-light border border-navy-border">
              <div className="text-4xl mb-6">🏫</div>
              <h3 className="font-serif text-2xl mb-2">School Ops Accelerator</h3>
              <p className="text-slate-400 text-sm mb-6">For new Heads building from scratch</p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                I'll build your handbooks, policies, and reporting systems fast. Skip the months of template hunting and get operational foundations done right.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Parent-student handbook',
                  'Staff policy framework',
                  'Reporting templates (board, enrollment)',
                  'Emergency procedures',
                  'Customized to your context',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <Icons.Check className="w-5 h-5 flex-shrink-0 text-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-navy-border">
                <p className="text-2xl font-serif mb-1">$3,500 – $5,500</p>
                <p className="text-xs text-slate-400 mb-4">4-8 week engagement</p>
                <a href="#contact" className="block text-center px-6 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 transition-colors">
                  Book Discovery Call
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-400 text-sm mt-8">
            Not sure which is right for you? Book a free 30-minute call and we'll figure it out together.
          </p>
        </div>
      </section>

      {/* ========== PRODUCTS ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600">Products</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy">Start Small. Get Results.</h2>
            <p className="text-slate-600">Not ready for consulting? Start with a self-paced resource.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1: Guide */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-amber-100 text-amber-800">Available Now</span>
                <span className="text-2xl">📘</span>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-navy">The No-Admin Second Brain Guide</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A complete system for capturing, organizing, and retrieving everything—without spending hours on maintenance.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Icons.Check className="w-4 h-4 text-green-500" /> 25+ page implementation guide</li>
                <li className="flex items-center gap-2"><Icons.Check className="w-4 h-4 text-green-500" /> NotebookLM prompt library</li>
                <li className="flex items-center gap-2"><Icons.Check className="w-4 h-4 text-green-500" /> Monthly logbook template</li>
              </ul>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg text-slate-400 line-through">$97</span>
                  <span className="text-2xl font-bold text-navy">$49</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">LAUNCH</span>
                </div>
                <a href="/products/second-brain-guide" className="text-white px-5 py-2.5 rounded-lg font-medium text-sm bg-navy hover:bg-navy-light transition-colors">
                  Get the Guide
                </a>
              </div>
            </div>

            {/* Product 2: Academy */}
            <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-center items-center text-center bg-blue-gray">
              <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center text-xl mb-4 text-slate-400">🎓</div>
              <h3 className="font-serif text-xl text-slate-500 mb-2">KAIAK Academy</h3>
              <p className="text-slate-400 text-sm mb-5 max-w-xs">
                Video courses on AI for Leaders and The No-Admin System. In-depth training at your own pace.
              </p>
              <div className="bg-slate-200 text-slate-500 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LATEST FROM BLOG ========== */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600">From the Blog</p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy">Latest Posts</h2>
            </div>
            <a href="/blog" className="hidden sm:flex items-center gap-2 font-medium text-orange-600 hover:text-orange-700">
              View all <Icons.ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {latestPosts.map((post, i) => (
              <a 
                key={i}
                href={`/blog/${post.slug}`}
                className="flex items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all bg-cream"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-amber-100 text-amber-800">
                    {post.category}
                  </span>
                  <span className="font-serif text-lg text-navy">{post.title}</span>
                </div>
                <span className="hidden sm:block text-sm text-slate-400">{post.date}</span>
              </a>
            ))}
          </div>

          <a href="/blog" className="sm:hidden flex items-center justify-center gap-2 font-medium mt-8 text-orange-600">
            View all posts <Icons.ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-16 border-t border-slate-200 bg-blue-gray">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl mb-4 text-navy">Get the weekly dispatch</h3>
          <p className="text-slate-600 mb-6">Practical AI strategies for leaders. No fluff, no spam.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@company.com" required className="flex-1 px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <button type="submit" className="text-white px-6 py-3 rounded-lg font-medium bg-navy hover:bg-navy-light transition-colors">Subscribe</button>
          </form>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="py-20 md:py-28 text-white bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to get your time back?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We'll talk about what's eating your time and whether I can help.
          </p>
          <a 
            href="https://calendar.google.com/YOUR_BOOKING_LINK" 
            className="inline-block px-10 py-4 rounded-lg font-semibold text-lg mb-6 bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
          >
            Book Your Free Call
          </a>
          <p className="text-slate-400">Or email me directly: <a href="mailto:benedict@kaiak.co" className="text-amber-400 hover:underline">benedict@kaiak.co</a></p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 text-slate-400 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-xl text-white mb-1">KAIAK</p>
              <p className="text-sm">AI & systems for leaders</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="/products/second-brain-guide" className="hover:text-white transition-colors">The Guide</a>
              <a href="https://linkedin.com/in/YOUR_HANDLE" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="mt-8 pt-8 text-sm text-center border-t border-navy-mid">
            <p>© {currentYear} KAIAK. Based in Indonesia, working globally.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

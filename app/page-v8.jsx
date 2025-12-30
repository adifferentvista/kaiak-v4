import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import ExitIntentPopup from './components/ExitIntentPopup';
import NewsletterForm from './components/NewsletterForm';
import { Icons } from './components/Icons';
import { getLatestPosts, pillarLabels } from '@/lib/posts';

// ============================================
// MAIN PAGE (Server Component)
// ============================================
export default function HomePage() {
  const currentYear = new Date().getFullYear();
  
  // Pull latest posts dynamically from MDX files
  const latestPosts = getLatestPosts(3);

  return (
    <div className="font-sans antialiased bg-cream dark:bg-navy text-slate-800 dark:text-slate-200">
      {/* 1. Skip Link FIRST - before everything else for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-navy focus:rounded shadow-lg"
      >
        Skip to main content
      </a>

      {/* 2. Exit Intent Popup */}
      <ExitIntentPopup />

      {/* 3. Navigation */}
      <Navbar />

      <main id="main-content">
        {/* ========== HERO ========== */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
              For International School Leaders
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-navy dark:text-white">
              You Didn&apos;t Become a Head of School to Drown in Paperwork.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
              I help International School Leaders build operational systems that actually work — so they can lead, not just manage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/booking" 
                className="text-white px-8 py-4 rounded-lg font-medium text-center shadow-lg bg-navy-mid dark:bg-amber-500 dark:text-navy hover:bg-navy dark:hover:bg-amber-400 theme-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              >
                Book a Strategy Call
              </Link>
              <Link 
                href="/#services" 
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg font-medium text-center hover:bg-slate-50 dark:hover:bg-slate-800 theme-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              >
                See How I Can Help
              </Link>
            </div>
          </div>
        </section>

        {/* ========== PAIN POINTS ========== */}
        <section className="py-16 md:py-20 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-navy dark:text-white">
              Sound familiar?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "You're drowning in compliance paperwork and accreditation prep",
                "You spend more time on email than leading your school",
                "Your board wants reports you don't have time to create",
                "You inherited a mess and don't know where to start",
                "You're working 60-hour weeks and still falling behind",
                "Every \"urgent\" interruption derails your strategic thinking",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-cream dark:bg-slate-800">
                  <Icons.Check className="w-5 h-5 flex-shrink-0 text-orange-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center">
              You&apos;re not bad at your job. <span className="text-navy dark:text-white font-medium">You just don&apos;t have the systems yet.</span>
            </p>
          </div>
        </section>

        {/* ========== CREDIBILITY BLOCK ========== */}
        <section className="py-12 bg-navy dark:bg-navy-dark text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-serif text-amber-400 mb-2">20</p>
                <p className="text-sm text-slate-300">years in education</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-amber-400 mb-2">10</p>
                <p className="text-sm text-slate-300">years leading international schools</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-amber-400 mb-2">2</p>
                <p className="text-sm text-slate-300">IB programmes authorized (PYP + MYP)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-amber-400 mb-2">1,000+</p>
                <p className="text-sm text-slate-300">educators trained on AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ABOUT ========== */}
        <section id="about" className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">About</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-6 text-navy dark:text-white">I&apos;ve Been Where You Are.</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>For two decades, I&apos;ve led international schools — managing staff, parents, budgets, accreditation, and the endless stream of emails that never stops.</p>
                  <p>I built an IB World School from scratch in Indonesia. Created every handbook, policy, and reporting system. Survived authorization visits for both PYP and MYP.</p>
                  <p>The admin load nearly broke me. So I built systems to survive — AI-powered workflows that handled the noise so I could actually lead.</p>
                  <p><strong className="text-navy dark:text-white">Now I help other school leaders skip the painful parts.</strong></p>
                </div>
              </div>
              <div className="rounded-2xl p-8 text-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/benedict.png"
                    alt="Benedict Rinne - Founder of KAIAK"
                    fill
                    className="rounded-full object-cover"
                    sizes="128px"
                    priority
                  />
                </div>
                <p className="font-serif text-xl text-navy dark:text-white">Benedict Rinne, M.Ed.</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Founder, KAIAK</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">20 years in international education<br />Former Head of School</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== HOW IT WORKS ========== */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">The Process</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">How We Work Together</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "We identify your biggest bottlenecks and see if there's a fit. No pressure, just clarity."
                },
                {
                  step: "02",
                  title: "Diagnostic",
                  description: "I audit your current systems and build a prioritized roadmap tailored to your context."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We build the infrastructure together — AI-enhanced where it helps, practical always."
                },
                {
                  step: "04",
                  title: "Handoff + Support",
                  description: "You own everything. Documentation included. 30 days of email support after we finish."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-6 rounded-xl bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-3xl font-serif text-orange-500">{item.step}</span>
                  <div>
                    <h3 className="font-serif text-xl text-navy dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section id="services" className="py-20 md:py-28 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-amber-400">Services</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Two Ways I Can Help</h2>
              <p className="text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
                Whether you need to get your time back or build your foundations, I&apos;ve got you covered.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service 1: AI Systems */}
              <div className="rounded-2xl p-8 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700">
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="font-serif text-2xl mb-2">AI Systems Implementation</h3>
                <p className="text-slate-400 text-sm mb-6">For established leaders drowning in admin</p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  I&apos;ll build your second brain, automate your workflows, and train you to use AI tools that actually save time. Done-with-you in 6 weeks.
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    'AI-powered second brain setup',
                    'NotebookLM & ChatGPT workflows',
                    'Email & meeting automation',
                    'Training + documentation',
                    '30 days of support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <Icons.Check className="w-5 h-5 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/work-with-me" 
                  className="block w-full text-center px-6 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 theme-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>

              {/* Service 2: School Ops */}
              <div className="rounded-2xl p-8 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700">
                <div className="text-4xl mb-6">🏫</div>
                <h3 className="font-serif text-2xl mb-2">School Ops Accelerator</h3>
                <p className="text-slate-400 text-sm mb-6">For new Heads building from scratch</p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  I&apos;ll build your handbooks, policies, and reporting systems fast. Skip the months of template hunting and get operational foundations done right.
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    'Parent-student handbook',
                    'Staff policy framework',
                    'Reporting templates (board, enrollment)',
                    'Emergency procedures',
                    'Customized to your context',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <Icons.Check className="w-5 h-5 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/work-with-me" 
                  className="block w-full text-center px-6 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 theme-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8">
              Not sure which fits? <Link href="/booking" className="text-amber-400 hover:underline">Book a free call</Link> and we&apos;ll figure it out together.
            </p>
          </div>
        </section>

        {/* ========== LATEST FROM BLOG ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy border-t border-slate-100 dark:border-slate-700">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">From the Blog</p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white">Latest Posts</h2>
              </div>
              <Link 
                href="/blog" 
                className="hidden sm:flex items-center gap-2 font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 rounded"
              >
                View all <Icons.ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm theme-transition bg-white dark:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300">
                      {pillarLabels[post.pillar] || post.pillar}
                    </span>
                    <span className="font-serif text-lg text-navy dark:text-white">{post.title}</span>
                  </div>
                  <span className="hidden sm:block text-sm text-slate-400 dark:text-slate-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </Link>
              ))}
            </div>

            <Link 
              href="/blog" 
              className="sm:hidden flex items-center justify-center gap-2 font-medium mt-8 text-orange-600 dark:text-orange-400"
            >
              View all posts <Icons.ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========== NEWSLETTER ========== */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl mb-2 text-navy dark:text-white">The No-Admin Newsletter</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Weekly field notes on AI, systems, and what actually works in school leadership. No fluff.</p>
            <NewsletterForm />
          </div>
        </section>

        {/* ========== CONTACT ========== */}
        <section id="contact" className="py-20 md:py-28 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to get your time back?</h2>
            <p className="text-slate-300 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Book a free 30-minute strategy call. We&apos;ll talk about what&apos;s eating your time and whether I can help.
            </p>
            <Link 
              href="/booking" 
              className="inline-block px-10 py-4 rounded-lg font-semibold text-lg mb-6 bg-amber-500 text-navy hover:bg-amber-400 theme-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
            >
              Book Your Strategy Call
            </Link>
            <p className="text-slate-400">
              Or email me directly: <a href="mailto:ben@kaiak.io" className="text-amber-400 hover:underline">ben@kaiak.io</a>
            </p>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 text-slate-400 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-xl text-white mb-1">KAIAK</p>
              <p className="text-sm">AI & systems for school leaders</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/blog" className="hover:text-white theme-transition">Blog</Link>
              <Link href="/work-with-me" className="hover:text-white theme-transition">Services</Link>
              <Link href="/#about" className="hover:text-white theme-transition">About</Link>
              <a 
                href="https://linkedin.com/in/benedictrinne" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white theme-transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 text-sm text-center border-t border-navy-mid">
            <p>© {currentYear} KAIAK. Less admin. More impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

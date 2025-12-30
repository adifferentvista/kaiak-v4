import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import ExitIntentPopup from './components/ExitIntentPopup';
import NewsletterForm from './components/NewsletterForm';
import { Icons } from './components/Icons';
import { getFeaturedPosts, pillarLabels } from '@/lib/posts';

// ============================================
// KAIAK HOMEPAGE v5
// Structure based on AI Advantage Canada
// ============================================

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="font-sans antialiased bg-cream dark:bg-navy text-slate-800 dark:text-slate-200">
      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-navy focus:rounded shadow-lg"
      >
        Skip to main content
      </a>

      <ExitIntentPopup />
      <Navbar />

      <main id="main-content">
        
        {/* ========== SECTION 1: HERO ========== */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream dark:bg-navy">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
                  For International School Leaders
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-navy dark:text-white">
                  Spend More Time Leading, Less Time Managing
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  From overwhelmed to operational — you built the school. Now let&apos;s build the systems so you can actually run it without burning out.
                </p>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                  Together we&apos;ll pinpoint what&apos;s eating your time and build AI-powered workflows that fit seamlessly into your school.
                </p>
                <Link 
                  href="/booking" 
                  className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-medium shadow-lg bg-orange-600 hover:bg-orange-500 dark:bg-amber-500 dark:text-navy dark:hover:bg-amber-400 transition-all"
                >
                  Book Your Free Strategy Call
                  <Icons.ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-80 h-80">
                  <Image
                    src="/benedict.png"
                    alt="Benedict Rinne - AI & Systems Consultant for School Leaders"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                    sizes="320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 2: PAIN POINTS ========== */}
        <section className="py-16 md:py-20 bg-white dark:bg-navy-light">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                Stuck in the daily grind?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                The passion that sparked your career is still there. It&apos;s just buried under compliance deadlines and admin tasks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "I'm a Google Workspace user, but I feel like I'm only scratching the surface.",
                "I'm drowning in admin tasks, and it's taking me away from students and staff.",
                "My inbox is a nightmare, and I'm afraid I'm missing important messages.",
                "I spend more time on compliance paperwork than instructional leadership.",
                "My board wants reports I don't have time to create.",
                "I'm working 60-hour weeks and still falling behind.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-cream dark:bg-slate-800">
                  <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icons.Check className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                You didn&apos;t become a Head of School to become its administrator — <span className="text-navy dark:text-white font-medium">you did it to make an impact.</span>
              </p>
              <p className="text-slate-500 dark:text-slate-500 mt-2">
                Let&apos;s get back to what matters: leading your school and building your legacy.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/booking" 
                className="inline-block px-6 py-3 rounded-lg font-medium border-2 border-orange-600 dark:border-amber-500 text-orange-600 dark:text-amber-400 hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ========== SECTION 3: BENEFITS GRID ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
                Your Partner in Smarter Workflows
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                You&apos;ve Got the Vision. Let&apos;s Give You Your Time Back.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Streamline your operations with AI-powered systems that actually work in a school context.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⏱️",
                  title: "Reclaim 10+ Hours Weekly",
                  description: "Transform inbox chaos into organized efficiency. Cut email management time in half and eliminate repetitive admin tasks."
                },
                {
                  icon: "📊",
                  title: "Board Reports in Minutes",
                  description: "Stop spending 4 hours on reports. AI-assisted templates get you board-ready documentation in 30 minutes or less."
                },
                {
                  icon: "📋",
                  title: "Accreditation-Ready Systems",
                  description: "Never scramble before a visit again. Organized documentation and policies you can find in seconds."
                },
                {
                  icon: "📧",
                  title: "Inbox Zero by Noon",
                  description: "The 15-minute email system for school leaders. Triage, delegate, and respond without it eating your whole day."
                },
                {
                  icon: "📝",
                  title: "Policies in Days, Not Weeks",
                  description: "AI-powered drafting gets you from blank page to board-approved policy in a fraction of the time."
                },
                {
                  icon: "🧘",
                  title: "Peace of Mind",
                  description: "Never worry about dropping the ball again. Your school runs efficiently while you focus on what matters."
                }
              ].map((benefit, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-serif text-xl text-navy dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 4: SIGNATURE PROGRAM ========== */}
        <section className="py-20 md:py-28 bg-navy dark:bg-navy-dark text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-amber-400">
                Our Signature Program
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Break Free From Admin Overwhelm in 6 Weeks
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                You&apos;ve built your school from the ground up, but running it shouldn&apos;t feel this hard.
              </p>
            </div>

            <div className="bg-navy-light dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-6">
                    6-Week AI Systems Implementation
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Streamline your school with a personalized approach to AI and automation. Over six weeks, we&apos;ll collaborate to:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Build your AI-powered second brain (NotebookLM)",
                      "Automate routine admin tasks and reporting",
                      "Create your 15-minute email system",
                      "Set up board report templates that write themselves",
                      "Train you to maintain and expand the systems"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icons.Check className="w-3 h-3 text-amber-400" />
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-slate-400 mb-2">By the end of 6 weeks, you&apos;ll have:</p>
                  <p className="text-amber-400 font-serif text-xl mb-8">
                    The systems, strategies, and support you need to spend less time managing—and more time leading.
                  </p>
                  <Link 
                    href="/booking" 
                    className="inline-block px-8 py-4 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 5: HOW IT WORKS ========== */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
                How We Work Together
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                Simple Process, Lasting Results
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Tailored 1:1 programs and step-by-step guidance to save you time, simplify workflows, and give you back your weekends.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discover",
                  description: "Every school is unique. We start by understanding your context, identifying bottlenecks, and finding opportunities that will make the biggest impact."
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Because your school is one of a kind, your solutions should be too. We create AI-powered workflows that fit seamlessly into your routine."
                },
                {
                  step: "03",
                  title: "Deliver",
                  description: "We're with you every step. Get hands-on support as you implement your new systems, with 30 days of aftercare to ensure lasting success."
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-serif text-orange-600 dark:text-orange-400">{item.step}</span>
                  </div>
                  <h3 className="font-serif text-xl text-navy dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/booking" 
                className="inline-block px-6 py-3 rounded-lg font-medium bg-navy dark:bg-amber-500 text-white dark:text-navy hover:bg-navy-light dark:hover:bg-amber-400 transition-colors"
              >
                Book Your Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* ========== SECTION 6: SERVICES OVERVIEW ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
                Services
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                Three Ways to Work Together
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1: Quick Win */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-serif text-xl text-navy dark:text-white mb-2">Quick Win Sprint</h3>
                <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">1-Week Intensive</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  For school leaders needing focused support. In just one week, implement targeted solutions to save time immediately.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-green-500" />
                    One workflow automated
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-green-500" />
                    Email system setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-green-500" />
                    Quick implementation guide
                  </li>
                </ul>
                <Link href="/work-with-me" className="text-orange-600 dark:text-orange-400 font-medium text-sm hover:underline">
                  Learn more →
                </Link>
              </div>

              {/* Service 2: Signature (highlighted) */}
              <div className="bg-navy dark:bg-slate-800 rounded-xl p-8 border-2 border-amber-500 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-navy text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-serif text-xl text-white mb-2">AI Systems Implementation</h3>
                <p className="text-amber-400 text-sm font-medium mb-4">6-Week Program</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                  The complete system for reclaiming your time. Build your AI-powered second brain and automated workflows.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-amber-400" />
                    Full second brain setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-amber-400" />
                    Email &amp; reporting automation
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-amber-400" />
                    Training + documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-amber-400" />
                    30 days support
                  </li>
                </ul>
                <Link href="/work-with-me" className="text-amber-400 font-medium text-sm hover:underline">
                  Learn more →
                </Link>
              </div>

              {/* Service 3: School Ops */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="text-3xl mb-4">🏫</div>
                <h3 className="font-serif text-xl text-navy dark:text-white mb-2">School Ops Accelerator</h3>
                <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">4-8 Week Program</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  For new Heads building from scratch. Get your handbooks, policies, and reporting systems done right, fast.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-green-500" />
                    Parent-student handbook
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-green-500" />
                    Staff policy framework
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-green-500" />
                    Board reporting templates
                  </li>
                </ul>
                <Link href="/work-with-me" className="text-orange-600 dark:text-orange-400 font-medium text-sm hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/work-with-me" 
                className="inline-block px-6 py-3 rounded-lg font-medium border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ========== SECTION 7: TOOL MASTERY ========== */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
                The Heart of Our Systems
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                Optimizing Google Workspace + AI for Schools
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Most school leaders only scratch the surface of Google Workspace. I&apos;ll show you how AI tools can transform your daily admin into smooth, automated workflows.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Google Workspace", desc: "Your school's command center", icon: "🏢" },
                { name: "NotebookLM", desc: "Your AI research assistant", icon: "📓" },
                { name: "ChatGPT / Claude", desc: "Your drafting partner", icon: "🤖" },
                { name: "Google Drive", desc: "Organized, searchable files", icon: "📁" },
                { name: "Gmail + Filters", desc: "Inbox zero, automated", icon: "📧" },
                { name: "Google Docs", desc: "AI-assisted writing", icon: "📝" },
                { name: "Google Sheets", desc: "Automated reporting", icon: "📊" },
                { name: "Google Calendar", desc: "Time-blocked leadership", icon: "📅" },
              ].map((tool, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-colors">
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="font-medium text-navy dark:text-white text-sm mb-1">{tool.name}</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-xs">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 8: TESTIMONIALS ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
                Results
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                From Overwhelmed to Operational
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The parent handbook that would have taken me 3 weeks was done in 3 days. And it was better than anything I could have written alone.",
                  name: "IB School Principal",
                  location: "Southeast Asia",
                  metric: "90% TIME SAVED",
                  metricColor: "text-green-600 dark:text-green-400"
                },
                {
                  quote: "Board reports used to take me 4+ hours every month. Now I have a template system that gets me to a draft in 30 minutes.",
                  name: "International School Head",
                  location: "Middle East",
                  metric: "4 HRS → 30 MIN",
                  metricColor: "text-amber-600 dark:text-amber-400"
                },
                {
                  quote: "During our IB authorization visit, I could find every policy document in seconds. The visiting team was impressed. I was relieved.",
                  name: "Founding Principal",
                  location: "Asia Pacific",
                  metric: "IB AUTHORIZED",
                  metricColor: "text-blue-600 dark:text-blue-400"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <div className={`text-xs font-bold mb-4 ${testimonial.metricColor}`}>
                    {testimonial.metric}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-navy dark:text-white text-sm">{testimonial.name}</p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                Plus: 1,000+ educators trained on AI tools • DNA Masterclass 2025 speaker • 50+ schools reached via live webinar
              </p>
            </div>
          </div>
        </section>

        {/* ========== SECTION 9: ABOUT ========== */}
        <section id="about" className="py-20 md:py-28 bg-white dark:bg-navy-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">
                  Meet Your Consultant
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-6 text-navy dark:text-white">
                  I Built These Systems Because I Was Drowning.
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Hi, I&apos;m Benedict Rinne. After nearly 20 years in education — including 10 years in international schools and 5 years as Head of School across three institutions — I know the overwhelming reality of school leadership.
                  </p>
                  <p>
                    When I founded and led an IB World School in Indonesia, I faced 500+ emails a week with a lean team. Authorization deadlines. Board expectations. Parent concerns. Staff issues. All landing on my desk.
                  </p>
                  <p>
                    I realized that if I didn&apos;t systematize the &ldquo;noise,&rdquo; I&apos;d never have time for what actually mattered: the students, the teachers, the vision.
                  </p>
                  <p>
                    <strong className="text-navy dark:text-white">So I built AI-powered systems to survive.</strong> Now I help other school leaders do the same — without the two years of trial and error.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-cream dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src="/benedict.png"
                      alt="Benedict Rinne, M.Ed."
                      fill
                      className="rounded-full object-cover"
                      sizes="128px"
                    />
                  </div>
                  <div className="text-center mb-6">
                    <p className="font-serif text-xl text-navy dark:text-white">Benedict Rinne, M.Ed.</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Founder, KAIAK</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: "Years in Education", value: "20" },
                      { label: "Years Leading International Schools", value: "10" },
                      { label: "Years as Head of School", value: "5" },
                      { label: "IB Programmes Authorized", value: "2" },
                      { label: "Educators Trained on AI", value: "1,000+" },
                    ].map((stat, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2 last:border-0 last:pb-0">
                        <span className="text-slate-600 dark:text-slate-400">{stat.label}</span>
                        <span className="font-medium text-navy dark:text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 10: FAQ ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Who do you work with?",
                  a: "I primarily work with international school leaders — Heads of School, Principals, and Directors — who use Google Workspace and want to reduce admin overwhelm while actually leading their schools."
                },
                {
                  q: "Do I need to be technical?",
                  a: "Not at all. If you can use Google Docs, you can use what we build. I handle the technical setup and train you on everything. Many of my most successful clients started as tech beginners."
                },
                {
                  q: "What's the time commitment?",
                  a: "Plan for 2-3 hours per week during the engagement. These are 'done with you' services — I build alongside you, not for you. That's how the systems actually stick."
                },
                {
                  q: "What results can I expect?",
                  a: "While results vary, clients typically reduce their administrative workload by 50% within the first two months. The real transformation is having clear, reliable systems so you can focus on leading instead of managing."
                },
                {
                  q: "Do you work with schools outside the IB system?",
                  a: "Yes. My experience is primarily IB, but the operational systems and AI workflows apply to any international school context — British, American, or local curriculum."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium text-navy dark:text-white mb-2">{item.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 11: NEWSLETTER ========== */}
        <section id="newsletter" className="py-16 bg-white dark:bg-navy-light border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl mb-2 text-navy dark:text-white">The No-Admin Newsletter</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Stay ahead without staying up late.
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mb-6">
              Join school leaders getting practical AI tips, Google Workspace shortcuts, and automation strategies delivered weekly. <em>Written by a school leader, for school leaders.</em>
            </p>
            <NewsletterForm />
          </div>
        </section>

        {/* ========== SECTION 12: FEATURED POSTS ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy border-t border-slate-100 dark:border-slate-700">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">From the Blog</p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white">Start Here</h2>
              </div>
              <Link 
                href="/blog" 
                className="hidden sm:flex items-center gap-2 font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
              >
                View all <Icons.ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all bg-white dark:bg-slate-800"
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

        {/* ========== SECTION 13: FINAL CTA ========== */}
        <section className="py-20 md:py-28 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s create a smarter, faster way for you to run your school. Book a free 30-minute strategy call.
            </p>
            <Link 
              href="/booking" 
              className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
            >
              Book Your Free Consultation
            </Link>
            <p className="mt-6 text-slate-400">
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
            <p>© {currentYear} KAIAK. Less admin. More impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

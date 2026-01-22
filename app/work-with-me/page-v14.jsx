import Link from 'next/link';
import Navbar from '../components/Navbar';
import { Icons } from '../components/Icons';
import { Users, Video, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Work With Me | KAIAK',
  description: 'AI systems and operational infrastructure for international school leaders. Done-with-you consulting to reclaim your time.',
};

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      {/* Shared Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-[73px]" />

      <main>
        {/* Header */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-navy dark:text-white">
              Stop Drowning in Admin.<br />Start Leading Your School.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get 10+ hours back every week with AI-powered systems built specifically for international school leaders.
            </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-navy dark:text-white">
              This Is For You If...
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "You're a school leader (Head, Principal, Director) feeling buried in admin",
                "You're willing to invest time in building systems that last",
                "You want a partner who's been in your shoes, not a generic consultant",
                "You use Google Workspace and want to get more out of it",
                "You're tired of cobbling together solutions that fall apart in a month",
                "You value practical over theoretical — you want things that work",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-cream dark:bg-slate-800">
                  <Icons.Check className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four Service Options - 1:1 Consulting */}
        <section className="py-20 md:py-28 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-amber-400">1:1 Consulting</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">For Individual Leaders</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Done-with-you consulting to build systems that stick.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Service 1: Strategy Session */}
              <div className="rounded-2xl p-6 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50 cursor-pointer">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-serif text-xl mb-1">Strategy Session</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">Get clarity fast.</p>
                <p className="text-slate-400 text-xs mb-4">For leaders who need direction</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  90-minute deep dive into your specific situation. Walk away with a clear roadmap and actionable next steps.
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {[
                    '90-minute strategy call',
                    'Recorded for your reference',
                    'Written action plan',
                    'Tool recommendations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <Icons.Check className="w-4 h-4 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-navy-border dark:border-slate-700">
                  <div className="text-2xl font-bold text-white mb-1">$297</div>
                  <p className="text-xs text-slate-400">One session</p>
                </div>
              </div>

              {/* Service 2: Quick Win Sprint */}
              <div className="rounded-2xl p-6 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50 cursor-pointer">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-serif text-xl mb-1">Quick Win Sprint</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">Fast results, focused scope.</p>
                <p className="text-slate-400 text-xs mb-4">For leaders needing immediate relief</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  In one week, we implement one targeted solution to save you time immediately. Perfect for a quick win.
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {[
                    'One workflow automated',
                    'Email system OR reporting template',
                    'Quick implementation guide',
                    '7 days of email support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <Icons.Check className="w-4 h-4 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-navy-border dark:border-slate-700">
                  <div className="text-2xl font-bold text-white mb-1">$1,500</div>
                  <p className="text-xs text-slate-400">1 week</p>
                </div>
              </div>

              {/* Service 3: AI Systems Implementation - FEATURED */}
              <div className="rounded-2xl p-6 flex flex-col bg-navy-light dark:bg-slate-800 border-2 border-amber-500 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/20 cursor-pointer">
                <div className="absolute -top-3 left-4 bg-amber-500 text-navy text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-serif text-xl mb-1">AI Systems Implementation</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">Get your time back.</p>
                <p className="text-slate-400 text-xs mb-4">For established leaders drowning in admin</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  I build your second brain, automate your workflows, and train you to use AI tools that actually save time.
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {[
                    'AI-powered second brain (NotebookLM)',
                    'Email & meeting automation',
                    'Custom prompt library',
                    'Training & documentation',
                    '30 days email support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <Icons.Check className="w-4 h-4 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-navy-border dark:border-slate-700">
                  <div className="text-2xl font-bold text-white mb-1">$5,000</div>
                  <p className="text-xs text-slate-400">6 weeks</p>
                </div>
              </div>

              {/* Service 4: School Ops Accelerator */}
              <div className="rounded-2xl p-6 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50 cursor-pointer">
                <div className="text-3xl mb-4">🏫</div>
                <h3 className="font-serif text-xl mb-1">School Ops Accelerator</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">Get your foundations built.</p>
                <p className="text-slate-400 text-xs mb-4">For new Heads needing operational docs</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  I build your handbooks, policies, and reporting systems fast. Skip months of template hunting.
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {[
                    'Parent-student handbook',
                    'Staff policy framework',
                    'Board reporting templates',
                    'Emergency procedures',
                    'Customized to your context',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <Icons.Check className="w-4 h-4 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-navy-border dark:border-slate-700">
                  <div className="text-2xl font-bold text-white mb-1">From $9,500</div>
                  <p className="text-xs text-slate-400">4-8 weeks • Scope varies by context</p>
                </div>
              </div>
            </div>

            {/* Single CTA under all cards */}
            <div className="text-center mt-12">
              <Link
                href="/booking"
                className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
              >
                Book a Free Discovery Call
              </Link>
              <p className="text-slate-400 text-sm mt-4">
                Not sure which option? Let&apos;s talk and figure it out together.
              </p>
            </div>
          </div>
        </section>

        {/* Staff Training Section */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-amber-400">For Schools & Teams</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">Staff Training & Workshops</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Upskill your entire leadership team or admin staff. Perfect for PD days, conferences, and school-wide AI adoption.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Keynote / Training Session */}
              <div className="rounded-2xl p-8 bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400 dark:hover:border-orange-500 cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-serif text-xl text-navy dark:text-white mb-2">Keynote / Training Session</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  60-90 minute interactive session to introduce AI tools and inspire your team to start using them.
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    'Customized to your school context',
                    'Live demos with real examples',
                    'Q&A session included',
                    'Resource guide for attendees',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Icons.Check className="w-4 h-4 flex-shrink-0 text-orange-600 dark:text-amber-400 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <Video className="w-4 h-4" /> Virtual
                    </span>
                    <span className="font-bold text-navy dark:text-white">$1,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="w-4 h-4" /> In-Person
                    </span>
                    <span className="font-bold text-navy dark:text-white">$2,500+</span>
                  </div>
                </div>
              </div>

              {/* Half-Day Workshop */}
              <div className="rounded-2xl p-8 bg-cream dark:bg-slate-800 border-2 border-orange-300 dark:border-orange-600 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer">
                <div className="absolute -top-3 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST FOR PD DAYS
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-serif text-xl text-navy dark:text-white mb-2">Half-Day Workshop</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  3-hour hands-on workshop where participants actually build their own AI workflows and prompts.
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    'Hands-on, not just lecture',
                    'Participants leave with working tools',
                    'Small group exercises',
                    'Implementation templates included',
                    'Follow-up resource pack',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Icons.Check className="w-4 h-4 flex-shrink-0 text-orange-600 dark:text-amber-400 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <Video className="w-4 h-4" /> Virtual
                    </span>
                    <span className="font-bold text-navy dark:text-white">$2,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="w-4 h-4" /> In-Person
                    </span>
                    <span className="font-bold text-navy dark:text-white">$4,000+</span>
                  </div>
                </div>
              </div>

              {/* Staff Training License */}
              <div className="rounded-2xl p-8 bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400 dark:hover:border-orange-500 cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-serif text-xl text-navy dark:text-white mb-2">Staff Training License</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Give your entire admin team access to the AI Jumpstart course, plus a live Q&A session with me.
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    'Up to 20 staff accounts',
                    'Self-paced video course access',
                    '90-minute live Q&A session',
                    'Completion certificates for all',
                    'Perfect for async PD',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Icons.Check className="w-4 h-4 flex-shrink-0 text-orange-600 dark:text-amber-400 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Up to 20 staff</span>
                    <span className="font-bold text-navy dark:text-white">$2,000</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Additional seats available</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                <MapPin className="w-4 h-4 inline mr-1" />
                In-person pricing includes travel from Indonesia. Final quote based on location.
              </p>
              <Link
                href="/booking"
                className="inline-block px-8 py-3 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-colors"
              >
                Inquire About Training
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION - COMMENTED OUT UNTIL REAL TESTIMONIALS AVAILABLE
        <section className="py-16 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
              <Quote className="w-10 h-10 text-orange-200 dark:text-slate-700 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;Board reports used to take 4+ hours every month. Now I have a template system that gets me to a draft in 30 minutes. The ROI was immediate.&rdquo;
              </p>
              <div>
                <p className="font-medium text-navy dark:text-white">International School Head</p>
                <p className="text-slate-500 text-sm">Middle East</p>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Process */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">The Process</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">How It Works</h2>
              <p className="text-slate-600 dark:text-slate-400">Same process for all services.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery Call (Free)",
                  description: "We talk about what's eating your time. I'll ask questions, listen, and help you get clear on what you actually need. No obligation."
                },
                {
                  step: "2",
                  title: "Proposal",
                  description: "If there's a fit, I send a clear scope document with timeline, deliverables, and investment. No surprises."
                },
                {
                  step: "3",
                  title: "Build",
                  description: "We work together to implement. These are \"done with you\" services — I build alongside you, teaching as we go."
                },
                {
                  step: "4",
                  title: "Handoff",
                  description: "You get complete documentation so you can maintain everything yourself. Plus ongoing support for questions."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-serif text-orange-600 dark:text-orange-400">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-navy dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online Course Teaser */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12 rounded-2xl border border-orange-200 dark:border-slate-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-orange-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-2">
                    Coming Soon
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-navy dark:text-white mb-4">
                    AI for School Leaders: 5-Day Jumpstart
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Not ready for 1:1 consulting? Learn the fundamentals at your own pace. Self-paced video course with templates, prompts, and a certificate of completion.
                  </p>
                  <div className="text-3xl font-bold text-navy dark:text-white mb-2">$147</div>
                  <p className="text-slate-500 text-sm mb-6">Lifetime access</p>
                </div>
                <div className="space-y-3">
                  {[
                    '5 video modules (2 hours total)',
                    'AI tool decision matrix',
                    '20+ copy-paste prompts',
                    'Email system templates',
                    'Certificate of completion',
                    'Perfect for PD budgets',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <Icons.Check className="w-5 h-5 text-orange-600 dark:text-amber-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                  <Link
                    href="/#newsletter"
                    className="inline-block mt-4 px-6 py-3 rounded-lg font-medium border-2 border-orange-600 dark:border-amber-500 text-orange-600 dark:text-amber-400 hover:bg-orange-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Join Waitlist →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Not Ready Yet */}
        <section className="py-16 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-xl mb-4 text-navy dark:text-white">
              Not Ready for Consulting?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              No problem. Start with these free resources:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-toolkit"
                className="px-6 py-3 rounded-lg font-medium bg-orange-600 text-white hover:bg-orange-700 transition-colors"
              >
                Get the Free AI Toolkit
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 rounded-lg font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-12 text-center text-navy dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: "How do I know which service I need?",
                  a: "Start with a Strategy Session ($297) if you're unsure. If you're drowning in emails and meetings → AI Systems. If you're missing handbooks and policies → School Ops. For team training, the Half-Day Workshop is most popular. Not sure? Book a free call and we'll figure it out together."
                },
                {
                  q: "Do I need to be technical?",
                  a: "No. If you can use Google Docs, you can use what we build. I handle the technical setup and train you on everything."
                },
                {
                  q: "What's the time commitment on my end?",
                  a: "2-3 hours per week during the engagement. These are \"done with you\" services — I build alongside you, not for you. That's how the systems actually stick."
                },
                {
                  q: "What if I need both AI systems AND operational documents?",
                  a: "Many clients do. We can discuss a combined engagement that addresses both. Often there's overlap that makes the package more efficient."
                },
                {
                  q: "What happens after we finish?",
                  a: "You own everything. I include complete documentation so you can maintain and evolve the systems yourself. Plus email support (7-30 days depending on package) for any questions that come up."
                },
                {
                  q: "Do you work with schools outside of the IB system?",
                  a: "Yes. My experience is primarily IB, but the operational systems and AI workflows apply to any international school context — British, American, or local curriculum."
                },
                {
                  q: "Can my school use PD budget for this?",
                  a: "Absolutely. The online course ($147), Strategy Sessions ($297), and all staff training options are perfect for PD budgets. For larger consulting engagements, many schools categorize it as professional development or operational consulting — I can provide documentation either way."
                },
                {
                  q: "Do you travel for in-person training?",
                  a: "Yes. I'm based in Indonesia and travel throughout Asia, Middle East, and beyond. In-person pricing includes travel costs — I'll provide a specific quote based on your location."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-medium text-navy dark:text-white mb-2">{item.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to get started?</h2>
            <p className="text-slate-300 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Book a free 30-minute call. We&apos;ll discuss your situation and find the right fit.
            </p>
            <Link 
              href="/booking" 
              className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
            >
              Book Your Free Discovery Call
            </Link>
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
              <Link href="/#about" className="hover:text-white transition-colors">About</Link>
              <Link href="/ai-toolkit" className="hover:text-white transition-colors">Free Toolkit</Link>
              <a 
                href="https://linkedin.com/in/yourprofile" 
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

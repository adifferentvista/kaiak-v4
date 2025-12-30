import Link from 'next/link';
import { Logo, Icons } from '../components/Icons';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'Work With Me | KAIAK',
  description: 'AI systems and operational infrastructure for international school leaders. Done-with-you consulting to reclaim your time.',
};

export default function WorkWithMePage() {
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
              <Link href="/#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">About</Link>
              <ThemeToggle />
              <Link
                href="/booking"
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-navy-mid dark:bg-amber-500 dark:text-navy hover:bg-navy dark:hover:bg-amber-400 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Header */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-navy dark:text-white">
              Let&apos;s Work Together
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Whether you need AI systems or operational foundations, I&apos;ll help you build something that actually sticks.
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

        {/* Two Options */}
        <section className="py-20 md:py-28 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-amber-400">Choose Your Path</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Two Ways I Can Help</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service 1: AI Systems */}
              <div className="rounded-2xl p-8 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700">
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="font-serif text-2xl mb-2">AI Systems Implementation</h3>
                <p className="text-amber-400 text-sm font-medium mb-4">Get your time back.</p>
                <p className="text-slate-400 text-sm mb-6">For established leaders drowning in admin</p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  I&apos;ll build your second brain, automate your workflows, and train you to use AI tools that actually save time. Done-with-you in 6 weeks.
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    'AI-powered second brain setup (NotebookLM)',
                    'Email and meeting workflow automation',
                    'Custom prompt library for your use cases',
                    'Training and documentation',
                    '30 days of email support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <Icons.Check className="w-5 h-5 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-navy-border dark:border-slate-700">
                  <p className="text-sm text-slate-400 mb-4">Timeline: 6 weeks</p>
                </div>
              </div>

              {/* Service 2: School Ops */}
              <div className="rounded-2xl p-8 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700">
                <div className="text-4xl mb-6">🏫</div>
                <h3 className="font-serif text-2xl mb-2">School Ops Accelerator</h3>
                <p className="text-amber-400 text-sm font-medium mb-4">Get your foundations built.</p>
                <p className="text-slate-400 text-sm mb-6">For new Heads or schools needing operational documents</p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  I&apos;ll build your handbooks, policies, and reporting systems fast. Skip the months of template hunting and get operational foundations done right.
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    'Parent-student handbook',
                    'Staff policy framework',
                    'Board reporting templates',
                    'Emergency procedures',
                    'Customized to your context',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <Icons.Check className="w-5 h-5 flex-shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-navy-border dark:border-slate-700">
                  <p className="text-sm text-slate-400 mb-4">Timeline: 4-8 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-orange-400">The Process</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">How It Works</h2>
              <p className="text-slate-600 dark:text-slate-400">Same process for both services.</p>
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
                  description: "You get complete documentation so you can maintain everything yourself. Plus 30 days of email support for questions."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
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

        {/* Investment */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-6 text-navy dark:text-white">
              Investment
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Every engagement is scoped to your specific situation. Typical projects range from <strong className="text-navy dark:text-white">$3,500 to $8,000</strong> depending on complexity and timeline.
            </p>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              We&apos;ll discuss fit and investment on our call. No pressure, no surprises.
            </p>
            <Link
              href="/booking"
              className="inline-block px-8 py-4 rounded-lg font-medium text-white bg-navy-mid dark:bg-amber-500 dark:text-navy hover:bg-navy dark:hover:bg-amber-400 transition-colors"
            >
              Book a Strategy Call
            </Link>
          </div>
        </section>

        {/* Not Ready Yet */}
        <section className="py-16 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-xl mb-4 text-navy dark:text-white">
              Not Ready for Consulting?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              No problem. Here are other ways to get value:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="px-6 py-3 rounded-lg font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                Read the Blog
              </Link>
              <Link
                href="/#newsletter"
                className="px-6 py-3 rounded-lg font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                Join the Newsletter
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
                  a: "If you're drowning in emails and meetings → AI Systems. If you're missing handbooks and policies → School Ops. Not sure? Book a call and we'll figure it out together."
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
                  a: "You own everything. I include complete documentation so you can maintain and evolve the systems yourself. Plus 30 days of email support for any questions that come up."
                },
                {
                  q: "Do you work with schools outside of the IB system?",
                  a: "Yes. My experience is primarily IB, but the operational systems and AI workflows apply to any international school context — British, American, or local curriculum."
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
              Book a free 30-minute call. We&apos;ll discuss your situation and see if there&apos;s a fit.
            </p>
            <Link 
              href="/booking" 
              className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
            >
              Book Your Strategy Call
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

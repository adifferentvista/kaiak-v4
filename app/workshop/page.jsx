import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroBackdrop from '../components/HeroBackdrop';

export const metadata = {
  title: 'AI Leadership in Practice — The Live Workshop | KAIAK',
  description:
    'A 90-minute virtual session for school leadership teams. Six AI workflows, live demonstrations, and ready-to-use prompt templates.',
  alternates: { canonical: '/workshop' },
};

const topics = [
  {
    label: 'Operations',
    title: 'The Meeting-to-Action Machine',
    description:
      'Turn any leadership meeting into a structured action table in 10 minutes. Live demo with Otter.ai and Claude. Template included.',
  },
  {
    label: 'Communications',
    title: 'Writing at Scale Without Losing Your Voice',
    description:
      "A week of school communications in 45 minutes. Newsletter, social content, admissions follow-up, crisis draft. Voice Brief technique demonstrated live.",
  },
  {
    label: 'Finance',
    title: 'Making Numbers Tell a Story',
    description:
      "Upload a budget spreadsheet. Get a board-ready narrative in minutes. No formulas. No pivot tables. Works with any school's data.",
  },
  {
    label: 'Enrollment',
    title: 'The AI Discovery Shift',
    description:
      "Why parents are finding schools through AI now — not Google — and the three things your school can do this week to be recommended.",
  },
  {
    label: 'Strategy',
    title: 'AI as Your Thought Partner',
    description:
      'Use Claude to stress-test your next big decision before the board meeting. The pre-board stress test demonstrated live with a real scenario.',
  },
  {
    label: 'Governance',
    title: "Write Your School's AI Policy",
    description:
      "A working first draft of your school's AI policy, built live during the session using a structured prompt sequence. You leave with a real document.",
  },
];

const pricingRows = [
  {
    label: 'School team (up to 10 participants)',
    price: '$2,500',
  },
  {
    label: 'Individual leader',
    price: '$500',
  },
  {
    label: 'Conference / PD day keynote (60 min, any size)',
    price: '$1,500 virtual / $2,500+ in-person',
  },
];

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      <Navbar />
      <div className="h-[73px]" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-cream dark:bg-navy">
          <HeroBackdrop />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="font-medium text-sm tracking-wide uppercase mb-4 text-orange-600 dark:text-amber-400">
              Live Workshop
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-4 text-navy dark:text-white">
              AI Leadership in Practice
            </h1>
            <p className="font-serif text-xl md:text-2xl mb-8 text-slate-600 dark:text-slate-300">
              The Live Workshop for School Leadership Teams
            </p>
            <div className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>This is not a lecture about AI.</p>
              <p className="mt-4">
                In 90 minutes, your leadership team will have six workflows open,
                tested, and working — one for every domain of school leadership.
                You leave with tools, not slides.
              </p>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-16 md:py-20 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-navy dark:text-white">
              What We Cover
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.label}
                  className="rounded-2xl p-6 bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-500"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 mb-3">
                    {topic.label}
                  </span>
                  <h3 className="font-serif text-lg text-navy dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Format */}
        <section className="py-16 md:py-20 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center text-navy dark:text-white">
              Format
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Length', value: '90 minutes' },
                { label: 'Delivery', value: 'Zoom (recorded for your reference)' },
                { label: 'Participants', value: 'Up to 10 per session' },
                { label: 'Materials', value: 'Prompt template pack sent same day' },
                { label: 'Follow-up', value: '30-minute Q&A available one week after' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  <span className="text-sm font-semibold text-orange-600 dark:text-amber-400 min-w-[100px]">
                    {item.label}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-20 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center text-navy dark:text-white">
              Investment
            </h2>
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              {pricingRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-2 ${
                    i !== pricingRows.length - 1
                      ? 'border-b border-slate-200 dark:border-slate-700'
                      : ''
                  } bg-cream dark:bg-slate-800`}
                >
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {row.label}
                  </span>
                  <span className="text-lg font-bold text-navy dark:text-white whitespace-nowrap">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 md:py-20 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-navy dark:text-white">
              Who This Is For
            </h2>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-center max-w-2xl mx-auto space-y-4">
              <p>
                Heads of School, Deputy Heads, and leadership teams at international
                and independent schools who want practical AI skills — not another
                presentation about why AI matters.
              </p>
              <p>
                If your leadership team is already using AI individually but without
                a shared framework, this session creates that shared language.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Next Session</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/booking?service=workshop"
                className="inline-block px-10 py-4 rounded-lg font-semibold text-lg bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
              >
                Reserve Your Spot &rarr;
              </Link>
              <Link
                href="/booking?service=workshop-call"
                className="inline-block px-8 py-4 rounded-lg font-semibold text-lg border border-slate-500 text-slate-300 hover:text-white hover:border-white transition-colors"
              >
                Book a free 15-minute call first &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* About Your Facilitator */}
        <section className="py-12 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-xl mb-3 text-navy dark:text-white">
              About Your Facilitator
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Benedict Rinne spent 20 years in international education, including
              founding and leading an IB World School in Indonesia. He has trained
              over 1,000 educators and built these workflows while running a real
              school with a lean team.
            </p>
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
            <p>&copy; {new Date().getFullYear()} KAIAK. Less admin. More impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

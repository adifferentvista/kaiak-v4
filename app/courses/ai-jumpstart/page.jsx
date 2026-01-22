import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { Icons } from '../../components/Icons';
import { Play, FileText, Award, Clock, CheckCircle2, Users } from 'lucide-react';

export const metadata = {
  title: 'AI for School Leaders: 5-Day Jumpstart | KAIAK',
  description: 'Learn to use AI tools effectively in just 5 days. Self-paced video course with prompts, templates, and certificate of completion.',
};

export default function AIJumpstartCoursePage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      {/* Shared Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-[73px]" />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-navy dark:to-navy-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-orange-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-3">
                  Self-Paced Online Course
                </p>
                <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-white mb-6 leading-tight">
                  AI for School Leaders:<br />
                  <span className="text-orange-600 dark:text-amber-400">5-Day Jumpstart</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  Stop feeling behind on AI. In 5 days, you'll have the tools, prompts, and systems to save 10+ hours a week on admin.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="text-4xl font-bold text-navy dark:text-white">$147</span>
                  <span className="text-slate-500 dark:text-slate-400">Lifetime access</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#enroll"
                    className="inline-block px-8 py-4 rounded-lg font-semibold text-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors text-center"
                  >
                    Enroll Now
                  </a>
                  <a
                    href="#curriculum"
                    className="inline-block px-8 py-4 rounded-lg font-semibold text-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors text-center"
                  >
                    See Curriculum
                  </a>
                </div>
              </div>

              {/* Course Preview Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-navy dark:bg-slate-900 p-6 text-white text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-amber-400" />
                  <p className="text-lg font-medium">5 Video Modules</p>
                  <p className="text-slate-400 text-sm">2+ hours of focused content</p>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { icon: Clock, text: '2+ hours of video content' },
                    { icon: FileText, text: '20+ copy-paste prompts' },
                    { icon: Award, text: 'Certificate of completion' },
                    { icon: Users, text: 'Built for school leaders' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                      <item.icon className="w-5 h-5 text-orange-600 dark:text-amber-400" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-16 bg-white dark:bg-navy-light">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl text-navy dark:text-white mb-8 text-center">
              This Course Is Perfect For You If...
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "You're a school leader who keeps hearing about AI but hasn't found time to learn it",
                "You've tried ChatGPT but aren't sure how to apply it to school admin",
                "You want practical systems, not theoretical fluff",
                "You need something you can do in small chunks between meetings",
                "You want to be able to show your board you're staying current",
                "You'd rather learn from a practitioner than a tech consultant",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-cream dark:bg-slate-800">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-20 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-orange-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-3">
                The Curriculum
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mb-4">
                5 Days to AI Confidence
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Each module is designed to be completed in 20-30 minutes. Do one per day, or binge them all in an afternoon.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  day: 1,
                  title: "The AI Landscape for School Leaders",
                  duration: "25 min",
                  topics: [
                    "Why most AI advice for schools is wrong",
                    "The 3 tools you actually need (and why)",
                    "Setting up your accounts the right way",
                    "The Decision Matrix: ChatGPT vs Claude vs NotebookLM",
                  ]
                },
                {
                  day: 2,
                  title: "Email Triage & Communication",
                  duration: "30 min",
                  topics: [
                    "The Inbox Zero system for school leaders",
                    "Drafting difficult parent emails in seconds",
                    "Templates for common scenarios",
                    "5 copy-paste prompts for communication",
                  ]
                },
                {
                  day: 3,
                  title: "Reports & Documentation",
                  duration: "25 min",
                  topics: [
                    "Board report templates that write themselves",
                    "Meeting summaries and action items",
                    "Accreditation documentation shortcuts",
                    "5 copy-paste prompts for reporting",
                  ]
                },
                {
                  day: 4,
                  title: "Building Your Second Brain",
                  duration: "30 min",
                  topics: [
                    "Setting up NotebookLM for your school",
                    "Uploading policies, handbooks, and curricula",
                    "Querying your documents instantly",
                    "5 copy-paste prompts for policy lookup",
                  ]
                },
                {
                  day: 5,
                  title: "Integration & Your Personal Roadmap",
                  duration: "20 min",
                  topics: [
                    "Combining tools into workflows",
                    "The 10 tasks to automate first",
                    "Building habits that stick",
                    "Your 30-day implementation plan",
                  ]
                },
              ].map((module) => (
                <div
                  key={module.day}
                  className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600"
                >
                  <div className="flex items-center gap-4 p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-orange-600 dark:text-orange-400">{module.day}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg text-navy dark:text-white">{module.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{module.duration}</p>
                    </div>
                    <Play className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-green-500 mt-0.5" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 bg-white dark:bg-navy-light">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl text-navy dark:text-white mb-8 text-center">
              Everything You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Play,
                  title: "5 Video Modules",
                  desc: "2+ hours of focused, practical content you can watch at your own pace"
                },
                {
                  icon: FileText,
                  title: "20+ Prompts",
                  desc: "Copy-paste prompts for emails, reports, policies, and more"
                },
                {
                  icon: Award,
                  title: "Certificate",
                  desc: "Certificate of completion for your PD records"
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-orange-600 dark:text-amber-400" />
                  <h3 className="font-semibold text-navy dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-16 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-serif text-orange-600 dark:text-orange-400">BR</span>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-navy dark:text-white mb-2">Your Instructor</h2>
                  <p className="text-lg font-medium text-navy dark:text-white mb-1">Benedict Rinne</p>
                  <p className="text-slate-500 dark:text-slate-400 mb-4">Former Head of School • Founder, KAIAK</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    I spent 20 years in international education, including founding an IB World School in Indonesia. I didn't learn AI to become a consultant — I learned it because I was drowning in 60-hour weeks. These are the exact systems I built to get my time back. Now I help other school leaders do the same.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment CTA */}
        <section id="enroll" className="py-20 bg-navy dark:bg-navy-dark text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Join school leaders who are saving hours every week with practical AI systems.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="text-5xl font-bold mb-2">$147</div>
              <p className="text-slate-400 mb-6">One-time payment • Lifetime access</p>
              
              <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
                {[
                  "5 video modules (2+ hours)",
                  "20+ copy-paste prompts",
                  "Certificate of completion",
                  "Lifetime access & updates",
                  "14-day money-back guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* TODO: Replace with actual payment link (Stripe/Gumroad/Teachable) */}
              <a
                href="#"
                className="inline-block w-full max-w-sm px-8 py-4 rounded-lg font-bold text-lg bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
              >
                Enroll Now — $147
              </a>
            </div>

            <p className="text-slate-400 text-sm">
              Perfect for PD budgets. Invoice available upon request.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-cream dark:bg-navy">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl mb-12 text-center text-navy dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: "How long do I have access?",
                  a: "Lifetime. Once you enroll, you can access the course forever, including any future updates."
                },
                {
                  q: "Can I expense this through my school?",
                  a: "Absolutely. This is designed to fit PD budgets. I can provide an invoice for your school's records."
                },
                {
                  q: "What if I'm not technical?",
                  a: "Perfect. This course is designed for school leaders, not tech people. If you can use Google Docs, you can do this."
                },
                {
                  q: "How much time does it take?",
                  a: "Each module is 20-30 minutes. You can complete the whole course in a week doing one module per day, or binge it in an afternoon."
                },
                {
                  q: "What tools do I need?",
                  a: "Just a computer and internet. The AI tools we use (ChatGPT, Claude, NotebookLM) all have free tiers that work for everything in the course."
                },
                {
                  q: "What's your refund policy?",
                  a: "14-day money-back guarantee, no questions asked. If it's not for you, just email me and I'll refund you."
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

        {/* Final CTA */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl text-navy dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Book a free call and I'll help you decide if this course is right for you.
            </p>
            <Link
              href="/booking"
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 border-orange-600 dark:border-amber-500 text-orange-600 dark:text-amber-400 hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors"
            >
              Book a Free Call
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
              <Link href="/work-with-me" className="hover:text-white transition-colors">Services</Link>
              <Link href="/ai-toolkit" className="hover:text-white transition-colors">Free Toolkit</Link>
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

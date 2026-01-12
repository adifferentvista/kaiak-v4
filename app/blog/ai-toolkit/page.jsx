import Link from 'next/link';
import { Logo, Icons } from '../../components/Icons';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata = {
  title: "The School Leader's AI Toolkit: How I Saved 15 Hours a Week | KAIAK",
  description: "NotebookLM vs. Claude vs. ChatGPT for school leaders. Discover which AI tool to use for board reports, parent emails, policy lookup, and more — with exact prompts you can copy.",
  robots: {
    index: false,  // Don't index this page (landing page handles SEO)
    follow: true,
  },
  openGraph: {
    title: "The School Leader's AI Toolkit",
    description: "How I Saved 15 Hours a Week Using 4 Free Tools (With My Exact Prompts)",
  },
};

export default function AIToolkitPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-navy/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="KAIAK Home">
              <Logo />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Blog</Link>
              <Link href="/work-with-me" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium">Work With Me</Link>
              <ThemeToggle />
              <Link
                href="/booking"
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <header className="py-16 md:py-24">
          <p className="text-orange-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide mb-4">Free Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-white mb-6 leading-tight">
            The School Leader's AI Toolkit
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            How I Saved 15 Hours a Week Using 4 Free Tools<br />(With My Exact Prompts)
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            By <strong className="text-navy dark:text-white">Benedict Rinne</strong> • Former Head of School • IB World School Founder
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-16 p-6 rounded-xl bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-navy dark:text-white mb-4">Table of Contents</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#notebooklm" className="text-orange-600 dark:text-amber-400 hover:underline">1. Why NotebookLM? Plus Example Prompts</a></li>
            <li><a href="#claude" className="text-orange-600 dark:text-amber-400 hover:underline">2. Why Claude? Plus Example Prompts</a></li>
            <li><a href="#chatgpt" className="text-orange-600 dark:text-amber-400 hover:underline">3. Why ChatGPT? Plus Example Prompts</a></li>
            <li><a href="#gmail" className="text-orange-600 dark:text-amber-400 hover:underline">4. Gmail + AI: The Email System</a></li>
            <li><a href="#framework" className="text-orange-600 dark:text-amber-400 hover:underline">5. My Decision Framework</a></li>
          </ul>
        </nav>

        {/* Hook */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <p className="text-xl leading-relaxed">
            <strong>Are you still writing board reports from scratch, drowning in 200 daily emails, and hunting through folders to find that one policy document?</strong>
          </p>
          <p>
            Or worse — are you hearing about AI tools but have no idea which ones actually work for school leadership?
          </p>
          <p>
            I'm Benedict Rinne, and I've spent 20 years in education, 5 as Head of School, and the last 2 years building AI systems that saved me 15+ hours every week. As a former Head who founded an IB World School and now consults with international school leaders, these workflows power everything: from board reporting to parent communication to accreditation prep.
          </p>
          <p>
            In this guide, I'll share exactly what I've learned, which tools I use for different tasks, and the actual prompts you can copy and use today.
          </p>
        </section>

        {/* Quick Reference Table */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-navy dark:text-white mb-6">Quick Reference: Which Tool For What?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 pr-4 font-semibold text-navy dark:text-white">Tool</th>
                  <th className="text-left py-3 pr-4 font-semibold text-navy dark:text-white">Best For</th>
                  <th className="text-left py-3 font-semibold text-navy dark:text-white">Time Saved</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 pr-4 font-medium text-navy dark:text-white">NotebookLM</td>
                  <td className="py-4 pr-4">Querying policies, board prep, accreditation research. Your "second brain" that actually knows your school.</td>
                  <td className="py-4 text-green-600 dark:text-green-400 font-medium">5+ hrs/week</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 pr-4 font-medium text-navy dark:text-white">Claude</td>
                  <td className="py-4 pr-4">Writing parent comms, strategic thinking, complex decisions. Maintains your voice better than any other AI.</td>
                  <td className="py-4 text-green-600 dark:text-green-400 font-medium">4+ hrs/week</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 pr-4 font-medium text-navy dark:text-white">ChatGPT</td>
                  <td className="py-4 pr-4">Quick drafts, meeting summaries, brainstorming. The reliable workhorse for everyday tasks.</td>
                  <td className="py-4 text-green-600 dark:text-green-400 font-medium">3+ hrs/week</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-navy dark:text-white">Gmail + AI</td>
                  <td className="py-4 pr-4">Email triage, response templates, inbox management. The system that gets you to Inbox Zero by Friday.</td>
                  <td className="py-4 text-green-600 dark:text-green-400 font-medium">3+ hrs/week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Author Box */}
        <section className="mb-16 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-serif text-orange-600 dark:text-orange-400">BR</span>
            </div>
            <div>
              <h3 className="font-semibold text-navy dark:text-white mb-2">About Benedict Rinne</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                A former Head of School with 20 years in education, including founding an IB World School in Indonesia. Now helps international school leaders build AI systems and operational infrastructure through KAIAK, so they can stop drowning in admin and start leading again.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>✓ 20 years in education</span>
                <span>✓ 5 years as Head of School</span>
                <span>✓ IB World School founder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: NotebookLM */}
        <section id="notebooklm" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">1</span>
            <h2 className="font-serif text-3xl text-navy dark:text-white">Why NotebookLM?</h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              NotebookLM is Google's AI tool that changed everything for me. Unlike ChatGPT or Claude, <strong>NotebookLM doesn't make things up</strong> — it only answers from documents you upload. That's critical when you're dealing with policies, accreditation requirements, and board governance.
            </p>
            <p>
              I upload my entire policy library, handbooks, IB documentation, and board minutes. Then I can ask questions and get answers with direct citations. No hallucinations. No guessing. Just facts from my own documents.
            </p>
            <p>
              <strong>The game-changer?</strong> When board members ask about our assessment policy at 9 PM, I don't dig through folders. I ask NotebookLM.
            </p>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Board Meeting Prep', desc: 'Upload agenda, previous minutes, and policies. Get a summary of key decision points and policy implications in minutes, not hours.' },
              { title: 'Accreditation & Authorization', desc: 'Upload IB standards alongside your school documents. Identify gaps and draft responses instantly.' },
              { title: 'Policy Lookup', desc: '"What does our policy say about..." is now a 10-second answer instead of a 10-minute hunt.' },
              { title: 'New Staff Onboarding', desc: 'Create a notebook with all handbooks. New hires get accurate answers 24/7 without bothering senior staff.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-navy dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example Prompts */}
          <h3 className="font-serif text-xl text-navy dark:text-white mb-4">NotebookLM Example Prompts</h3>

          <div className="space-y-6 mb-8">
            {/* Prompt 1 */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Prompt 1: Board Report Research</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Setup: Upload your strategic plan, previous board reports, and current data</p>
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`Based on the uploaded documents, help me prepare for the January board meeting:

1. Summarize progress against our 3 strategic priorities since the last meeting
2. Identify any areas where we're behind target
3. Flag any policy decisions that need board approval
4. Suggest 3 key talking points for my Head's Report

Cite specific documents for each point.`}</pre>
              </div>
            </div>

            {/* Prompt 2 */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Prompt 2: Instant Policy Lookup</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Setup: Upload all school policies (handbook, HR, academic)</p>
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`A parent is asking about our policy on [specific issue].

1. What does our current policy state? Quote the relevant sections.
2. Which document is this from?
3. Are there any related policies I should also reference?`}</pre>
              </div>
            </div>

            {/* Prompt 3 */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Prompt 3: Accreditation Gap Analysis</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Setup: Upload IB standards AND your current school documents</p>
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`Compare our current Assessment Policy against the IB MYP requirements.

1. Where do we fully meet the standard?
2. Where are there gaps or areas for development?
3. What specific evidence would strengthen our position?
4. Suggest 3 action items to address the biggest gaps.`}</pre>
              </div>
            </div>
          </div>

          {/* What It Won't Do */}
          <div className="p-5 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ What NotebookLM WON'T Do</h4>
            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• Won't write content for you (use Claude for that)</li>
              <li>• Won't search the internet (only knows your uploaded documents)</li>
              <li>• Won't make decisions for you (it retrieves and summarizes)</li>
            </ul>
            <p className="text-sm text-red-700 dark:text-red-300 mt-3 font-medium">NotebookLM is a retrieval system, not a thinking partner.</p>
          </div>
        </section>

        {/* Section 2: Claude */}
        <section id="claude" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">2</span>
            <h2 className="font-serif text-3xl text-navy dark:text-white">Why Claude?</h2>
          </div>

          <blockquote className="border-l-4 border-orange-500 pl-4 my-6 text-xl text-slate-600 dark:text-slate-300 italic">
            "Claude is my daily driver for anything that requires nuance, voice, or strategic thinking."
          </blockquote>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              I've tested every major AI — ChatGPT, Gemini, Copilot — and Claude consistently produces the most thoughtful, nuanced output. More importantly, <strong>it maintains my voice better than any other tool</strong>.
            </p>
            <p>
              Why does voice matter? Because every email you send, every board report you write, every parent letter — it all represents you and your school. Generic AI-sounding content undermines trust.
            </p>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Parent Communications', desc: 'Every difficult parent email, every newsletter intro. Drafts responses that are empathetic, professional, and on-brand.' },
              { title: 'Board Reports', desc: 'Monthly reports that used to take 4+ hours now take 20 minutes. Give Claude your data points, get a polished narrative.' },
              { title: 'Strategic Thinking Partner', desc: 'When weighing big decisions — restructuring, new programs, personnel issues — Claude helps think through multiple angles.' },
              { title: 'Performance Reviews', desc: 'Turn observation notes into constructive, specific feedback that helps people grow.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-navy dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example Prompts */}
          <h3 className="font-serif text-xl text-navy dark:text-white mb-4">Claude Example Prompts</h3>

          <div className="space-y-6 mb-8">
            {/* Prompt 1 */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Prompt 1: Difficult Parent Email Response</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`I need to respond to a parent email. Here's the context:

**Parent's email:** [Paste the email]

**Background:** [Explain relevant context]

**My goals for this response:**
- Acknowledge their concern without being defensive
- Clarify any misunderstandings
- Reference our policy if relevant
- Propose a clear next step

**My communication style:** Professional but warm. I use "we" language. I never blame teachers directly in parent communications.

Draft a response I can edit and send.`}</pre>
              </div>
            </div>

            {/* Prompt 2 */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Prompt 2: Board Report Narrative</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`Help me write the Head's Report section of our monthly board report.

**Key data points:**
- Current enrollment: [X] (target: [Y])
- Staff turnover: [details]
- Key achievements this month: [list]
- Challenges/concerns: [list]

**Tone:** Professional, confident but honest about challenges.

**Structure:**
1. Opening summary (2-3 sentences)
2. Highlights and achievements
3. Areas of focus/challenges
4. Looking ahead

Draft the report. I'll edit for accuracy.`}</pre>
              </div>
            </div>

            {/* Prompt 3 */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Prompt 3: Strategic Decision Analysis</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`I'm weighing a significant decision and want to think it through clearly.

**The decision:** [Describe what you're considering]

**Options I'm considering:**
1. [Option A]
2. [Option B]
3. [Status quo]

Help me think through this:
1. What are the strongest arguments for each option?
2. What risks might I be underweighting?
3. What questions should I be asking that I haven't?
4. What would you recommend and why?

Be direct. I want honest analysis, not validation.`}</pre>
              </div>
            </div>
          </div>

          {/* What It Won't Do */}
          <div className="p-5 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ What Claude WON'T Do Well</h4>
            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• Won't search the internet (knowledge has a cutoff date)</li>
              <li>• Won't access your files directly (paste content in)</li>
              <li>• Won't handle high-volume tasks (usage limits)</li>
            </ul>
            <p className="text-sm text-red-700 dark:text-red-300 mt-3 font-medium">Claude is for quality, not quantity. Use it for high-stakes communication.</p>
          </div>
        </section>

        {/* Section 3: ChatGPT */}
        <section id="chatgpt" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">3</span>
            <h2 className="font-serif text-3xl text-navy dark:text-white">Why ChatGPT?</h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              ChatGPT is my reliable workhorse for everyday tasks. It's not the best at any single thing, but it's <strong>good at almost everything</strong> — and the generous usage limits mean I never worry about running out.
            </p>
            <p>
              I use ChatGPT for quick drafts, meeting summaries, brainstorming, and any task where speed matters more than nuance.
            </p>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Meeting Summaries', desc: 'Paste meeting notes, get a clean summary with action items in 30 seconds.' },
              { title: 'Quick First Drafts', desc: 'Job postings, permission slips, reminder emails — something to edit in seconds.' },
              { title: 'Explaining Complex Topics', desc: '"Explain our new assessment policy in parent-friendly language" — excellent at simplifying jargon.' },
              { title: 'Brainstorming', desc: 'Staff retreat activities, assembly themes, newsletter topics — 20 ideas fast.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-navy dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example Prompts */}
          <h3 className="font-serif text-xl text-navy dark:text-white mb-4">ChatGPT Example Prompts</h3>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Meeting Summary</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`Here are my rough notes from today's leadership meeting:

[Paste notes]

Create a clean summary with:
1. Key decisions made
2. Action items (with owner if mentioned)
3. Items for follow-up

Format so I can paste directly into an email.`}</pre>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-navy dark:text-white text-sm">Parent-Friendly Explanation</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900">
                <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-mono">{`I need to explain [concept] to parents who may not be familiar with educational terminology.

Write a 200-word explanation that:
- Uses everyday language (no jargon)
- Explains the "why" — how this benefits their child
- Anticipates their likely questions

Tone: Warm, clear, confident.`}</pre>
              </div>
            </div>
          </div>

          {/* What It Won't Do */}
          <div className="p-5 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ What ChatGPT WON'T Do Well</h4>
            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• Maintain your specific voice (Claude is better)</li>
              <li>• Give real-time information (makes up statistics confidently)</li>
              <li>• Deep strategic thinking (fine for brainstorming, not complex analysis)</li>
            </ul>
            <p className="text-sm text-red-700 dark:text-red-300 mt-3 font-medium">ChatGPT is for speed and volume. Use it for anything you need done fast.</p>
          </div>
        </section>

        {/* Section 4: Gmail */}
        <section id="gmail" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">4</span>
            <h2 className="font-serif text-3xl text-navy dark:text-white">Gmail + AI: The Email System</h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              Email is where school leaders lose the most time. I was spending 3+ hours daily just triaging my inbox. <strong>Now I hit Inbox Zero by Friday — every week.</strong>
            </p>
            <p>
              This isn't about a single tool. It's about a system combining Gmail's built-in features with AI-assisted drafting.
            </p>
          </div>

          {/* The System */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { title: '1. Filters & Labels', desc: '15+ Gmail filters that automatically label and sort. Most email never hits my main inbox.' },
              { title: '2. Templates', desc: 'For common responses — absence acknowledgments, meeting requests — one click, light edit, send.' },
              { title: '3. AI-Assisted Drafting', desc: 'Complex emails drafted in Claude, quick ones with Gmail\'s built-in Gemini.' },
              { title: '4. Batching', desc: 'Email 3x daily: morning, after lunch, end of day. No notifications. 3x faster than reactive.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-navy dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Friday Routine */}
          <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-8">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-4">🗓️ The Friday Inbox Zero Routine</h4>
            <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
              <li><strong>Process to Zero</strong> — Every email gets a response, delegation, or archive</li>
              <li><strong>Review "Read Later"</strong> — Decide what actually deserves reading</li>
              <li><strong>Clean Up Labels</strong> — Archive anything older than 2 weeks</li>
              <li><strong>Review Next Week</strong> — Flag any emails needing Monday action</li>
              <li><strong>Template Check</strong> — Did I repeat any response 3+ times? Create a template.</li>
            </ol>
            <p className="text-sm text-green-700 dark:text-green-300 mt-4">
              <strong>Time required:</strong> 30-45 minutes<br />
              <strong>Result:</strong> Start Monday with empty inbox and clear priorities
            </p>
          </div>
        </section>

        {/* Section 5: Decision Framework */}
        <section id="framework" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">5</span>
            <h2 className="font-serif text-3xl text-navy dark:text-white">My Decision Framework</h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>Before I open any AI tool, I ask myself one question: <strong>What kind of task is this?</strong></p>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 pr-4 font-semibold text-navy dark:text-white">If I need to...</th>
                  <th className="text-left py-3 font-semibold text-navy dark:text-white">I use...</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4">Find information in my own documents</td>
                  <td className="py-3 font-medium text-green-600 dark:text-green-400">NotebookLM</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4">Write something important that sounds like me</td>
                  <td className="py-3 font-medium text-purple-600 dark:text-purple-400">Claude</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4">Draft something quick that I'll edit anyway</td>
                  <td className="py-3 font-medium text-blue-600 dark:text-blue-400">ChatGPT</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4">Process or triage email</td>
                  <td className="py-3 font-medium text-amber-600 dark:text-amber-400">Gmail + templates</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Research current information</td>
                  <td className="py-3 font-medium text-slate-600 dark:text-slate-400">Perplexity or web search</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 10-Second Rule */}
          <div className="p-6 rounded-lg bg-navy dark:bg-slate-800 text-white mb-8">
            <h4 className="font-semibold text-amber-400 mb-4">⚡ The 10-Second Rule</h4>
            <ul className="space-y-3 text-slate-200">
              <li>If the task takes <strong>less than 10 seconds to explain</strong> → <strong>ChatGPT</strong></li>
              <li>If it requires <strong>context, nuance, or my voice</strong> → <strong>Claude</strong></li>
              <li>If I'm <strong>looking for something I already have</strong> → <strong>NotebookLM</strong></li>
            </ul>
          </div>

          {/* Quick Reference Card */}
          <div className="p-6 rounded-lg bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-500">
            <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-4">📋 Quick Reference Card (Save This)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-orange-200 dark:border-orange-800">
                    <th className="text-left py-2 pr-4 font-semibold text-navy dark:text-white">Situation</th>
                    <th className="text-left py-2 pr-4 font-semibold text-navy dark:text-white">Tool</th>
                    <th className="text-left py-2 font-semibold text-navy dark:text-white">Time Saved</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr className="border-b border-orange-100 dark:border-orange-900">
                    <td className="py-2 pr-4">"What does our policy say about..."</td>
                    <td className="py-2 pr-4">NotebookLM</td>
                    <td className="py-2">10 min → 10 sec</td>
                  </tr>
                  <tr className="border-b border-orange-100 dark:border-orange-900">
                    <td className="py-2 pr-4">"I need to write a parent email..."</td>
                    <td className="py-2 pr-4">Claude</td>
                    <td className="py-2">30 min → 5 min</td>
                  </tr>
                  <tr className="border-b border-orange-100 dark:border-orange-900">
                    <td className="py-2 pr-4">"Summarize this meeting..."</td>
                    <td className="py-2 pr-4">ChatGPT</td>
                    <td className="py-2">20 min → 2 min</td>
                  </tr>
                  <tr className="border-b border-orange-100 dark:border-orange-900">
                    <td className="py-2 pr-4">"I have 50 emails to process..."</td>
                    <td className="py-2 pr-4">Gmail filters</td>
                    <td className="py-2">2 hrs → 30 min</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">"Help me think through this decision..."</td>
                    <td className="py-2 pr-4">Claude</td>
                    <td className="py-2">Clearer thinking</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-orange-700 dark:text-orange-300 font-semibold mt-4 text-center">
              Total time saved: 15+ hours per week
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 p-8 rounded-2xl bg-navy dark:bg-slate-800 text-white text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Ready to Get Your Time Back?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            These workflows helped me go from 60-hour weeks to finishing most days by 5 PM. If you want help implementing these systems in your school, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 rounded-lg font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              href="/work-with-me"
              className="px-8 py-4 rounded-lg font-semibold border border-slate-500 text-slate-300 hover:bg-slate-700 transition-colors"
            >
              See How We Work Together
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Or email me directly: <a href="mailto:ben@kaiak.io" className="text-amber-400 hover:underline">ben@kaiak.io</a>
          </p>
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
              <Link href="/work-with-me" className="hover:text-white transition-colors">Work With Me</Link>
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

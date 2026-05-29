import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroBackdrop from '../components/HeroBackdrop';
import { Icons } from '../components/Icons';
import { PlayCircle, Globe, Zap, Sparkles, Users, Award, Clock, DollarSign, Languages, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'AI Course Production for Schools, HR, GTM & Training Teams | KAIAK',
  description: 'Done-for-you AI course production — interactive lessons, scoped AI tutor, multilingual delivery, SCORM-ready export. Built in a week. By a former Head of School with 20 years of course design experience.',
  alternates: { canonical: '/video' },
};

const currentYear = new Date().getFullYear();

// ─────────────────────────────────────────────────────────────
// Replace these placeholders after Stripe Payment Links + Calendly
// are configured and demo videos are uploaded (Day 2).
// ─────────────────────────────────────────────────────────────
const CALENDLY_URL = 'https://calendly.com/benrinne/video-agency-discovery';
const STRIPE_STARTER_URL = 'https://buy.stripe.com/PLACEHOLDER-STARTER-VIDEO';
const STRIPE_FIVE_PACK_URL = 'https://buy.stripe.com/PLACEHOLDER-FIVE-PACK';
const STRIPE_RETAINER_URL = 'https://buy.stripe.com/PLACEHOLDER-RETAINER';

// Demo video URLs (produced on Day 2; can be Mux signed URLs or direct MP4 paths)
const HERO_AVATAR_VIDEO = '/videos/video-agency/hero-intro.mp4';
const DEMO_COURSE_PREVIEW = '/videos/video-agency/demo-course-preview.mp4';
const DEMO_SCHOOL_MARKETING = '/videos/video-agency/demo-school-marketing-en.mp4';
const DEMO_TRAINER_INTRO = '/videos/video-agency/demo-trainer-intro.mp4';

// Poster (thumbnail) images shown before each video plays
const POSTER_HERO = '/videos/video-agency/thumbnails/hero-intro.png';
const POSTER_COURSE_PREVIEW = '/videos/video-agency/thumbnails/course-preview.png';
const POSTER_SCHOOL_MARKETING = '/videos/video-agency/thumbnails/school-marketing.png';
const POSTER_TRAINER_INTRO = '/videos/video-agency/thumbnails/trainer-intro.png';

export default function VideoAgencyPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy">
      <Navbar />
      <div className="h-[73px]" />

      <main>
        {/* Hero with autoplay avatar video */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-cream dark:bg-navy">
          <HeroBackdrop />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="font-medium text-sm tracking-wide uppercase mb-4 text-amber-600 dark:text-amber-400">
                  AI Course Production for Schools, HR, Sales Enablement & Training Teams
                </p>
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-navy dark:text-white leading-tight">
                  Premium AI-driven courses.<br />Built in a week.<br />Without a learning design team.
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Interactive lessons. Scoped AI tutor. Multilingual delivery. SCORM-ready export. Built by a former Head of School with 20 years of designing learner experiences that actually work.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#demos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy hover:bg-navy-light dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-navy font-medium transition-all"
                  >
                    <PlayCircle className="w-5 h-5" /> See Sample Videos
                  </Link>
                  <Link
                    href={CALENDLY_URL}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-navy/30 dark:border-white/30 text-navy dark:text-white hover:bg-navy/5 dark:hover:bg-white/5 font-medium transition-all"
                  >
                    Book a 15-Min Discovery Call
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 aspect-video shadow-xl">
                <video
                  src={HERO_AVATAR_VIDEO}
                  poster={POSTER_HERO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                  aria-label="Benedict Rinne's AI avatar introduces the video agency service"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sample lessons from different course types */}
        <section id="demos" className="py-16 md:py-20 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="font-medium text-sm tracking-wide uppercase mb-3 text-amber-600 dark:text-amber-400">
                Sample Lessons · From Different Course Types
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-3 text-navy dark:text-white">
                What we build for different teams
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Each clip below is one lesson from a full course we would build for you — complete with interactive elements, AI tutor, downloadable resources, and SCORM-ready export. The avatar speaker is interchangeable: your face, your instructor, or any stock avatar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  src: DEMO_COURSE_PREVIEW,
                  poster: POSTER_COURSE_PREVIEW,
                  label: 'Education / Schools',
                  desc: 'One lesson from a 10-module academic program — enrolment funnel, course intro, parent-facing program overview. Full version includes quizzes, downloadable syllabus, and tour-booking interactivity.',
                  duration: '75 sec',
                },
                {
                  src: DEMO_SCHOOL_MARKETING,
                  poster: POSTER_SCHOOL_MARKETING,
                  label: 'HR / People Operations',
                  desc: 'One lesson from a new-hire onboarding course — values, expectations, first-week guidance. Full version includes role-specific branches, mid-lesson quizzes, and SCORM completion tracking.',
                  duration: '60 sec',
                },
                {
                  src: DEMO_TRAINER_INTRO,
                  poster: POSTER_TRAINER_INTRO,
                  label: 'GTM / Sales Enablement',
                  desc: 'One lesson from a product walkthrough or sales onboarding course. Full version includes scoped AI tutor for product questions, customer-context branching, and per-rep completion analytics.',
                  duration: '90 sec',
                },
              ].map((demo, i) => (
                <div key={i} className="flex flex-col">
                  <div className="rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 aspect-video shadow-md mb-4">
                    <video
                      src={demo.src}
                      poster={demo.poster}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                      aria-label={`Sample video: ${demo.label}`}
                    />
                  </div>
                  <p className="font-medium text-amber-600 dark:text-amber-400 text-sm mb-1">{demo.label} · {demo.duration}</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{demo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The math behind 48-hour delivery — why this changes course/training production */}
        <section className="py-16 md:py-20 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="font-medium text-sm tracking-wide uppercase mb-3 text-amber-600 dark:text-amber-400">
                Why this changes the math
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-3 text-navy dark:text-white">
                Course production used to take weeks. We ship in 48 hours.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                The same script that takes a film crew three weeks and a five-figure budget — produced, captioned, and delivered tomorrow.
              </p>
            </div>

            {/* Side-by-side comparison */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Old way */}
              <div className="rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-4">The old way</p>
                <h3 className="font-serif text-2xl mb-6 text-navy dark:text-white">Traditional video crew</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">3–6 weeks</strong> from brief to delivery (booking + filming + edit)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">$3,000–$8,000</strong> per polished 60–90 sec video (corporate average)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Languages className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">Re-shoot per language</strong> — costs scale linearly with each market</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">Stale fast</strong> — every curriculum, pricing, or message change means a new shoot</span>
                  </li>
                </ul>
              </div>

              {/* New way */}
              <div className="rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-800 border-2 border-amber-500 relative">
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-amber-500 text-navy text-xs font-bold">
                  KAIAK Video
                </span>
                <p className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-4">The new math</p>
                <h3 className="font-serif text-2xl mb-6 text-navy dark:text-white">AI video production</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">48 hours</strong> from script approval to MP4 in your inbox</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">$497</strong> per video — script writing, production, captions, 2 revisions included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Languages className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">6 languages</strong> from one script — same speaker, same brand voice, native delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-navy dark:text-white">Refresh on demand</strong> — update a price, a date, a name — same avatar re-renders in hours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* For course creators callout */}
            <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 border border-amber-200/50 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <Award className="w-10 h-10 text-amber-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">For course creators specifically</p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    Industry benchmarks put traditional course production at <strong className="text-navy dark:text-white">50–100 hours per finished hour of video</strong> — script + storyboard + filming + edit + revisions. Our process averages <strong className="text-navy dark:text-white">8–12 hours per finished hour</strong>. That's the difference between a course shipping next quarter and a course shipping next week.
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mt-3">
                    A 10-lesson micro-course at traditional rates costs <strong className="text-navy dark:text-white">$30,000–$80,000</strong>. The same course, produced through this pipeline: <strong className="text-navy dark:text-white">$2,500–$5,000</strong> with bilingual delivery. If you're a trainer, an academy, or a course business — that gap is the difference between profitable and not.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why former Head of School */}
        <section className="py-16 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-navy dark:text-white">
              Why a former Head of School makes this different
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Most AI-video services give you generic explainer videos. The scripts read like marketing fluff. The pacing assumes the viewer is a B2B SaaS prospect, not a parent, a student, or an L&D buyer.
              </p>
              <p>
                I write your video script first — and I have spent 20 years inside international education, founded an IB World School, and trained admissions teams across SEA. I know what parents want to hear at a prospect tour. I know what your board wants to see in a programme brief. I know how to frame an instructor introduction for corporate L&D buyers.
              </p>
              <p>
                The avatar then delivers it cleanly, in any of six languages. Yours, by the end of business tomorrow.
              </p>
            </div>
            <div className="mt-8 flex items-start gap-4 p-5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <Users className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div className="text-sm text-slate-700 dark:text-slate-300">
                <p className="font-medium text-navy dark:text-white mb-1">Benedict Rinne, M.Ed.</p>
                <p>Former Head of School · Founded an IB World School · 20 years in international education · 1,000+ educators trained · Member of admissions and accreditation committees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent production work — UGC + course/training case studies */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="font-medium text-sm tracking-wide uppercase mb-3 text-amber-600 dark:text-amber-400">
                Recent Production
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-3 text-navy dark:text-white">
                Course, training, and UGC-style production for real businesses
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A selection of recent client work. Some logos and identifying details are blurred for confidentiality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Case study 1: LSAF (anonymized as ACCA Learning Partner) */}
              <div className="rounded-2xl overflow-hidden bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                    <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                      Course screen recording — coming soon
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">
                    ACCA-Approved Learning Partner (Asia)
                  </p>
                  <h3 className="font-serif text-xl mb-3 text-navy dark:text-white">
                    Full Financial Accounting course production
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                    Built a 12-chapter Financial Accounting course end-to-end — script writing, avatar narration, bilingual delivery (English + Bahasa), inline quizzes, and chapter-completion checkpoints. Same workflow available for any training, certification, or onboarding programme.
                  </p>
                </div>
              </div>

              {/* Case study 2: KAIAK Academy / first-party */}
              <div className="rounded-2xl overflow-hidden bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                    <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                      Sample course module — coming soon
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">
                    KAIAK Academy
                  </p>
                  <h3 className="font-serif text-xl mb-3 text-navy dark:text-white">
                    44-course catalogue in production
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                    Internal course-creation pipeline producing structured 5-lesson micro-courses with avatar instruction, screen recordings, downloadable assets, and quiz-based progression. The same pipeline ships for clients building their own internal academies.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8">
              Want to see a full lesson sample under NDA? Mention it in your discovery call.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-24 text-white bg-navy dark:bg-navy-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="font-medium text-sm tracking-wide uppercase mb-4 text-amber-400">Pricing</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Fixed prices. No surprises.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Every package includes script writing, avatar selection, voice direction, captions, and 2 revision rounds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="rounded-2xl p-6 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50">
                <Zap className="w-8 h-8 mb-4 text-amber-400" />
                <h3 className="font-serif text-xl mb-1">Starter Video</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">One video. 48-hour turnaround.</p>
                <p className="text-slate-400 text-xs mb-4">Best for: a single video to test the format</p>
                <ul className="text-slate-300 text-sm space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> 60-90 sec video, single language</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Stock or supplied AI avatar</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Professional script (yours or written for you)</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> 2 revision rounds included</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> 1080p MP4 + captions</li>
                </ul>
                <div className="mt-auto">
                  <p className="font-serif text-3xl mb-3">$497 <span className="text-base text-slate-400">USD</span></p>
                  <Link
                    href={STRIPE_STARTER_URL}
                    className="block w-full text-center px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-navy font-medium transition-all"
                  >
                    Order a Starter Video
                  </Link>
                </div>
              </div>

              {/* Five-Pack */}
              <div className="rounded-2xl p-6 flex flex-col bg-navy-light dark:bg-slate-800 border-2 border-amber-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/20 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-500 text-navy text-xs font-bold">
                  Most popular
                </span>
                <Globe className="w-8 h-8 mb-4 text-amber-400" />
                <h3 className="font-serif text-xl mb-1">Five-Pack</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">Five videos OR one in 5 languages.</p>
                <p className="text-slate-400 text-xs mb-4">Best for: a training series or full multilingual rollout</p>
                <ul className="text-slate-300 text-sm space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Everything in Starter ×5</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Pick: 5 different videos OR same video in 5 languages</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Supported languages: EN / Bahasa / Mandarin / Japanese / Korean / Arabic</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Delivered in 5 business days</li>
                </ul>
                <div className="mt-auto">
                  <p className="font-serif text-3xl mb-3">$1,497 <span className="text-base text-slate-400">USD</span></p>
                  <Link
                    href={STRIPE_FIVE_PACK_URL}
                    className="block w-full text-center px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-navy font-medium transition-all"
                  >
                    Order a Five-Pack
                  </Link>
                </div>
              </div>

              {/* Retainer */}
              <div className="rounded-2xl p-6 flex flex-col bg-navy-light dark:bg-slate-800 border border-navy-border dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50">
                <Sparkles className="w-8 h-8 mb-4 text-amber-400" />
                <h3 className="font-serif text-xl mb-1">Education Retainer</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">8 videos/month. Brand voice owned.</p>
                <p className="text-slate-400 text-xs mb-4">Best for: ongoing content engine for a school or training company</p>
                <ul className="text-slate-300 text-sm space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> 8 videos per month</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Brand-voice library (we learn your voice)</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Monthly strategy call</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Priority turnaround (24h on standard videos)</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">✓</span> Cancel anytime, no contract lock-in</li>
                </ul>
                <div className="mt-auto">
                  <p className="font-serif text-3xl mb-3">$2,500 <span className="text-base text-slate-400">/mo USD</span></p>
                  <Link
                    href={STRIPE_RETAINER_URL}
                    className="block w-full text-center px-4 py-2 rounded-lg border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-navy font-medium transition-all"
                  >
                    Start the Retainer
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8">
              Add-ons: custom HeyGen avatar of your instructor +$300 · embedded SRT/VTT captions +$50 · aspect-ratio variants (9:16 + 1:1) +$100 per video
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-cream dark:bg-navy border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-navy dark:text-white text-center">
              How it works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  num: '1',
                  title: 'Brief',
                  body: 'You send your brief (or just an idea). One form, 5 minutes. We confirm scope.',
                },
                {
                  num: '2',
                  title: 'Script approval',
                  body: 'I write the script in your voice for your audience. You approve before production.',
                },
                {
                  num: '3',
                  title: 'Production',
                  body: 'Avatar selection, voice direction, captions, multilingual versions (if applicable).',
                },
                {
                  num: '4',
                  title: 'Delivery',
                  body: '48 hours from script approval. 2 revision rounds included. Final files: MP4 1080p + captions.',
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-navy flex items-center justify-center font-serif text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-serif text-xl mb-2 text-navy dark:text-white">{step.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white dark:bg-navy-light border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-10 text-navy dark:text-white">
              Frequently asked
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How fast is "48-hour turnaround" really?',
                  a: 'From script approval to delivery: 48 hours. The brief-to-script step takes us 24 hours separately. So if you send the brief Monday morning, you have an approved script Tuesday morning and finished video by Thursday morning. Faster turnaround is possible for retainer clients.',
                },
                {
                  q: 'Which languages are supported?',
                  a: 'English, Bahasa Indonesia, Mandarin, Japanese, Korean, and Arabic at production-grade quality. Other languages (Vietnamese, Thai, Tagalog) on request — we may need to test the voice quality first.',
                },
                {
                  q: 'Whose avatar appears in my video — yours, mine, or stock?',
                  a: 'Your choice. Most clients use a stock HeyGen avatar that matches the audience (we have ~200 to pick from). Premium clients (+$300) train a custom avatar of their own instructor or brand spokesperson. Some use my avatar with permission as a "guest expert" voice.',
                },
                {
                  q: 'Who writes the script?',
                  a: 'I do, in your brand voice, using your inputs. Or you supply the script and I produce. Either way, you approve the script before production starts — no surprises.',
                },
                {
                  q: 'What if I want changes after delivery?',
                  a: '2 revision rounds are included in every package. Additional revisions are $100 each. Most clients use 0-1 revisions because the script-approval step catches misunderstandings before production.',
                },
                {
                  q: 'Refund policy?',
                  a: 'Full refund if no script is approved within 5 business days of the brief (i.e. we couldn\'t get to a script you\'re happy with). Once production starts, refunds aren\'t possible because the avatar render costs are real. We make this very clear up front.',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-5 bg-cream dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <p className="font-serif text-lg mb-2 text-navy dark:text-white">{item.q}</p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy dark:bg-navy-dark text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ship a video by the end of this week.
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Book a 15-minute discovery call to confirm fit, or order a Starter Video directly. Brief in by tomorrow morning, video in your inbox 48 hours later.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={CALENDLY_URL}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-navy font-medium transition-all"
              >
                Book a 15-Min Discovery Call
              </Link>
              <Link
                href={STRIPE_STARTER_URL}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/5 font-medium transition-all"
              >
                Order Direct ($497)
              </Link>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Or email me directly: <a href="mailto:ben@kaiak.io" className="text-amber-400 hover:underline">ben@kaiak.io</a>
            </p>
          </div>
        </section>
      </main>

      {/* ========== FOOTER (matches main kaiak.io site) ========== */}
      <footer className="py-12 bg-navy-dark text-slate-400">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <p className="font-serif text-xl text-white mb-2">KAIAK</p>
              <p className="text-sm">AI systems for leaders</p>
            </div>

            {/* Links */}
            <div>
              <p className="text-white font-medium mb-4">Quick Links</p>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Link href="/work-with-me" className="hover:text-white transition-colors">Services</Link>
                <Link href="/#about" className="hover:text-white transition-colors">About</Link>
                <Link href="/ai-toolkit" className="hover:text-white transition-colors">Free AI Toolkit</Link>
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

            {/* Newsletter */}
            <div>
              <p className="text-white font-medium mb-4">Stay in the Loop</p>
              <p className="text-sm mb-4">Weekly AI tips for leaders. No spam.</p>
              <form
                action="https://app.convertkit.com/forms/8895661/subscriptions"
                method="post"
                className="space-y-3"
              >
                <input
                  type="text"
                  name="fields[first_name]"
                  placeholder="First name"
                  className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email address"
                  required
                  className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 text-sm border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>&copy; {currentYear} KAIAK. Less admin. More impact.</p>
            <div className="flex gap-6 text-slate-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/disclosure" className="hover:text-white transition-colors">Disclosure</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

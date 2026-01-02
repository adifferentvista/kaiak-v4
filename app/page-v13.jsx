import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import ExitIntentPopup from './components/ExitIntentPopup';
import NewsletterForm from './components/NewsletterForm';
import { getFeaturedPosts, pillarLabels } from '@/lib/posts';
import { 
  ArrowRight, 
  Check, 
  Clock, 
  AlertCircle, 
  Layers,
  Search,
  Compass,
  Rocket,
  ChevronRight,
  Mail,
  FileText,
  Calendar,
  Shield,
  Inbox,
  BarChart3,
  Quote
} from 'lucide-react';

// ============================================
// KAIAK HOMEPAGE v5.1
// AI Advantage structure + Lucide icons
// Cream/navy palette, no hero photo
// ============================================

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="font-sans antialiased bg-cream dark:bg-navy text-slate-800 dark:text-slate-200">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-navy focus:rounded shadow-lg"
      >
        Skip to main content
      </a>

      <ExitIntentPopup />
      <Navbar />

      <main id="main-content">
        
        {/* ========== 1. HERO (Text + Illustration) ========== */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cream dark:bg-navy">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                  For International School Leaders
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-navy dark:text-white">
                  Simplify, Streamline, and Scale Your School Leadership.
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
                  Discover how AI-powered systems can save you 10+ hours a week. Stop being the bottleneck and get back to what matters: leading your school.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/booking" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-orange-600 hover:bg-orange-500 dark:bg-amber-500 dark:text-navy dark:hover:bg-amber-400 transition-colors"
                  >
                    Book Your Free Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-6">
                  Trusted by school leaders across Asia, Middle East, and beyond.
                </p>
              </div>

              {/* Right: Illustration/Graphic */}
              <div className="hidden md:block">
                <div className="relative backdrop-blur-md bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl">
                  {/* Dashboard mockup */}
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-6 mb-6">
                    <div>
                      <div className="font-sans font-semibold text-navy dark:text-white">Weekly Admin Dashboard</div>
                      <div className="text-sm text-slate-500">System Status: Optimized</div>
                    </div>
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-cream dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="text-2xl font-bold text-navy dark:text-white">10h+</div>
                      <div className="text-xs uppercase text-slate-500 font-medium">Time Saved</div>
                    </div>
                    <div className="bg-cream dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="text-2xl font-bold text-orange-600 dark:text-amber-400">0</div>
                      <div className="text-xs uppercase text-slate-500 font-medium">Inbox Backlog</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Board Report Draft (Auto-generated)",
                      "Parent Weekly Update (Scheduled)",
                      "Staff Absence Log (Synced)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 2. PAIN POINTS (3 Icons) ========== */}
        <section className="py-20 md:py-24 bg-white dark:bg-navy-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-navy dark:text-white">
                Are You Drowning in Admin?
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                You became a Head of School to make an impact — not to spend every evening on compliance paperwork.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { 
                  icon: AlertCircle, 
                  title: "You're the Bottleneck", 
                  text: "Every decision flows through you. Today's plan becomes tomorrow's backlog." 
                },
                { 
                  icon: Clock, 
                  title: "60+ Hour Weeks", 
                  text: "Most of it on admin tasks, leaving zero time for strategic leadership." 
                },
                { 
                  icon: Layers, 
                  title: "Systems in Your Head", 
                  text: "If you step away, the school stops. Nothing is documented or delegated." 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-serif text-xl text-navy dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Sound familiar? <span className="text-navy dark:text-white font-medium">There&apos;s a better way.</span>
              </p>
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border-2 border-orange-600 dark:border-amber-500 text-orange-600 dark:text-amber-400 hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ========== 3. SIGNATURE OFFER (Split Layout) ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Description */}
              <div>
                <div className="text-orange-600 dark:text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">
                  Our Signature Program
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mb-6">
                  Break Free From Admin Overwhelm in 6 Weeks
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  You&apos;ve built your school from the ground up, but running it shouldn&apos;t feel this hard. Streamline your leadership with a personalized approach to AI and automation.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    { 
                      icon: Inbox,
                      title: "Automate Routine Tasks", 
                      desc: "Email triage, reporting, and scheduling handled in minutes, not hours." 
                    },
                    { 
                      icon: FileText,
                      title: "Build Your Second Brain", 
                      desc: "NotebookLM-powered knowledge base for instant policy and document retrieval." 
                    },
                    { 
                      icon: BarChart3,
                      title: "Reports That Write Themselves", 
                      desc: "Board reports, parent updates, and compliance docs in a fraction of the time." 
                    }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                        <feat.icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-navy dark:text-white">{feat.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/work-with-me" 
                  className="inline-flex items-center gap-2 text-orange-600 dark:text-amber-400 font-medium hover:underline"
                >
                  View Program Details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Pricing Card */}
              <div className="bg-navy dark:bg-slate-800 text-white p-8 rounded-2xl relative">
                <div className="absolute -top-3 left-6 bg-amber-500 text-navy text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-center py-8 border-b border-navy-light dark:border-slate-700">
                  <div className="text-slate-400 text-sm uppercase font-medium mb-2">6-Week Program</div>
                  <h3 className="font-serif text-2xl mb-2">AI Systems Implementation</h3>
                  <p className="text-slate-400 text-sm">Done-with-you consulting</p>
                </div>
                <div className="py-8 space-y-4">
                  {[
                    { icon: Calendar, text: "6 weekly strategy calls" },
                    { icon: FileText, text: "Full second brain setup" },
                    { icon: Inbox, text: "Email & reporting automation" },
                    { icon: Mail, text: "30 days email support" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <item.icon className="w-5 h-5 text-amber-400" />
                      {item.text}
                    </div>
                  ))}
                </div>
                <Link 
                  href="/booking"
                  className="block w-full py-3 text-center bg-amber-500 hover:bg-amber-400 text-navy font-bold rounded-lg transition-colors"
                >
                  Book a Free Consultation
                </Link>
                <p className="text-center text-slate-500 text-xs mt-4">
                  No obligation. Let&apos;s see if it&apos;s a fit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 4. PROCESS (Discover → Design → Deliver) ========== */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-orange-600 dark:text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">
                How We Work Together
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mb-4">
                Simple Process, Lasting Results
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Tailored 1:1 guidance to save you time, simplify workflows, and give you back your weekends.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  step: "01", 
                  title: "Discover",
                  icon: Search,
                  desc: "Every school is unique. We start by understanding your context, identifying bottlenecks, and mapping where your time actually goes." 
                },
                { 
                  step: "02", 
                  title: "Design",
                  icon: Compass,
                  desc: "Because your leadership style is one of a kind, your systems should be too. We create AI-powered workflows that fit your routine." 
                },
                { 
                  step: "03", 
                  title: "Deliver",
                  icon: Rocket,
                  desc: "We're with you every step. Hands-on support as you implement, with 30 days of aftercare to ensure lasting success." 
                }
              ].map((item) => (
                <div key={item.step} className="bg-cream dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-4xl font-serif text-orange-200 dark:text-slate-700">{item.step}</span>
                  </div>
                  <h3 className="font-serif text-xl text-navy dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-navy dark:bg-amber-500 dark:text-navy hover:bg-navy-light dark:hover:bg-amber-400 transition-colors"
              >
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========== 5. TESTIMONIALS ========== */}
        <section className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mb-4">
                What Others Are Saying
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Real results from real school leaders.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "The parent handbook that would have taken 3 weeks was done in 3 days. And it was better than anything I could have written alone.",
                  author: "IB School Principal",
                  location: "Southeast Asia",
                  metric: "90% TIME SAVED"
                },
                {
                  quote: "Board reports used to take 4+ hours every month. Now I have a template system that gets me to a draft in 30 minutes.",
                  author: "International School Head",
                  location: "Middle East",
                  metric: "4 HRS → 30 MIN"
                },
                {
                  quote: "During our IB authorization visit, I could find every policy document in seconds. The visiting team was impressed.",
                  author: "Founding Principal",
                  location: "Asia Pacific",
                  metric: "IB AUTHORIZED"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                  <Quote className="w-8 h-8 text-orange-200 dark:text-slate-700 mb-4" />
                  <div className="text-xs font-bold text-orange-600 dark:text-amber-400 mb-4">
                    {testimonial.metric}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-navy dark:text-white text-sm">{testimonial.author}</p>
                    <p className="text-slate-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-500 dark:text-slate-500 text-sm">
                1,000+ educators trained • DNA Masterclass 2025 speaker • 50+ schools reached
              </p>
            </div>
          </div>
        </section>

        {/* ========== 6. QUICK WINS (Secondary Offers) ========== */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-12">
              <div className="text-orange-600 dark:text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">
                More Ways to Work Together
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mb-4">
                Quick Win Solutions
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Not ready for a full engagement? Start with focused, fast-track support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Inbox,
                  title: "Quick Win Sprint", 
                  time: "1 Week",
                  desc: "One workflow automated. Immediate time savings with focused implementation." 
                },
                { 
                  icon: FileText,
                  title: "School Ops Accelerator", 
                  time: "4-8 Weeks",
                  desc: "Handbooks, policies, and reporting systems built fast for new Heads." 
                },
                { 
                  icon: Calendar,
                  title: "Strategy Session", 
                  time: "90 Minutes",
                  desc: "Map out your school's AI roadmap with an expert who's been in your shoes." 
                }
              ].map((offer, i) => (
                <div key={i} className="p-8 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-orange-300 dark:hover:border-orange-600 transition-colors bg-cream dark:bg-slate-800 group">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:border-orange-300 dark:group-hover:border-orange-600 transition-colors">
                    <offer.icon className="w-6 h-6 text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
                  </div>
                  <div className="text-xs font-bold text-orange-600 dark:text-amber-400 mb-2">{offer.time}</div>
                  <h3 className="font-serif text-xl text-navy dark:text-white mb-2">{offer.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{offer.desc}</p>
                  <Link href="/work-with-me" className="inline-flex items-center gap-1 text-orange-600 dark:text-amber-400 text-sm font-medium hover:underline">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 7. TOOL STACK (Logo Grid) ========== */}
        <section className="py-16 bg-slate-50 dark:bg-navy border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-slate-500 dark:text-slate-500 text-sm font-medium uppercase tracking-widest mb-8">
              We Optimize the Tools You Already Use
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Google Workspace */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">Google Workspace</h3>
                <p className="text-slate-500 text-xs">Your school&apos;s command center</p>
              </div>

              {/* NotebookLM */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <rect x="4" y="2" width="16" height="20" rx="2" className="stroke-[#EA4335]" strokeWidth="1.5" fill="none"/>
                    <path d="M8 6h8M8 10h8M8 14h5" className="stroke-[#4285F4]" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="17" cy="17" r="4" className="fill-[#34A853]"/>
                    <path d="M15.5 17l1 1 2-2" className="stroke-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">NotebookLM</h3>
                <p className="text-slate-500 text-xs">AI-powered research assistant</p>
              </div>

              {/* ChatGPT */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#10A37F"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">ChatGPT</h3>
                <p className="text-slate-500 text-xs">AI drafting &amp; brainstorming</p>
              </div>

              {/* Claude */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H8.08l-.2-.048-3.17 1.027v2.026zm8.838-5.263l.49.058 5.405-3.202v-.869l-.792-.121-5.2 3.98.097.154zm-6.064 7.156l3.498-2.584.008-.134-.095-.178h-.503l-.166-.014-2.836 1.063.095 1.847zm8.282-4.093l.14.2.347-.005 4.84-3.931v-1.37l-5.327 5.106zm-5.4 6.09l2.218-2.279-.03-.178-.18-.148-.357.014-.163-.044-1.592.823.104 1.813zm5.51-2.787l.18.207.3.03 3.737-4.503v-1.074l-4.216 5.34zm-2.543 4.103l.924-1.783-.082-.22-.252-.112-.27.06-.152-.03-.396.545.228 1.54zm3.148-1.236l.196.17.27.03 2.252-4.341-.07-.511-2.648 4.652zm.566 2.212l-.238-1.238-.157-.186-.294-.044-.17.11-.14-.01.202.891.237.281.298.148.262.048zm.532-2.66l2.648-4.652-.42-1.484-2.647 4.652.419 1.485zM7.565 8.478L12 5.607l.098-.199-.139-.188-.488.005-4.156 3.008.25.245zm6.267-3.06l.152.187.406.024 4.523-2.85-.25-.245-4.533 2.644-.298.24zm-8.397 4.95l4.838-3.132.056-.174-.151-.176-.502-.014-4.49 3.198.249.297zm8.72-3.371l.148.17.43.01 4.186-3.167-.249-.298-4.218 3.044-.297.24zM3.973 12.553l4.948-3.096.032-.147-.154-.188-.512-.028-4.563 3.134.249.325zm9.005-3.277l.148.16.46-.005 3.806-3.212-.25-.325-3.866 3.141-.298.241z" fill="#D4A27F"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">Claude</h3>
                <p className="text-slate-500 text-xs">Long-form writing &amp; analysis</p>
              </div>

              {/* Google Drive */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M7.71 3.5L1.15 15l2.43 4.19L10.14 7.69 7.71 3.5z" fill="#0066DA"/>
                    <path d="M22.85 15L16.29 3.5H9.14l6.57 11.5h7.14z" fill="#00AC47"/>
                    <path d="M8.14 19.19L10.57 15H1.15l2.43 4.19h4.56z" fill="#EA4335"/>
                    <path d="M15.71 15l2.43 4.19h4.57L20.29 15h-4.58z" fill="#00832D"/>
                    <path d="M15.71 15H8.57l-2.43 4.19h12l-2.43-4.19z" fill="#2684FC"/>
                    <path d="M10.14 7.69L7.71 11.88 10.14 15h5.57l2.43-3.12-2.43-4.19h-5.57z" fill="#FFBA00"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">Google Drive</h3>
                <p className="text-slate-500 text-xs">Organized, searchable files</p>
              </div>

              {/* Gmail */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">Gmail</h3>
                <p className="text-slate-500 text-xs">Inbox zero, automated</p>
              </div>

              {/* Google Docs */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.637h7.09v1.637zm2.727-3.273H7.091v-1.636h9.818v1.636zm0-3.273H7.091V9h9.818v1.636zm-2.182-3.272V.545l6.182 6.182h-5.455c-.402 0-.727-.326-.727-.727z" fill="#4285F4"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">Google Docs</h3>
                <p className="text-slate-500 text-xs">AI-assisted writing</p>
              </div>

              {/* Google Sheets */}
              <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zM9.818 19.09H6.545v-2.18h3.273v2.18zm0-3.817H6.545v-2.182h3.273v2.182zm0-3.819H6.545V9.273h3.273v2.181zm7.091 7.636h-5.454v-2.18h5.454v2.18zm0-3.817h-5.454v-2.182h5.454v2.182zm0-3.819h-5.454V9.273h5.454v2.181zm-2.182-4.09V.545l6.182 6.182h-5.455c-.402 0-.727-.326-.727-.727z" fill="#0F9D58"/>
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-navy dark:text-white text-sm mb-1">Google Sheets</h3>
                <p className="text-slate-500 text-xs">Automated reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 8. ABOUT SLICE (Small Photo + Stats) ========== */}
        <section id="about" className="py-20 md:py-28 bg-cream dark:bg-navy">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Photo + Stats */}
              <div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src="/benedict.png"
                        alt="Benedict Rinne, M.Ed."
                        fill
                        className="rounded-full object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-navy dark:text-white">Benedict Rinne, M.Ed.</p>
                      <p className="text-slate-500 text-sm">Founder, KAIAK</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "20", label: "Years in Education" },
                      { value: "10", label: "Years International" },
                      { value: "5", label: "Years as Head" },
                      { value: "1,000+", label: "Educators Trained" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-cream dark:bg-slate-900 rounded-lg">
                        <div className="text-2xl font-bold text-navy dark:text-white">{stat.value}</div>
                        <div className="text-xs text-slate-500 uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Story */}
              <div>
                <div className="text-orange-600 dark:text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">
                  About KAIAK
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mb-6">
                  I Built These Systems Because I Was Drowning.
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    When I founded and led an IB World School in Indonesia, I faced 500+ emails a week with a lean team. Authorization deadlines. Board expectations. Parent concerns. All landing on my desk.
                  </p>
                  <p>
                    I realized that if I didn&apos;t systematize the &ldquo;noise,&rdquo; I&apos;d never have time for what actually mattered: the students, the teachers, the vision.
                  </p>
                  <p>
                    <strong className="text-navy dark:text-white">So I built AI-powered systems to survive.</strong> Now I help other school leaders do the same — without the two years of trial and error.
                  </p>
                </div>
                <Link 
                  href="/booking" 
                  className="inline-flex items-center gap-2 mt-8 text-orange-600 dark:text-amber-400 font-medium hover:underline"
                >
                  Let&apos;s Talk <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 9. FAQ ACCORDION ========== */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Who do you work with?",
                  a: "International school leaders — Heads of School, Principals, Directors — who use Google Workspace and want to reduce admin overwhelm while actually leading their schools."
                },
                {
                  q: "Do I need to be technical?",
                  a: "Not at all. If you can use Google Docs, you can use what we build. I handle the technical setup and train you on everything."
                },
                {
                  q: "What's the time commitment?",
                  a: "Plan for 2-3 hours per week during the engagement. These are 'done with you' services — I build alongside you so the systems actually stick."
                },
                {
                  q: "What results can I expect?",
                  a: "Clients typically reduce administrative workload by 50% within the first two months. The real transformation is having clear, reliable systems so you can focus on leading."
                },
                {
                  q: "Do you work with schools outside the IB system?",
                  a: "Yes. My experience is primarily IB, but the systems apply to any international school — British, American, or local curriculum."
                }
              ].map((item, i) => (
                <div key={i} className="bg-cream dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium text-navy dark:text-white mb-2">{item.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 10. LEAD MAGNET / NEWSLETTER ========== */}
        <section id="newsletter" className="py-20 md:py-24 bg-cream dark:bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-navy dark:text-white mb-4">
                  The No-Admin Newsletter
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Stay ahead without staying up late. Practical AI tips, Google Workspace shortcuts, and automation strategies for school leaders. Weekly.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    "Time-saving workflows you can implement today",
                    "AI prompts designed for school contexts",
                    "Templates and resources — free"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <Check className="w-4 h-4 text-orange-600 dark:text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>

        {/* ========== 11. FEATURED POSTS ========== */}
        <section className="py-20 md:py-28 bg-white dark:bg-navy-light border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <div className="text-orange-600 dark:text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">
                  From the Blog
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-white">Start Here</h2>
              </div>
              <Link 
                href="/blog" 
                className="hidden sm:flex items-center gap-2 font-medium text-orange-600 dark:text-orange-400 hover:underline"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all bg-cream dark:bg-slate-800"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400">
                      {pillarLabels[post.pillar] || post.pillar}
                    </span>
                    <span className="font-serif text-lg text-navy dark:text-white">{post.title}</span>
                  </div>
                  <ChevronRight className="hidden sm:block w-5 h-5 text-slate-400" />
                </Link>
              ))}
            </div>

            <Link 
              href="/blog" 
              className="sm:hidden flex items-center justify-center gap-2 font-medium mt-8 text-orange-600 dark:text-orange-400"
            >
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========== 12. FINAL CTA ========== */}
        <section className="py-20 md:py-28 bg-navy dark:bg-navy-dark text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s create a smarter, faster way for you to run your school. Book a free 30-minute strategy call.
            </p>
            <Link 
              href="/booking" 
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold text-lg bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
            >
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-6 text-slate-400">
              Or email me directly: <a href="mailto:ben@kaiak.io" className="text-amber-400 hover:underline">ben@kaiak.io</a>
            </p>
          </div>
        </section>

      </main>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 bg-navy-dark text-slate-400">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-xl text-white mb-1">KAIAK</p>
              <p className="text-sm">AI &amp; systems for school leaders</p>
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
          <div className="mt-8 pt-8 text-sm text-center border-t border-slate-800">
            <p>&copy; {currentYear} KAIAK. Less admin. More impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

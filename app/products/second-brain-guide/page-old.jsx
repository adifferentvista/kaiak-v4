'use client';

import React, { useState } from 'react';

// ============================================
// COLOR CONSTANTS
// ============================================
const colors = {
  cream: '#fdfbf7',
  navy: '#102a43',
  navyLight: '#1a365d',
  navyBorder: '#2c4a7c',
  navyDark: '#0f172a',
  navyMid: '#243b53',
  blueGray: '#f0f4f8',
  orange: '#ea580c',
  amber: '#f59e0b',
};

// ============================================
// ICONS
// ============================================
const Icons = {
  Check: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Book: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Download: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  Template: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  Video: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Brain: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Support: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  ChevronDown: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Star: ({ className = "" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  ArrowLeft: ({ className = "" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  ),
};

// ============================================
// FAQ ACCORDION
// ============================================
const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left"
      >
        <span className="font-medium" style={{ color: colors.navy }}>{question}</span>
        <Icons.ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// ============================================
// TESTIMONIAL CARD
// ============================================
const Testimonial = ({ quote, name, role, rating = 5 }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Icons.Star key={i} className="w-5 h-5 text-amber-400" />
      ))}
    </div>
    <p className="text-slate-600 mb-4 italic">"{quote}"</p>
    <div>
      <p className="font-medium" style={{ color: colors.navy }}>{name}</p>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  </div>
);

// ============================================
// PRICE DISPLAY COMPONENT
// ============================================
const PriceDisplay = ({ size = 'default' }) => {
  if (size === 'large') {
    return (
      <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
        <span className="text-2xl text-slate-400 line-through">$97</span>
        <span className="text-5xl font-bold text-white">$49</span>
        <span className="text-sm font-bold px-3 py-1 rounded-full bg-green-400 text-green-900">LAUNCH PRICE</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center gap-3 mb-4 flex-wrap">
      <span className="text-lg text-slate-400 line-through">$97</span>
      <span className="text-4xl font-bold" style={{ color: colors.navy }}>$49</span>
      <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">LAUNCH PRICE</span>
      <span className="text-sm text-slate-500">Save 50%</span>
    </div>
  );
};

// ============================================
// MAIN PAGE
// ============================================
export default function SecondBrainGuidePage() {
  const features = [
    { icon: Icons.Book, title: "25+ Page Guide", desc: "Step-by-step implementation instructions" },
    { icon: Icons.Template, title: "NotebookLM Prompts", desc: "Copy-paste prompts for instant results" },
    { icon: Icons.Download, title: "Monthly Logbook", desc: "Pre-built template for capturing everything" },
    { icon: Icons.Video, title: "Video Walkthrough", desc: "Watch me build the system from scratch" },
    { icon: Icons.Brain, title: "AI Integration Tips", desc: "How to connect with ChatGPT & Claude" },
    { icon: Icons.Support, title: "Email Support", desc: "Get help if you get stuck" },
  ];

  const faqs = [
    {
      question: "What format is the guide?",
      answer: "The guide is delivered as a PDF, plus a Notion template you can duplicate. The video walkthrough is hosted online so you can watch anytime."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Absolutely not. This is designed for non-technical leaders. If you can use Google Docs, you can implement this system."
    },
    {
      question: "What tools do I need?",
      answer: "You'll need a Google account (for NotebookLM) and optionally Notion for the logbook template. Both have free tiers."
    },
    {
      question: "How long does it take to set up?",
      answer: "Most people have the basic system running in 2-3 hours. The full implementation with all workflows takes about a week of 30-minute sessions."
    },
    {
      question: "Is this specific to schools?",
      answer: "The examples are from educational leadership, but the system works for any knowledge worker drowning in documents, emails, and meetings."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "Email me within 30 days and I'll refund you, no questions asked."
    },
    {
      question: "How long will the launch price last?",
      answer: "The $49 launch price is available for early supporters. Once I gather more testimonials and case studies, the price will go to $97."
    },
  ];

  const testimonials = [
    {
      quote: "I went from 47 open browser tabs to a single source of truth. This system actually sticks because it doesn't require daily maintenance.",
      name: "Sarah M.",
      role: "Head of School, International Academy",
    },
    {
      quote: "Finally, a productivity system designed for how my brain actually works. The NotebookLM integration is a game-changer.",
      name: "James K.",
      role: "Principal, K-8 School",
    },
    {
      quote: "I can now find any policy, email, or meeting note in seconds. My team thinks I have a photographic memory.",
      name: "Linda P.",
      role: "Director of Operations",
    },
  ];

  return (
    <div className="font-sans antialiased" style={{ backgroundColor: colors.cream }}>
      
      {/* Navigation */}
      <nav className="border-b border-slate-200/50" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium">
            <Icons.ArrowLeft className="w-4 h-4" />
            Back to KAIAK
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left: Copy */}
            <div>
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span 
                  className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                  style={{ backgroundColor: '#fef3c7', color: '#92400e' }}
                >
                  Digital Product
                </span>
                <span 
                  className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-green-100 text-green-700"
                >
                  🚀 Launch Special
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6" style={{ color: colors.navy }}>
                The No-Admin Second Brain Guide
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                A complete system for capturing, organizing, and retrieving everything you need—without spending hours on maintenance.
              </p>
              
              {/* Price Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-6">
                <PriceDisplay />
                <a 
                  href="#" 
                  className="block w-full text-center text-white px-6 py-4 rounded-lg font-bold text-lg mb-3"
                  style={{ backgroundColor: colors.amber, color: colors.navy }}
                >
                  Get Instant Access
                </a>
                <p className="text-center text-sm text-slate-500">
                  Instant PDF download • 30-day money-back guarantee
                </p>
              </div>
            </div>
            
            {/* Product Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="aspect-[3/4] rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.blueGray }}>
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📘</div>
                    <p className="font-serif text-xl" style={{ color: colors.navy }}>The No-Admin</p>
                    <p className="font-serif text-xl" style={{ color: colors.navy }}>Second Brain Guide</p>
                    <p className="text-sm text-slate-500 mt-4">by Benedict @ KAIAK</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-200">
                <span className="text-sm font-medium" style={{ color: colors.navy }}>⚡ Instant Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center mb-4" style={{ color: colors.navy }}>Who Is This For?</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            This guide is for knowledge workers who are drowning in information and tired of productivity systems that require constant upkeep.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {[
              { emoji: "🏫", title: "School Leaders", desc: "Principals, Heads of School, Directors drowning in emails, policies, and parent communications" },
              { emoji: "💼", title: "Executives", desc: "Leaders who need to recall information from hundreds of meetings and documents" },
              { emoji: "📚", title: "Researchers", desc: "Anyone managing large amounts of reading material and notes" },
              { emoji: "😓", title: "Notion Refugees", desc: "People whose beautiful productivity system collapsed after 3 weeks" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6 border border-slate-200" style={{ backgroundColor: colors.blueGray }}>
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <h3 className="font-bold mb-2" style={{ color: colors.navy }}>{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center mb-4" style={{ color: colors.navy }}>What's Inside</h2>
          <p className="text-center text-slate-600 mb-12">Everything you need to build a zero-maintenance knowledge system.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: colors.blueGray }}>
                  <feature.icon className="w-6 h-6" style={{ color: colors.navy }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: colors.navy }}>{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center mb-4" style={{ color: colors.navy }}>What People Are Saying</h2>
          <p className="text-center text-slate-600 mb-12">From overwhelmed to organized.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {testimonials.map((testimonial, i) => (
              <Testimonial key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ backgroundColor: colors.blueGray }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center mb-12" style={{ color: colors.navy }}>Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200">
            {faqs.map((faq, i) => (
              <FAQ key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to stop drowning in information?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Get the complete system for capturing, organizing, and retrieving everything—without the maintenance.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20 mb-8">
            <PriceDisplay size="large" />
            <a 
              href="#" 
              className="inline-block w-full max-w-sm text-center px-8 py-4 rounded-lg font-bold text-lg"
              style={{ backgroundColor: colors.amber, color: colors.navy }}
            >
              Get Instant Access
            </a>
            <p className="text-slate-400 text-sm mt-4">
              30-day money-back guarantee • Instant download
            </p>
          </div>
          
          <p className="text-slate-400">
            Questions? Email me at <a href="mailto:benedict@kaiak.co" style={{ color: colors.amber }}>benedict@kaiak.co</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-slate-400 text-sm text-center" style={{ backgroundColor: colors.navyDark }}>
        <div className="max-w-5xl mx-auto px-6">
          <p>© {new Date().getFullYear()} KAIAK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

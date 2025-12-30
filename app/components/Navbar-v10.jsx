'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icons, Logo } from './Icons';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium";

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200/50 dark:border-slate-700/50 bg-cream/95 dark:bg-navy/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="KAIAK Home">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/blog" className={navLinkClass}>Blog</Link>
            <Link href="/work-with-me" className={navLinkClass}>Services</Link>
            <Link href="/#about" className={navLinkClass}>About</Link>
            <ThemeToggle />
          </div>

          {/* Desktop CTA */}
          <Link
            href="/booking"
            className="hidden md:block px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-navy-mid dark:bg-amber-500 dark:text-navy hover:bg-navy dark:hover:bg-amber-400 theme-transition"
          >
            Book a Call
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-600 dark:text-slate-400 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-slate-200/50 dark:border-slate-700/50 absolute w-full shadow-xl bg-cream dark:bg-navy"
          role="menu"
        >
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/blog"
              className="block text-slate-600 dark:text-slate-300 font-medium"
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Blog
            </Link>
            <Link
              href="/work-with-me"
              className="block text-slate-600 dark:text-slate-300 font-medium"
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="block text-slate-600 dark:text-slate-300 font-medium"
              onClick={closeMobileMenu}
              role="menuitem"
            >
              About
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <span className="text-sm text-slate-500 dark:text-slate-400">Theme</span>
            </div>
            {/* Mobile CTA */}
            <Link
              href="/booking"
              className="block text-white px-5 py-3 rounded-lg text-center font-medium bg-navy-mid dark:bg-amber-500 dark:text-navy"
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

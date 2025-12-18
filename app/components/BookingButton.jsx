'use client';

import { useState, useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/ben-kaiak/30min';

export default function BookingButton({ 
  children = "Book Discovery Call", 
  className = ""
}) {
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    // Check if Calendly is already loaded
    if (typeof window !== 'undefined' && window.Calendly) {
      setCalendlyReady(true);
      return;
    }

    // Listen for Calendly to load
    const checkCalendly = setInterval(() => {
      if (typeof window !== 'undefined' && window.Calendly) {
        setCalendlyReady(true);
        clearInterval(checkCalendly);
      }
    }, 100);

    // Stop checking after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkCalendly);
    }, 10000);

    return () => {
      clearInterval(checkCalendly);
      clearTimeout(timeout);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    
    // Safe call with optional chaining
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open Calendly in new tab if popup doesn't work
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

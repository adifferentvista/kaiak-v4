'use client';

import { useState, useEffect } from 'react';

export default function BookingButton({ 
  children = "Book Discovery Call", 
  className = "",
  calendlyUrl = "https://calendly.com/ben-kaiak/30min"
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

    // Cleanup after 10 seconds (stop checking)
    const timeout = setTimeout(() => {
      clearInterval(checkCalendly);
    }, 10000);

    return () => {
      clearInterval(checkCalendly);
      clearTimeout(timeout);
    };
  }, []);

  const handleClick = () => {
    // Safe call with optional chaining
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback: open Calendly in new tab if popup doesn't work
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
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

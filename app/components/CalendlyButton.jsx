'use client'

export default function CalendlyButton({ className, children }) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/ben-kaiak/30min' })
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

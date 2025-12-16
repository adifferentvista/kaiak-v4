'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to ConvertKit
    console.log('Newsletter signup:', email)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-amber-400 font-medium">Thanks! Check your inbox.</p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        className="flex-1 px-4 py-3 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}

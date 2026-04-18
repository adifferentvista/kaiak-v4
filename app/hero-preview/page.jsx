'use client'

import { useState } from 'react'
import {
  HeroOptionA,
  HeroOptionB,
  HeroOptionC,
  HeroOptionD,
  HeroOptionE,
  HeroOptionF,
  HeroOptionG,
} from './HeroExplorations'

// Hero background reference gallery. Option A is currently live across the site
// (via app/components/HeroBackdrop.jsx). All other options are kept here for
// future reference — switch between them with the top toggle.
const OPTIONS = {
  A: { label: 'A — Corner glows + hairline grid + mouse spotlight  (LIVE on site)', Component: HeroOptionA },
  E: { label: 'E — Magnetic grid (brightens under cursor)  (shortlisted)', Component: HeroOptionE },
  G: { label: 'G — Magnetic grid + A\'s warm corner glows (hybrid)  (shortlisted)', Component: HeroOptionG },
  B: { label: 'B — Topo paper (concentric contours)', Component: HeroOptionB },
  C: { label: 'C — Dot grid + aurora sweep', Component: HeroOptionC },
  D: { label: 'D — Wayfinding lines (kayak routes + waypoints)', Component: HeroOptionD },
  F: { label: 'F — Mesh gradient + grain (Stripe/Apple feel)', Component: HeroOptionF },
}

export default function HeroPreviewPage() {
  const [option, setOption] = useState('A')
  const { Component } = OPTIONS[option]
  const onCTA = () => alert('CTA clicked (preview only)')

  return (
    <main style={{ background:'#FDFBF7', minHeight:'100vh' }}>
      <div style={{
        position:'sticky', top: 0, zIndex: 50,
        display:'flex', gap: 8, padding:'12px 16px',
        background:'rgba(253,251,247,0.92)', backdropFilter:'blur(10px)',
        borderBottom:'1px solid #E2DCCF', alignItems:'center',
        fontFamily:'var(--font-inter), system-ui, sans-serif',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color:'#64748B', marginRight: 8 }}>
          Hero preview:
        </span>
        {Object.entries(OPTIONS).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setOption(key)}
            title={label}
            style={{
              padding:'6px 14px', borderRadius: 8,
              border:'1px solid ' + (option === key ? '#EA580C' : '#E2DCCF'),
              background: option === key ? '#EA580C' : '#FFFFFF',
              color: option === key ? '#FFFFFF' : '#0F172A',
              fontSize: 13, fontWeight: 600, cursor:'pointer',
            }}
          >
            Option {key}
          </button>
        ))}
        <span style={{ marginLeft: 16, fontSize: 12, color:'#94A3B8' }}>
          {OPTIONS[option].label}
        </span>
      </div>
      <Component onCTA={onCTA}/>
    </main>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import StackedWindowDevice, { fonts } from './HeroExplorations_Device'

function HeroCopy({ onCTA }) {
  return (
    <div style={{ textAlign:'center', position:'relative', zIndex: 2, maxWidth: 720, margin:'0 auto 48px' }}>
      <div style={{
        display:'inline-block', padding:'6px 14px', borderRadius: 9999,
        background:'rgba(234,88,12,0.10)', color:'#C2410C',
        fontSize: 11, fontWeight: 700, letterSpacing:'0.1em',
        textTransform:'uppercase', marginBottom: 28, fontFamily: fonts.sans,
        border:'1px solid rgba(234,88,12,0.18)',
      }}>
        For School Leaders
      </div>
      <h1 style={{
        fontFamily: fonts.serif, fontWeight: 400, fontSize: 72, lineHeight: 1.1,
        color:'#0F172A', margin:'0 0 4px', letterSpacing:'-0.015em',
        whiteSpace:'nowrap',
      }}>
        Turn AI Into Your
      </h1>
      <h1 style={{
        fontFamily: fonts.serif, fontStyle:'italic', fontWeight: 400, fontSize: 88,
        lineHeight: 1.05, color:'#C2410C', margin:'0 0 28px',
        letterSpacing:'-0.02em',
      }}>
        Unfair Advantage.
      </h1>
      <p style={{
        fontSize: 18, lineHeight: 1.6, color:'#475569',
        margin:'0 auto 36px', maxWidth: 560, fontFamily: fonts.sans,
      }}>
        I help school leaders build AI systems, automations, and workflows that save
        10+ hours a week — so you can lead, not just react.
      </p>
      <div style={{ display:'inline-flex', gap: 12, flexWrap:'wrap', justifyContent:'center' }}>
        <button onClick={onCTA} style={{
          background:'#EA580C', color:'#fff', border:'none',
          padding:'14px 24px', borderRadius: 10, fontSize: 15, fontWeight: 600,
          fontFamily: fonts.sans, cursor:'pointer',
          display:'inline-flex', alignItems:'center', gap: 8,
          boxShadow:'0 1px 2px rgba(234,88,12,0.2), 0 4px 12px rgba(234,88,12,0.15)',
        }}>
          Book a Consultation <ArrowRight size={16}/>
        </button>
        <button style={{
          background:'#FFFFFF', color:'#0F172A', border:'1px solid #E2DCCF',
          padding:'14px 24px', borderRadius: 10, fontSize: 15, fontWeight: 600,
          fontFamily: fonts.sans, cursor:'pointer',
        }}>
          See Our Services
        </button>
      </div>
    </div>
  )
}

export function HeroOptionA({ onCTA }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 30 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const target = { x: 50, y: 30 }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      target.x = ((e.clientX - r.left) / r.width) * 100
      target.y = ((e.clientY - r.top)  / r.height) * 100
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          setPos({ ...target })
        })
      }
    }
    el.addEventListener('mousemove', onMove)
    return () => { el.removeEventListener('mousemove', onMove); if (raf) cancelAnimationFrame(raf) }
  }, [])

  const gridUrl =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><path d='M64 0H0v64' fill='none' stroke='%23EA580C' stroke-opacity='0.06' stroke-width='1'/></svg>\")"

  return (
    <div ref={ref} style={{
      position:'relative', overflow:'hidden',
      background:'#FDFBF7', padding:'112px 24px 140px',
    }}>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: gridUrl, backgroundSize:'64px 64px',
        maskImage:'radial-gradient(ellipse at 50% 40%, black 0%, black 50%, transparent 85%)',
        WebkitMaskImage:'radial-gradient(ellipse at 50% 40%, black 0%, black 50%, transparent 85%)',
      }}/>
      <div style={{
        position:'absolute', top: -200, right: -200, width: 900, height: 900,
        background:'radial-gradient(circle, rgba(251,146,60,0.32) 0%, rgba(251,146,60,0.14) 30%, transparent 65%)',
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', bottom: -250, left: -200, width: 1000, height: 1000,
        background:'radial-gradient(circle, rgba(99,152,255,0.24) 0%, rgba(99,152,255,0.10) 35%, transparent 65%)',
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', inset: 0, pointerEvents:'none',
        background:`radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(234,88,12,0.10), transparent 70%)`,
        transition:'background 120ms linear',
      }}/>

      <HeroCopy onCTA={onCTA}/>
      <div style={{ position:'relative', zIndex: 2 }}>
        <StackedWindowDevice/>
      </div>
    </div>
  )
}

export function HeroOptionB({ onCTA }) {
  const gridUrl =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><path d='M48 0H0v48' fill='none' stroke='%23EA580C' stroke-opacity='0.07' stroke-width='1'/></svg>\")"

  return (
    <div style={{
      position:'relative', overflow:'hidden',
      background:'#FDFBF7', padding:'112px 24px 140px',
    }}>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: gridUrl, backgroundSize:'48px 48px',
        maskImage:'linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage:'linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}/>

      <svg viewBox="0 0 600 600" style={{
        position:'absolute', top: 40, right: -150, width: 720, height: 720,
        pointerEvents:'none', opacity: 0.55,
      }}>
        <defs>
          <radialGradient id="topoFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FBBF24" stopOpacity="0.28"/>
            <stop offset="60%"  stopColor="#FBBF24" stopOpacity="0.10"/>
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="280" fill="url(#topoFill)"/>
        {[260, 220, 180, 140, 100, 60].map(r => (
          <circle key={r} cx="300" cy="300" r={r}
            fill="none" stroke="#EA580C" strokeWidth="1" strokeOpacity="0.14"
            strokeDasharray={r === 100 ? '4 6' : 'none'}/>
        ))}
        <path d="M 120 300 Q 220 200 320 240 T 500 260" stroke="#EA580C"
          strokeWidth="1.5" strokeOpacity="0.25" fill="none" strokeDasharray="2 4"/>
      </svg>

      <div style={{
        position:'absolute', bottom: -200, left: -150, width: 700, height: 700,
        background:'radial-gradient(circle, rgba(148,163,184,0.20) 0%, transparent 65%)',
        pointerEvents:'none',
      }}/>

      <HeroCopy onCTA={onCTA}/>
      <div style={{ position:'relative', zIndex: 2 }}>
        <StackedWindowDevice/>
      </div>
    </div>
  )
}

export function HeroOptionC({ onCTA }) {
  const dotUrl =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><circle cx='1' cy='1' r='1' fill='%23C2410C' fill-opacity='0.22'/></svg>\")"

  return (
    <div style={{
      position:'relative', overflow:'hidden',
      background:'#FDFBF7', padding:'112px 24px 140px',
    }}>
      <div style={{
        position:'absolute', inset: 0, pointerEvents:'none',
        background:'linear-gradient(125deg, rgba(30,58,95,0.08) 0%, transparent 30%, rgba(251,146,60,0.18) 70%, rgba(251,191,36,0.20) 100%)',
      }}/>
      <div style={{
        position:'absolute', top:-180, right:-120, width: 760, height: 760,
        background:'radial-gradient(circle, rgba(251,113,133,0.22) 0%, rgba(251,146,60,0.10) 40%, transparent 70%)',
        filter:'blur(10px)', pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', bottom:-200, left:-160, width: 820, height: 820,
        background:'radial-gradient(circle, rgba(30,58,95,0.18) 0%, rgba(30,58,95,0.07) 40%, transparent 70%)',
        filter:'blur(10px)', pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: dotUrl, backgroundSize:'24px 24px',
        maskImage:'radial-gradient(ellipse at 50% 50%, black 0%, black 45%, transparent 80%)',
        WebkitMaskImage:'radial-gradient(ellipse at 50% 50%, black 0%, black 45%, transparent 80%)',
      }}/>

      <HeroCopy onCTA={onCTA}/>
      <div style={{ position:'relative', zIndex: 2 }}>
        <StackedWindowDevice/>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Option D — Wayfinding lines (on-brand: kayak routes + waypoints)
// ─────────────────────────────────────────────────────────────
export function HeroOptionD({ onCTA }) {
  const gridUrl =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><path d='M56 0H0v56' fill='none' stroke='%23EA580C' stroke-opacity='0.05' stroke-width='1'/></svg>\")"

  return (
    <div style={{ position:'relative', overflow:'hidden', background:'#FDFBF7', padding:'112px 24px 140px' }}>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: gridUrl, backgroundSize:'56px 56px',
        maskImage:'radial-gradient(ellipse at 50% 50%, black 0%, black 55%, transparent 90%)',
        WebkitMaskImage:'radial-gradient(ellipse at 50% 50%, black 0%, black 55%, transparent 90%)',
      }}/>

      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ position:'absolute', inset: 0, width:'100%', height:'100%', pointerEvents:'none' }}
      >
        <defs>
          <marker id="kaiakArrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#EA580C" fillOpacity="0.55"/>
          </marker>
        </defs>
        <path
          d="M -50 560 Q 250 420 460 500 T 880 360 Q 1080 280 1260 200 L 1460 160"
          stroke="#EA580C" strokeOpacity="0.35" strokeWidth="1.5"
          strokeDasharray="4 6" fill="none"
          markerEnd="url(#kaiakArrow)"
        />
        <path
          d="M 80 780 Q 400 700 620 740 T 1120 680"
          stroke="#94A3B8" strokeOpacity="0.35" strokeWidth="1.25"
          strokeDasharray="2 5" fill="none"
        />
        {[
          [250, 470], [460, 500], [680, 430], [880, 360], [1080, 280], [1260, 200],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#FDFBF7" stroke="#EA580C" strokeOpacity="0.55" strokeWidth="1.5"/>
            <circle cx={cx} cy={cy} r="2.5" fill="#EA580C" fillOpacity="0.65"/>
          </g>
        ))}
      </svg>

      <div style={{
        position:'absolute', top: -150, right: -120, width: 700, height: 700,
        background:'radial-gradient(circle, rgba(251,146,60,0.22) 0%, rgba(251,146,60,0.08) 40%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      <HeroCopy onCTA={onCTA}/>
      <div style={{ position:'relative', zIndex: 2 }}>
        <StackedWindowDevice/>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Option E — Magnetic grid (grid brightens around cursor)
// ─────────────────────────────────────────────────────────────
export function HeroOptionE({ onCTA }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const target = { x: 50, y: 50 }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      target.x = ((e.clientX - r.left) / r.width) * 100
      target.y = ((e.clientY - r.top)  / r.height) * 100
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          setPos({ ...target })
        })
      }
    }
    el.addEventListener('mousemove', onMove)
    return () => { el.removeEventListener('mousemove', onMove); if (raf) cancelAnimationFrame(raf) }
  }, [])

  const dimGrid =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><path d='M48 0H0v48' fill='none' stroke='%23CBD5E1' stroke-opacity='0.45' stroke-width='1'/></svg>\")"
  const brightGrid =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><path d='M48 0H0v48' fill='none' stroke='%23EA580C' stroke-opacity='0.9' stroke-width='1.25'/></svg>\")"

  return (
    <div ref={ref} style={{ position:'relative', overflow:'hidden', background:'#FDFBF7', padding:'112px 24px 140px' }}>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: dimGrid, backgroundSize:'48px 48px',
        maskImage:'radial-gradient(ellipse at 50% 50%, black 0%, black 60%, transparent 90%)',
        WebkitMaskImage:'radial-gradient(ellipse at 50% 50%, black 0%, black 60%, transparent 90%)',
        opacity: 0.35,
      }}/>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: brightGrid, backgroundSize:'48px 48px',
        maskImage: `radial-gradient(260px circle at ${pos.x}% ${pos.y}%, black 0%, transparent 70%)`,
        WebkitMaskImage: `radial-gradient(260px circle at ${pos.x}% ${pos.y}%, black 0%, transparent 70%)`,
      }}/>
      <div style={{
        position:'absolute', inset: 0, pointerEvents:'none',
        background:`radial-gradient(300px circle at ${pos.x}% ${pos.y}%, rgba(251,146,60,0.10), transparent 70%)`,
      }}/>

      <HeroCopy onCTA={onCTA}/>
      <div style={{ position:'relative', zIndex: 2 }}>
        <StackedWindowDevice/>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Option G — Magnetic grid + A's warm corner glows (hybrid)
// ─────────────────────────────────────────────────────────────
export function HeroOptionG({ onCTA }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 40 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const target = { x: 50, y: 40 }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      target.x = ((e.clientX - r.left) / r.width) * 100
      target.y = ((e.clientY - r.top) / r.height) * 100
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          setPos({ ...target })
        })
      }
    }
    el.addEventListener('mousemove', onMove)
    return () => { el.removeEventListener('mousemove', onMove); if (raf) cancelAnimationFrame(raf) }
  }, [])

  const dimGrid =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><path d='M56 0H0v56' fill='none' stroke='%23EA580C' stroke-opacity='0.08' stroke-width='1'/></svg>\")"
  const brightGrid =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><path d='M56 0H0v56' fill='none' stroke='%23EA580C' stroke-opacity='0.85' stroke-width='1.25'/></svg>\")"

  return (
    <div ref={ref} style={{ position:'relative', overflow:'hidden', background:'#FDFBF7', padding:'112px 24px 140px' }}>
      {/* Dim hairline grid — A's style, full bleed, faded at edges */}
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: dimGrid, backgroundSize:'56px 56px',
        maskImage:'radial-gradient(ellipse at 50% 40%, black 0%, black 55%, transparent 90%)',
        WebkitMaskImage:'radial-gradient(ellipse at 50% 40%, black 0%, black 55%, transparent 90%)',
      }}/>
      {/* Peach glow top-right — from A */}
      <div style={{
        position:'absolute', top: -200, right: -200, width: 900, height: 900,
        background:'radial-gradient(circle, rgba(251,146,60,0.32) 0%, rgba(251,146,60,0.14) 30%, transparent 65%)',
        pointerEvents:'none',
      }}/>
      {/* Slate-blue glow bottom-left — from A */}
      <div style={{
        position:'absolute', bottom: -250, left: -200, width: 1000, height: 1000,
        background:'radial-gradient(circle, rgba(99,152,255,0.24) 0%, rgba(99,152,255,0.10) 35%, transparent 65%)',
        pointerEvents:'none',
      }}/>
      {/* Bright grid revealed under cursor — from E */}
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: brightGrid, backgroundSize:'56px 56px',
        maskImage: `radial-gradient(260px circle at ${pos.x}% ${pos.y}%, black 0%, transparent 70%)`,
        WebkitMaskImage: `radial-gradient(260px circle at ${pos.x}% ${pos.y}%, black 0%, transparent 70%)`,
      }}/>
      {/* Soft spotlight wash at cursor to tie it together */}
      <div style={{
        position:'absolute', inset: 0, pointerEvents:'none',
        background:`radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(234,88,12,0.10), transparent 70%)`,
        transition:'background 120ms linear',
      }}/>

      <HeroCopy onCTA={onCTA}/>
      <div style={{ position:'relative', zIndex: 2 }}>
        <StackedWindowDevice/>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Option F — Mesh gradient + grain (Stripe/Apple premium feel)
// ─────────────────────────────────────────────────────────────
export function HeroOptionF({ onCTA }) {
  const grainUrl =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"

  return (
    <div style={{ position:'relative', overflow:'hidden', background:'#FDFBF7', padding:'112px 24px 140px' }}>
      <div style={{
        position:'absolute', top:'-12%', left:'8%', width: 520, height: 520,
        background:'#FBBF24', borderRadius:'50%',
        filter:'blur(90px)', opacity: 0.55, pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', top:'-8%', right:'-4%', width: 560, height: 560,
        background:'#FB923C', borderRadius:'50%',
        filter:'blur(90px)', opacity: 0.5, pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', bottom:'-18%', left:'-6%', width: 620, height: 620,
        background:'#6398FF', borderRadius:'50%',
        filter:'blur(100px)', opacity: 0.38, pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', bottom:'-10%', right:'20%', width: 460, height: 460,
        background:'#F87171', borderRadius:'50%',
        filter:'blur(100px)', opacity: 0.32, pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage: grainUrl, backgroundSize:'160px 160px',
        opacity: 0.22, mixBlendMode:'overlay', pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', inset: 0,
        background:'radial-gradient(ellipse at 50% 40%, rgba(253,251,247,0) 0%, rgba(253,251,247,0) 40%, rgba(253,251,247,0.55) 100%)',
        pointerEvents:'none',
      }}/>

      <HeroCopy onCTA={onCTA}/>
      <div style={{ position:'relative', zIndex: 2 }}>
        <StackedWindowDevice/>
      </div>
    </div>
  )
}

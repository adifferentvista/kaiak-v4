'use client'

import { useRef, useState, useEffect } from 'react'

const GRID_URL =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><path d='M64 0H0v64' fill='none' stroke='%23EA580C' stroke-opacity='0.06' stroke-width='1'/></svg>\")"

export default function HeroBackdrop() {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 30 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return

    let raf = 0
    const target = { x: 50, y: 30 }
    const onMove = (e) => {
      const r = parent.getBoundingClientRect()
      target.x = ((e.clientX - r.left) / r.width) * 100
      target.y = ((e.clientY - r.top) / r.height) * 100
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          setPos({ ...target })
        })
      }
    }
    parent.addEventListener('mousemove', onMove)
    return () => {
      parent.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Hairline grid with soft radial fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: GRID_URL,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 0%, black 50%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 0%, black 50%, transparent 85%)',
        }}
      />
      {/* Peach glow top-right */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 900,
          height: 900,
          background:
            'radial-gradient(circle, rgba(251,146,60,0.32) 0%, rgba(251,146,60,0.14) 30%, transparent 65%)',
        }}
      />
      {/* Slate-blue glow bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: -250,
          left: -200,
          width: 1000,
          height: 1000,
          background:
            'radial-gradient(circle, rgba(99,152,255,0.24) 0%, rgba(99,152,255,0.10) 35%, transparent 65%)',
        }}
      />
      {/* Mouse-tracking spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(234,88,12,0.10), transparent 70%)`,
          transition: 'background 120ms linear',
        }}
      />
    </div>
  )
}

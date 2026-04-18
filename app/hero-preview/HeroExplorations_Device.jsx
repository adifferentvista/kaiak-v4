'use client'

const fonts = {
  sans: 'var(--font-inter), system-ui, sans-serif',
  serif: 'var(--font-instrument), Georgia, serif',
  mono: 'var(--font-mono), ui-monospace, monospace',
}

function MacWindowChrome({ title, tabs, active }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap: 12, padding:'10px 14px',
      background:'#F1EDE4', borderBottom:'1px solid #E2DCCF',
      borderTopLeftRadius: 10, borderTopRightRadius: 10, fontFamily: fonts.sans,
    }}>
      <div style={{ display:'flex', gap: 6 }}>
        {['#FF5F57','#FEBC2E','#28C840'].map(c => (
          <div key={c} style={{ width: 11, height: 11, borderRadius: 9999, background: c }}/>
        ))}
      </div>
      {title && (
        <div style={{ fontSize: 11, color:'#64748B', fontWeight: 500, flex: 1, textAlign:'center', marginRight: 48 }}>
          {title}
        </div>
      )}
      {tabs && (
        <div style={{ display:'flex', gap: 2, marginLeft: 8, flex: 1 }}>
          {tabs.map((t, i) => (
            <div key={i} style={{
              padding:'4px 10px', fontSize: 11, fontFamily: fonts.mono,
              color: i === active ? '#0F172A' : '#94A3B8',
              background: i === active ? '#FFFFFF' : 'transparent',
              borderRadius: 6, fontWeight: i === active ? 600 : 400,
            }}>{t}</div>
          ))}
        </div>
      )}
    </div>
  )
}

function C({ c: color, children }) {
  return <span style={{ color }}>{children}</span>
}

function FrontWindow() {
  const lines = [
    { n: 1,  t: <C c="#64748B">{`// Configure your Gmail triage agent`}</C> },
    { n: 2,  t: <><C c="#C026D3">import</C>{' { Agent, tools } '}<C c="#C026D3">from</C> <C c="#059669">{`'@kaiak/sdk'`}</C></> },
    { n: 3,  t: '' },
    { n: 4,  t: <><C c="#C026D3">export const</C>{' agent = '}<C c="#C026D3">new</C> <C c="#2563EB">Agent</C>{'({'}</> },
    { n: 5,  t: <>{'  name: '}<C c="#059669">{`'Inbox Triage'`}</C>,</> },
    { n: 6,  t: <>{'  model: '}<C c="#059669">{`'claude-opus-4-6'`}</C>,</> },
    { n: 7,  t: <>{'  tools: [gmail, calendar, slack],'}</> },
    { n: 8,  t: <>{'  trigger: '}<C c="#059669">{`'new_email'`}</C>,</> },
    { n: 9,  t: <>{'  actions: {'}</> },
    { n: 10, t: <>{'    triage: '}<C c="#EA580C">true</C>,</> },
    { n: 11, t: <>{'    drafts: '}<C c="#EA580C">true</C>,</> },
    { n: 12, t: <>{'    escalate: '}<C c="#059669">{`'#leadership'`}</C></> },
    { n: 13, t: '  }' },
    { n: 14, t: '})' },
    { n: 15, t: '' },
    { n: 16, t: <C c="#64748B">{`// ✦ 47 triaged · 12 drafts · 2 escalated today`}</C> },
  ]
  return (
    <div style={{
      width: 520, background:'#FFFFFF', borderRadius: 12,
      boxShadow:'0 30px 60px rgba(15,23,42,0.18), 0 8px 20px rgba(15,23,42,0.08)',
      border:'1px solid #E2DCCF', overflow:'hidden',
    }}>
      <MacWindowChrome tabs={['triage.config.ts','reports.config.ts','onboarding.json']} active={0}/>
      <div style={{
        padding:'16px 0', background:'#FFFFFF', fontFamily: fonts.mono,
        fontSize: 12.5, lineHeight: 1.7, color:'#0F172A',
      }}>
        {lines.map(l => (
          <div key={l.n} style={{ display:'flex', paddingLeft: 12, paddingRight: 16 }}>
            <span style={{ width: 24, color:'#CBD5E1', textAlign:'right', marginRight: 16, userSelect:'none' }}>
              {l.n}
            </span>
            <span style={{ whiteSpace:'pre', flex: 1 }}>{l.t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BackWindow() {
  const items = [
    ['📁', 'agents', true],
    ['  ', 'inbox-triage.ts', false],
    ['  ', 'weekly-report.ts', false],
    ['  ', 'parent-faq.ts', false],
    ['📁', 'workflows', true],
    ['  ', 'onboarding.json', false],
    ['📁', 'knowledge', true],
  ]
  return (
    <div style={{
      width: 280, background:'#FFFFFF', borderRadius: 12,
      boxShadow:'0 20px 40px rgba(15,23,42,0.12), 0 4px 12px rgba(15,23,42,0.06)',
      border:'1px solid #E2DCCF', overflow:'hidden',
    }}>
      <MacWindowChrome title="KAIAK Systems"/>
      <div style={{
        background:'#FAFAF7', padding: 16, height: 320, fontSize: 12,
        fontFamily: fonts.mono, color:'#334155',
      }}>
        <div style={{ color:'#94A3B8', fontSize: 10, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom: 8 }}>
          Client
        </div>
        {items.map(([icon, name, bold], i) => (
          <div key={i} style={{
            padding:'4px 0', color: bold ? '#0F172A' : '#64748B',
            fontWeight: bold ? 600 : 400, display:'flex', gap: 6,
          }}>
            <span style={{ width: 16 }}>{icon}</span>{name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function StackedWindowDevice() {
  return (
    <div style={{ position:'relative', width: 560, height: 420, margin:'0 auto' }}>
      <div style={{
        position:'absolute', left: -30, top: 30, transform:'rotate(-6deg)',
        transformOrigin:'center center',
      }}>
        <BackWindow/>
      </div>
      <div style={{
        position:'absolute', right: 0, top: 0, transform:'rotate(-2deg)',
        transformOrigin:'center center',
      }}>
        <FrontWindow/>
      </div>
    </div>
  )
}

export { fonts }

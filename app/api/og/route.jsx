import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const pillarColorMap = {
  'practical-ai': '#a855f7',
  'systems-thinking': '#f59e0b',
  'leadership': '#22c55e',
  'no-admin-life': '#ec4899',
  'education': '#a855f7',
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  const pillar = searchParams.get('pillar');

  // Default site OG image (no title)
  if (!title) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #102a43 0%, #1a3a5c 50%, #102a43 100%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #ea580c, #f59e0b)' }} />
          <div style={{ fontSize: 80, fontWeight: 700, color: '#fdfbf7', letterSpacing: '0.12em', marginBottom: '16px' }}>
            KAIAK
          </div>
          <div style={{ width: '80px', height: '4px', background: '#ea580c', borderRadius: '2px', marginBottom: '24px' }} />
          <div style={{ fontSize: 28, color: '#cbd5e1', fontWeight: 400 }}>
            AI & Systems for Leaders
          </div>
          <div style={{ position: 'absolute', bottom: '32px', fontSize: 18, color: '#64748b', letterSpacing: '0.05em' }}>
            kaiak.io
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  // Blog post OG image (with title + pillar)
  const pillarColor = pillarColorMap[pillar] || '#ea580c';
  const pillarLabels = {
    'practical-ai': 'Practical AI',
    'systems-thinking': 'Systems Thinking',
    'leadership': 'Leadership',
    'no-admin-life': 'No-Admin Life',
    'education': 'Education',
  };
  const pillarLabel = pillarLabels[pillar] || '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          background: 'linear-gradient(135deg, #102a43 0%, #1a3a5c 50%, #102a43 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: `linear-gradient(90deg, ${pillarColor}, #f59e0b)` }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {pillarLabel && (
            <div style={{ fontSize: 16, fontWeight: 600, color: pillarColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {pillarLabel}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <div style={{ fontSize: title.length > 60 ? 40 : 48, fontWeight: 700, color: '#fdfbf7', lineHeight: 1.2, maxWidth: '1000px' }}>
            {title}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#fdfbf7', letterSpacing: '0.1em' }}>
            KAIAK
          </div>
          <div style={{ fontSize: 16, color: '#64748b' }}>
            kaiak.io
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

import type { ReactNode } from 'react';

const TEAL = '#0FAFAA';

// ─── Phone mockup shell ───────────────────────────────────────────────────────
function Phone({ children, tilt = 0 }: { children: ReactNode; tilt?: number }) {
  return (
    <div
      style={{
        width: 72,
        height: 128,
        background: '#1c1c1e',
        borderRadius: 16,
        padding: '5px 4px 4px',
        boxShadow: '0 10px 28px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.2)',
        transform: `rotate(${tilt}deg)`,
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <div style={{ width: 20, height: 4, background: '#111', borderRadius: 3, margin: '0 auto 3px' }} />
      <div
        style={{
          width: '100%',
          height: 'calc(100% - 7px)',
          background: '#fff',
          borderRadius: 12,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          padding: '6px 5px',
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Card miniature (step 1 visual) ──────────────────────────────────────────
function MiniCard() {
  return (
    <div
      style={{
        width: 52,
        height: 72,
        background: '#fff',
        borderRadius: 8,
        border: '1px solid #e5e5e5',
        boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 4px 0',
        overflow: 'hidden',
      }}
    >
      {/* Google G mini */}
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      {/* Stars */}
      <div style={{ display: 'flex', gap: 1 }}>
        {[0,1,2,3,4].map(i => <span key={i} style={{ color: '#F9AB00', fontSize: 7, lineHeight: 1 }}>★</span>)}
      </div>
      {/* NFC waves */}
      <svg width="20" height="12" viewBox="0 0 24 14" fill="none">
        <path d="M12 13a1 1 0 100-2 1 1 0 000 2z" fill="#555"/>
        <path d="M8.5 10.5A5 5 0 0112 9a5 5 0 013.5 1.5" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M5.5 7.5A9 9 0 0112 5a9 9 0 016.5 2.5" stroke="#999" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
      {/* Color bar */}
      <div style={{ display: 'flex', width: '100%', height: 4 }}>
        <div style={{ flex: 1, background: '#4285F4' }} />
        <div style={{ flex: 1, background: '#EA4335' }} />
        <div style={{ flex: 1, background: '#FBBC04' }} />
        <div style={{ flex: 1, background: '#34A853' }} />
      </div>
    </div>
  );
}

// ─── Step card ────────────────────────────────────────────────────────────────
function StepCard({ num, title, visual }: { num: number; title: string; visual: ReactNode }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '30px 10px 12px',
        boxShadow: '0 2px 14px rgba(0,0,0,0.09)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        position: 'relative',
        minHeight: 170,
      }}
    >
      {/* Numbered badge */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          width: 26,
          height: 26,
          borderRadius: '50%',
          background: TEAL,
          color: '#fff',
          fontWeight: 700,
          fontSize: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 2px 6px ${TEAL}55`,
        }}
      >
        {num}
      </div>

      {/* Visual */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {visual}
      </div>

      {/* Title */}
      <p
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          color: TEAL,
          textAlign: 'center',
          margin: 0,
          lineHeight: 1.35,
          letterSpacing: '0.01em',
        }}
      >
        {title}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function NFCHowItWorks({
  step1title,
  step2title,
  step3title,
  step4title,
}: {
  step1title: string;
  step2title: string;
  step3title: string;
  step4title: string;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        width: '100%',
        maxWidth: 340,
        margin: '0 auto',
      }}
    >
      {/* ── Step 1 : NFC card ── */}
      <StepCard
        num={1}
        title={step1title}
        visual={<MiniCard />}
      />

      {/* ── Step 2 : Tap + NFC detected ── */}
      <StepCard
        num={2}
        title={step2title}
        visual={
          <Phone tilt={-6}>
            {/* Teal circle checkmark */}
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                border: `2.5px solid ${TEAL}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p style={{ fontSize: 6.5, color: '#444', textAlign: 'center', lineHeight: 1.3, margin: 0 }}>
              Etiqueta NFC<br/>detectada
            </p>
          </Phone>
        }
      />

      {/* ── Step 3 : Review form ── */}
      <StepCard
        num={3}
        title={step3title}
        visual={
          <Phone>
            {/* Stars */}
            <div style={{ display: 'flex', gap: 1 }}>
              {[0,1,2,3,4].map(i => <span key={i} style={{ color: '#F9AB00', fontSize: 11 }}>★</span>)}
            </div>
            {/* Text lines */}
            {[70,85,60].map((w, i) => (
              <div key={i} style={{ width: `${w}%`, height: 3, background: '#e8e8e8', borderRadius: 2, marginTop: 3 }} />
            ))}
            {/* Publish button */}
            <div
              style={{
                marginTop: 7,
                background: TEAL,
                borderRadius: 5,
                padding: '3px 12px',
              }}
            >
              <span style={{ fontSize: 7, color: '#fff', fontWeight: 700 }}>Publicar</span>
            </div>
          </Phone>
        }
      />

      {/* ── Step 4 : Google reviews ── */}
      <StepCard
        num={4}
        title={step4title}
        visual={
          <Phone>
            {/* Google wordmark mini */}
            <svg width="38" height="14" viewBox="0 0 120 44">
              <text x="0" y="36" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="40" fill="#4285F4">G</text>
              <text x="28" y="36" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="40">
                <tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
              </text>
            </svg>
            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#333' }}>5,0</span>
              <div style={{ display: 'flex' }}>
                {[0,1,2,3,4].map(i => <span key={i} style={{ color: '#F9AB00', fontSize: 7 }}>★</span>)}
              </div>
            </div>
            {/* Avatar + review line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: `${TEAL}44` }} />
              <div style={{ flex: 1, height: 3, background: '#eee', borderRadius: 2 }} />
            </div>
            {[85, 65].map((w, i) => (
              <div key={i} style={{ width: `${w}%`, height: 3, background: '#f0f0f0', borderRadius: 2, marginTop: 3 }} />
            ))}
          </Phone>
        }
      />
    </div>
  );
}

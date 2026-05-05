'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './NFCCard3D.module.css';

// ─── QR code grid 21×21 (correct finder patterns) ───
const QR: number[][] = [
  [1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1],
  [0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0],
  [1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1],
  [0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1],
  [1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0],
  [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1],
  [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0],
  [1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1],
];

function QRCodeSVG() {
  const cell = 3.6;
  const size = 21 * cell;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges">
      {QR.flatMap((row, r) =>
        row.map((v, c) =>
          v ? (
            <rect
              key={`${r}-${c}`}
              x={c * cell}
              y={r * cell}
              width={cell}
              height={cell}
              fill="#111"
            />
          ) : null
        )
      )}
    </svg>
  );
}

// Official Google G — 24×24 viewBox
function GoogleG({ size = 72, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ opacity }}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function NFCIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M20 12a8 8 0 01-8 8" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 12a4 4 0 01-4 4" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1.8" fill="#555"/>
    </svg>
  );
}

function QRSmallIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="5.5" y="5.5" width="2" height="2" fill="#555" stroke="none"/>
      <rect x="16.5" y="5.5" width="2" height="2" fill="#555" stroke="none"/>
      <rect x="5.5" y="16.5" width="2" height="2" fill="#555" stroke="none"/>
      <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="#555" stroke="none"/>
    </svg>
  );
}

function NFCChipIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="#bbb" strokeWidth="1.5"/>
      <path d="M9 9h6M9 12h6M9 15h3" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="9" y="2" width="1.5" height="4" rx="0.75" fill="#bbb"/>
      <rect x="13.5" y="2" width="1.5" height="4" rx="0.75" fill="#bbb"/>
      <rect x="9" y="18" width="1.5" height="4" rx="0.75" fill="#bbb"/>
      <rect x="13.5" y="18" width="1.5" height="4" rx="0.75" fill="#bbb"/>
      <rect x="2" y="9" width="4" height="1.5" rx="0.75" fill="#bbb"/>
      <rect x="2" y="13.5" width="4" height="1.5" rx="0.75" fill="#bbb"/>
      <rect x="18" y="9" width="4" height="1.5" rx="0.75" fill="#bbb"/>
      <rect x="18" y="13.5" width="4" height="1.5" rx="0.75" fill="#bbb"/>
    </svg>
  );
}

interface Ripple { id: number; x: number; y: number }
interface Particle { id: number; x: number; bottom: number; dx: number }

export default function NFCCard3D({ initialRotation = 0 }: { initialRotation?: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const shadowRef  = useRef<HTMLDivElement>(null);
  const isHovRef   = useRef(false);
  const rotYRef    = useRef(initialRotation);
  const rafRef     = useRef<number | null>(null);
  const lastTsRef  = useRef<number | null>(null);
  const timeRef    = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [ripples,   setRipples]   = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  // ─── rAF animation loop ───────────────────────────────────────────
  useEffect(() => {
    const tick = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.min(ts - lastTsRef.current, 50);
      lastTsRef.current = ts;
      timeRef.current  += dt;

      if (!isHovRef.current && wrapperRef.current) {
        // Full 360° every 8 s  →  0.045 deg/ms
        rotYRef.current = (rotYRef.current + dt * 0.045) % 360;
        const floatY    = Math.sin(timeRef.current * 0.0016) * 14;

        wrapperRef.current.style.transition = 'none';
        wrapperRef.current.style.transform  =
          `translateY(${floatY}px) rotateY(${rotYRef.current}deg)`;

        if (shadowRef.current) {
          const s = 0.75 + (14 - Math.abs(floatY)) / 14 * 0.25;
          shadowRef.current.style.transform = `scaleX(${s})`;
          shadowRef.current.style.opacity   = String(0.18 + (14 - Math.abs(floatY)) / 14 * 0.14);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // ─── NFC particles while hovering ────────────────────────────────
  useEffect(() => {
    if (!isHovered) return;
    const spawn = () => {
      const id     = Date.now() + Math.random();
      const x      = 15 + Math.random() * 70;          // % along card width
      const bottom = 5  + Math.random() * 85;           // % from bottom
      const dx     = (Math.random() - 0.5) * 56;        // px horizontal drift
      setParticles(p => [...p, { id, x, bottom, dx }]);
      setTimeout(() => setParticles(p => p.filter(q => q.id !== id)), 1700);
    };
    const iv = setInterval(spawn, 260);
    return () => clearInterval(iv);
  }, [isHovered]);

  // ─── Mouse handlers ───────────────────────────────────────────────
  const handleEnter = () => { isHovRef.current = true;  setIsHovered(true);  };
  const handleLeave = () => { isHovRef.current = false; setIsHovered(false); };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const r    = wrapperRef.current.getBoundingClientRect();
    const tx   = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * 22;
    const ty   = -((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) * 22;
    wrapperRef.current.style.transition = 'transform 0.12s ease-out';
    wrapperRef.current.style.transform  =
      `translateY(-12px) rotateX(${tx}deg) rotateY(${rotYRef.current + ty}deg) scale(1.04)`;
    if (shadowRef.current) {
      shadowRef.current.style.transform = 'scaleX(0.82)';
      shadowRef.current.style.opacity   = '0.14';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const r  = wrapperRef.current.getBoundingClientRect();
    const x  = ((e.clientX - r.left) / r.width)  * 100;
    const y  = ((e.clientY - r.top)  / r.height) * 100;
    const id = Date.now();
    setRipples(p => [...p, { id, x, y }]);
    setTimeout(() => setRipples(p => p.filter(q => q.id !== id)), 950);
  };

  return (
    <div className={styles.scene}>

      {/* NFC expanding rings */}
      <div className={`${styles.nfcContainer} ${isHovered ? styles.nfcActive : ''}`}>
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className={styles.nfcRing}
            style={{ '--i': i } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Card wrapper — direct-DOM transform via rAF */}
      <div
        ref={wrapperRef}
        className={styles.cardWrapper}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >

        {/* ── SOCLE ACRYLIQUE (pieds) ── */}
        <div className={styles.standTop}   />
        <div className={styles.standFace}  />
        <div className={styles.standLeft}  />
        <div className={styles.standRight} />

        {/* ── FRONT FACE ── */}
        <div className={styles.front}>
          <div className={styles.sheen} />

          <div className={styles.inner}>
            <p className={styles.tagline}>We&apos;d love your feedback</p>
            <GoogleG size={74} />
            <div className={styles.stars}>
              {[0,1,2,3,4].map(i => <span key={i} className={styles.star}>★</span>)}
            </div>
            <div className={styles.qrBlock}>
              <QRCodeSVG />
            </div>
            <div className={styles.tapRow}>
              <span className={styles.tapItem}><NFCIcon /><span>Tap</span></span>
              <span className={styles.tapOr}>or</span>
              <span className={styles.tapItem}><QRSmallIcon /><span>Scan</span></span>
            </div>
          </div>

          <div className={styles.gBar}>
            <div style={{ background: '#4285F4' }} />
            <div style={{ background: '#EA4335' }} />
            <div style={{ background: '#FBBC04' }} />
            <div style={{ background: '#34A853' }} />
          </div>

          {/* Floating NFC particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className={styles.particle}
              style={{
                left:   `${p.x}%`,
                bottom: `${p.bottom}%`,
                '--dx': `${p.dx}px`,
              } as React.CSSProperties}
            />
          ))}

          {/* Click ripples */}
          {ripples.map(r => (
            <span
              key={r.id}
              className={styles.ripple}
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
            />
          ))}
        </div>

        {/* ── BACK FACE ── */}
        <div className={styles.back}>
          <div className={styles.backInner}>
            <div className={styles.backWatermark}>
              <GoogleG size={110} opacity={0.07} />
            </div>
            <NFCChipIcon />
            <p className={styles.backText}>NFC Technology</p>
            <p className={styles.backSub}>Tap to leave a Google review</p>
          </div>
          <div className={styles.gBar}>
            <div style={{ background: '#4285F4' }} />
            <div style={{ background: '#EA4335' }} />
            <div style={{ background: '#FBBC04' }} />
            <div style={{ background: '#34A853' }} />
          </div>
        </div>
      </div>

      {/* Floor shadow */}
      <div ref={shadowRef} className={styles.shadow} />
    </div>
  );
}

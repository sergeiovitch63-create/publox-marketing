'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './NFCCard3D.module.css';
import customStyles from './NFCCard3DCustom.module.css';

// ─── QR code (même grille que NFCCard3D) ────────────────────────────────────
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
  const cell = 3.0;
  const size = 21 * cell;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges">
      {QR.flatMap((row, r) =>
        row.map((v, c) =>
          v ? <rect key={`${r}-${c}`} x={c * cell} y={r * cell} width={cell} height={cell} fill="#1a6b68" /> : null
        )
      )}
    </svg>
  );
}

// ─── Illustration tête de massage (SVG simplifié) ────────────────────────────
function MassageIllustration() {
  return (
    <svg width="130" height="100" viewBox="0 0 130 100" fill="none">
      {/* Fond cercle dégradé */}
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0f7f6"/>
          <stop offset="100%" stopColor="#b2e8e6"/>
        </radialGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5c9a8"/>
          <stop offset="100%" stopColor="#e8a87c"/>
        </linearGradient>
      </defs>

      {/* Fond ovale */}
      <ellipse cx="65" cy="54" rx="58" ry="44" fill="url(#bg)"/>

      {/* Corps / épaules personne allongée */}
      <ellipse cx="62" cy="72" rx="28" ry="10" fill="#0FAFAA" opacity="0.3"/>
      <rect x="38" y="62" width="48" height="14" rx="7" fill="#d4f0ee"/>

      {/* Tête */}
      <ellipse cx="62" cy="52" rx="16" ry="18" fill="url(#skin)"/>

      {/* Cheveux */}
      <ellipse cx="62" cy="40" rx="16" ry="10" fill="#2d2020"/>
      <ellipse cx="46" cy="48" rx="5" ry="10" fill="#2d2020"/>
      <ellipse cx="78" cy="48" rx="5" ry="10" fill="#2d2020"/>

      {/* Mains du masseur */}
      <ellipse cx="46" cy="50" rx="7" ry="5" fill="#f5c9a8" transform="rotate(-20 46 50)"/>
      <ellipse cx="78" cy="50" rx="7" ry="5" fill="#f5c9a8" transform="rotate(20 78 50)"/>

      {/* Feuilles gauche */}
      <ellipse cx="18" cy="60" rx="10" ry="5" fill="#0FAFAA" transform="rotate(-40 18 60)"/>
      <ellipse cx="12" cy="50" rx="8" ry="4" fill="#13c4bf" transform="rotate(-60 12 50)"/>
      <ellipse cx="22" cy="42" rx="7" ry="3.5" fill="#0FAFAA" transform="rotate(-30 22 42)"/>

      {/* Feuilles droite */}
      <ellipse cx="112" cy="58" rx="10" ry="5" fill="#0FAFAA" transform="rotate(40 112 58)"/>
      <ellipse cx="118" cy="48" rx="8" ry="4" fill="#13c4bf" transform="rotate(60 118 48)"/>
      <ellipse cx="108" cy="40" rx="7" ry="3.5" fill="#0FAFAA" transform="rotate(30 108 40)"/>

      {/* Coquillage */}
      <ellipse cx="62" cy="90" rx="6" ry="4" fill="#98d8d5"/>
      <path d="M58 90 Q62 86 66 90" stroke="#0FAFAA" strokeWidth="1" fill="none"/>
    </svg>
  );
}

// ─── Vagues teal en bas ──────────────────────────────────────────────────────
function TealWaves() {
  return (
    <svg width="260" height="48" viewBox="0 0 260 48" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0FAFAA" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#0FAFAA" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <path d="M0 28 Q32 14 65 28 Q98 42 130 28 Q162 14 195 28 Q228 42 260 28 L260 48 L0 48 Z" fill="url(#waveGrad)"/>
      <path d="M0 34 Q32 22 65 34 Q98 46 130 34 Q162 22 195 34 Q228 46 260 34 L260 48 L0 48 Z" fill="#0FAFAA" opacity="0.6"/>
    </svg>
  );
}

interface Ripple   { id: number; x: number; y: number }
interface Particle { id: number; x: number; bottom: number; dx: number }

export default function NFCCard3DCustom({ initialRotation = 0 }: { initialRotation?: number }) {
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

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.min(ts - lastTsRef.current, 50);
      lastTsRef.current = ts;
      timeRef.current  += dt;
      if (!isHovRef.current && wrapperRef.current) {
        rotYRef.current = (rotYRef.current + dt * 0.045) % 360;
        const floatY    = Math.sin(timeRef.current * 0.0016) * 14;
        wrapperRef.current.style.transition = 'none';
        wrapperRef.current.style.transform  = `translateY(${floatY}px) rotateY(${rotYRef.current}deg)`;
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

  useEffect(() => {
    if (!isHovered) return;
    const iv = setInterval(() => {
      const id = Date.now() + Math.random();
      setParticles(p => [...p, {
        id,
        x:      15 + Math.random() * 70,
        bottom: 5  + Math.random() * 85,
        dx:     (Math.random() - 0.5) * 56,
      }]);
      setTimeout(() => setParticles(p => p.filter(q => q.id !== id)), 1700);
    }, 280);
    return () => clearInterval(iv);
  }, [isHovered]);

  const handleEnter = () => { isHovRef.current = true;  setIsHovered(true);  };
  const handleLeave = () => { isHovRef.current = false; setIsHovered(false); };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const r  = wrapperRef.current.getBoundingClientRect();
    const tx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * 22;
    const ty = -((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) * 22;
    wrapperRef.current.style.transition = 'transform 0.12s ease-out';
    wrapperRef.current.style.transform  = `translateY(-12px) rotateX(${tx}deg) rotateY(${rotYRef.current + ty}deg) scale(1.04)`;
    if (shadowRef.current) {
      shadowRef.current.style.transform = 'scaleX(0.82)';
      shadowRef.current.style.opacity   = '0.14';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const r  = wrapperRef.current.getBoundingClientRect();
    const id = Date.now();
    setRipples(p => [...p, {
      id,
      x: ((e.clientX - r.left) / r.width)  * 100,
      y: ((e.clientY - r.top)  / r.height) * 100,
    }]);
    setTimeout(() => setRipples(p => p.filter(q => q.id !== id)), 950);
  };

  return (
    <div className={styles.scene}>
      {/* NFC rings */}
      <div className={`${styles.nfcContainer} ${isHovered ? styles.nfcActive : ''}`}>
        {[0,1,2,3].map(i => (
          <div key={i} className={styles.nfcRing} style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      <div
        ref={wrapperRef}
        className={styles.cardWrapper}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        {/* Stand */}
        <div className={styles.standTop}   />
        <div className={styles.standFace}  />
        <div className={styles.standLeft}  />
        <div className={styles.standRight} />

        {/* ── FRONT — design Marina Massage ── */}
        <div className={customStyles.front}>
          <div className={styles.sheen} />

          {/* Illustration */}
          <div className={customStyles.illustrationArea}>
            <MassageIllustration />
          </div>

          {/* Nom business */}
          <div className={customStyles.brandArea}>
            <p className={customStyles.brandName}>Marina</p>
            <p className={customStyles.brandSub}>— MASSAGE —</p>
          </div>

          {/* Tagline */}
          <div className={customStyles.taglineArea}>
            <p className={customStyles.taglineLine1}>Nos encantaría</p>
            <p className={customStyles.taglineLine2}>conocer tu opinión</p>
          </div>

          {/* QR code */}
          <div className={customStyles.qrBlock}>
            <QRCodeSVG />
          </div>

          {/* Toca o Escanea */}
          <div className={customStyles.tapRow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M20 12a8 8 0 01-8 8" stroke="#0FAFAA" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 12a4 4 0 01-4 4" stroke="#0FAFAA" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="1.8" fill="#0FAFAA"/>
            </svg>
            <span className={customStyles.tapText}>Toca</span>
            <span className={customStyles.tapOr}>o</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0FAFAA" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="5.5" y="5.5" width="2" height="2" fill="#0FAFAA" stroke="none"/>
              <rect x="16.5" y="5.5" width="2" height="2" fill="#0FAFAA" stroke="none"/>
              <rect x="5.5" y="16.5" width="2" height="2" fill="#0FAFAA" stroke="none"/>
              <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="#0FAFAA" stroke="none"/>
            </svg>
            <span className={customStyles.tapText}>Escanea</span>
          </div>

          {/* Vagues teal en bas */}
          <div className={customStyles.wavesArea}>
            <TealWaves />
          </div>

          {/* Particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className={styles.particle}
              style={{ left: `${p.x}%`, bottom: `${p.bottom}%`, '--dx': `${p.dx}px`, background: 'rgba(15,175,170,0.75)' } as React.CSSProperties}
            />
          ))}
          {ripples.map(r => (
            <span
              key={r.id}
              className={styles.ripple}
              style={{ left: `${r.x}%`, top: `${r.y}%`, background: 'rgba(15,175,170,0.35)' }}
            />
          ))}
        </div>

        {/* ── BACK ── */}
        <div className={`${customStyles.back}`}>
          <div className={styles.backInner}>
            <div className={styles.backWatermark} style={{ opacity: 0.06 }}>
              <MassageIllustration />
            </div>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
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
            <p className={styles.backText} style={{ color: '#0FAFAA' }}>NFC Technology</p>
            <p className={styles.backSub}>Tap to leave a Google review</p>
          </div>
          <div className={customStyles.backWaveBar}>
            <TealWaves />
          </div>
        </div>
      </div>

      <div ref={shadowRef} className={styles.shadow} />
    </div>
  );
}

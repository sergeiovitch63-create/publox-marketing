'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface BackButtonProps {
  fallbackHref?: string;
  directHref?: string;
  className?: string;
}

export default function BackButton({ fallbackHref, directHref, className = '' }: BackButtonProps) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('common');
  const [mounted, setMounted] = useState(false);
  const [headerH, setHeaderH] = useState(72); // Default header height (64px mobile + padding)

  // Ensure component is mounted before rendering portal (SSR safety)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate header height and update on resize
  useEffect(() => {
    // Guard: only run on client side
    if (typeof window === 'undefined') return;
    
    const header = document.getElementById('site-header');
    const update = () => {
      const h = header?.getBoundingClientRect().height ?? 72;
      setHeaderH(Math.ceil(h));
    };
    
    // Initial update
    update();
    
    // Listen to resize events
    window.addEventListener('resize', update);
    
    // Also update when DOM changes (e.g., mobile menu opens/closes)
    const observer = new MutationObserver(update);
    if (header) {
      observer.observe(header, { attributes: true, childList: true, subtree: true });
    }
    
    return () => {
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, []); // Empty deps: run once on mount

  // Add dynamic style for desktop breakpoint (left position only)
  useEffect(() => {
    // Guard: only run on client side
    if (typeof window === 'undefined') return;
    
    const styleId = 'back-button-desktop-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @media (min-width: 768px) {
          .back-button-floating {
            left: calc(24px + env(safe-area-inset-left, 0px)) !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, []); // Empty deps: run once on mount

  const handleBack = () => {
    // If directHref is provided, always use it (don't use router.back())
    if (directHref) {
      router.push(directHref);
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      // Check if there's history to go back to
      router.back();
    } else if (fallbackHref) {
      // If no history, use fallback
      router.push(fallbackHref);
    } else {
      // Default fallback to home
      router.push(`/${locale}`);
    }
  };

  // Fixed floating button: top-left, positioned just below header
  // z-60: above header (z-50) and content, but below modals if needed
  // Rendered via portal directly to body to avoid parent transform/overflow issues
  const baseClasses = 'fixed z-[60] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-button-primary-bg text-white text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 shadow-soft';
  
  // Position: fixed, just below header (header height + 12px spacing)
  // Mobile: left = calc(16px + env(safe-area-inset-left, 0px))
  // Desktop: left = calc(24px + env(safe-area-inset-left, 0px))
  // Use inline styles to ensure fixed positioning works correctly
  const positionStyle: React.CSSProperties = {
    position: 'fixed',
    top: `calc(env(safe-area-inset-top, 0px) + ${headerH}px + 12px)`,
    left: 'calc(16px + env(safe-area-inset-left, 0px))',
    zIndex: 60,
    pointerEvents: 'auto',
    minWidth: '44px',
    minHeight: '44px',
  };
  
  // Render via portal to body to avoid parent transform/overflow issues
  // This check happens AFTER all hooks are called
  if (!mounted) {
    return null;
  }

  return createPortal(
    <button
      onClick={handleBack}
      className={`${baseClasses} back-button-floating ${className}`}
      style={positionStyle}
      aria-label={t('back')}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span>{t('back')}</span>
    </button>,
    document.body
  );
}


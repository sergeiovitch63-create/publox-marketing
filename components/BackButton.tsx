'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

interface BackButtonProps {
  fallbackHref?: string;
  className?: string;
  absolute?: boolean;
}

export default function BackButton({ fallbackHref, className = '', absolute = false }: BackButtonProps) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('common');

  const handleBack = () => {
    // Check if there's history to go back to
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else if (fallbackHref) {
      // If no history, use fallback
      router.push(fallbackHref);
    } else {
      // Default fallback to home
      router.push(`/${locale}`);
    }
  };

  const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-button-primary-bg text-white text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 shadow-soft';
  const absoluteClasses = absolute ? 'absolute top-4 left-4 z-20' : '';
  
  return (
    <button
      onClick={handleBack}
      className={`${baseClasses} ${absoluteClasses} ${className}`}
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
    </button>
  );
}


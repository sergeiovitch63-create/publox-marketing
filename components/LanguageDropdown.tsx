'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

const flags: Record<Locale, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
  it: '🇮🇹',
  ru: '🇷🇺',
};

const localeNames: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
  it: 'IT',
  ru: 'RU',
};

export default function LanguageDropdown() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: Locale) => {
    // Preserve current route when switching locale
    let newPath = pathname;
    if (pathname.startsWith(`/${locale}/`)) {
      newPath = pathname.replace(`/${locale}/`, `/${newLocale}/`);
    } else if (pathname === `/${locale}`) {
      newPath = `/${newLocale}`;
    } else {
      // Fallback: if pathname doesn't start with locale, assume it's root
      newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
    }
    setIsOpen(false);
    router.push(newPath);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded text-sm transition-all focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 bg-button-primary-bg text-white hover:opacity-90"
        aria-label={`Current language: ${localeNames[locale]}. Click to change language`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{flags[locale]}</span>
        <span className="text-xs">{localeNames[locale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-warm-beige/20 py-2 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-inset ${
                locale === loc
                  ? 'bg-soft-beige text-text-primary font-medium'
                  : 'text-text-secondary hover:bg-soft-beige'
              }`}
              role="menuitem"
              aria-label={`Switch to ${localeNames[loc]}`}
            >
              <span className="text-lg">{flags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

const flags: Record<Locale, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
};

const localeNames: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

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
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-all focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 ${
            locale === loc
              ? 'bg-button-primary-bg text-white'
              : 'hover:bg-soft-beige text-text-secondary'
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
        >
          <span>{flags[loc]}</span>
          <span className="hidden sm:inline">{localeNames[loc]}</span>
        </button>
      ))}
    </div>
  );
}


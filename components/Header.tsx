'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Container from './Container';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { key: 'impresion', href: `/${locale}/impresion` },
    { key: 'sitioWeb', href: `/${locale}/sitio-web` },
    { key: 'marketing', href: `/${locale}/marketing` },
    { key: 'reclutamiento', href: `/${locale}/reclutamiento` },
    { key: 'contacto', href: `/${locale}/contacto` },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold text-text-primary focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 rounded"
          >
            PUBLOX
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-text-primary hover:text-pastel-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 rounded ${
                    active ? 'opacity-100 border-b-2 border-pastel-blue pb-1' : 'opacity-80'
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}


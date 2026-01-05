'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import LanguageDropdown from './LanguageDropdown';
import MobileMenu from './MobileMenu';
import Container from './Container';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <header className="bg-white shadow-soft sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="text-2xl font-bold text-text-primary focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 rounded"
            >
              PUBLOX
            </Link>

            {/* Desktop Navigation */}
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

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Desktop: Language Switcher */}
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>

              {/* Mobile: Language Dropdown */}
              <div className="md:hidden">
                <LanguageDropdown />
              </div>

              {/* Mobile: Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 text-text-primary hover:bg-soft-beige transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}


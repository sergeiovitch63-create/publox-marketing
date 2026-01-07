'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from './Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const tHome = useTranslations('pages.home.hero');
  const locale = useLocale();
  const pathname = usePathname();

  // Main navigation items (always visible)
  const mainNavItems = [
    { key: 'pageMultiLiens', href: `/${locale}/page-multi-liens` },
    { key: 'blocMarketing', href: `/${locale}/marketing` },
    { key: 'sitioWeb', href: `/${locale}/sitio-web` },
  ];

  // Additional items (in mobile menu)
  const additionalItems = [
    { key: 'impresion', href: `/${locale}/impresion` },
    { key: 'reclutamiento', href: `/${locale}/reclutamiento` },
    { key: 'contacto', href: `/${locale}/contacto` },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + '/');
  };

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-warm-beige/20">
            <h2 className="text-lg font-bold text-text-primary">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4" role="navigation" aria-label="Main navigation">
            <div className="flex flex-col">
              {/* Main nav items */}
              {mainNavItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={onClose}
                    className={`px-6 py-3 text-text-primary hover:bg-soft-beige transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-inset ${
                      active ? 'bg-soft-beige border-l-4 border-pastel-blue font-medium' : ''
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
              
              {/* Separator */}
              <div className="px-6 py-2 border-t border-warm-beige/20 my-2" />
              
              {/* Additional items */}
              {additionalItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={onClose}
                    className={`px-6 py-3 text-text-primary hover:bg-soft-beige transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-inset ${
                      active ? 'bg-soft-beige border-l-4 border-pastel-blue font-medium' : ''
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-warm-beige/20">
            <Button href={`/${locale}/necesitas`} variant="primary" className="w-full">
              {tHome('cta')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}


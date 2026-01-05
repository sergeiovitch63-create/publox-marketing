'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Container from './Container';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-soft-beige py-12 mt-auto">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left side */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">{t('title')}</h3>
            <p className="text-text-secondary mb-4 whitespace-pre-line">
              {t('description')}
            </p>
            <div className="w-10 h-10 bg-warm-beige rounded-full" />
          </div>

          {/* Right side */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-text-primary font-semibold">
              {t('information')}
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={`/${locale}/contacto`}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 rounded"
              >
                {t('contact')}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 rounded"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/404`}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 rounded"
              >
                {t('notFound')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-warm-beige/30">
          <p className="text-text-secondary text-sm text-center">{t('copyright')}</p>
        </div>
      </Container>
    </footer>
  );
}


import { Metadata } from 'next';
import { locales, defaultLocale, type Locale } from '@/i18n';

const baseUrl = 'https://publox-marketing.com';
const siteName = 'PUBLOX';

// Metadata par locale
const metadataByLocale: Record<Locale, { title: string; description: string; keywords: string }> = {
  es: {
    title: 'PUBLOX — Marketing digital, sitios web y automatización',
    description: 'PUBLOX ayuda a negocios a conseguir clientes con sitios web rápidos, SEO, branding y automatizaciones.',
    keywords: 'marketing digital, sitios web, automatización, SEO, branding, captación de clientes, Tenerife',
  },
  en: {
    title: 'PUBLOX — Digital marketing, websites & automation',
    description: 'PUBLOX helps businesses get clients with fast websites, SEO, branding and automations.',
    keywords: 'digital marketing, websites, automation, SEO, branding, client acquisition, Tenerife',
  },
  fr: {
    title: 'PUBLOX — Marketing digital, sites web & automatisation',
    description: 'PUBLOX aide les entreprises à obtenir des clients via sites web rapides, SEO, branding et automatisations.',
    keywords: 'marketing digital, sites web, automatisation, SEO, branding, acquisition de clients, Tenerife',
  },
};

// Mapper locale vers code OpenGraph
const localeToOGLocale: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_US',
  fr: 'fr_FR',
};

/**
 * Génère les metadata SEO pour une page donnée
 * @param locale - La locale (es, en, fr)
 * @param relativePath - Le chemin relatif sans la locale (ex: 'marketing', 'contacto', '')
 * @param customTitle - Titre personnalisé (optionnel)
 * @param customDescription - Description personnalisée (optionnel)
 */
export function generateMetadataForLocale(
  locale: Locale,
  relativePath: string = '',
  customTitle?: string,
  customDescription?: string
): Metadata {
  const localeMetadata = metadataByLocale[locale];
  const title = customTitle || localeMetadata.title;
  const description = customDescription || localeMetadata.description;

  // Construire le path complet avec la locale
  const pathWithLocale = relativePath ? `/${locale}/${relativePath}` : `/${locale}`;
  const canonicalUrl = `${baseUrl}${pathWithLocale}`;

  // Construire les URLs pour chaque locale (pour hreflang)
  const buildAlternateUrl = (loc: Locale) => {
    const path = relativePath ? `/${loc}/${relativePath}` : `/${loc}`;
    return `${baseUrl}${path}`;
  };

  // Générer les alternates pour hreflang
  const alternates: Metadata['alternates'] = {
    canonical: canonicalUrl,
    languages: {
      'es': buildAlternateUrl('es'),
      'en': buildAlternateUrl('en'),
      'fr': buildAlternateUrl('fr'),
      'x-default': buildAlternateUrl('es'), // Default vers ES
    },
  };

  // Déterminer robots selon l'environnement
  const isProduction = process.env.VERCEL_ENV === 'production';
  const robots = isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false };

  // OpenGraph metadata (sans image pour éviter 404)
  const openGraph: Metadata['openGraph'] = {
    type: 'website',
    locale: localeToOGLocale[locale],
    url: canonicalUrl,
    siteName,
    title,
    description,
    // Pas d'image pour éviter les 404
  };

  // Twitter metadata
  const twitter: Metadata['twitter'] = {
    card: 'summary_large_image',
    title,
    description,
    // Pas d'image pour éviter les 404
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `${siteName} — %s`,
      default: title,
    },
    description,
    keywords: localeMetadata.keywords,
    alternates,
    robots,
    openGraph,
    twitter,
  };
}



import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n';

const baseUrl = 'https://publox-marketing.com';

// Routes principales du site (sans le préfixe locale)
// Organisées par sections principales comme demandé
const routes = [
  '', // Home page
  'necesitas',
  'contacto',
  'reclutamiento',
  'privacy',
  'publox', // Page marque PUBLOX
  // Marketing & Captación
  'marketing',
  'marketing/adquisicion',
  'marketing/branding-adquisicion',
  'marketing/automatizacion-adquisicion-branding',
  // Sitio Web
  'sitio-web',
  'sitio-web/corporativo',
  'sitio-web/tienda-online',
  // Impresión
  'impresion',
  'impresion/tarjetas-visita',
  'impresion/flyers-promocionales',
  'impresion/dipticos-tripticos',
  'impresion/caballete',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Ajouter la root URL (canonical, redirige vers /es)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // Générer les URLs pour chaque locale (es, en, fr)
  for (const locale of locales) {
    for (const route of routes) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      const url = `${baseUrl}${path}`;
      
      // Définir la priorité selon le type de page
      let priority: number;
      const changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

      if (route === '') {
        // Home page - highest priority
        priority = 1.0;
      } else if (
        // Main sections: Impresión, Sitio Web, Marketing, Reclutamiento, Contacto, Publox
        route === 'impresion' ||
        route === 'sitio-web' ||
        route === 'marketing' ||
        route === 'reclutamiento' ||
        route === 'contacto' ||
        route === 'necesitas' ||
        route === 'publox'
      ) {
        // Main sections - high priority
        priority = 0.9;
      } else {
        // Sub-pages (service detail pages) - medium priority
        priority = 0.8;
      }

      sitemapEntries.push({
        url,
        lastModified: now,
        changeFrequency,
        priority,
      });
    }
  }

  return sitemapEntries;
}


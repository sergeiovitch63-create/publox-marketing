import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const baseUrl = 'https://publox-marketing.com';

// Toutes les routes statiques du site (sans le préfixe locale)
const routes = [
  '', // Home page
  'necesitas',
  'contacto',
  'reclutamiento',
  'privacy',
  'marketing',
  'marketing/adquisicion',
  'marketing/branding-adquisicion',
  'marketing/automatizacion-adquisicion-branding',
  'sitio-web',
  'sitio-web/corporativo',
  'sitio-web/tienda-online',
  'impresion',
  'impresion/tarjetas-visita',
  'impresion/flyers-promocionales',
  'impresion/dipticos-tripticos',
  'impresion/caballete',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Ajouter la root URL (qui redirige vers /es)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // Générer les URLs pour chaque locale
  for (const locale of locales) {
    for (const route of routes) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      const url = `${baseUrl}${path}`;
      
      // Définir la priorité et changeFrequency selon le type de page
      let priority: number;
      const changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

      if (route === '') {
        // Home page
        priority = 1.0;
      } else if (
        route.startsWith('marketing/') ||
        route.startsWith('sitio-web/') ||
        route.startsWith('impresion/')
      ) {
        // Pages de services (sous-pages)
        priority = 0.8;
      } else {
        // Pages principales (necesitas, contacto, etc.)
        priority = 0.9;
      }

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  }

  return sitemapEntries;
}


import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://publox-marketing.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/es/dejar-opinion', '/fr/dejar-opinion', '/en/dejar-opinion', '/it/dejar-opinion', '/ru/dejar-opinion'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


import type { Review } from '@/components/ReviewCard';

/** Shape of a row coming from the Supabase `reviews` table. */
export interface ReviewRow {
  id: string;
  company_name: string;
  location: string;
  service_type: string;
  rating: number;
  review_text: string;
  page_link: string | null;
  verified: boolean;
  created_at: string;
}

/** UI labels (CTA / expand / collapse) per locale. */
export const reviewUiByLocale: Record<
  string,
  { ctaLabel: string; expandLabel: string; collapseLabel: string }
> = {
  es: { ctaLabel: 'Ver trabajo →', expandLabel: 'Ver más', collapseLabel: 'Ver menos' },
  fr: { ctaLabel: 'Voir le travail →', expandLabel: 'Voir plus', collapseLabel: 'Voir moins' },
  en: { ctaLabel: 'View work →', expandLabel: 'Read more', collapseLabel: 'Read less' },
  it: { ctaLabel: 'Vedi il lavoro →', expandLabel: 'Vedi di più', collapseLabel: 'Vedi meno' },
  ru: { ctaLabel: 'Смотреть работу →', expandLabel: 'Подробнее', collapseLabel: 'Скрыть' },
};

export function getReviewUi(locale: string) {
  return reviewUiByLocale[locale] || reviewUiByLocale.es;
}

type LocalizedContent = { location: string; service: string; quote: string };

/** Featured (hand-written) reviews shown alongside the database ones. */
export type FeaturedId = 'lucas' | 'liga' | 'fincas' | 'sl74';

interface FeaturedMeta {
  id: string;
  companyName: string;
  href: string;
  content: Record<string, LocalizedContent>;
}

const FEATURED: Record<FeaturedId, FeaturedMeta> = {
  lucas: {
    id: 'lucas-le-plaquiste',
    companyName: 'Lucas Le Plaquiste',
    href: 'https://lucas-leplaquiste-55q4.vercel.app',
    content: {
      es: { location: 'Montpellier, Francia', service: 'Pagina multi-enlace • Plaquista', quote: 'Muy profesional, rapido y con un resultado impecable.' },
      fr: { location: 'Montpellier, France', service: 'Page multi-liens • Plaquiste', quote: 'Tres professionnel, rapide et avec un resultat impeccable.' },
      en: { location: 'Montpellier, France', service: 'Multi-link page • Plasterboard installer', quote: 'Very professional, fast, and with an impeccable result.' },
      it: { location: 'Montpellier, Francia', service: 'Pagina multi-link • Cartongessista', quote: 'Molto professionale, veloce e con un risultato impeccabile.' },
      ru: { location: 'Монпелье, Франция', service: 'Мульти-ссылка • Гипсокартонщик', quote: 'Очень профессионально, быстро и с безупречным результатом.' },
    },
  },
  liga: {
    id: 'liga-skorosti',
    companyName: 'Liga Skorosti',
    href: 'https://liga-steel.vercel.app/',
    content: {
      es: { location: 'Kaliningrado, Rusia', service: 'Agencia de alquiler de bicicletas electricas • Sitio vitrina moderno', quote: 'Equipo muy profesional y rapido. Sitio claro, moderno y efectivo para mostrar todos los servicios.' },
      fr: { location: 'Kaliningrad, Russie', service: 'Agence de location de velo electrique • Site vitrine moderne', quote: 'Equipe tres professionnelle et rapide. Site clair, moderne et efficace pour presenter tous les services.' },
      en: { location: 'Kaliningrad, Russia', service: 'Electric bike rental agency • Modern showcase website', quote: 'Very professional and fast team. Clear, modern and effective website to showcase all services.' },
      it: { location: 'Kaliningrad, Russia', service: 'Agenzia di noleggio biciclette elettriche • Sito vetrina moderno', quote: 'Team molto professionale e veloce. Sito chiaro, moderno ed efficace per presentare tutti i servizi.' },
      ru: { location: 'Калининград, Россия', service: 'Агентство аренды электровелосипедов • Современный сайт-витрина', quote: 'Очень профессиональная и быстрая команда. Сайт понятный, современный и эффективный для показа всех услуг.' },
    },
  },
  fincas: {
    id: 'fincas-canarias',
    companyName: 'Fincas Canarias',
    href: 'https://publink-s2oo.vercel.app/fincas-canarias',
    content: {
      es: { location: 'Puerto de la Cruz, Tenerife', service: 'Tienda de productos locales de Tenerife • Sitio vitrina moderno', quote: 'Resultado muy profesional. El sitio presenta claramente la tienda y facilita que los clientes encuentren la informacion importante.' },
      fr: { location: 'Puerto de la Cruz, Tenerife', service: 'Magasin de produits locaux de Tenerife • Site vitrine moderne', quote: 'Resultat tres professionnel. Le site presente clairement la boutique et aide les clients a trouver rapidement les informations importantes.' },
      en: { location: 'Puerto de la Cruz, Tenerife', service: 'Local Tenerife products store • Modern showcase website', quote: 'Very professional result. The website clearly presents the store and helps customers quickly find key information.' },
      it: { location: 'Puerto de la Cruz, Tenerife', service: 'Negozio di prodotti locali di Tenerife • Sito vetrina moderno', quote: 'Risultato molto professionale. Il sito presenta chiaramente il negozio e aiuta i clienti a trovare rapidamente le informazioni importanti.' },
      ru: { location: 'Пуэрто-де-ла-Крус, Тенерифе', service: 'Магазин местных продуктов Тенерифе • Современный сайт-витрина', quote: 'Очень профессиональный результат. Сайт понятно представляет магазин и помогает клиентам быстро находить важную информацию.' },
    },
  },
  sl74: {
    id: 'sl74-renov',
    companyName: 'SL74 Rénov',
    href: 'https://publink-s2oo.vercel.app/sl74renov',
    content: {
      es: { location: 'Thonon-les-Bains, Francia', service: 'Electricista • Pagina multi-enlace', quote: 'Sitio claro y profesional. Presenta muy bien los servicios electricos y facilita el contacto rapido.' },
      fr: { location: 'Thonon-les-Bains, France', service: 'Electricien • Page multi-liens', quote: 'Site clair et professionnel. Il presente tres bien les services electriques et facilite un contact rapide.' },
      en: { location: 'Thonon-les-Bains, France', service: 'Electrician • Multi-link page', quote: 'Clear and professional website. It showcases electrical services very well and makes contact quick and easy.' },
      it: { location: 'Thonon-les-Bains, Francia', service: 'Elettricista • Pagina multi-link', quote: 'Sito chiaro e professionale. Presenta molto bene i servizi elettrici e rende il contatto rapido e semplice.' },
      ru: { location: 'Тонон-ле-Бен, Франция', service: 'Электрик • Мульти-ссылка', quote: 'Понятный и профессиональный сайт. Отлично показывает электротехнические услуги и упрощает быстрый контакт.' },
    },
  },
};

function buildFeatured(id: FeaturedId, locale: string): Review {
  const meta = FEATURED[id];
  const content = meta.content[locale] || meta.content.es;
  const ui = getReviewUi(locale);
  return {
    id: meta.id,
    stars: 5,
    ratingText: '5.0',
    companyName: meta.companyName,
    location: content.location,
    service: content.service,
    quote: content.quote,
    href: meta.href,
    verified: true,
    ctaLabel: ui.ctaLabel,
    expandLabel: ui.expandLabel,
    collapseLabel: ui.collapseLabel,
  };
}

function mapRow(row: ReviewRow, locale: string): Review {
  const ui = getReviewUi(locale);
  return {
    id: row.id,
    stars: row.rating,
    ratingText: `${Number(row.rating).toFixed(1)}`,
    companyName: row.company_name,
    location: row.location,
    service: row.service_type,
    quote: row.review_text,
    date: row.created_at
      ? new Date(row.created_at).toLocaleDateString(locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : undefined,
    href: row.page_link || `/${locale}`,
    verified: row.verified,
    expandLabel: ui.expandLabel,
    collapseLabel: ui.collapseLabel,
  };
}

/**
 * Build the list of reviews to display: database rows first (most recent),
 * then any featured reviews not already present.
 *
 * @param emptyFallback featured ids shown when there are no database rows
 * @param ensureWhenRows featured ids appended (if missing) when there ARE rows
 */
export function buildReviewList(
  locale: string,
  rows: ReviewRow[] | null,
  emptyFallback: FeaturedId[],
  ensureWhenRows: FeaturedId[]
): Review[] {
  if (rows && rows.length > 0) {
    const dbReviews = rows.map((row) => mapRow(row, locale));
    const extras = ensureWhenRows
      .filter((id) => !rows.some((row) => row.id === FEATURED[id].id))
      .map((id) => buildFeatured(id, locale));
    return [...dbReviews, ...extras];
  }
  return emptyFallback.map((id) => buildFeatured(id, locale));
}

/** Average rating and count over a list of reviews (for the home summary). */
export function getReviewStats(reviews: Review[]): { average: string; count: number } {
  if (reviews.length === 0) return { average: '0.0', count: 0 };
  const sum = reviews.reduce((acc, r) => acc + (Number(r.stars) || 0), 0);
  return { average: (sum / reviews.length).toFixed(1), count: reviews.length };
}

import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import ReviewCard, { Review } from '@/components/ReviewCard';
import { getSupabaseServerClient } from '@/src/lib/supabaseServer';

export default async function AvisosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.avisos');

  const supabase = getSupabaseServerClient();
  let reviewsRows: any[] | null = null;

  if (supabase) {
    const { data } = await supabase
      .from('reviews')
      .select('id, company_name, location, service_type, rating, review_text, page_link, verified, created_at')
      .order('created_at', { ascending: false })
      .limit(30);
    reviewsRows = data;
  }

  const reviewUiByLocale: Record<string, { ctaLabel: string; expandLabel: string; collapseLabel: string }> = {
    es: { ctaLabel: 'Ver trabajo →', expandLabel: 'Ver más', collapseLabel: 'Ver menos' },
    fr: { ctaLabel: 'Voir le travail →', expandLabel: 'Voir plus', collapseLabel: 'Voir moins' },
    en: { ctaLabel: 'View work →', expandLabel: 'Read more', collapseLabel: 'Read less' },
    it: { ctaLabel: 'Vedi il lavoro →', expandLabel: 'Vedi di più', collapseLabel: 'Vedi meno' },
    ru: { ctaLabel: 'Смотреть работу →', expandLabel: 'Подробнее', collapseLabel: 'Скрыть' },
  };

  const lucasContentByLocale: Record<string, { location: string; service: string; quote: string }> = {
    es: {
      location: 'Montpellier, Francia',
      service: 'Pagina multi-enlace • Plaquista',
      quote: 'Muy profesional, rapido y con un resultado impecable.',
    },
    fr: {
      location: 'Montpellier, France',
      service: 'Page multi-liens • Plaquiste',
      quote: 'Tres professionnel, rapide et avec un resultat impeccable.',
    },
    en: {
      location: 'Montpellier, France',
      service: 'Multi-link page • Plasterboard installer',
      quote: 'Very professional, fast, and with an impeccable result.',
    },
    it: {
      location: 'Montpellier, Francia',
      service: 'Pagina multi-link • Cartongessista',
      quote: 'Molto professionale, veloce e con un risultato impeccabile.',
    },
    ru: {
      location: 'Монпелье, Франция',
      service: 'Мульти-ссылка • Гипсокартонщик',
      quote: 'Очень профессионально, быстро и с безупречным результатом.',
    },
  };

  const ligaContentByLocale: Record<string, { location: string; service: string; quote: string }> = {
    es: {
      location: 'Kaliningrado, Rusia',
      service: 'Agencia de alquiler de bicicletas electricas • Sitio vitrina moderno',
      quote: 'Equipo muy profesional y rapido. Sitio claro, moderno y efectivo para mostrar todos los servicios.',
    },
    fr: {
      location: 'Kaliningrad, Russie',
      service: 'Agence de location de velo electrique • Site vitrine moderne',
      quote: 'Equipe tres professionnelle et rapide. Site clair, moderne et efficace pour presenter tous les services.',
    },
    en: {
      location: 'Kaliningrad, Russia',
      service: 'Electric bike rental agency • Modern showcase website',
      quote: 'Very professional and fast team. Clear, modern and effective website to showcase all services.',
    },
    it: {
      location: 'Kaliningrad, Russia',
      service: 'Agenzia di noleggio biciclette elettriche • Sito vetrina moderno',
      quote: 'Team molto professionale e veloce. Sito chiaro, moderno ed efficace per presentare tutti i servizi.',
    },
    ru: {
      location: 'Калининград, Россия',
      service: 'Агентство аренды электровелосипедов • Современный сайт-витрина',
      quote: 'Очень профессиональная и быстрая команда. Сайт понятный, современный и эффективный для показа всех услуг.',
    },
  };

  const fincasContentByLocale: Record<string, { location: string; service: string; quote: string }> = {
    es: {
      location: 'Puerto de la Cruz, Tenerife',
      service: 'Tienda de productos locales de Tenerife • Sitio vitrina moderno',
      quote: 'Resultado muy profesional. El sitio presenta claramente la tienda y facilita que los clientes encuentren la informacion importante.',
    },
    fr: {
      location: 'Puerto de la Cruz, Tenerife',
      service: 'Magasin de produits locaux de Tenerife • Site vitrine moderne',
      quote: 'Resultat tres professionnel. Le site presente clairement la boutique et aide les clients a trouver rapidement les informations importantes.',
    },
    en: {
      location: 'Puerto de la Cruz, Tenerife',
      service: 'Local Tenerife products store • Modern showcase website',
      quote: 'Very professional result. The website clearly presents the store and helps customers quickly find key information.',
    },
    it: {
      location: 'Puerto de la Cruz, Tenerife',
      service: 'Negozio di prodotti locali di Tenerife • Sito vetrina moderno',
      quote: 'Risultato molto professionale. Il sito presenta chiaramente il negozio e aiuta i clienti a trovare rapidamente le informazioni importanti.',
    },
    ru: {
      location: 'Пуэрто-де-ла-Крус, Тенерифе',
      service: 'Магазин местных продуктов Тенерифе • Современный сайт-витрина',
      quote: 'Очень профессиональный результат. Сайт понятно представляет магазин и помогает клиентам быстро находить важную информацию.',
    },
  };
  const sl74ContentByLocale: Record<string, { location: string; service: string; quote: string }> = {
    es: {
      location: 'Thonon-les-Bains, Francia',
      service: 'Electricista • Pagina multi-enlace',
      quote: 'Sitio claro y profesional. Presenta muy bien los servicios electricos y facilita el contacto rapido.',
    },
    fr: {
      location: 'Thonon-les-Bains, France',
      service: 'Electricien • Page multi-liens',
      quote: 'Site clair et professionnel. Il presente tres bien les services electriques et facilite un contact rapide.',
    },
    en: {
      location: 'Thonon-les-Bains, France',
      service: 'Electrician • Multi-link page',
      quote: 'Clear and professional website. It showcases electrical services very well and makes contact quick and easy.',
    },
    it: {
      location: 'Thonon-les-Bains, Francia',
      service: 'Elettricista • Pagina multi-link',
      quote: 'Sito chiaro e professionale. Presenta molto bene i servizi elettrici e rende il contatto rapido e semplice.',
    },
    ru: {
      location: 'Тонон-ле-Бен, Франция',
      service: 'Электрик • Мульти-ссылка',
      quote: 'Понятный и профессиональный сайт. Отлично показывает электротехнические услуги и упрощает быстрый контакт.',
    },
  };

  const reviewUi = reviewUiByLocale[locale] || reviewUiByLocale.es;
  const lucasContent = lucasContentByLocale[locale] || lucasContentByLocale.es;
  const ligaContent = ligaContentByLocale[locale] || ligaContentByLocale.es;
  const fincasContent = fincasContentByLocale[locale] || fincasContentByLocale.es;
  const sl74Content = sl74ContentByLocale[locale] || sl74ContentByLocale.es;

  const lucasReview: Review = {
    id: 'lucas-le-plaquiste',
    stars: 5,
    ratingText: '5.0',
    companyName: 'Lucas Le Plaquiste',
    location: lucasContent.location,
    service: lucasContent.service,
    quote: lucasContent.quote,
    href: 'https://lucas-leplaquiste-55q4.vercel.app',
    verified: true,
    ctaLabel: reviewUi.ctaLabel,
    expandLabel: reviewUi.expandLabel,
    collapseLabel: reviewUi.collapseLabel,
  };

  const ligaReview: Review = {
    id: 'liga-skorosti',
    stars: 5,
    ratingText: '5.0',
    companyName: 'Liga Skorosti',
    location: ligaContent.location,
    service: ligaContent.service,
    quote: ligaContent.quote,
    href: 'https://liga-steel.vercel.app/',
    verified: true,
    ctaLabel: reviewUi.ctaLabel,
    expandLabel: reviewUi.expandLabel,
    collapseLabel: reviewUi.collapseLabel,
  };

  const fincasReview: Review = {
    id: 'fincas-canarias',
    stars: 5,
    ratingText: '5.0',
    companyName: 'Fincas Canarias',
    location: fincasContent.location,
    service: fincasContent.service,
    quote: fincasContent.quote,
    href: 'https://publink-s2oo.vercel.app/fincas-canarias',
    verified: true,
    ctaLabel: reviewUi.ctaLabel,
    expandLabel: reviewUi.expandLabel,
    collapseLabel: reviewUi.collapseLabel,
  };
  const sl74Review: Review = {
    id: 'sl74-renov',
    stars: 5,
    ratingText: '5.0',
    companyName: 'SL74 Rénov',
    location: sl74Content.location,
    service: sl74Content.service,
    quote: sl74Content.quote,
    href: 'https://publink-s2oo.vercel.app/sl74renov',
    verified: true,
    ctaLabel: reviewUi.ctaLabel,
    expandLabel: reviewUi.expandLabel,
    collapseLabel: reviewUi.collapseLabel,
  };

  const reviews: Review[] =
    reviewsRows && reviewsRows.length > 0
      ? [
          ...reviewsRows.map((row: any) => ({
            id: row.id,
            stars: row.rating,
            ratingText: `${Number(row.rating).toFixed(1)}`,
            companyName: row.company_name,
            location: row.location,
            service: row.service_type,
            quote: row.review_text,
            href: row.page_link || `/${locale}`,
            verified: row.verified,
            expandLabel: reviewUi.expandLabel,
            collapseLabel: reviewUi.collapseLabel,
          })),
          ...(reviewsRows.some((row: any) => row.id === 'lucas-le-plaquiste') ? [] : [lucasReview]),
          ...(reviewsRows.some((row: any) => row.id === 'liga-skorosti') ? [] : [ligaReview]),
          ...(reviewsRows.some((row: any) => row.id === 'fincas-canarias') ? [] : [fincasReview]),
          ...(reviewsRows.some((row: any) => row.id === 'sl74-renov') ? [] : [sl74Review]),
        ]
      : [lucasReview, ligaReview, fincasReview, sl74Review];

  return (
    <>
      <Section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <Container>
          <FadeIn>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{t('back')}</span>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-text-primary mb-4">
              {t('title')}
            </h1>
            <p className="text-center text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {t('intro')}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <FadeIn key={review.id} delay={index * 0.1}>
                <ReviewCard review={review} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


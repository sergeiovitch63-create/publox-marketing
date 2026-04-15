import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import HeroMedia from '@/components/HeroMedia';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import PartnerCarousel from '@/components/PartnerCarousel';
import ReviewsMarquee from '@/components/ReviewsMarquee';
import { Review } from '@/components/ReviewCard';
import { getSupabaseServerClient } from '@/src/lib/supabaseServer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.home');
  const tFooter = await getTranslations('footer');

  // Fetch latest reviews from Supabase
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

  const lucasContent = lucasContentByLocale[locale] || lucasContentByLocale.es;
  const ligaContent = ligaContentByLocale[locale] || ligaContentByLocale.es;
  const fincasContent = fincasContentByLocale[locale] || fincasContentByLocale.es;
  const sl74Content = sl74ContentByLocale[locale] || sl74ContentByLocale.es;
  const reviewUi = reviewUiByLocale[locale] || reviewUiByLocale.es;
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
          ...(reviewsRows.some((row: any) => row.id === 'liga-skorosti') ? [] : [ligaReview]),
          ...(reviewsRows.some((row: any) => row.id === 'fincas-canarias') ? [] : [fincasReview]),
          ...(reviewsRows.some((row: any) => row.id === 'sl74-renov') ? [] : [sl74Review]),
        ]
      : [
          {
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
          },
          ligaReview,
          fincasReview,
          sl74Review,
        ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-blue via-blue-grey to-soft-beige pt-20">
        {/* Cloud blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <Container>
          <div className="text-center pt-20 pb-0 relative z-10 pointer-events-auto">
            {/* Logo Hero */}
            <div className="flex justify-center mb-6 md:mb-8">
              <Image
                src="/media/images/logo-hero.png"
                alt="PUBLOX"
                width={160}
                height={160}
                className="w-[90px] md:w-[140px] h-auto"
                priority
              />
            </div>

            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary">
                {t('hero.titleLine1')}
                <br />
                {t('hero.titleLine2')}
                <br />
                {t('hero.titleLine3')}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto whitespace-pre-line">
                {t('hero.subtitle')}
              </p>
              <div className="mb-16 md:mb-20 relative z-20">
                <Button href={`/${locale}/necesitas`} variant="primary">
                  {t('hero.cta')}
                </Button>
              </div>
            </FadeIn>

            {/* Banner Video */}
            <FadeIn delay={0.2}>
              <div className="bg-soft-beige rounded-image p-4 max-w-4xl mx-auto mb-0">
                <HeroMedia src="/media/videos/HERO.mp4" type="video" ratio="16:9" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CLIENT REVIEWS SECTION */}
      <Section className="py-16 md:py-20">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-3">
              {t('reviews.title')}
            </h2>
            <p className="text-center text-text-secondary mb-8 md:mb-12 max-w-2xl mx-auto">
              {t('reviews.subtitle')}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ReviewsMarquee reviews={reviews} />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex justify-center md:justify-end mt-8 md:mt-10">
              <Button
                href={locale === 'en' ? `/${locale}/reviews` : `/${locale}/avisos`}
                variant="secondary"
              >
                {t('reviews.cta')}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SOLUTIONS TITLE SECTION */}
      <Section className="pt-12 md:pt-16 pb-12 md:pb-16">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary">
              {t('solutionsTitle')}
            </h2>
          </FadeIn>
        </Container>
      </Section>

      {/* SERVICES SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          {/* Service 1: Marketing Block - Image left, Text right */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-28">
              <div className="relative">
                <div className="absolute inset-0 bg-pastel-blue rounded-image -z-10" />
                <div className="absolute inset-[2px] bg-warm-beige rounded-image -z-10" />
                <div className="relative rounded-image overflow-hidden">
                  <VideoPlaceholder
                    src="/media/videos/Captación-de-clientes.mp4"
                    ratio="4:3"
                    rounded={false}
                  />
                </div>
              </div>
              <div className="max-w-[520px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
                  {t('services.captacion.title')}
                </h2>
                <div className="space-y-5 text-text-secondary text-lg leading-relaxed mb-8">
                  <p>
                    {t('services.captacion.text1')}
                  </p>
                  <p>
                    {t('services.captacion.text2')}
                  </p>
                  <p>
                    {t('services.captacion.text3')}
                  </p>
                </div>
                <div className="mt-8">
                  <Button href={`/${locale}/necesitas`} variant="primary">
                    {t('hero.cta')}
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service 2: Sitio Web - Text left, Image right */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                  {t('services.sitioWeb.title')}
                </h2>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.sitioWeb.text1')}
                </p>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.sitioWeb.text2')}
                </p>
                <p className="text-text-secondary mb-6 text-lg">
                  {t('services.sitioWeb.text3')}
                </p>
                <Button href={`/${locale}/necesitas`} variant="primary">
                  {t('hero.cta')}
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-pastel-blue rounded-image -z-10" />
                  <div className="absolute inset-[2px] bg-warm-beige rounded-image -z-10" />
                  <div className="relative rounded-image overflow-hidden">
                    <VideoPlaceholder
                      src="/media/videos/Sitio-web.mp4"
                      ratio="4:3"
                      rounded={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service 3: Impresión - Image left, Text right */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-pastel-blue rounded-image -z-10" />
                <div className="absolute inset-[2px] bg-warm-beige rounded-image -z-10" />
                <div className="relative rounded-image overflow-hidden">
                  <VideoPlaceholder
                    src="/media/videos/Impresión-profesional.mp4"
                    ratio="4:3"
                    rounded={false}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                  {t('services.impresion.title')}
                </h2>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.impresion.text1')}
                </p>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.impresion.text2')}
                </p>
                <p className="text-text-secondary mb-6 text-lg">
                  {t('services.impresion.text3')}
                </p>
                <Button href={`/${locale}/necesitas`} variant="primary">
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* OPORTUNIDAD SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary">
              {t('oportunidad.title')}
            </h2>
            <p className="text-sm uppercase text-center text-text-secondary mb-12 tracking-wider">
              {t('oportunidad.subtitle')}
            </p>
          </FadeIn>

          {/* Large card */}
          <FadeIn>
            <Card className="p-8 md:p-12 bg-blue-grey/30 backdrop-blur-sm mb-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[3/4] rounded-image overflow-hidden bg-warm-beige">
                  <Image
                    src="/media/images/affiliate-20-commission.png"
                    alt={locale === 'es' ? 'Gana hasta un 20% de comisión' : locale === 'en' ? 'Earn up to 20% commission' : 'Gagnez jusqu\'à 20% de commission'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-text-primary">
                    {t('oportunidad.card.title')}
                  </h3>
                  <p className="text-text-secondary mb-4 text-lg">
                    {t('oportunidad.card.text1')}
                  </p>
                  <p className="text-text-secondary mb-4 text-lg">
                    {t('oportunidad.card.text2')}
                  </p>
                  <p className="text-text-secondary mb-6 text-lg">
                    {t('oportunidad.card.text3')}
                  </p>
                  <Button href={`/${locale}/reclutamiento`} variant="primary">
                    {t('oportunidad.card.cta')}
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* WHO WE ARE SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary">
              {t('whoWeAre.title')}
            </h2>
            <p className="text-sm uppercase text-center text-text-secondary mb-12 tracking-wider">
              {t('whoWeAre.subtitle')}
            </p>
          </FadeIn>

          {/* Large Card */}
          <FadeIn delay={0.1}>
            <Card className="max-w-4xl mx-auto p-8 md:p-12 mb-12 hover:shadow-soft-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: NOVYRA Logo */}
                <a
                  href="https://linktr.ee/novagrouptenerife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-2xl overflow-hidden bg-warm-beige border-2 border-warm-beige/50 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/media/images/novira.png"
                    alt="Novyra group logo"
                    width={320}
                    height={320}
                    className="w-full max-w-[280px] md:max-w-[320px] h-auto object-contain"
                  />
                </a>
                {/* Right: Text Content */}
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-text-primary">
                    {t('whoWeAre.card.heading')}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {t('whoWeAre.card.paragraph')}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Mini Cards Grid */}
          <div className="w-full">
            {/* Mobile: Carousel auto-scroll */}
            <div className="mini-partner-carousel-container md:hidden">
              <div className="mini-partner-carousel-track">
                {/* Original set */}
                <FadeIn delay={0.2}>
                  <Link href={`/${locale}`} className="block">
                    <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px] cursor-pointer">
                      <div className="w-full h-20 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                        <Image
                          src="/media/images/logo-hero.png"
                          alt="Logo Novira"
                          width={90}
                          height={90}
                          className="w-[70px] sm:w-[90px] h-auto opacity-90"
                        />
                      </div>
                    </Card>
                  </Link>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <a href="https://www.tenerife-activity.com" target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px] cursor-pointer">
                      <div className="w-full h-20 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                        <Image
                          src="/media/images/tenerife-activity.png"
                          alt="Tenerife Activity logo"
                          width={90}
                          height={90}
                          className="w-[70px] sm:w-[90px] h-auto opacity-90"
                        />
                      </div>
                    </Card>
                  </a>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <a href="https://linktr.ee/chovvlad?fbclid=PAdGRleANokwZleHRuA2FlbQIxMQABp4C_jibC4eMF6DJZSMzdl2I766eCygJYgcKZrupnJJ5Ul84D5apAAigyb2u6_aem_QHvDymULcGt9J14LnI3Q6Q" target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px] cursor-pointer">
                      <div className="w-full h-20 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                        <Image
                          src="/media/images/marina-masaje.png"
                          alt="Marina Masaje logo"
                          width={90}
                          height={90}
                          className="w-[70px] sm:w-[90px] h-auto opacity-90"
                        />
                      </div>
                    </Card>
                  </a>
                </FadeIn>
                {/* Duplicated set for seamless loop */}
                <Link href={`/${locale}`} className="block">
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px] cursor-pointer">
                    <div className="w-full h-20 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                      <Image
                        src="/media/images/logo-hero.png"
                        alt="Logo Novira"
                        width={90}
                        height={90}
                        className="w-[70px] sm:w-[90px] h-auto opacity-90"
                      />
                    </div>
                  </Card>
                </Link>
                <a href="https://www.tenerife-activity.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px] cursor-pointer">
                    <div className="w-full h-20 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                      <Image
                        src="/media/images/tenerife-activity.png"
                        alt="Tenerife Activity logo"
                        width={90}
                        height={90}
                        className="w-[70px] sm:w-[90px] h-auto opacity-90"
                      />
                    </div>
                  </Card>
                </a>
                <a href="https://linktr.ee/chovvlad?fbclid=PAdGRleANokwZleHRuA2FlbQIxMQABp4C_jibC4eMF6DJZSMzdl2I766eCygJYgcKZrupnJJ5Ul84D5apAAigyb2u6_aem_QHvDymULcGt9J14LnI3Q6Q" target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px] cursor-pointer">
                    <div className="w-full h-20 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                      <Image
                        src="/media/images/marina-masaje.png"
                        alt="Marina Masaje logo"
                        width={90}
                        height={90}
                        className="w-[70px] sm:w-[90px] h-auto opacity-90"
                      />
                    </div>
                  </Card>
                </a>
              </div>
            </div>
            {/* Desktop: Static grid */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-6 md:max-w-3xl md:mx-auto">
              <FadeIn delay={0.2}>
                <Link href={`/${locale}`}>
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow cursor-pointer">
                    <div className="w-full h-24 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                      <Image
                        src="/media/images/logo-hero.png"
                        alt="Logo Novira"
                        width={90}
                        height={90}
                        className="w-[90px] h-auto opacity-90"
                      />
                    </div>
                  </Card>
                </Link>
              </FadeIn>
              <FadeIn delay={0.3}>
                <a href="https://www.tenerife-activity.com" target="_blank" rel="noopener noreferrer">
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow cursor-pointer">
                    <div className="w-full h-24 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                      <Image
                        src="/media/images/tenerife-activity.png"
                        alt="Tenerife Activity logo"
                        width={90}
                        height={90}
                        className="w-[90px] h-auto opacity-90"
                      />
                    </div>
                  </Card>
                </a>
              </FadeIn>
              <FadeIn delay={0.4}>
                <a href="https://linktr.ee/chovvlad?fbclid=PAdGRleANokwZleHRuA2FlbQIxMQABp4C_jibC4eMF6DJZSMzdl2I766eCygJYgcKZrupnJJ5Ul84D5apAAigyb2u6_aem_QHvDymULcGt9J14LnI3Q6Q" target="_blank" rel="noopener noreferrer">
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow cursor-pointer">
                    <div className="w-full h-24 rounded-image overflow-hidden bg-warm-beige border border-warm-beige/30 flex items-center justify-center">
                      <Image
                        src="/media/images/marina-masaje.png"
                        alt="Marina Masaje logo"
                        width={90}
                        height={90}
                        className="w-[90px] h-auto opacity-90"
                      />
                    </div>
                  </Card>
                </a>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* PARTNERS CAROUSEL SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary">
                {t('partners.title')}
              </h2>
              <p className="text-sm uppercase text-center text-text-secondary mb-12 tracking-wider">
                {t('partners.subtitle')}
              </p>
            </FadeIn>

            {/* Partners Carousel */}
            <FadeIn delay={0.1}>
              <PartnerCarousel
                locale={locale}
                partners={[
                  {
                    name: 'PUBLOX',
                    image: '/media/images/logo-hero.png',
                    whatsappLink: null,
                    homeLink: `/${locale}`,
                  },
                  {
                    name: 'TENERIFE ACTIVITY',
                    image: '/media/images/tenerife-activity.png',
                    whatsappLink: 'https://www.tenerife-activity.com',
                    homeLink: null,
                  },
                  {
                    name: 'MARINA MASAJE',
                    image: '/media/images/marina-masaje.png',
                    whatsappLink: 'https://linktr.ee/chovvlad?fbclid=PAdGRleANokwZleHRuA2FlbQIxMQABp4C_jibC4eMF6DJZSMzdl2I766eCygJYgcKZrupnJJ5Ul84D5apAAigyb2u6_aem_QHvDymULcGt9J14LnI3Q6Q',
                    homeLink: null,
                  },
                  {
                    name: 'CAFÉ CON ARTE',
                    image: '/media/images/cafe-con-arte.png',
                    whatsappLink: 'https://wa.me/34642053214',
                    homeLink: null,
                  },
                  {
                    name: 'AUTO DETAILING',
                    image: '/media/images/auto-detailing.png',
                    whatsappLink: 'https://linktr.ee/autodetailingpuertodelacruz',
                    homeLink: null,
                  },
                ]}
              />
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}

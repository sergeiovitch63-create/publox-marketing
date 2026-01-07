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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.home');
  const tFooter = await getTranslations('footer');

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
                {/* Left: NOVIRA Logo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-warm-beige border-2 border-warm-beige/50 flex items-center justify-center">
                  <Image
                    src="/media/images/novira.png"
                    alt="Novira group logo"
                    width={320}
                    height={320}
                    className="w-full max-w-[280px] md:max-w-[320px] h-auto object-contain"
                  />
                </div>
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
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px]">
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
                </FadeIn>
                <FadeIn delay={0.3}>
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px]">
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
                </FadeIn>
                <FadeIn delay={0.4}>
                  <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px]">
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
                </FadeIn>
                {/* Duplicated set for seamless loop */}
                <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px]">
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
                <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px]">
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
                <Card className="p-4 hover:shadow-soft-lg transition-shadow flex-none w-[180px] sm:w-[200px]">
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
              </div>
            </div>
            {/* Desktop: Static grid */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-6 md:max-w-3xl md:mx-auto">
              <FadeIn delay={0.2}>
                <Card className="p-4 hover:shadow-soft-lg transition-shadow">
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
              </FadeIn>
              <FadeIn delay={0.3}>
                <Card className="p-4 hover:shadow-soft-lg transition-shadow">
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
              </FadeIn>
              <FadeIn delay={0.4}>
                <Card className="p-4 hover:shadow-soft-lg transition-shadow">
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
                    whatsappLink: 'https://wa.me/34614891153',
                    homeLink: null,
                  },
                  {
                    name: 'MARINA MASAJE',
                    image: '/media/images/marina-masaje.png',
                    whatsappLink: 'https://wa.me/34614202296',
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
                    whatsappLink: 'https://wa.me/34614397963',
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

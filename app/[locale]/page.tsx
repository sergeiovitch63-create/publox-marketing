import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import FrameImage from '@/components/FrameImage';
import HeroMedia from '@/components/HeroMedia';
import VideoPlaceholder from '@/components/VideoPlaceholder';

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
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40" />

        <Container>
          <div className="text-center py-20">
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
              <div className="mb-16 md:mb-20">
                <Button href={`/${locale}/necesitas`} variant="primary">
                  {t('hero.cta')}
                </Button>
              </div>
            </FadeIn>

            {/* Banner Video */}
            <FadeIn delay={0.2}>
              <div className="bg-soft-beige rounded-image p-4 max-w-4xl mx-auto">
                <HeroMedia src="/media/videos/HERO.mp4" type="video" ratio="16:9" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* SERVICES SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          {/* Service 1: Captación - Image left, Text right */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                  {t('services.captacion.title')}
                </h2>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.captacion.text1')}
                </p>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.captacion.text2')}
                </p>
                <p className="text-text-secondary mb-6 text-lg">
                  {t('services.captacion.text3')}
                </p>
                <Button href={`/${locale}/necesitas`} variant="primary">
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Service 2: Automatización - Text left, Image right */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                  {t('services.automatizacion.title')}
                </h2>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.automatizacion.text1')}
                </p>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.automatizacion.text2')}
                </p>
                <p className="text-text-secondary mb-6 text-lg">
                  {t('services.automatizacion.text3')}
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
                      src="/media/videos/Automatización.mp4"
                      ratio="4:3"
                      rounded={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service 3: Redes Sociales - Image left, Text right */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
              <div className="relative">
                <div className="absolute inset-0 bg-pastel-blue rounded-image -z-10" />
                <div className="absolute inset-[2px] bg-warm-beige rounded-image -z-10" />
                <div className="relative rounded-image overflow-hidden">
                  <VideoPlaceholder
                    src="/media/videos/Redes-sociales.mp4"
                    ratio="4:3"
                    rounded={false}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                  {t('services.redesSociales.title')}
                </h2>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.redesSociales.text1')}
                </p>
                <p className="text-text-secondary mb-4 text-lg">
                  {t('services.redesSociales.text2')}
                </p>
                <p className="text-text-secondary mb-6 text-lg">
                  {t('services.redesSociales.text3')}
                </p>
                <Button href={`/${locale}/necesitas`} variant="primary">
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Service 4: Sitio Web - Text left, Image right */}
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

          {/* Service 5: Impresión - Image left, Text right */}
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

      {/* SOLUCIÓN SECTION */}
      <Section bgColor="soft-beige" className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-primary">
              {t('solucion.titleLine1')}
              <br />
              {t('solucion.titleLine2')}
            </h2>
          </FadeIn>

          {/* Row 1: 2 large cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn>
              <Card className="p-8 hover:shadow-soft-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  {t('solucion.card1.title')}
                </h3>
                <div className="mb-6 relative aspect-square max-w-xs mx-auto rounded-image overflow-hidden bg-warm-beige">
                  <Image
                    src="/media/images/commission-system.png"
                    alt={locale === 'es' ? 'Estrategia enfocada en resultados' : locale === 'en' ? 'Results-focused strategy' : 'Stratégie axée sur les résultats'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <p className="text-text-secondary text-lg">
                  {t('solucion.card1.text')}
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="p-8 hover:shadow-soft-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  {t('solucion.card2.title')}
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-warm-beige rounded-image"
                    />
                  ))}
                </div>
                <p className="text-text-secondary text-lg">
                  {t('solucion.card2.text')}
                </p>
              </Card>
            </FadeIn>
          </div>

          {/* Row 2: 3 small cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn>
              <Card className="p-6 hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-text-primary">
                  {t('solucion.card3.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('solucion.card3.text')}
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="p-6 hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-text-primary">
                  {t('solucion.card4.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('solucion.card4.text')}
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-6 hover:shadow-soft-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-text-primary">
                  {t('solucion.card5.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('solucion.card5.text')}
                </p>
              </Card>
            </FadeIn>
          </div>
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
                  <p className="text-text-secondary text-lg">
                    {t('oportunidad.card.text3')}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* 3 vignettes */}
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="text-center">
                <div className="relative aspect-square mb-4 max-w-xs mx-auto rounded-image overflow-hidden bg-warm-beige">
                  <Image
                    src="/media/images/no-tech-knowledge.png"
                    alt={locale === 'es' ? 'Sin conocimientos técnicos' : locale === 'en' ? 'No technical knowledge required' : 'Aucune connaissance technique requise'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <h4 className="font-bold mb-2 text-text-primary">
                  {t('oportunidad.vignette1.title')}
                </h4>
                <p className="text-text-secondary text-sm">
                  {t('oportunidad.vignette1.text')}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="relative aspect-square mb-4 max-w-xs mx-auto rounded-image overflow-hidden bg-warm-beige">
                  <Image
                    src="/media/images/your-mission-connect.png"
                    alt={locale === 'es' ? 'Tu misión es conectar negocios con PUBLOX' : locale === 'en' ? 'Your mission is to connect businesses with PUBLOX' : 'Votre mission est de connecter les entreprises avec PUBLOX'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <h4 className="font-bold mb-2 text-text-primary">
                  {t('oportunidad.vignette2.title')}
                </h4>
                <p className="text-text-secondary text-sm">
                  {t('oportunidad.vignette2.text')}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="relative aspect-square mb-4 max-w-xs mx-auto rounded-image overflow-hidden bg-warm-beige">
                  <Image
                    src="/media/images/commission-system.png"
                    alt={locale === 'es' ? 'Sistema de comisión basado en resultados' : locale === 'en' ? 'Results-based commission system' : 'Système de commission basé sur les résultats'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <h4 className="font-bold mb-2 text-text-primary">
                  {t('oportunidad.vignette3.title')}
                </h4>
                <p className="text-text-secondary text-sm">
                  {t('oportunidad.vignette3.text')}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}

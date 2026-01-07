import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Card from '@/components/Card';
import BackButton from '@/components/BackButton';

export default async function ReclutamientoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.reclutamiento');

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-blue via-blue-grey to-soft-beige pt-20">
        {/* Back Button */}
        <BackButton fallbackHref={`/${locale}`} absolute />

        {/* Cloud blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40" />

        <Container>
          <div className="text-center py-16">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* MAIN SECTION - Grande card */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <Card className="max-w-5xl mx-auto p-8 md:p-12 hover:shadow-soft-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image - gauche */}
                <div className="order-2 md:order-1 relative aspect-[3/4] rounded-image overflow-hidden bg-warm-beige">
                  <Image
                    src="/media/images/affiliate-20-commission.png"
                    alt={locale === 'es' ? 'Gana hasta un 20% de comisión' : locale === 'en' ? 'Earn up to 20% commission' : 'Gagnez jusqu\'à 20% de commission'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                {/* Texte - droite */}
                <div className="order-1 md:order-2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                    {t('mainSection.title')}
                  </h2>
                  <div className="space-y-4 text-text-secondary text-lg">
                    <p>{t('mainSection.paragraph1')}</p>
                    <p>{t('mainSection.paragraph2')}</p>
                    <p>{t('mainSection.paragraph3')}</p>
                    <p>{t('mainSection.paragraph4')}</p>
                    <p>{t('mainSection.paragraph5')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* ADVANTAGES SECTION - 3 cartes */}
      <Section bgColor="soft-beige" className="py-20 md:py-24 lg:py-28">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <FadeIn>
              <Card className="bg-warm-beige hover:shadow-soft-lg transition-shadow text-center p-6 md:p-8">
                <div className="mb-6 relative aspect-square max-w-[200px] mx-auto rounded-image overflow-hidden bg-white">
                  <Image
                    src="/media/images/no-tech-knowledge.png"
                    alt={locale === 'es' ? 'Sin conocimientos técnicos' : locale === 'en' ? 'No technical knowledge required' : 'Aucune connaissance technique requise'}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <p className="text-text-secondary text-lg">{t('advantages.card1.caption')}</p>
              </Card>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.1}>
              <Card className="bg-warm-beige hover:shadow-soft-lg transition-shadow text-center p-6 md:p-8">
                <div className="mb-6 relative aspect-square max-w-[200px] mx-auto rounded-image overflow-hidden bg-white">
                  <Image
                    src="/media/images/your-mission-connect.png"
                    alt={t('advantages.card2.caption')}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <p className="text-text-secondary text-lg">{t('advantages.card2.caption')}</p>
              </Card>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.2}>
              <Card className="bg-warm-beige hover:shadow-soft-lg transition-shadow text-center p-6 md:p-8">
                <div className="mb-6 relative aspect-square max-w-[200px] mx-auto rounded-image overflow-hidden bg-white">
                  <Image
                    src="/media/images/commission-system.png"
                    alt={locale === 'es' ? 'Sistema de comisión basado en resultados' : locale === 'en' ? 'Results-based commission system' : 'Système de commission basé sur les résultats'}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <p className="text-text-secondary text-lg">{t('advantages.card3.caption')}</p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}

import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import BackButton from '@/components/BackButton';

export default async function MarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.marketing');

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-blue via-blue-grey to-soft-beige pt-20">
        {/* Back Button */}
        <BackButton fallbackHref={`/${locale}/necesitas`} />

        {/* Cloud blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40" />

        <Container>
          <div className="text-center py-16">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                {t('hero.title')}
              </h1>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* BLOCKS SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          {/* BLOCK #1 - Block Marketing */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-16 hover:shadow-soft-lg transition-shadow">
              {/* Video */}
              <div className="mb-8">
                <VideoPlaceholder
                  src="/media/videos/Pack Automatización-Adquisicion-Branding.mp4"
                  ratio="16:9"
                  rounded
                />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-text-primary">
                {t('blocks.blockMarketing.title')}
              </h2>

              {/* Bullets */}
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg text-left">
                <li>{t('blocks.blockMarketing.bullets.list1')}</li>
                <li>{t('blocks.blockMarketing.bullets.list2')}</li>
                <li>{t('blocks.blockMarketing.bullets.list3')}</li>
                <li>{t('blocks.blockMarketing.bullets.list4')}</li>
                <li>{t('blocks.blockMarketing.bullets.list5')}</li>
                <li>{t('blocks.blockMarketing.bullets.list6')}</li>
              </ul>

              {/* Closing Text */}
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('blocks.blockMarketing.closing')}
              </p>

              {/* CTA + Price */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Button href={`/${locale}/contacto`} variant="primary" className="w-full sm:w-auto">
                  {t('blocks.blockMarketing.cta')}
                </Button>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">
                    {t('blocks.blockMarketing.price')}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* BLOCK #2 - Gestion publicitaire */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-16 hover:shadow-soft-lg transition-shadow">
              {/* Video */}
              <div className="mb-8">
                <VideoPlaceholder
                  src="/media/videos/adevertising.mp4"
                  ratio="16:9"
                  rounded
                />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-text-primary">
                {t('blocks.adManagement.title')}
              </h2>

              {/* Bullets */}
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg text-left">
                <li>{t('blocks.adManagement.bullets.list1')}</li>
                <li>{t('blocks.adManagement.bullets.list2')}</li>
                <li>{t('blocks.adManagement.bullets.list3')}</li>
                <li>{t('blocks.adManagement.bullets.list4')}</li>
                <li>{t('blocks.adManagement.bullets.list5')}</li>
              </ul>

              {/* Paragraphs */}
              <p className="text-text-secondary text-lg mb-4 text-left">
                {t('blocks.adManagement.paragraphs.p1')}
              </p>
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('blocks.adManagement.paragraphs.p2')}
              </p>

              {/* CTA + Price */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Button href={`/${locale}/contacto`} variant="primary" className="w-full sm:w-auto">
                  {t('blocks.adManagement.cta')}
                </Button>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">
                    {t('blocks.adManagement.price')}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

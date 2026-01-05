import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import VideoPlaceholder from '@/components/VideoPlaceholder';

export default async function NecesitasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.necesitas');

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-blue via-blue-grey to-soft-beige pt-20">
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

      {/* CHOICE BLOCKS */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          {/* BLOC #1 - Marketing */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-16 hover:shadow-soft-lg transition-shadow">
              <div className="mb-8">
                <VideoPlaceholder
                  src="/media/videos/Captación-de-clientes.mp4"
                  ratio="16:9"
                  rounded
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-text-primary">
                {t('marketing.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-6 text-left">
                {t('marketing.intro')}
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg">
                <li>{t('marketing.list1')}</li>
                <li>{t('marketing.list2')}</li>
                <li>{t('marketing.list3')}</li>
                <li>{t('marketing.list4')}</li>
                <li>{t('marketing.list5')}</li>
                <li>{t('marketing.list6')}</li>
              </ul>
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('marketing.conclusion')}
              </p>
              <div className="flex justify-center">
                <Button href={`/${locale}/marketing`} variant="primary" className="w-full md:w-auto">
                  {t('marketing.cta')}
                </Button>
              </div>
            </Card>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {t('separator')}
            </p>
          </div>

          {/* BLOC #2 - Sitio Web */}
          <FadeIn>
            <div
              className="max-w-3xl mx-auto rounded-card p-8 md:p-12 mb-16 shadow-soft hover:shadow-soft-lg transition-shadow"
              style={{ backgroundColor: '#F2E6A5' }}
            >
              <div className="mb-8">
                <VideoPlaceholder
                  src="/media/videos/Sitio-web.mp4"
                  ratio="16:9"
                  rounded
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                {t('sitioWeb.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-6 text-left">
                {t('sitioWeb.intro')}
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg">
                <li>{t('sitioWeb.list1')}</li>
                <li>{t('sitioWeb.list2')}</li>
                <li>{t('sitioWeb.list3')}</li>
                <li>{t('sitioWeb.list4')}</li>
                <li>{t('sitioWeb.list5')}</li>
                <li>{t('sitioWeb.list6')}</li>
              </ul>
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('sitioWeb.conclusion')}
              </p>
              <div className="flex justify-center">
                <Button href={`/${locale}/sitio-web`} variant="primary" className="w-full md:w-auto">
                  {t('sitioWeb.cta')}
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {t('separator')}
            </p>
          </div>

          {/* BLOC #3 - Impresión */}
          <FadeIn>
            <div
              className="relative max-w-3xl mx-auto rounded-card p-8 md:p-12 shadow-soft hover:shadow-soft-lg transition-shadow"
              style={{ backgroundColor: '#6CB6F0' }}
            >
              {/* Badge Tenerife */}
              <span className="absolute top-6 right-6 inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/70 text-text-primary border border-black/10 shadow-soft">
                {t('badge.tenerife')}
              </span>
              <div className="mb-8">
                <VideoPlaceholder
                  src="/media/videos/Impresión-profesional.mp4"
                  ratio="16:9"
                  rounded
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                {t('impresion.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-6 text-left">
                {t('impresion.intro')}
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg">
                <li>{t('impresion.list1')}</li>
                <li>{t('impresion.list2')}</li>
                <li>{t('impresion.list3')}</li>
                <li>{t('impresion.list4')}</li>
                <li>{t('impresion.list5')}</li>
                <li>{t('impresion.list6')}</li>
              </ul>
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('impresion.conclusion')}
              </p>
              <div className="flex justify-center">
                <Button href={`/${locale}/impresion`} variant="primary" className="w-full md:w-auto">
                  {t('impresion.cta')}
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

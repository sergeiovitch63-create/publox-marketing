import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';

export default async function PageMultiLiens({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.necesitas.multiLinksPage');

  return (
    <>
      <Section className="pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                {t('title')}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary">
                {t('subtitle')}
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}



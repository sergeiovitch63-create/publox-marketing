import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';

export default async function NotFound404Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.notFound');

  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-text-secondary text-lg mb-8">{t('description')}</p>
            <Button href={`/${locale}`} variant="primary">
              {t('backHome')}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}


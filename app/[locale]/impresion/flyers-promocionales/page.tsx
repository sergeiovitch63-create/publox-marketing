import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import PrintProductDetailPage from '@/components/PrintProductDetailPage';

export default async function ImpresionFlyersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.impresionFlyers');

  return (
    <PrintProductDetailPage
      titleLines={t.raw('titleLines') as string[]}
      bullets={t.raw('bullets') as string[]}
      conclusion={t('conclusion')}
      blueActions={t.raw('blueActions') as Array<{ label: string; href: string }>}
      contactCtaLabel={t('contactCta')}
      contactHref={`/${locale}/contacto`}
      imageRatio="16:9"
      videoSrc="/media/videos/Flyers-Promocionales.mp4"
      backButtonHref={`/${locale}/impresion`}
    />
  );
}

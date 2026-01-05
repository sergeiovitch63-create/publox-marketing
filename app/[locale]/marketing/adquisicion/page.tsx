import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import PackDetailPage from '@/components/PackDetailPage';

export default async function MarketingAdquisicionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.marketingAdquisicion');

  return (
    <PackDetailPage
      titleLines={t.raw('titleLines') as string[]}
      introParagraphs={[t('intro')]}
      bullets={t.raw('bullets') as string[]}
      note={t('note')}
      price={t('price')}
      ctaLabel={t('cta')}
      ctaHref={`/${locale}/contacto`}
      imageRatio="16:9"
      videoSrc="/media/videos/Pack-Adquisicion.mp4"
    />
  );
}

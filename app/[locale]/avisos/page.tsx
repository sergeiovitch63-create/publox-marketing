import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import ReviewCard from '@/components/ReviewCard';
import { getSupabaseServerClient } from '@/src/lib/supabaseServer';
import { buildReviewList, type ReviewRow } from '@/lib/reviewsContent';

export default async function AvisosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.avisos');

  const supabase = getSupabaseServerClient();
  let reviewsRows: ReviewRow[] | null = null;

  if (supabase) {
    const { data } = await supabase
      .from('reviews')
      .select('id, company_name, location, service_type, rating, review_text, page_link, verified, created_at')
      .order('created_at', { ascending: false })
      .limit(30);
    reviewsRows = data as ReviewRow[] | null;
  }

  const reviews = buildReviewList(
    locale,
    reviewsRows,
    ['lucas', 'liga', 'fincas', 'sl74'],
    ['lucas', 'liga', 'fincas', 'sl74']
  );

  return (
    <>
      <Section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <Container>
          <FadeIn>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{t('back')}</span>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-text-primary mb-4">
              {t('title')}
            </h1>
            <p className="text-center text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {t('intro')}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <FadeIn key={review.id} delay={index * 0.1}>
                <ReviewCard review={review} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

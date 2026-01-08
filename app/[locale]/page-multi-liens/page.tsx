import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import AccordionFAQ from '@/components/AccordionFAQ';
import BackButton from '@/components/BackButton';

export default async function PageMultiLiens({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.multiLinksPage');

  // Build FAQ items
  const faqItems = [
    { question: t('faq.items.q1'), answer: t('faq.items.a1') },
    { question: t('faq.items.q2'), answer: t('faq.items.a2') },
    { question: t('faq.items.q3'), answer: t('faq.items.a3') },
    { question: t('faq.items.q4'), answer: t('faq.items.a4') },
    { question: t('faq.items.q5'), answer: t('faq.items.a5') },
  ];

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
                {t('heroTitle')}
              </h1>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* INFO BLOCK SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-16 hover:shadow-soft-lg transition-shadow">
              {/* Media Grid 2x2 */}
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="aspect-square rounded-image bg-warm-beige overflow-hidden relative hover:scale-[1.01] transition-transform duration-200">
                    <Image
                      src="/media/images/page-multi-lien-1.png"
                      alt="Page multi-liens 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                  <div className="aspect-square rounded-image bg-warm-beige overflow-hidden relative hover:scale-[1.01] transition-transform duration-200">
                    <Image
                      src="/media/images/page-multi-lien-2.png"
                      alt="Page multi-liens 2"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                  <div className="aspect-square rounded-image bg-warm-beige overflow-hidden relative hover:scale-[1.01] transition-transform duration-200">
                    <Image
                      src="/media/images/page-multi-lien-3.png"
                      alt="Page multi-liens 3"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                  <div className="aspect-square rounded-image bg-warm-beige overflow-hidden relative hover:scale-[1.01] transition-transform duration-200">
                    <Image
                      src="/media/images/page-multi-lien-4.jpg"
                      alt="Page multi-liens 4"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-text-primary">
                {t('blockTitle')}
              </h2>

              {/* Bullets */}
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg text-left">
                <li>{t('bullets.list1')}</li>
                <li>{t('bullets.list2')}</li>
                <li>{t('bullets.list3')}</li>
                <li>{t('bullets.list4')}</li>
                <li>{t('bullets.list5')}</li>
                <li>{t('bullets.list6')}</li>
              </ul>

              {/* CTA + Price */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
                <Button href={`/${locale}/contacto`} variant="primary" className="w-full sm:w-auto">
                  {t('cta')}
                </Button>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">
                    {t('price')}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section bgColor="soft-beige" className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              {t('faq.title')}
            </h2>
            <div className="max-w-3xl mx-auto">
              <AccordionFAQ items={faqItems} />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import AccordionFAQ from '@/components/AccordionFAQ';
import BackButton from '@/components/BackButton';

export default async function SitioWebPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.sitioWeb');

  // Build FAQ items for Corporate Block
  const corporateFAQ = [
    { question: t('corporateBlock.faq.items.q1'), answer: t('corporateBlock.faq.items.a1') },
    { question: t('corporateBlock.faq.items.q2'), answer: t('corporateBlock.faq.items.a2') },
    { question: t('corporateBlock.faq.items.q3'), answer: t('corporateBlock.faq.items.a3') },
    { question: t('corporateBlock.faq.items.q4'), answer: t('corporateBlock.faq.items.a4') },
    { question: t('corporateBlock.faq.items.q5'), answer: t('corporateBlock.faq.items.a5') },
  ];

  // Build FAQ items for Shop Block
  const shopFAQ = [
    { question: t('shopBlock.faq.items.q1'), answer: t('shopBlock.faq.items.a1') },
    { question: t('shopBlock.faq.items.q2'), answer: t('shopBlock.faq.items.a2') },
    { question: t('shopBlock.faq.items.q3'), answer: t('shopBlock.faq.items.a3') },
    { question: t('shopBlock.faq.items.q4'), answer: t('shopBlock.faq.items.a4') },
    { question: t('shopBlock.faq.items.q5'), answer: t('shopBlock.faq.items.a5') },
  ];

  // Build general FAQ items
  const generalFAQ = [
    { question: t('faqGeneral.items.q1'), answer: t('faqGeneral.items.a1') },
    { question: t('faqGeneral.items.q2'), answer: t('faqGeneral.items.a2') },
    { question: t('faqGeneral.items.q3'), answer: t('faqGeneral.items.a3') },
    { question: t('faqGeneral.items.q4'), answer: t('faqGeneral.items.a4') },
    { question: t('faqGeneral.items.q5'), answer: t('faqGeneral.items.a5') },
    { question: t('faqGeneral.items.q6'), answer: t('faqGeneral.items.a6') },
    { question: t('faqGeneral.items.q7'), answer: t('faqGeneral.items.a7') },
    { question: t('faqGeneral.items.q8'), answer: t('faqGeneral.items.a8') },
    { question: t('faqGeneral.items.q9'), answer: t('faqGeneral.items.a9') },
    { question: t('faqGeneral.items.q10'), answer: t('faqGeneral.items.a10') },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-blue via-blue-grey to-soft-beige pt-20">
        {/* Back Button */}
        <BackButton fallbackHref={`/${locale}/necesitas`} absolute />

        {/* Cloud blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40" />

        <Container>
          <div className="text-center py-12">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                {t('hero.title')}
              </h1>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CORPORATE BLOCK SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <Card className="max-w-5xl mx-auto p-8 md:p-12 mb-8 hover:shadow-soft-lg transition-shadow">
              {/* Media Placeholder */}
              <div className="mb-8">
                <MediaPlaceholder ratio="16:9" rounded />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                {t('corporateBlock.title')}
              </h2>

              {/* Bullets */}
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg">
                <li>{t('corporateBlock.bullets.list1')}</li>
                <li>{t('corporateBlock.bullets.list2')}</li>
                <li>{t('corporateBlock.bullets.list3')}</li>
                <li>{t('corporateBlock.bullets.list4')}</li>
                <li>{t('corporateBlock.bullets.list5')}</li>
                <li>{t('corporateBlock.bullets.list6')}</li>
              </ul>

              {/* Closing Text */}
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('corporateBlock.closing')}
              </p>

              {/* CTA + Price */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Button href={`/${locale}/contacto`} variant="primary" className="w-full sm:w-auto">
                  {t('corporateBlock.cta')}
                </Button>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">
                    {t('corporateBlock.price')}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Corporate Block FAQ */}
          <div className="max-w-5xl mx-auto mb-16">
            <AccordionFAQ items={corporateFAQ} />
          </div>

          {/* SHOP BLOCK SECTION */}
          <FadeIn>
            <Card className="max-w-5xl mx-auto p-8 md:p-12 mb-8 hover:shadow-soft-lg transition-shadow">
              {/* Media Placeholder */}
              <div className="mb-8">
                <MediaPlaceholder ratio="16:9" rounded />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                {t('shopBlock.title')}
              </h2>

              {/* Bullets */}
              <ul className="list-disc list-inside space-y-3 mb-6 text-text-secondary text-lg">
                <li>{t('shopBlock.bullets.list1')}</li>
                <li>{t('shopBlock.bullets.list2')}</li>
                <li>{t('shopBlock.bullets.list3')}</li>
                <li>{t('shopBlock.bullets.list4')}</li>
                <li>{t('shopBlock.bullets.list5')}</li>
                <li>{t('shopBlock.bullets.list6')}</li>
              </ul>

              {/* Closing Text */}
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('shopBlock.closing')}
              </p>

              {/* CTA + Price */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Button href={`/${locale}/contacto`} variant="primary" className="w-full sm:w-auto">
                  {t('shopBlock.cta')}
                </Button>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-text-primary">
                    {t('shopBlock.price')}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Shop Block FAQ */}
          <div className="max-w-5xl mx-auto mb-16">
            <AccordionFAQ items={shopFAQ} />
          </div>
        </Container>
      </Section>

      {/* FAQ GENERAL SECTION */}
      <Section bgColor="soft-beige" className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              {t('faqGeneral.title')}
            </h2>
            <div className="max-w-3xl mx-auto">
              <AccordionFAQ items={generalFAQ} />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import AccordionFAQ from '@/components/AccordionFAQ';
import BackButton from '@/components/BackButton';

export default async function ImpresionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.impresion');
  const tCommon = await getTranslations('pages.necesitas');

  // Build FAQ items for Block 1
  const block1FAQ = [
    { question: t('block1.faq.q1'), answer: t('block1.faq.a1') },
    { question: t('block1.faq.q2'), answer: t('block1.faq.a2') },
    { question: t('block1.faq.q3'), answer: t('block1.faq.a3') },
    { question: t('block1.faq.q4'), answer: t('block1.faq.a4') },
    { question: t('block1.faq.q5'), answer: t('block1.faq.a5') },
  ];

  // Build FAQ items for Block 2
  const block2FAQ = [
    { question: t('block2.faq.q1'), answer: t('block2.faq.a1') },
    { question: t('block2.faq.q2'), answer: t('block2.faq.a2') },
    { question: t('block2.faq.q3'), answer: t('block2.faq.a3') },
    { question: t('block2.faq.q4'), answer: t('block2.faq.a4') },
    { question: t('block2.faq.q5'), answer: t('block2.faq.a5') },
  ];

  // Build FAQ items for Block 3
  const block3FAQ = [
    { question: t('block3.faq.q1'), answer: t('block3.faq.a1') },
    { question: t('block3.faq.q2'), answer: t('block3.faq.a2') },
    { question: t('block3.faq.q3'), answer: t('block3.faq.a3') },
    { question: t('block3.faq.q4'), answer: t('block3.faq.a4') },
    { question: t('block3.faq.q5'), answer: t('block3.faq.a5') },
  ];

  // Build FAQ items for Block 4
  const block4FAQ = [
    { question: t('block4.faq.q1'), answer: t('block4.faq.a1') },
    { question: t('block4.faq.q2'), answer: t('block4.faq.a2') },
    { question: t('block4.faq.q3'), answer: t('block4.faq.a3') },
    { question: t('block4.faq.q4'), answer: t('block4.faq.a4') },
    { question: t('block4.faq.q5'), answer: t('block4.faq.a5') },
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
          {/* BLOCK 1 - Tarjetas de Visita */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-8 hover:shadow-soft-lg transition-shadow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('block1.title')}
              </h2>
              <ul className="list-disc list-inside space-y-3 text-text-secondary text-lg mb-6">
                {t.raw('block1.bullets').map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <p className="text-text-secondary text-lg mb-8 text-center italic">
                {t('block1.conclusion')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/impresion/tarjetas-visita`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('block1.cta')}
                </Button>
              </div>
            </Card>
            {/* Mini FAQ Block 1 */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={block1FAQ} />
            </div>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {tCommon('separator')}
            </p>
          </div>

          {/* BLOCK 2 - Flyers Promocionales */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-8 hover:shadow-soft-lg transition-shadow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('block2.title')}
              </h2>
              <ul className="list-disc list-inside space-y-3 text-text-secondary text-lg mb-6">
                {t.raw('block2.bullets').map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <p className="text-text-secondary text-lg mb-8 text-center italic">
                {t('block2.conclusion')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/impresion/flyers-promocionales`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('block2.cta')}
                </Button>
              </div>
            </Card>
            {/* Mini FAQ Block 2 */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={block2FAQ} />
            </div>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {tCommon('separator')}
            </p>
          </div>

          {/* BLOCK 3 - Dípticos / Trípticos */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-8 hover:shadow-soft-lg transition-shadow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('block3.title')}
              </h2>
              <ul className="list-disc list-inside space-y-3 text-text-secondary text-lg mb-6">
                {t.raw('block3.bullets').map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <p className="text-text-secondary text-lg mb-8 text-center italic">
                {t('block3.conclusion')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/impresion/dipticos-tripticos`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('block3.cta')}
                </Button>
              </div>
            </Card>
            {/* Mini FAQ Block 3 */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={block3FAQ} />
            </div>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {tCommon('separator')}
            </p>
          </div>

          {/* BLOCK 4 - Caballete */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-8 hover:shadow-soft-lg transition-shadow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('block4.title')}
              </h2>
              <ul className="list-disc list-inside space-y-3 text-text-secondary text-lg mb-6">
                {t.raw('block4.bullets').map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <p className="text-text-secondary text-lg mb-8 text-center italic">
                {t('block4.conclusion')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/impresion/caballete`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('block4.cta')}
                </Button>
              </div>
            </Card>
            {/* Mini FAQ Block 4 */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={block4FAQ} />
            </div>
          </FadeIn>
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

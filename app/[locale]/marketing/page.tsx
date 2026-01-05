import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import Card from '@/components/Card';
import AccordionFAQ from '@/components/AccordionFAQ';

export default async function MarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.marketing');

  // Build FAQ items for Pack 1
  const pack1FAQ = [
    { question: t('pack1.faq.q1'), answer: t('pack1.faq.a1') },
    { question: t('pack1.faq.q2'), answer: t('pack1.faq.a2') },
    { question: t('pack1.faq.q3'), answer: t('pack1.faq.a3') },
    { question: t('pack1.faq.q4'), answer: t('pack1.faq.a4') },
  ];

  // Build FAQ items for Pack 2
  const pack2FAQ = [
    { question: t('pack2.faq.q1'), answer: t('pack2.faq.a1') },
    { question: t('pack2.faq.q2'), answer: t('pack2.faq.a2') },
    { question: t('pack2.faq.q3'), answer: t('pack2.faq.a3') },
    { question: t('pack2.faq.q4'), answer: t('pack2.faq.a4') },
  ];

  // Build FAQ items for Pack 3
  const pack3FAQ = [
    { question: t('pack3.faq.q1'), answer: t('pack3.faq.a1') },
    { question: t('pack3.faq.q2'), answer: t('pack3.faq.a2') },
    { question: t('pack3.faq.q3'), answer: t('pack3.faq.a3') },
    { question: t('pack3.faq.q4'), answer: t('pack3.faq.a4') },
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
        {/* Cloud blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40" />

        <Container>
          <div className="text-center py-16">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-3 max-w-3xl mx-auto">
                {t('hero.subtitle1')}
              </p>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                {t('hero.subtitle2')}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* PACKS SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          {/* PACK 1 - Adquisición */}
          <FadeIn>
            <Card className="max-w-3xl mx-auto p-8 md:p-12 mb-8 hover:shadow-soft-lg transition-shadow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('pack1.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('pack1.description')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/marketing/adquisicion`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('pack1.cta')}
                </Button>
              </div>
            </Card>
            {/* Mini FAQ Pack 1 */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={pack1FAQ} />
            </div>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {t('separator')}
            </p>
          </div>

          {/* PACK 2 - Branding + Adquisición */}
          <FadeIn>
            <div
              className="max-w-3xl mx-auto rounded-card p-8 md:p-12 mb-8 shadow-soft hover:shadow-soft-lg transition-shadow"
              style={{ backgroundColor: '#EFE3D6' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('pack2.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('pack2.description')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/marketing/branding-adquisicion`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('pack2.cta')}
                </Button>
              </div>
            </div>
            {/* Mini FAQ Pack 2 */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={pack2FAQ} />
            </div>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {t('separator')}
            </p>
          </div>

          {/* PACK 3 - Automatización + Adquisición + Branding */}
          <FadeIn>
            <div
              className="max-w-3xl mx-auto rounded-card p-8 md:p-12 mb-8 shadow-soft-lg border-2 border-blue-grey/30 hover:shadow-soft-lg transition-shadow"
              style={{ backgroundColor: '#CFE2D6' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('pack3.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-4 text-left">
                {t('pack3.description1')}
              </p>
              <p className="text-text-secondary text-lg mb-8 text-left">
                {t('pack3.description2')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/marketing/automatizacion-adquisicion-branding`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('pack3.cta')}
                </Button>
              </div>
            </div>
            {/* Mini FAQ Pack 3 */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={pack3FAQ} />
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

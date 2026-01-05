import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import AccordionFAQ from '@/components/AccordionFAQ';

export default async function SitioWebPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.sitioWeb');
  const tMarketing = await getTranslations('pages.marketing');

  // Build FAQ items for Corporativo
  const corporativoFAQ = [
    { question: t('corporativo.faq.q1'), answer: t('corporativo.faq.a1') },
    { question: t('corporativo.faq.q2'), answer: t('corporativo.faq.a2') },
    { question: t('corporativo.faq.q3'), answer: t('corporativo.faq.a3') },
    { question: t('corporativo.faq.q4'), answer: t('corporativo.faq.a4') },
  ];

  // Build FAQ items for Tienda Online
  const tiendaOnlineFAQ = [
    { question: t('tiendaOnline.faq.q1'), answer: t('tiendaOnline.faq.a1') },
    { question: t('tiendaOnline.faq.q2'), answer: t('tiendaOnline.faq.a2') },
    { question: t('tiendaOnline.faq.q3'), answer: t('tiendaOnline.faq.a3') },
    { question: t('tiendaOnline.faq.q4'), answer: t('tiendaOnline.faq.a4') },
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

      {/* PACKS SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          {/* BLOC 1 - Sitio Web Corporativo */}
          <FadeIn>
            <div
              className="max-w-3xl mx-auto rounded-card p-8 md:p-12 mb-8 shadow-soft hover:shadow-soft-lg transition-shadow"
              style={{ backgroundColor: '#BBCDDE' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('corporativo.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-8 text-center">
                {t('corporativo.description')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/sitio-web/corporativo`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('corporativo.cta')}
                </Button>
              </div>
            </div>
            {/* Mini FAQ Corporativo */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={corporativoFAQ} />
            </div>
          </FadeIn>

          {/* SEPARATOR */}
          <div className="text-center mb-16">
            <p className="text-text-secondary opacity-30 text-lg">
              {tMarketing('separator')}
            </p>
          </div>

          {/* BLOC 2 - Tienda Online */}
          <FadeIn>
            <div
              className="max-w-3xl mx-auto rounded-card p-8 md:p-12 mb-8 shadow-soft hover:shadow-soft-lg transition-shadow"
              style={{ backgroundColor: '#BBCDDE' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary text-center">
                {t('tiendaOnline.title')}
              </h2>
              <p className="text-text-secondary text-lg mb-8 text-center">
                {t('tiendaOnline.description')}
              </p>
              <div className="flex justify-center mb-8">
                <Button
                  href={`/${locale}/sitio-web/tienda-online`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  {t('tiendaOnline.cta')}
                </Button>
              </div>
            </div>
            {/* Mini FAQ Tienda Online */}
            <div className="max-w-3xl mx-auto mb-16">
              <AccordionFAQ items={tiendaOnlineFAQ} />
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

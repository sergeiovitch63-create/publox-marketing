import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import AccordionFAQ from '@/components/AccordionFAQ';
import BackButton from '@/components/BackButton';
import Image from 'next/image';
import NFCCard3D from '@/components/NFCCard3D';

export default async function NfcGoogleReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.nfcReviewsPage');

  const faqItems = [
    { question: t('faq.items.q1'), answer: t('faq.items.a1') },
    { question: t('faq.items.q2'), answer: t('faq.items.a2') },
    { question: t('faq.items.q3'), answer: t('faq.items.a3') },
    { question: t('faq.items.q4'), answer: t('faq.items.a4') },
    { question: t('faq.items.q5'), answer: t('faq.items.a5') },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[620px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-blue via-blue-grey to-soft-beige pt-20 pb-12">
        <BackButton fallbackHref={`/${locale}/necesitas`} />

        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40" />

        <Container>
          <div className="flex flex-col items-center gap-4 py-8">
            <NFCCard3D />
            <FadeIn className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                {t('heroTitle')}
              </h1>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* PRICING */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            {/* Section badge */}
            <div className="flex justify-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-button-primary-bg/10 text-button-primary-bg tracking-wide uppercase">
                {t('offerTitle')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Card 1 — NFC Standard */}
              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-soft overflow-hidden">
                {/* Visual */}
                <div className="w-full bg-gray-50 flex items-center justify-center p-4">
                  <Image
                    src="/media/images/NFC-1.jpeg"
                    alt="NFC Standard"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-text-primary">{t('standardName')}</h3>
                    <span className="text-3xl font-extrabold text-button-primary-bg">15€</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{t('standardDesc')}</p>
                  <ul className="space-y-2 mt-auto">
                    {(['featGoogleLogo', 'featQrBackup', 'featGoogleLink', 'featStand'] as const).map((key) => (
                      <li key={key} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="w-4 h-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                  <Button href={`/${locale}/contacto`} variant="primary" className="mt-4 w-full text-center">
                    {t('cta')}
                  </Button>
                </div>
              </div>

              {/* Card 2 — NFC Personnalisé */}
              <div className="flex flex-col rounded-2xl border-2 border-button-primary-bg bg-white shadow-soft overflow-hidden relative">
                {/* Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-button-primary-bg text-white shadow">
                    {t('customBadge')}
                  </span>
                </div>

                {/* Visual */}
                <div className="w-full bg-gray-50 flex items-center justify-center p-4">
                  <Image
                    src="/media/images/NFC-2.jpeg"
                    alt="NFC Personnalisé"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-text-primary">{t('customName')}</h3>
                    <span className="text-3xl font-extrabold text-button-primary-bg">20€</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{t('customDesc')}</p>
                  <ul className="space-y-2 mt-auto">
                    {(['featCustomDesign', 'featCustomLink', 'featCustomColors', 'featStand'] as const).map((key) => (
                      <li key={key} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="w-4 h-4 shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                  <Button href={`/${locale}/contacto`} variant="primary" className="mt-4 w-full text-center">
                    {t('cta')}
                  </Button>
                </div>
              </div>

            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ */}
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

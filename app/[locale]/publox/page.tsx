import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n';
import { generateMetadataForLocale } from '@/lib/metadata';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';

// Contenu SEO par locale
const contentByLocale: Record<Locale, {
  title: string;
  description: string;
  h1: string;
  h2: string;
  text: string;
  services: string[];
  cta: string;
}> = {
  es: {
    title: 'PUBLOX — Agencia de marketing digital, sitios web y automatización',
    description: 'PUBLOX es una agencia de marketing digital especializada en sitios web, SEO, branding y automatización para ayudar a negocios a conseguir más clientes.',
    h1: 'PUBLOX',
    h2: 'Agencia de marketing digital, sitios web y automatización',
    text: `PUBLOX es una agencia de marketing digital con sede en Tenerife, especializada en ayudar a negocios a conseguir clientes mediante estrategias de marketing digital efectivas. Nuestro enfoque combina sitios web rápidos y optimizados, técnicas avanzadas de SEO, branding profesional y sistemas de automatización que permiten a las empresas captar y convertir más clientes de manera eficiente.

En PUBLOX, entendemos que cada negocio tiene necesidades únicas. Por eso, ofrecemos soluciones personalizadas de marketing digital que van desde el diseño y desarrollo de sitios web corporativos hasta la implementación de estrategias completas de captación de clientes. Nuestro equipo trabaja con tecnologías modernas para crear sitios web que no solo se ven bien, sino que también convierten visitantes en clientes.

La automatización es una parte clave de nuestro enfoque. Implementamos sistemas que permiten a nuestros clientes automatizar procesos de marketing, desde la captación de leads hasta el seguimiento post-venta. Esto se combina con un branding sólido que ayuda a las empresas a destacar en el mercado y construir una identidad de marca reconocible.

Nuestros servicios de marketing digital incluyen optimización SEO para mejorar la visibilidad en buscadores, desarrollo de sitios web responsive y rápidos, creación de estrategias de branding coherentes, y automatización de procesos de captación de clientes. Todo esto con un enfoque en resultados medibles y crecimiento sostenible.`,
    services: [
      'Sitio web',
      'SEO',
      'Branding',
      'Automatización',
      'Impresión',
    ],
    cta: 'Contactar por WhatsApp',
  },
  en: {
    title: 'PUBLOX — Digital marketing, websites & automation agency',
    description: 'PUBLOX is a digital marketing agency specialized in websites, SEO, branding and automation to help businesses get more clients.',
    h1: 'PUBLOX',
    h2: 'Digital marketing, websites & automation agency',
    text: `PUBLOX is a digital marketing agency based in Tenerife, specialized in helping businesses get clients through effective digital marketing strategies. Our approach combines fast and optimized websites, advanced SEO techniques, professional branding, and automation systems that allow companies to acquire and convert more clients efficiently.

At PUBLOX, we understand that every business has unique needs. That's why we offer personalized digital marketing solutions ranging from corporate website design and development to implementing complete client acquisition strategies. Our team works with modern technologies to create websites that not only look good but also convert visitors into clients.

Automation is a key part of our approach. We implement systems that allow our clients to automate marketing processes, from lead generation to post-sale follow-up. This is combined with solid branding that helps businesses stand out in the market and build a recognizable brand identity.

Our digital marketing services include SEO optimization to improve search engine visibility, development of responsive and fast websites, creation of coherent branding strategies, and automation of client acquisition processes. All with a focus on measurable results and sustainable growth.`,
    services: [
      'Website',
      'SEO',
      'Branding',
      'Automation',
      'Printing',
    ],
    cta: 'Contact via WhatsApp',
  },
  fr: {
    title: 'PUBLOX — Agence marketing digital, sites web & automatisation',
    description: 'PUBLOX est une agence de marketing digital spécialisée en sites web, SEO, branding et automatisation pour aider les entreprises à obtenir plus de clients.',
    h1: 'PUBLOX',
    h2: 'Agence marketing digital, sites web & automatisation',
    text: `PUBLOX est une agence de marketing digital basée à Tenerife, spécialisée dans l'aide aux entreprises pour obtenir des clients grâce à des stratégies de marketing digital efficaces. Notre approche combine des sites web rapides et optimisés, des techniques SEO avancées, un branding professionnel et des systèmes d'automatisation qui permettent aux entreprises d'acquérir et de convertir plus de clients de manière efficace.

Chez PUBLOX, nous comprenons que chaque entreprise a des besoins uniques. C'est pourquoi nous offrons des solutions personnalisées de marketing digital allant de la conception et du développement de sites web corporatifs à la mise en œuvre de stratégies complètes d'acquisition de clients. Notre équipe travaille avec des technologies modernes pour créer des sites web qui non seulement ont l'air bien, mais convertissent également les visiteurs en clients.

L'automatisation est une partie clé de notre approche. Nous mettons en place des systèmes qui permettent à nos clients d'automatiser les processus de marketing, de la génération de leads au suivi post-vente. Cela est combiné avec un branding solide qui aide les entreprises à se démarquer sur le marché et à construire une identité de marque reconnaissable.

Nos services de marketing digital incluent l'optimisation SEO pour améliorer la visibilité dans les moteurs de recherche, le développement de sites web responsives et rapides, la création de stratégies de branding cohérentes, et l'automatisation des processus d'acquisition de clients. Tout cela avec un focus sur des résultats mesurables et une croissance durable.`,
    services: [
      'Site web',
      'SEO',
      'Branding',
      'Automatisation',
      'Impression',
    ],
    cta: 'Contacter par WhatsApp',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = contentByLocale[locale as Locale];
  
  return generateMetadataForLocale(
    locale as Locale,
    'publox',
    content.title,
    content.description
  );
}

export default async function PubloxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const content = contentByLocale[locale as Locale];

  return (
    <Section className="py-16 md:py-20 lg:py-24">
      <Container>
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-text-primary text-center">
              {content.h1}
            </h1>
            
            {/* H2 */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-text-secondary text-center">
              {content.h2}
            </h2>
            
            {/* Contenu principal */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="text-text-primary whitespace-pre-line leading-relaxed">
                {content.text.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-text-primary">
                {locale === 'es' && 'Servicios'}
                {locale === 'en' && 'Services'}
                {locale === 'fr' && 'Services'}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                {content.services.map((service, index) => (
                  <li key={index} className="text-lg">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA WhatsApp */}
            <div className="text-center">
              <a
                href="https://wa.me/34614052889"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary">
                  {content.cta}
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}


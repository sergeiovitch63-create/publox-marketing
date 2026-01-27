import Container from './Container';
import Section from './Section';
import FadeIn from './FadeIn';
import Card from './Card';
import Button from './Button';
import MediaPlaceholder from './MediaPlaceholder';
import VideoPlaceholder from './VideoPlaceholder';
import BackButton from './BackButton';

interface BlueAction {
  label: string;
  href: string;
}

interface PrintProductDetailPageProps {
  titleLines: string[];
  bullets: string[];
  conclusion: string;
  blueActions?: BlueAction[];
  extraPricesTextLines?: string[];
  contactCtaLabel: string;
  contactHref: string;
  quoteText?: string;
  imageRatio?: '16:9' | '4:3' | '1:1' | '3:2' | '3:4';
  videoSrc?: string;
  backButtonHref?: string;
}

export default function PrintProductDetailPage({
  titleLines,
  bullets,
  conclusion,
  blueActions,
  extraPricesTextLines,
  contactCtaLabel,
  contactHref,
  quoteText,
  imageRatio = '16:9',
  videoSrc,
  backButtonHref,
}: PrintProductDetailPageProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pastel-blue via-blue-grey to-soft-beige pt-20">
        {/* Back Button */}
        {backButtonHref && (
          <BackButton directHref={backButtonHref} />
        )}

        {/* Cloud blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/25 rounded-full blur-3xl opacity-40" />

        <Container>
          <div className="text-center py-12">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                {titleLines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CONTENT SECTION */}
      <Section className="py-20 md:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <Card className="max-w-4xl mx-auto p-8 md:p-12 hover:shadow-soft-lg transition-shadow">
              {/* Image or Video */}
              <div className="mb-8">
                {videoSrc ? (
                  <VideoPlaceholder
                    src={videoSrc}
                    ratio={imageRatio}
                    rounded
                    className="w-full"
                  />
                ) : (
                  <MediaPlaceholder ratio={imageRatio} rounded />
                )}
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Bullets */}
                <ul className="list-disc list-inside space-y-3 text-text-secondary text-lg">
                  {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>

                {/* Conclusion */}
                <p className="text-text-secondary text-lg italic text-center pt-4">
                  {conclusion}
                </p>

                {/* Extra Prices Text (for Caballete) */}
                {extraPricesTextLines && extraPricesTextLines.length > 0 && (
                  <div className="pt-6 text-center space-y-2">
                    {extraPricesTextLines.map((line, index) => (
                      <p
                        key={index}
                        className="text-text-primary text-lg md:text-xl font-semibold"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {/* Quote Text */}
                {quoteText && (
                  <p className="pt-6 text-center text-text-secondary text-base md:text-lg">
                    {quoteText}
                  </p>
                )}

                {/* Contact CTA Button */}
                <div className="pt-4">
                  <Button href={contactHref} variant="primary" className="w-full">
                    {contactCtaLabel}
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}


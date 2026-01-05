import { ReactNode } from 'react';
import Container from './Container';
import Section from './Section';
import FadeIn from './FadeIn';
import Card from './Card';
import Button from './Button';
import MediaPlaceholder from './MediaPlaceholder';
import VideoPlaceholder from './VideoPlaceholder';

interface PackDetailPageProps {
  titleLines: string[];
  introParagraphs?: string[];
  bullets: string[];
  note: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
  imageRatio?: '16:9' | '4:3' | '1:1' | '3:2' | '3:4';
  videoSrc?: string;
}

export default function PackDetailPage({
  titleLines,
  introParagraphs,
  bullets,
  note,
  price,
  ctaLabel,
  ctaHref,
  imageRatio = '16:9',
  videoSrc,
}: PackDetailPageProps) {
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
                {/* Intro paragraphs */}
                {introParagraphs && introParagraphs.length > 0 && (
                  <div className="space-y-4">
                    {introParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-text-secondary text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                <ul className="list-disc list-inside space-y-3 text-text-secondary text-lg">
                  {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>

                {/* Note and Price */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pt-4 border-t border-warm-beige/30">
                  <p className="text-text-secondary text-sm italic">{note}</p>
                  <p className="text-3xl md:text-4xl font-bold text-text-primary text-right">
                    {price}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button href={ctaHref} variant="primary" className="w-full">
                    {ctaLabel}
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


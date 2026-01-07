'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';

interface Partner {
  name: string;
  image: string;
  whatsappLink: string | null;
  homeLink?: string | null;
}

interface PartnerCarouselProps {
  partners: Partner[];
  locale: string;
}

export default function PartnerCarousel({ partners, locale }: PartnerCarouselProps) {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-page-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-page-bg to-transparent z-10 pointer-events-none" />

      {/* Carousel Container */}
      <div className="partner-carousel-container">
        <div className="partner-carousel-track">
          {duplicatedPartners.map((partner, index) => {
            const content = (
              <div className="flex flex-col items-center min-w-[180px] md:min-w-[200px]">
                <Card className="p-4 aspect-square w-[160px] md:w-[180px] flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                  <div className="w-full h-full rounded-xl bg-warm-beige border border-warm-beige/30 flex items-center justify-center overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={140}
                      height={140}
                      className="w-auto h-auto max-w-[85%] max-h-[85%] object-contain"
                    />
                  </div>
                </Card>
                <span className="mt-3 text-sm font-medium text-text-secondary text-center tracking-wide uppercase">
                  {partner.name}
                </span>
              </div>
            );

            // PUBLOX: Link to home if homeLink exists
            if (partner.homeLink) {
              return (
                <Link
                  key={`partner-${index}`}
                  href={partner.homeLink}
                  className="partner-carousel-item cursor-pointer"
                >
                  {content}
                </Link>
              );
            }

            // WhatsApp link
            if (partner.whatsappLink) {
              return (
                <a
                  key={`partner-${index}`}
                  href={partner.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-carousel-item cursor-pointer"
                >
                  {content}
                </a>
              );
            }

            // Non-clickable (fallback)
            return (
              <div key={`partner-${index}`} className="partner-carousel-item">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


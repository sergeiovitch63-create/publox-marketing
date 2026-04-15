 'use client';

import Link from 'next/link';
import { useState } from 'react';
import Card from './Card';

export interface Review {
  id: string;
  stars: number;
  ratingText: string;
  companyName: string;
  location: string;
  service: string;
  quote: string;
  href: string;
  verified?: boolean;
  ctaLabel?: string;
  expandLabel?: string;
  collapseLabel?: string;
}

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export default function ReviewCard({ review, className = '' }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const stars = '★'.repeat(review.stars);
  const isExternal = review.href.startsWith('http');

  const ctaLabel = review.ctaLabel || 'Ver página →';
  const expandLabel = review.expandLabel || 'Voir plus';
  const collapseLabel = review.collapseLabel || 'Voir moins';

  const cardContent = (
    <Card className={`p-5 md:p-6 hover:shadow-soft-lg transition-all cursor-pointer h-full flex flex-col ${className}`}>
      {/* Stars and Rating */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg text-yellow-500 leading-none">{stars}</span>
        <span className="text-sm font-semibold text-text-secondary">{review.ratingText}</span>
        {review.verified && (
          <span className="ml-auto text-xs px-2 py-0.5 bg-pastel-blue/20 text-pastel-blue rounded-full font-medium">
            Verificado
          </span>
        )}
      </div>

      {/* Company Name */}
      <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2">
        {review.companyName}
      </h3>

      {/* Location and Service */}
      <p className="text-sm text-text-secondary mb-3">
        {review.location} • {review.service}
      </p>

      {/* Quote */}
      <p
        className={`text-text-secondary text-sm md:text-base leading-relaxed mb-3 flex-grow ${
          isExpanded ? '' : 'line-clamp-2'
        }`}
      >
        {review.quote}
      </p>

      <div className="flex items-center justify-between gap-3 mt-auto pt-1">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-xs text-text-secondary hover:text-text-primary transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? collapseLabel : expandLabel}
        </button>

        {isExternal ? (
          <a
            href={review.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-pastel-blue font-medium"
            aria-label={`Ver página de ${review.companyName}`}
          >
            {ctaLabel}
          </a>
        ) : (
          <Link
            href={review.href}
            className="text-xs text-pastel-blue font-medium"
            aria-label={`Ver página de ${review.companyName}`}
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </Card>
  );
  return <div className="block">{cardContent}</div>;
}


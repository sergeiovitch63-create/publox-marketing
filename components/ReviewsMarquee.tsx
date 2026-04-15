'use client';

import { useMemo } from 'react';
import ReviewCard, { Review } from './ReviewCard';

interface ReviewsMarqueeProps {
  reviews: Review[];
}

export default function ReviewsMarquee({ reviews }: ReviewsMarqueeProps) {
  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = useMemo(() => [...reviews, ...reviews], [reviews]);

  return (
    <div className="relative overflow-hidden">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-page-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-page-bg to-transparent z-10 pointer-events-none" />

      {/* Carousel Container */}
      <div className="reviews-carousel-container">
        <div className="reviews-carousel-track">
          {duplicatedReviews.map((review, index) => (
            <div key={`review-${review.id}-${index}`} className="reviews-carousel-item">
              <ReviewCard review={review} className="w-[280px] md:w-[320px] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


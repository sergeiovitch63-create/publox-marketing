'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first intersection to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <div
      ref={ref}
      className={`fade-in-animation ${isVisible ? 'fade-in-visible' : ''} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'default' | 'soft-beige' | 'blue-grey';
}

export default function Section({ children, className = '', bgColor = 'default' }: SectionProps) {
  const bgClasses = {
    default: 'bg-page-bg',
    'soft-beige': 'bg-soft-beige',
    'blue-grey': 'bg-blue-grey',
  };

  return (
    <section className={`py-12 md:py-16 lg:py-20 ${bgClasses[bgColor]} ${className}`}>
      {children}
    </section>
  );
}


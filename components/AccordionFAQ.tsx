'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
  className?: string;
}

export default function AccordionFAQ({ items, className = '' }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="border border-warm-beige/30 rounded-card overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-soft-beige/50 transition-colors focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 rounded-md"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            aria-labelledby={`faq-question-${index}`}
          >
            <span id={`faq-question-${index}`} className="font-semibold text-text-primary pr-4">
              {item.question}
            </span>
            <span
              className={`text-text-secondary text-xl transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 text-text-secondary">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


'use client';

import Container from '@/components/Container';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import { useLocale } from 'next-intl';
import { FormEvent, useState } from 'react';

interface ReviewFormPayload {
  companyName: string;
  location: string;
  serviceType: 'Página multi-enlace' | 'Bloque marketing' | 'Sitio web';
  rating: number;
  reviewText: string;
  pageLink?: string;
  website?: string;
  locale: string;
}

export default function DejarOpinionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const locale = useLocale();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);

    const payload: ReviewFormPayload = {
      companyName: String(formData.get('companyName') || '').trim(),
      location: String(formData.get('location') || '').trim(),
      serviceType: (formData.get('serviceType') as ReviewFormPayload['serviceType']) ?? 'Página multi-enlace',
      rating: Number(formData.get('rating') || 0),
      reviewText: String(formData.get('reviewText') || '').trim(),
      pageLink: String(formData.get('pageLink') || '').trim() || undefined,
      website: String(formData.get('website') || '').trim() || undefined,
      locale: String(locale),
    };

    // Basic client-side validation (required fields are also enforced by HTML attributes)
    if (!payload.companyName || !payload.location || !payload.rating || !payload.reviewText) {
      setErrorMessage('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (payload.reviewText.length > 300) {
      setErrorMessage('La opinión no puede superar los 300 caracteres.');
      return;
    }

    if (payload.rating < 1 || payload.rating > 5) {
      setErrorMessage('La valoración debe estar entre 1 y 5.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const apiError = data?.error as string | undefined;
        setErrorMessage(apiError || 'Ha ocurrido un error al enviar tu opinión. Inténtalo de nuevo.');
      } else {
        setSubmitted(true);
        event.currentTarget.reset();
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setErrorMessage('Ha ocurrido un error al enviar tu opinión. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="pt-24 md:pt-32 pb-16">
      <Container>
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
              Dejar una opinión sobre PUBLOX
            </h1>
            <p className="text-text-secondary text-base md:text-lg mb-8 text-center">
              Tu opinión ayuda a otros profesionales a confiar en nuestro trabajo.
              <br />
              Solo te llevará 1 minuto.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-offwhite-card rounded-card p-6 md:p-8 shadow-soft">
              {submitted ? (
                <div className="text-center">
                  <p className="text-2xl mb-3">Gracias 🙌</p>
                  <p className="text-text-secondary">
                    Tu opinión será revisada y publicada pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field (should remain empty) */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Nombre de la empresa *
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      className="w-full rounded-card border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-pastel-blue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Ciudad / ubicación *
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      className="w-full rounded-card border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-pastel-blue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Tipo de servicio
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      className="w-full rounded-card border border-gray-300 px-3 py-2 text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-pastel-blue"
                      defaultValue="Página multi-enlace"
                    >
                      <option value="Página multi-enlace">Página multi-enlace</option>
                      <option value="Bloque marketing">Bloque marketing</option>
                      <option value="Sitio web">Sitio web</option>
                    </select>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-text-primary mb-1">
                      Valoración (1–5 estrellas) *
                    </span>
                    <div className="flex items-center gap-3">
                      <select
                        name="rating"
                        required
                        className="rounded-card border border-gray-300 px-3 py-2 text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-pastel-blue"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecciona
                        </option>
                        {[1, 2, 3, 4, 5].map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                      <span className="text-yellow-500 text-lg" aria-hidden="true">
                        ★★★★★
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="reviewText"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Opinión corta (máx. 300 caracteres) *
                    </label>
                    <textarea
                      id="reviewText"
                      name="reviewText"
                      required
                      maxLength={300}
                      rows={4}
                      className="w-full rounded-card border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-pastel-blue"
                    />
                    <p className="mt-1 text-xs text-text-secondary">
                      Ejemplo: “Muy profesional, comunicación clara y resultado final perfecto.”
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="pageLink"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Enlace de tu página (opcional)
                    </label>
                    <input
                      id="pageLink"
                      name="pageLink"
                      type="url"
                      placeholder="https://..."
                      className="w-full rounded-card border border-gray-300 px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-pastel-blue"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex justify-center items-center px-6 py-3 rounded-pill bg-button-primary-bg text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar opinión'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}



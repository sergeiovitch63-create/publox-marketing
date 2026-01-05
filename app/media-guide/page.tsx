import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function MediaGuidePage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-8 text-text-primary">
            Guide des Médias - PUBLOX
          </h1>

          <div className="space-y-8">
            {/* Structure */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-text-primary">
                📁 Structure des dossiers
              </h2>
              <pre className="bg-soft-beige p-4 rounded-card text-sm overflow-x-auto">
{`public/media/
├── images/          # Images (JPG, PNG, WebP)
├── videos/          # Vidéos (MP4, WebM)
├── icons/           # Icônes SVG ou PNG
├── brands/          # Logos et identités visuelles
└── placeholders/    # Images de placeholder temporaires`}
              </pre>
            </section>

            {/* Exemples d'usage */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-text-primary">
                💻 Exemples d'usage
              </h2>

              <div className="space-y-6">
                {/* Image Next.js */}
                <div className="bg-offwhite-card p-6 rounded-card">
                  <h3 className="text-lg font-semibold mb-3 text-text-primary">
                    Image avec Next.js Image
                  </h3>
                  <pre className="bg-warm-beige p-4 rounded text-sm overflow-x-auto mb-4">
{`import Image from 'next/image';

<Image
  src="/media/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  className="rounded-image"
/>`}
                  </pre>
                  <div className="bg-warm-beige rounded-image p-4 text-center text-text-secondary text-sm">
                    Placeholder: Image s'affichera ici
                  </div>
                </div>

                {/* Vidéo */}
                <div className="bg-offwhite-card p-6 rounded-card">
                  <h3 className="text-lg font-semibold mb-3 text-text-primary">
                    Vidéo HTML5
                  </h3>
                  <pre className="bg-warm-beige p-4 rounded text-sm overflow-x-auto mb-4">
{`<video
  src="/media/videos/hero.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full rounded-image"
/>`}
                  </pre>
                  <div className="bg-warm-beige rounded-image p-4 text-center text-text-secondary text-sm">
                    Placeholder: Vidéo s'affichera ici
                  </div>
                </div>

                {/* Image HTML standard */}
                <div className="bg-offwhite-card p-6 rounded-card">
                  <h3 className="text-lg font-semibold mb-3 text-text-primary">
                    Image HTML standard
                  </h3>
                  <pre className="bg-warm-beige p-4 rounded text-sm overflow-x-auto mb-4">
{`<img
  src="/media/images/logo.png"
  alt="Logo"
  className="w-32 h-32"
/>`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Points importants */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-text-primary">
                ⚠️ Points importants
              </h2>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>
                  <strong>Tout dans `/public` est accessible via `/`</strong>
                  <br />
                  <code className="bg-warm-beige px-2 py-1 rounded text-xs">
                    public/media/images/hero.jpg
                  </code>{' '}
                  →{' '}
                  <code className="bg-warm-beige px-2 py-1 rounded text-xs">
                    /media/images/hero.jpg
                  </code>
                </li>
                <li>
                  Utilisez <code className="bg-warm-beige px-2 py-1 rounded text-xs">
                    next/image
                  </code>{' '}
                  pour l'optimisation automatique
                </li>
                <li>
                  Formats recommandés : WebP (images), MP4 (vidéos), SVG (icônes)
                </li>
                <li>
                  Optimisez vos fichiers avant de les déposer (TinyPNG, Squoosh)
                </li>
                <li>
                  Noms de fichiers : utilisez des tirets, évitez les espaces
                </li>
              </ul>
            </section>

            {/* Arborescence complète */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-text-primary">
                📂 Arborescence complète
              </h2>
              <div className="bg-soft-beige p-6 rounded-card">
                <p className="text-text-secondary mb-4">
                  Déposez vos fichiers dans les dossiers correspondants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  <li>
                    <code>public/media/images/</code> - Images (hero, bannières,
                    produits)
                  </li>
                  <li>
                    <code>public/media/videos/</code> - Vidéos de présentation
                  </li>
                  <li>
                    <code>public/media/icons/</code> - Icônes SVG/PNG
                  </li>
                  <li>
                    <code>public/media/brands/</code> - Logos et marques
                  </li>
                  <li>
                    <code>public/media/placeholders/</code> - Images temporaires
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}


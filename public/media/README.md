# Guide des Médias - PUBLOX

## 📁 Structure des dossiers

```
public/media/
├── images/          # Images (JPG, PNG, WebP, etc.)
├── videos/          # Vidéos (MP4, WebM, etc.)
├── icons/           # Icônes SVG ou PNG
├── brands/          # Logos et identités visuelles
└── placeholders/    # Images de placeholder temporaires
```

## 📍 Où placer vos fichiers

### Images
- **Hero images, bannières** → `public/media/images/`
- **Photos produits, services** → `public/media/images/`
- **Illustrations** → `public/media/images/`

### Vidéos
- **Vidéos de présentation** → `public/media/videos/`
- **Vidéos produits** → `public/media/videos/`

### Icônes
- **Icônes SVG/PNG** → `public/media/icons/`

### Logos & Marques
- **Logos clients, partenaires** → `public/media/brands/`

### Placeholders
- **Images temporaires de test** → `public/media/placeholders/`

## 💻 Comment référencer dans le code

### Images avec Next.js Image

```tsx
import Image from 'next/image';

// Exemple 1: Image simple
<Image
  src="/media/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  className="rounded-image"
/>

// Exemple 2: Image avec priority (above the fold)
<Image
  src="/media/images/banner.jpg"
  alt="Banner"
  width={1920}
  height={1080}
  priority
  className="w-full h-auto"
/>

// Exemple 3: Image responsive
<Image
  src="/media/images/service-card.jpg"
  alt="Service"
  width={800}
  height={600}
  className="rounded-image"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Images avec balise HTML standard

```tsx
// Pour les images qui ne nécessitent pas d'optimisation Next.js
<img
  src="/media/images/logo.png"
  alt="Logo"
  className="w-32 h-32"
/>
```

### Vidéos

```tsx
// Vidéo avec contrôles
<video
  src="/media/videos/hero.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-auto rounded-image"
>
  Votre navigateur ne supporte pas la vidéo.
</video>

// Vidéo avec poster (image de prévisualisation)
<video
  src="/media/videos/presentation.mp4"
  poster="/media/images/video-poster.jpg"
  controls
  className="w-full rounded-image"
>
  Votre navigateur ne supporte pas la vidéo.
</video>
```

### Icônes

```tsx
// Icône SVG inline (recommandé pour les petites icônes)
import { ReactComponent as Icon } from '/media/icons/whatsapp.svg';

// Ou avec Image Next.js
<Image
  src="/media/icons/whatsapp.png"
  alt="WhatsApp"
  width={24}
  height={24}
/>
```

### Logos & Marques

```tsx
<Image
  src="/media/brands/partner-logo.png"
  alt="Partner Logo"
  width={150}
  height={60}
  className="object-contain"
/>
```

## ⚠️ Points importants

1. **Tout dans `/public` est accessible via `/`**
   - `public/media/images/hero.jpg` → `/media/images/hero.jpg`
   - Pas besoin de `/public` dans le chemin

2. **Optimisation Next.js Image**
   - Utilisez `<Image>` de `next/image` pour les images importantes
   - Next.js optimise automatiquement (WebP, lazy loading, etc.)
   - Toujours spécifier `width` et `height` (ou utiliser `fill`)

3. **Formats recommandés**
   - **Images** : WebP (priorité), JPG, PNG
   - **Vidéos** : MP4 (H.264), WebM
   - **Icônes** : SVG (vectoriel, scalable)

4. **Noms de fichiers**
   - Utilisez des noms descriptifs : `hero-home.jpg`, `service-marketing.jpg`
   - Évitez les espaces, utilisez des tirets ou underscores
   - Exemple : `hero-home.jpg` ✅ | `hero home.jpg` ❌

5. **Taille des fichiers**
   - Optimisez vos images avant de les déposer (TinyPNG, Squoosh, etc.)
   - Images hero : max 500KB recommandé
   - Vidéos : compressez si possible

## 📝 Exemples concrets pour PUBLOX

### Hero Section
```tsx
import Image from 'next/image';

<Image
  src="/media/images/hero-publox.jpg"
  alt="PUBLOX Hero"
  width={1920}
  height={1080}
  priority
  className="w-full h-auto rounded-image"
/>
```

### Service Card
```tsx
<Image
  src="/media/images/service-marketing.jpg"
  alt="Marketing Service"
  width={800}
  height={600}
  className="rounded-image mb-6"
/>
```

### Vidéo de présentation
```tsx
<video
  src="/media/videos/publox-intro.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full rounded-image"
/>
```

## 🔗 Accès rapide

- Page de guide : `/media-guide` (développement uniquement)
- Dossier public : `public/media/`
- Documentation Next.js Image : https://nextjs.org/docs/app/api-reference/components/image


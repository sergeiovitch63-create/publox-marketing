# Guide des Médias - PUBLOX

## 📁 Structure des dossiers

```
public/media/
├── images/          # Images (JPG, PNG, WebP, etc.)
│   ├── affiliate-20-commission.png
│   ├── commission-system.png
│   ├── no-tech-knowledge.png
│   └── ...
├── videos/          # Vidéos (MP4, WebM, etc.)
│   ├── HERO.mp4
│   ├── Captación-de-clientes.mp4
│   ├── Sitio-web.mp4
│   └── ...
├── icons/           # Icônes SVG ou PNG (actuellement vide)
├── brands/          # Logos et identités visuelles (actuellement vide)
└── placeholders/    # Images de placeholder temporaires (actuellement vide)
```

**Note:** Les dossiers `icons/`, `brands/` et `placeholders/` existent mais sont vides. Ils sont prêts à être utilisés.

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

**Option 1: Utiliser le composant `VideoPlaceholder` (recommandé dans ce projet)**

```tsx
import VideoPlaceholder from '@/components/VideoPlaceholder';

<VideoPlaceholder
  src="/media/videos/HERO.mp4"
  ratio="16:9"
  rounded
/>
```

**Option 2: Utiliser le composant `HeroMedia`**

```tsx
import HeroMedia from '@/components/HeroMedia';

<HeroMedia
  src="/media/videos/HERO.mp4"
  type="video"
  ratio="16:9"
/>
```

**Option 3: Balise HTML `<video>` standard**

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

### Hero Section avec vidéo
```tsx
import HeroMedia from '@/components/HeroMedia';

<HeroMedia
  src="/media/videos/HERO.mp4"
  type="video"
  ratio="16:9"
/>
```

### Image dans une carte (avec Next.js Image)
```tsx
import Image from 'next/image';

<Image
  src="/media/images/affiliate-20-commission.png"
  alt="Gana hasta un 20% de comisión"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 400px"
/>
```

### Vidéo dans une section de service
```tsx
import VideoPlaceholder from '@/components/VideoPlaceholder';

<VideoPlaceholder
  src="/media/videos/Captación-de-clientes.mp4"
  ratio="4:3"
  rounded={false}
/>
```

### Image avec dimensions fixes
```tsx
import Image from 'next/image';

<Image
  src="/media/images/no-tech-knowledge.png"
  alt="Sin conocimientos técnicos"
  width={200}
  height={200}
  className="object-cover rounded-image"
/>
```

## 🔗 Accès rapide

- **Dossier public** : `public/media/`
- **Documentation Next.js Image** : https://nextjs.org/docs/app/api-reference/components/image
- **Composants disponibles** :
  - `@/components/VideoPlaceholder` - Pour afficher des vidéos avec ratio et style
  - `@/components/HeroMedia` - Pour les médias hero (vidéo ou image)
  - `next/image` - Pour les images optimisées

## ✅ Checklist avant d'ajouter un média

- [ ] Le fichier est optimisé (compression, taille raisonnable)
- [ ] Le nom du fichier est descriptif et sans espaces
- [ ] Le fichier est dans le bon dossier (`images/`, `videos/`, etc.)
- [ ] Le chemin dans le code commence par `/media/` (pas `/public/media/`)
- [ ] Pour les images importantes, utilisez `<Image>` de Next.js avec `width`/`height` ou `fill`
- [ ] L'attribut `alt` est présent et descriptif


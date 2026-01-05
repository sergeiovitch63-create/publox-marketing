# PUBLOX TENERIFE - Spécifications Techniques

## Vue d'ensemble
Projet Next.js 14 (App Router) avec TypeScript, TailwindCSS, i18n (next-intl), et animations Framer Motion.

## Design Tokens

### Couleurs
- **Page Background**: `#EEEEEE` (page-bg)
- **Text Primary**: `#1A1A1A` (text-primary)
- **Text Secondary**: `#6B6B6B` (text-secondary)
- **Button Primary BG**: `#1E1E1E` (button-primary-bg)
- **Pastel Blue**: `#93BEE9` (pastel-blue)
- **Warm Beige**: `#EDDFD0` (warm-beige)
- **Soft Beige**: `#EDEAE7` (soft-beige)
- **Blue Grey**: `#BBCDDE` (blue-grey)
- **Offwhite Card**: `#F0EAE5` (offwhite-card)

### Border Radius
- **Cards**: `24px` (card)
- **Images**: `20px` (image)
- **Buttons**: `9999px` (pill)

### Shadows
- **Soft**: `0 2px 8px rgba(0, 0, 0, 0.04)`
- **Soft Large**: `0 4px 16px rgba(0, 0, 0, 0.06)`

### Container
- **Max Width**: `1200px` (container)
- **Padding**: Responsive (px-4 sm:px-6 lg:px-8)

## Routes i18n

Toutes les routes sont préfixées par `/[locale]` où locale = `es` | `en` | `fr`

### Pages principales
- `/[locale]/` - Home
- `/[locale]/necesitas` - ¿Qué necesitas para hacer crecer tu negocio?
- `/[locale]/contacto` - Contacto
- `/[locale]/reclutamiento` - Reclutamiento
- `/[locale]/privacy` - Política de Privacidad
- `/[locale]/not-found` - Page 404 i18n

### Marketing
- `/[locale]/marketing` - Marketing & Captación de Clientes
- `/[locale]/marketing/adquisicion` - Pack Adquisición
- `/[locale]/marketing/branding-adquisicion` - Pack Branding + Adquisición
- `/[locale]/marketing/automatizacion-adquisicion-branding` - Pack Automatización + Adquisición + Branding

### Sitio Web
- `/[locale]/sitio-web` - Sitio Web
- `/[locale]/sitio-web/corporativo` - Sitio Web Corporativo
- `/[locale]/sitio-web/tienda-online` - Tienda Online

### Impresión
- `/[locale]/impresion` - Impresión
- `/[locale]/impresion/tarjetas-visita` - Tarjetas de Visita Profesionales
- `/[locale]/impresion/flyers-promocionales` - Flyers Promocionales
- `/[locale]/impresion/dipticos-tripticos` - Pack Dípticos / Trípticos
- `/[locale]/impresion/caballete` - Caballete Doble Cara

## Composants

### Layout
- **Header** (`components/Header.tsx`)
  - Logo PUBLOX (lien vers home)
  - Menu navigation (Impresión, Sitio Web, Marketing, Reclutamiento, Contacto)
  - LanguageSwitcher (drapeaux ES/EN/FR)
  - Sticky top avec shadow

- **Footer** (`components/Footer.tsx`)
  - Copyright
  - Lien Privacy
  - Fond soft-beige

### Composants réutilisables
- **Container** (`components/Container.tsx`)
  - Max-width 1200px, padding responsive

- **Button** (`components/Button.tsx`)
  - Variants: `primary` (noir), `secondary` (bleu pastel)
  - Support href (Link Next.js) ou button natif
  - Rounded pill

- **Card** (`components/Card.tsx`)
  - Fond offwhite-card, radius 24px, shadow soft

- **Section** (`components/Section.tsx`)
  - Spacing vertical (py-12 md:py-16 lg:py-20)
  - Variants bg: default, soft-beige, blue-grey

- **MediaPlaceholder** (`components/MediaPlaceholder.tsx`)
  - Ratios: 16:9, 4:3, 1:1, 3:2
  - Fond warm-beige, rounded optionnel

- **FrameImage** (`components/FrameImage.tsx`)
  - Cadre 2 couches: bleu pastel extérieur + beige intérieur
  - Support MediaPlaceholder ou contenu custom

- **FadeIn** (`components/FadeIn.tsx`)
  - Animation Framer Motion: fade + translateY
  - Trigger on view (viewport once)

- **LanguageSwitcher** (`components/LanguageSwitcher.tsx`)
  - Drapeaux ES/EN/FR
  - Conserve locale sur navigation
  - Style premium discret

## i18n

### Configuration
- **Middleware**: `middleware.ts` - Redirige `/` vers `/es`
- **Config**: `i18n.ts` - Configuration next-intl
- **Locales**: `es` (défaut), `en`, `fr`
- **Messages**: `messages/{locale}.json`

### Conventions
- **100% des strings via traductions** - Aucun texte hardcodé dans les composants
- **Clés structurées**: `nav.*`, `footer.*`, `common.*`, `pages.*`
- **Pages serveur**: Utiliser `getTranslations()` et `getLocale()` (serveur)
- **Composants client**: Utiliser `useTranslations()` et `useLocale()` (client)

### Structure des clés
```json
{
  "nav": { ... },
  "footer": { ... },
  "common": { ... },
  "pages": {
    "home": { "title": "...", "description": "..." },
    "marketing": {
      "title": "...",
      "packAdquisicion": { ... }
    }
  }
}
```

## Structure du projet

```
/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Layout principal avec Header/Footer
│   │   ├── page.tsx            # Home
│   │   ├── necesitas/
│   │   ├── marketing/
│   │   ├── sitio-web/
│   │   ├── impresion/
│   │   ├── reclutamiento/
│   │   ├── contacto/
│   │   ├── privacy/
│   │   └── not-found.tsx
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Styles globaux + CSS variables
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Container.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   ├── MediaPlaceholder.tsx
│   ├── FrameImage.tsx
│   └── FadeIn.tsx
├── messages/
│   ├── es.json
│   ├── en.json
│   └── fr.json
├── i18n.ts                     # Configuration next-intl
├── middleware.ts               # Middleware i18n
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Checklist QA

### Fonctionnalités
- [x] Next.js App Router configuré
- [x] TypeScript strict activé
- [x] TailwindCSS configuré avec tokens
- [x] i18n next-intl fonctionnel (ES/EN/FR)
- [x] Middleware redirige `/` vers `/es`
- [x] Toutes les pages créées et accessibles
- [x] Header présent sur toutes les pages
- [x] Footer présent sur toutes les pages
- [x] LanguageSwitcher fonctionnel
- [x] Tous les liens menu pointent vers bonnes routes
- [x] 100% des strings via traductions (aucun hardcode)
- [x] Animations Framer Motion configurées
- [x] Design tokens centralisés

### Code Quality
- [ ] `npm run lint` passe sans erreurs
- [ ] `npm run build` passe sans erreurs
- [ ] Aucun warning console
- [ ] Types TypeScript corrects
- [ ] Composants réutilisables bien structurés

### Design
- [x] Couleurs tokens implémentées
- [x] Border radius tokens implémentés
- [x] Shadows tokens implémentés
- [x] Container max-width 1200px
- [x] Spacing généreux et responsive
- [x] Header sticky avec shadow
- [x] Footer avec fond soft-beige

### i18n
- [x] 3 langues configurées (ES/EN/FR)
- [x] ES langue par défaut
- [x] Routes `/es`, `/en`, `/fr` fonctionnelles
- [x] Redirection `/` → `/es`
- [x] Toutes les clés de traduction présentes
- [x] LanguageSwitcher conserve locale

## Commandes

```bash
# Développement
npm run dev

# Build
npm run build

# Lint
npm run lint

# Production
npm start
```

## Notes importantes

1. **Pas de texte hardcodé** - Tous les textes doivent venir des fichiers de traduction
2. **Pages serveur** - Utiliser `getTranslations()` et `getLocale()` (pas les hooks)
3. **Composants client** - Marquer avec `'use client'` si nécessaire (FadeIn, LanguageSwitcher)
4. **Design tokens** - Toujours utiliser les tokens Tailwind, jamais les valeurs en dur
5. **Placeholder images** - Utiliser `MediaPlaceholder` ou `FrameImage` pour les images manquantes


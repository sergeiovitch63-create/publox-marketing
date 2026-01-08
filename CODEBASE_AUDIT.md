# CODEBASE AUDIT - PUBLOX TENERIFE

**Date:** 2025-01-27  
**Purpose:** Factual inventory of existing implementation

---

## 1. PAGES & ROUTES

### Route: / (Home)
- **File:** `app/[locale]/page.tsx`
- **Description:** Homepage displaying hero section with video, 5 service sections (Captación, Automatización, Redes Sociales, Sitio Web, Impresión), "Oportunidad" affiliate section, and "Affiliates" partners section

### Route: /necesitas
- **File:** `app/[locale]/necesitas/page.tsx`
- **Description:** Service selection page with 3 choice blocks (Marketing, Sitio Web, Impresión) with video placeholders and CTAs

### Route: /impresion
- **File:** `app/[locale]/impresion/page.tsx`
- **Description:** Main printing services page with 4 blocks (Tarjetas de Visita, Flyers Promocionales, Dípticos/Trípticos, Caballete), each with FAQ accordions and general FAQ section

### Route: /impresion/tarjetas-visita
- **File:** `app/[locale]/impresion/tarjetas-visita/page.tsx`
- **Description:** Detail page for business cards using PrintProductDetailPage component

### Route: /impresion/flyers-promocionales
- **File:** `app/[locale]/impresion/flyers-promocionales/page.tsx`
- **Description:** Detail page for promotional flyers using PrintProductDetailPage component

### Route: /impresion/dipticos-tripticos
- **File:** `app/[locale]/impresion/dipticos-tripticos/page.tsx`
- **Description:** Detail page for brochures using PrintProductDetailPage component

### Route: /impresion/caballete
- **File:** `app/[locale]/impresion/caballete/page.tsx`
- **Description:** Detail page for display stands using PrintProductDetailPage component

### Route: /sitio-web
- **File:** `app/[locale]/sitio-web/page.tsx`
- **Description:** Main website services page with 2 blocks (Corporativo, Tienda Online), each with FAQ accordions and general FAQ section

### Route: /sitio-web/corporativo
- **File:** `app/[locale]/sitio-web/corporativo/page.tsx`
- **Description:** Detail page for corporate websites using PackDetailPage component

### Route: /sitio-web/tienda-online
- **File:** `app/[locale]/sitio-web/tienda-online/page.tsx`
- **Description:** Detail page for online stores using PackDetailPage component

### Route: /marketing
- **File:** `app/[locale]/marketing/page.tsx`
- **Description:** Main marketing services page with 3 pack blocks (Adquisición, Branding-Adquisición, Automatización-Adquisición-Branding), each with FAQ accordions and general FAQ section

### Route: /marketing/adquisicion
- **File:** `app/[locale]/marketing/adquisicion/page.tsx`
- **Description:** Detail page for acquisition pack using PackDetailPage component

### Route: /marketing/branding-adquisicion
- **File:** `app/[locale]/marketing/branding-adquisicion/page.tsx`
- **Description:** Detail page for branding-acquisition pack using PackDetailPage component

### Route: /marketing/automatizacion-adquisicion-branding
- **File:** `app/[locale]/marketing/automatizacion-adquisicion-branding/page.tsx`
- **Description:** Detail page for automation-acquisition-branding pack using PackDetailPage component

### Route: /reclutamiento
- **File:** `app/[locale]/reclutamiento/page.tsx`
- **Description:** Recruitment/affiliate page with hero section, main card with image and text, and CTA button

### Route: /contacto
- **File:** `app/[locale]/contacto/page.tsx`
- **Description:** Contact page with 2 cards (WhatsApp link, Email link) with icons

### Route: /publox
- **File:** `app/[locale]/publox/page.tsx`
- **Description:** About PUBLOX page with SEO content, services list, and WhatsApp CTA button

### Route: /privacy
- **File:** `app/[locale]/privacy/page.tsx`
- **Description:** Privacy policy page with title and description from translations

### Route: /404
- **File:** `app/[locale]/404/page.tsx`
- **Description:** Custom 404 error page with title, description, and "Back to Home" button

### Route: (not-found)
- **File:** `app/[locale]/not-found.tsx`
- **Description:** Next.js not-found handler component with same structure as /404 page

### Route: /media-guide
- **File:** `app/media-guide/page.tsx`
- **Description:** UNKNOWN (file exists but content not verified)

---

## 2. SECTIONS PRESENT ON HOME PAGE (IN ORDER)

### 1. Hero Section
- **Component:** Inline section (not separate component)
- **File:** `app/[locale]/page.tsx` (lines 24-59)
- **Purpose:** Main hero with title, subtitle, CTA button, and hero video
- **Key elements:**
  - Title: 3 lines (translated)
  - Subtitle: Multi-line text (translated)
  - CTA Button: "Desarrollar mi negocio" → links to `/necesitas`
  - Hero video: `/media/videos/HERO.mp4` (16:9 ratio)
  - Cloud blob decorative elements

### 2. Services Section - Captación
- **Component:** Inline section
- **File:** `app/[locale]/page.tsx` (lines 64-96)
- **Purpose:** Service presentation with video on left, text on right
- **Key elements:**
  - Title: "Captación" (translated)
  - 3 text paragraphs (translated)
  - CTA Button → links to `/necesitas`
  - Video: `/media/videos/Captación-de-clientes.mp4` (4:3 ratio)
  - Decorative frame (blue/beige border)

### 3. Services Section - Automatización
- **Component:** Inline section
- **File:** `app/[locale]/page.tsx` (lines 98-132)
- **Purpose:** Service presentation with text on left, video on right
- **Key elements:**
  - Title: "Automatización" (translated)
  - 3 text paragraphs (translated)
  - CTA Button → links to `/necesitas`
  - Video: `/media/videos/Automatización.mp4` (4:3 ratio)
  - Decorative frame

### 4. Services Section - Redes Sociales
- **Component:** Inline section
- **File:** `app/[locale]/page.tsx` (lines 134-166)
- **Purpose:** Service presentation with video on left, text on right
- **Key elements:**
  - Title: "Redes Sociales" (translated)
  - 3 text paragraphs (translated)
  - CTA Button → links to `/necesitas`
  - Video: `/media/videos/Redes-sociales.mp4` (4:3 ratio)
  - Decorative frame

### 5. Services Section - Sitio Web
- **Component:** Inline section
- **File:** `app/[locale]/page.tsx` (lines 168-202)
- **Purpose:** Service presentation with text on left, video on right
- **Key elements:**
  - Title: "Sitio Web" (translated)
  - 3 text paragraphs (translated)
  - CTA Button → links to `/necesitas`
  - Video: `/media/videos/Sitio-web.mp4` (4:3 ratio)
  - Decorative frame

### 6. Services Section - Impresión
- **Component:** Inline section
- **File:** `app/[locale]/page.tsx` (lines 204-236)
- **Purpose:** Service presentation with video on left, text on right
- **Key elements:**
  - Title: "Impresión Profesional" (translated)
  - 3 text paragraphs (translated)
  - CTA Button → links to `/necesitas`
  - Video: `/media/videos/Impresión-profesional.mp4` (4:3 ratio)
  - Decorative frame

### 7. Oportunidad Section
- **Component:** Inline section
- **File:** `app/[locale]/page.tsx` (lines 240-346)
- **Purpose:** Affiliate opportunity presentation
- **Key elements:**
  - Section title: "Una oportunidad real" (translated)
  - Subtitle: "COLABORA CON UNA SOLUCIÓN..." (translated)
  - Large card with image and text about 20% commission
  - 3 vignettes with images:
    - "Sin conocimientos técnicos" (`/media/images/no-tech-knowledge.png`)
    - "Tu misión es conectar" (`/media/images/your-mission-connect.png`)
    - "Sistema de comisión" (`/media/images/commission-system.png`)
  - Main card image: `/media/images/affiliate-20-commission.png`

### 8. Affiliates Section
- **Component:** Inline section
- **File:** `app/[locale]/page.tsx` (lines 348-419)
- **Purpose:** Display affiliate partners and group information
- **Key elements:**
  - Section title: "Nuestros afiliados y partners de confianza" (translated)
  - Subtitle (translated)
  - Main card with group/holding logo: `/media/images/groupe-holding.jpg`
  - Grid title: "Afiliados y empresas colaboradoras" (translated)
  - 4 affiliate logo images in 2x2 grid:
    - `/media/images/affilier-1.jpg`
    - `/media/images/affilier-2.jpg`
    - `/media/images/affilier-3.png`
    - `/media/images/affilier-4.jpg`

---

## 3. COMPONENTS

### Reusable Components (Used in Pages)

#### AccordionFAQ
- **File:** `components/AccordionFAQ.tsx`
- **Where used:** 
  - `/impresion` page (4 FAQ blocks + general FAQ)
  - `/marketing` page (3 FAQ blocks + general FAQ)
  - `/sitio-web` page (2 FAQ blocks + general FAQ)
- **Purpose:** Expandable FAQ accordion with question/answer pairs

#### Button
- **File:** `components/Button.tsx`
- **Where used:** Throughout all pages
- **Purpose:** Reusable button component with variants (primary/secondary), supports href or button element

#### Card
- **File:** `components/Card.tsx`
- **Where used:** Throughout all pages
- **Purpose:** Container component with rounded corners, shadow, and background styling

#### Container
- **File:** `components/Container.tsx`
- **Where used:** All pages (wraps content)
- **Purpose:** Max-width container with responsive padding

#### FadeIn
- **File:** `components/FadeIn.tsx`
- **Where used:** All pages
- **Purpose:** Framer Motion animation wrapper for fade-in on scroll

#### FloatingWhatsApp
- **File:** `components/FloatingWhatsApp.tsx`
- **Where used:** Global layout (`app/[locale]/layout.tsx`)
- **Purpose:** Fixed floating WhatsApp button in bottom-right corner, links to `https://wa.me/34614052889`

#### Footer
- **File:** `components/Footer.tsx`
- **Where used:** Global layout (`app/[locale]/layout.tsx`)
- **Purpose:** Site footer with PUBLOX description, information links (Contact, Privacy, PUBLOX, 404), and copyright

#### FrameImage
- **File:** `components/FrameImage.tsx`
- **Where used:** NOT PRESENT (component exists but not used in codebase)

#### Header
- **File:** `components/Header.tsx`
- **Where used:** Global layout (`app/[locale]/layout.tsx`)
- **Purpose:** Site header with logo, navigation links, language switcher, mobile menu button

#### HeroMedia
- **File:** `components/HeroMedia.tsx`
- **Where used:** Home page hero section
- **Purpose:** Video/image display component with aspect ratio support

#### LanguageDropdown
- **File:** `components/LanguageDropdown.tsx`
- **Where used:** Header component (mobile view)
- **Purpose:** Mobile language selector dropdown

#### LanguageSwitcher
- **File:** `components/LanguageSwitcher.tsx`
- **Where used:** Header component (desktop view)
- **Purpose:** Desktop language selector with flag buttons

#### MediaPlaceholder
- **File:** `components/MediaPlaceholder.tsx`
- **Where used:** PrintProductDetailPage, PackDetailPage (fallback when no video)
- **Purpose:** Placeholder div with "Media Placeholder" text for missing media

#### MobileMenu
- **File:** `components/MobileMenu.tsx`
- **Where used:** Header component
- **Purpose:** Slide-out mobile navigation drawer with navigation links and CTA button

#### PackDetailPage
- **File:** `components/PackDetailPage.tsx`
- **Where used:** 
  - `/marketing/adquisicion`
  - `/marketing/branding-adquisicion`
  - `/marketing/automatizacion-adquisicion-branding`
  - `/sitio-web/corporativo`
  - `/sitio-web/tienda-online`
- **Purpose:** Reusable template for pack/service detail pages with hero, video/image, bullets, price, note, and CTA

#### PrintProductDetailPage
- **File:** `components/PrintProductDetailPage.tsx`
- **Where used:**
  - `/impresion/tarjetas-visita`
  - `/impresion/flyers-promocionales`
  - `/impresion/dipticos-tripticos`
  - `/impresion/caballete`
- **Purpose:** Reusable template for print product detail pages with hero, video/image, bullets, blue actions, extra prices, and contact CTA

#### Section
- **File:** `components/Section.tsx`
- **Where used:** All pages
- **Purpose:** Section wrapper with background color options (default, soft-beige, blue-grey) and padding

#### VideoPlaceholder
- **File:** `components/VideoPlaceholder.tsx`
- **Where used:** Home page, service pages, detail pages
- **Purpose:** Video player component with auto-play, loop, muted, and aspect ratio support

---

## 4. NAVIGATION

### Header
- **File:** `components/Header.tsx`
- **Logo:** Text "PUBLOX" (links to home)
- **Links (Desktop):**
  1. Impresión → `/[locale]/impresion`
  2. Sitio Web → `/[locale]/sitio-web`
  3. Marketing & Captación de Clientes → `/[locale]/marketing`
  4. Reclutamiento → `/[locale]/reclutamiento`
  5. Contacto → `/[locale]/contacto`
- **Active state:** Underline border on active route
- **Language switcher:** YES (desktop: LanguageSwitcher, mobile: LanguageDropdown)
- **Mobile menu:** YES (hamburger button opens MobileMenu drawer)

### Footer
- **File:** `components/Footer.tsx`
- **Left side:**
  - Title: "PUBLOX" (translated)
  - Description: Multi-line text about PUBLOX (translated)
  - Decorative circle element
- **Right side:**
  - Section title: "INFORMATION" (translated)
  - Links:
    1. Contact → `/[locale]/contacto`
    2. Privacy → `/[locale]/privacy`
    3. PUBLOX → `/[locale]/publox`
    4. 404 → `/[locale]/404`
- **Copyright:** "© 2025 PUBLOX. Created by Egor Lunev" (translated)

### Language Switcher
- **Status:** YES
- **Implementation:**
  - Desktop: `LanguageSwitcher` component with flag emoji buttons (ES, EN, FR)
  - Mobile: `LanguageDropdown` component with dropdown menu
- **How it works:**
  - Preserves current route when switching locale
  - Replaces locale prefix in URL path
  - Uses Next.js router for navigation
  - Flags: 🇪🇸 ES, 🇬🇧 EN, 🇫🇷 FR
- **Locales supported:** es, en, fr (defined in `i18n.ts`)
- **Default locale:** es

---

## 5. CONTENT & COPY

### Languages Implemented
- **Spanish (es):** YES - `messages/es.json`
- **English (en):** YES - `messages/en.json`
- **French (fr):** YES - `messages/fr.json`
- **Default locale:** es (Spanish)

### Static Texts Present
All text content is translated via next-intl:
- Navigation labels
- Footer content
- Page titles, subtitles, descriptions
- Service descriptions
- FAQ questions and answers
- Button labels
- Error messages
- All user-facing text

### Hardcoded vs Translated Strings
- **Translated:** All user-facing text uses translation keys
- **Hardcoded:** 
  - WhatsApp number: `34614052889` (in FloatingWhatsApp and ContactoPage)
  - Email: `publox4@gmail.com` (in ContactoPage)
  - Copyright attribution: "Created by Egor Lunev" (in footer translations)
  - Logo text: "PUBLOX" (hardcoded in Header)
  - Mobile menu title: "Menu" (hardcoded in MobileMenu)

### Translation Structure
- Uses `next-intl` library
- Translation files: `messages/{locale}.json`
- Translation namespaces:
  - `nav` - Navigation
  - `footer` - Footer
  - `common` - Common strings
  - `pages.{pageName}` - Page-specific content
  - `pages.home` - Home page content
  - `pages.necesitas` - Service selection page
  - `pages.impresion` - Printing services
  - `pages.sitioWeb` - Website services
  - `pages.marketing` - Marketing services
  - `pages.contacto` - Contact page
  - `pages.reclutamiento` - Recruitment page
  - `pages.publox` - About page
  - `pages.privacy` - Privacy page
  - `pages.notFound` - 404 page
  - Plus detail page translations for each product/pack

---

## 6. MEDIA & ASSETS

### Images Used
- **Type:** PNG, JPG
- **Location:** `public/media/images/`
- **Images present:**
  1. `affiliate-20-commission.png` - 20% commission illustration
  2. `affilier-1.jpg` - Affiliate logo 1
  3. `affilier-2.jpg` - Affiliate logo 2
  4. `affilier-3.png` - Affiliate logo 3
  5. `affilier-4.jpg` - Affiliate logo 4
  6. `commission-system.png` - Commission system illustration
  7. `groupe-holding.jpg` - Group/holding logo
  8. `no-tech-knowledge.png` - No technical knowledge illustration
  9. `your-mission-connect.png` - Mission connect illustration

### Videos Used
- **Type:** MP4
- **Location:** `public/media/videos/`
- **Videos present:**
  1. `Automatización.mp4` - Automation service video
  2. `Caballete-(Doble Cara).mp4` - Display stand product video
  3. `Captación-de-clientes.mp4` - Customer acquisition service video
  4. `Flyers-Promocionales.mp4` - Promotional flyers product video
  5. `HERO.mp4` - Homepage hero video
  6. `Impresión-profesional.mp4` - Professional printing service video
  7. `Pack Automatización-Adquisicion-Branding.mp4` - Automation pack video
  8. `Pack-Adquisicion.mp4` - Acquisition pack video
  9. `Pack-Branding-Adquisicion.mp4` - Branding pack video
  10. `PACK-DIPTICOS-TRIPTICOS.mp4` - Brochures product video
  11. `Redes-sociales.mp4` - Social media service video
  12. `Sitio-web-corporativo.mp4` - Corporate website video
  13. `Sitio-web.mp4` - Website service video
  14. `Tarjetas-de-Visita-Profesionales.mp4` - Business cards product video
  15. `Tienda-online.mp4` - Online store video

### Logos
- **PUBLOX logo:** Text-based "PUBLOX" (no image file, hardcoded text in Header)
- **Group/Holding logo:** `/media/images/groupe-holding.jpg`
- **Affiliate logos:** 4 images in `/media/images/` (affilier-1.jpg through affilier-4.jpg)

### Icons
- **WhatsApp icon:** SVG inline in FloatingWhatsApp component
- **Email icon:** SVG inline in ContactoPage
- **Hamburger menu icon:** SVG inline in Header
- **Close menu icon:** SVG inline in MobileMenu
- **Language dropdown arrow:** SVG inline in LanguageDropdown
- **FAQ expand/collapse:** Unicode character "▼" in AccordionFAQ
- **Flag emojis:** 🇪🇸 🇬🇧 🇫🇷 (used in language switchers)

### Other Assets
- **Favicon files:** 
  - `app/favicon.ico`
  - `app/icon.png`
  - `app/apple-icon.png`
  - `public/favicon.ico`
  - `public/favicon.svg`
  - `public/favicon-96x96.png`
  - `public/apple-touch-icon.png`
  - `public/web-app-manifest-192x192.png`
  - `public/web-app-manifest-512x512.png`
- **Manifest:** `public/site.webmanifest`
- **Google verification:** `public/google0f67aaf03c47c309.html`

### Empty Directories
- `public/media/brands/` - Empty
- `public/media/icons/` - Empty
- `public/media/placeholders/` - Exists but content not verified

---

## 7. CTA & LINKS

### Buttons Present

#### Primary CTA Buttons
1. **Home hero CTA:** "Desarrollar mi negocio" → `/[locale]/necesitas`
2. **Service section CTAs (5x):** Same text as hero → `/[locale]/necesitas`
3. **Necesitas page CTAs:**
   - Marketing block → `/[locale]/marketing`
   - Sitio Web block → `/[locale]/sitio-web`
   - Impresión block → `/[locale]/impresion`
4. **Detail page CTAs:**
   - All print product pages → `/[locale]/contacto`
   - All pack detail pages → `/[locale]/contacto`
5. **Mobile menu CTA:** "Desarrollar mi negocio" → `/[locale]/necesitas`
6. **404 page CTA:** "Back to Home" → `/[locale]`
7. **Publox page CTA:** "Contactar por WhatsApp" → External WhatsApp link

#### Secondary/Other Links
1. **Floating WhatsApp:** External → `https://wa.me/34614052889`
2. **Contact page:**
   - WhatsApp card → `https://wa.me/34614052889`
   - Email card → `mailto:publox4@gmail.com`
3. **Navigation links:** See Header section above
4. **Footer links:** See Footer section above

### Button Destinations Summary
- **Internal routes:**
  - `/[locale]/necesitas` - Service selection
  - `/[locale]/contacto` - Contact page
  - `/[locale]/impresion` - Printing services
  - `/[locale]/sitio-web` - Website services
  - `/[locale]/marketing` - Marketing services
  - `/[locale]` - Home
- **External links:**
  - WhatsApp: `https://wa.me/34614052889`
  - Email: `mailto:publox4@gmail.com`

---

## 8. WHAT IS NOT PRESENT

### Features/Sections NOT Implemented
1. **Contact form** - Contact page only has WhatsApp and Email links (no form)
2. **Shopping cart / E-commerce functionality** - No cart, checkout, or payment processing
3. **User accounts / Authentication** - No login, registration, or user profiles
4. **Blog / News section** - No blog or news/articles pages
5. **Testimonials section** - No customer testimonials or reviews
6. **Portfolio/Gallery section** - No portfolio or case studies gallery
7. **Search functionality** - No search bar or search feature
8. **Newsletter signup** - No email newsletter subscription
9. **Social media links** - No social media icons/links in footer or header
10. **Cookie consent banner** - No cookie consent or GDPR banner
11. **Live chat** - Only WhatsApp floating button (no live chat widget)
12. **Booking/Appointment system** - No booking or scheduling functionality
13. **Pricing calculator** - No interactive pricing tool
14. **Multi-step forms** - No multi-step contact or quote forms
15. **Video testimonials** - No video testimonial section
16. **Team/About page** - No team member profiles or detailed about page
17. **FAQ search** - FAQ accordions exist but no search within FAQs
18. **Product comparison** - No comparison tool for services/packs
19. **Downloadable resources** - No PDF downloads or resource library
20. **Interactive maps** - No location map (even though Tenerife is mentioned)
21. **Analytics dashboard** - No admin or analytics interface visible
22. **Content management system** - Content is hardcoded/translated, no CMS
23. **User reviews/ratings** - No review or rating system
24. **Related products suggestions** - No "you may also like" sections
25. **Breadcrumbs navigation** - No breadcrumb component
26. **Back to top button** - No scroll-to-top functionality
27. **Print/PDF export** - No print-friendly or PDF export options
28. **Share buttons** - No social sharing buttons on pages
29. **Image galleries** - No lightbox or image gallery components
30. **Video transcripts** - No transcripts for video content
31. **Accessibility features** - Basic accessibility present but no advanced features (skip links, high contrast mode, etc.)
32. **Dark mode** - No dark/light theme toggle
33. **FrameImage component** - Component exists but is NOT USED anywhere in the codebase

---

## TECHNICAL NOTES

### Framework & Libraries
- **Framework:** Next.js (App Router)
- **Internationalization:** next-intl
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (via FadeIn component)
- **Image optimization:** Next.js Image component
- **TypeScript:** YES

### Routing Structure
- All routes are locale-prefixed: `/[locale]/...`
- Middleware handles locale routing (`middleware.ts`)
- Default locale: es
- Locale prefix: always (required in URL)

### SEO Implementation
- Metadata generation: `lib/metadata.ts`
- Sitemap: `app/sitemap.ts`
- Robots.txt: `app/robots.ts`
- Google verification file present

---

**END OF AUDIT**





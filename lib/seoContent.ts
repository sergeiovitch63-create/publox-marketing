import type { Metadata } from 'next';
import { type Locale } from '@/i18n';
import { generateMetadataForLocale } from '@/lib/metadata';

type LocaleSeo = { title: string; description: string };
type PageSeo = Partial<Record<Locale, LocaleSeo>>;

/**
 * Per-page, per-locale SEO content. Keyed by the route path (without locale).
 * Pages call `getPageMetadata(locale, key)` from their `generateMetadata`.
 */
export const pageSeo: Record<string, PageSeo> = {
  necesitas: {
    es: { title: '¿Qué necesitas? Elige tu solución | PUBLOX', description: 'Webs, marketing, impresión, tarjetas NFC o página multi-enlace: elige la solución PUBLOX adaptada a tu negocio.' },
    fr: { title: 'De quoi avez-vous besoin ? Choisissez votre solution | PUBLOX', description: 'Sites web, marketing, impression, cartes NFC ou page multi-liens : choisissez la solution PUBLOX adaptée à votre activité.' },
    en: { title: 'What do you need? Choose your solution | PUBLOX', description: 'Websites, marketing, print, NFC cards or a multi-link page: pick the PUBLOX solution that fits your business.' },
    it: { title: 'Di cosa hai bisogno? Scegli la tua soluzione | PUBLOX', description: 'Siti web, marketing, stampa, carte NFC o pagina multi-link: scegli la soluzione PUBLOX adatta alla tua attività.' },
    ru: { title: 'Что вам нужно? Выберите решение | PUBLOX', description: 'Сайты, маркетинг, печать, NFC-карты или мульти-ссылка — выберите решение PUBLOX для вашего бизнеса.' },
  },
  marketing: {
    es: { title: 'Marketing y captación de clientes | PUBLOX', description: 'Sistema de marketing llave en mano: captación, branding y automatización para conseguir más clientes sin gestión mensual.' },
    fr: { title: 'Marketing et acquisition de clients | PUBLOX', description: 'Système marketing clé en main : acquisition, branding et automatisation pour obtenir plus de clients, sans gestion mensuelle.' },
    en: { title: 'Marketing & client acquisition | PUBLOX', description: 'Turnkey marketing system: acquisition, branding and automation to win more clients without monthly management.' },
    it: { title: 'Marketing e acquisizione clienti | PUBLOX', description: 'Sistema di marketing chiavi in mano: acquisizione, branding e automazione per ottenere più clienti senza gestione mensile.' },
    ru: { title: 'Маркетинг и привлечение клиентов | PUBLOX', description: 'Маркетинг под ключ: привлечение, брендинг и автоматизация для роста числа клиентов без ежемесячного управления.' },
  },
  'sitio-web': {
    es: { title: 'Diseño de sitios web profesionales | PUBLOX', description: 'Webs corporativas y tiendas online rápidas, modernas y optimizadas para convertir visitas en clientes. Desde 450€.' },
    fr: { title: 'Création de sites web professionnels | PUBLOX', description: 'Sites vitrines et boutiques en ligne rapides, modernes et optimisés pour convertir vos visiteurs en clients. Dès 450€.' },
    en: { title: 'Professional website design | PUBLOX', description: 'Fast, modern corporate websites and online stores, optimized to turn visitors into clients. From €450.' },
    it: { title: 'Creazione di siti web professionali | PUBLOX', description: 'Siti vetrina e negozi online veloci, moderni e ottimizzati per convertire i visitatori in clienti. Da 450€.' },
    ru: { title: 'Профессиональные сайты | PUBLOX', description: 'Быстрые современные корпоративные сайты и интернет-магазины, оптимизированные под конверсию. От 450€.' },
  },
  impresion: {
    es: { title: 'Impresión profesional: tarjetas, flyers y más | PUBLOX', description: 'Tarjetas de visita, flyers, dípticos, trípticos y caballetes con diseño y acabado profesional. Pide tu presupuesto.' },
    fr: { title: 'Impression professionnelle : cartes, flyers et plus | PUBLOX', description: 'Cartes de visite, flyers, dépliants et chevalets avec design et finition professionnels. Demandez votre devis.' },
    en: { title: 'Professional printing: cards, flyers & more | PUBLOX', description: 'Business cards, flyers, leaflets and display stands with professional design and finish. Request your quote.' },
    it: { title: 'Stampa professionale: biglietti, flyer e altro | PUBLOX', description: 'Biglietti da visita, flyer, pieghevoli ed espositori con design e finitura professionali. Richiedi il preventivo.' },
    ru: { title: 'Профессиональная печать: визитки, флаеры и др. | PUBLOX', description: 'Визитки, флаеры, буклеты и стойки с профессиональным дизайном и качеством. Запросите расчёт стоимости.' },
  },
  'page-multi-liens': {
    es: { title: 'Página multi-enlace para tu negocio | PUBLOX', description: 'Centraliza todos tus enlaces importantes en una sola página rápida y profesional. Solución simple desde 100€.' },
    fr: { title: 'Page multi-liens pour votre activité | PUBLOX', description: 'Centralisez tous vos liens importants sur une seule page rapide et professionnelle. Solution simple dès 100€.' },
    en: { title: 'Multi-link page for your business | PUBLOX', description: 'Bring all your important links together on one fast, professional page. Simple solution from €100.' },
    it: { title: 'Pagina multi-link per la tua attività | PUBLOX', description: 'Riunisci tutti i tuoi link importanti in una sola pagina veloce e professionale. Soluzione semplice da 100€.' },
    ru: { title: 'Мульти-ссылка для вашего бизнеса | PUBLOX', description: 'Соберите все важные ссылки на одной быстрой и профессиональной странице. Простое решение от 100€.' },
  },
  'cartes-nfc-google-avis': {
    es: { title: 'Tarjetas NFC para reseñas de Google | PUBLOX', description: 'Consigue más reseñas de Google con un toque. Tarjetas NFC personalizadas para tu negocio desde 15€.' },
    fr: { title: 'Cartes NFC pour avis Google | PUBLOX', description: 'Obtenez plus d’avis Google en un geste. Cartes NFC personnalisées pour votre établissement dès 15€.' },
    en: { title: 'NFC cards for Google reviews | PUBLOX', description: 'Get more Google reviews with one tap. Custom NFC cards for your business from €15.' },
    it: { title: 'Carte NFC per recensioni Google | PUBLOX', description: 'Ottieni più recensioni Google con un tocco. Carte NFC personalizzate per la tua attività da 15€.' },
    ru: { title: 'NFC-карты для отзывов Google | PUBLOX', description: 'Больше отзывов в Google одним касанием. Персональные NFC-карты для бизнеса от 15€.' },
  },
  contacto: {
    es: { title: 'Contacto | PUBLOX', description: 'Hablemos de tu proyecto. Contacta con PUBLOX por WhatsApp o email y recibe una respuesta rápida.' },
    fr: { title: 'Contact | PUBLOX', description: 'Parlons de votre projet. Contactez PUBLOX par WhatsApp ou email et obtenez une réponse rapide.' },
    en: { title: 'Contact | PUBLOX', description: 'Let’s talk about your project. Contact PUBLOX by WhatsApp or email and get a quick reply.' },
    it: { title: 'Contatti | PUBLOX', description: 'Parliamo del tuo progetto. Contatta PUBLOX via WhatsApp o email e ricevi una risposta rapida.' },
    ru: { title: 'Контакты | PUBLOX', description: 'Обсудим ваш проект. Свяжитесь с PUBLOX в WhatsApp или по email и получите быстрый ответ.' },
  },
  reclutamiento: {
    es: { title: 'Programa de afiliación: gana hasta 20% | PUBLOX', description: 'Recomienda PUBLOX y gana hasta un 20% de comisión. Únete a nuestro programa de afiliación.' },
    fr: { title: 'Programme d’affiliation : gagnez jusqu’à 20% | PUBLOX', description: 'Recommandez PUBLOX et gagnez jusqu’à 20% de commission. Rejoignez notre programme d’affiliation.' },
    en: { title: 'Affiliate program: earn up to 20% | PUBLOX', description: 'Recommend PUBLOX and earn up to 20% commission. Join our affiliate program.' },
    it: { title: 'Programma di affiliazione: guadagna fino al 20% | PUBLOX', description: 'Consiglia PUBLOX e guadagna fino al 20% di commissione. Unisciti al programma di affiliazione.' },
    ru: { title: 'Партнёрская программа: до 20% | PUBLOX', description: 'Рекомендуйте PUBLOX и зарабатывайте до 20% комиссии. Присоединяйтесь к партнёрской программе.' },
  },
  reviews: {
    es: { title: 'Opiniones de clientes | PUBLOX', description: 'Resultados reales de clientes de PUBLOX. Descubre sus opiniones y los trabajos realizados.' },
    fr: { title: 'Avis clients | PUBLOX', description: 'Résultats réels des clients de PUBLOX. Découvrez leurs avis et les réalisations.' },
    en: { title: 'Client reviews | PUBLOX', description: 'Real results from PUBLOX clients. See their reviews and the work delivered.' },
    it: { title: 'Recensioni dei clienti | PUBLOX', description: 'Risultati reali dei clienti PUBLOX. Scopri le loro recensioni e i lavori realizzati.' },
    ru: { title: 'Отзывы клиентов | PUBLOX', description: 'Реальные результаты клиентов PUBLOX. Смотрите их отзывы и выполненные работы.' },
  },
};
// /avisos shows the same content as /reviews
pageSeo.avisos = pageSeo.reviews;

/**
 * Build localized Metadata for a page from its route key.
 * Falls back to the generic site metadata when no entry exists.
 */
export function getPageMetadata(locale: Locale, key: string): Metadata {
  const entry = pageSeo[key];
  const loc = entry?.[locale] ?? entry?.es;
  return generateMetadataForLocale(locale, key, loc?.title, loc?.description);
}

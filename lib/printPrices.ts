/**
 * Starting prices (cheapest tier) for print products, taken from the
 * official price grids (Google Drive PDFs). Shown as "from X€".
 */
export const printFromPrices = {
  tarjetas: 17, // Tarjetas de visita, 1 cara, 100 ud
  flyers: 21, // Flyers A6 1 cara, 100 ud
  dipticos: 45, // Dípticos/Trípticos A5, 100 ud
  caballete: 130, // Caballete 70 x 50
} as const;

export type PrintProduct = keyof typeof printFromPrices;

const fromWord: Record<string, string> = {
  es: 'Desde',
  fr: 'Dès',
  en: 'From',
  it: 'Da',
  ru: 'От',
};

/** Localized "from X€" label for a print product. */
export function priceFromLabel(locale: string, product: PrintProduct): string {
  const word = fromWord[locale] || fromWord.es;
  return `${word} ${printFromPrices[product]}€`;
}

export const locales = ["en", "de", "pt-BR"] as const;
export const site = {
  en: {
    lang: "en",
    code: "EN",
    homeLabel: "Loonen Consulting",
    skipLabel: "Skip to content",
    languageLabel: "Language",
    contactLabel: "Contact Janne",
  },
  de: {
    lang: "de",
    code: "DE",
    homeLabel: "Loonen Consulting",
    skipLabel: "Zum Inhalt springen",
    languageLabel: "Sprache",
    contactLabel: "Janne kontaktieren",
  },
  "pt-BR": {
    lang: "pt-BR",
    code: "PT-BR",
    homeLabel: "Loonen Consulting",
    skipLabel: "Ir para o conteúdo",
    languageLabel: "Idioma",
    contactLabel: "Fale com Janne",
  },
} as const;

export type Locale = keyof typeof site;
export function homePath(locale: Locale): string {
  return `${locale === "pt-BR" ? "pt-br" : locale}/`;
}

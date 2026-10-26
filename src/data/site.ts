export const locales = ["en", "de", "pt-BR"] as const;
export const site = {
  en: {
    lang: "en",
    code: "EN",
    homeLabel: "Loonen Consulting",
    skipLabel: "Skip to content",
    languageLabel: "Language",
    contactLabel: "Contact Janne",
    pages: {
      home: "",
      services: "services/",
      about: "about/",
      insights: "insights/",
      contact: "contact/",
      imprint: "legal-notice/",
      privacy: "privacy/",
    },
    navigation: [
      { page: "services", label: "Services & approach" },
      { page: "about", label: "About Janne" },
      { page: "insights", label: "Insights" },
      { page: "contact", label: "Contact" },
    ],
  },
  de: {
    lang: "de",
    code: "DE",
    homeLabel: "Loonen Consulting",
    skipLabel: "Zum Inhalt springen",
    languageLabel: "Sprache",
    contactLabel: "Janne kontaktieren",
    pages: {
      home: "",
      services: "leistungen/",
      about: "janne-loonen/",
      insights: "einblicke/",
      contact: "kontakt/",
      imprint: "impressum/",
      privacy: "datenschutz/",
    },
    navigation: [
      { page: "services", label: "Leistungen & Vorgehen" },
      { page: "about", label: "Über Janne" },
      { page: "insights", label: "Einblicke" },
      { page: "contact", label: "Kontakt" },
    ],
  },
  "pt-BR": {
    lang: "pt-BR",
    code: "PT-BR",
    homeLabel: "Loonen Consulting",
    skipLabel: "Ir para o conteúdo",
    languageLabel: "Idioma",
    contactLabel: "Fale com Janne",
    pages: {
      home: "",
      services: "servicos/",
      about: "sobre-janne/",
      insights: "artigos/",
      contact: "contato/",
      imprint: "informacoes-legais/",
      privacy: "privacidade/",
    },
    navigation: [
      { page: "services", label: "Serviços e abordagem" },
      { page: "about", label: "Sobre Janne" },
      { page: "insights", label: "Artigos" },
      { page: "contact", label: "Contato" },
    ],
  },
} as const;

export type Locale = keyof typeof site;
export type Page = keyof (typeof site)["en"]["pages"];

export function pagePath(locale: Locale, page: Page): string {
  const languageFolder = locale === "pt-BR" ? "pt-br" : locale;
  const suffix = site[locale].pages[page];

  return `${languageFolder}/${suffix}`;
}
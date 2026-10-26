import { homeContent } from "./home";
import type { Locale } from "./site";
const serviceDetails = {
  en: {
    title: "Services & approach",
    introduction:
      "A focused assessment can help your company understand relevant conditions in Northeast Brazil before deciding where to commit further resources.",
    services: [
      {
        id: "market-analysis",
        title: "Market analysis",
        question: "What market conditions could affect our decision?",
        when: "When you are assessing whether the region merits further attention.",
        work:
          "Review relevant tax structures, customs regulations, competition, and the framework conditions for market entry.",
        deliverable:
          "An analysis of the relevant conditions, with practical recommendations to inform your evaluation.",
      },
      {
        id: "partner-search",
        title: "Partner research",
        question: "Which local stakeholders or potential partners are relevant?",
        when: "When your company needs a clearer view of the local stakeholder landscape.",
        work:
          "Identify relevant stakeholders and research potential local partners in relation to your industry and needs.",
        deliverable:
          "A clearer picture of relevant stakeholders and potential local partners to consider.",
      },
      {
        id: "funding-research",
        title: "Funding research",
        question: "Which national or European programmes may be relevant?",
        when: "When you are exploring funding or export support for work connected to Brazil.",
        work:
          "Research relevant national and European funding and export programmes, and support the application process where appropriate.",
        deliverable:
          "An overview of potentially relevant programmes and support with the application process.",
      },
    ],
    approachTitle: "A conversation before a commitment",
    approachText:
      "The first conversation is a chance to understand your company’s capabilities, interest in the region, and the questions you need to evaluate. From there, we can discuss which areas of work may be useful.",
    contactLink: "Discuss your questions",
  },

  de: {
    title: "Leistungen & Vorgehen",
    introduction:
      "Eine gezielte Bewertung kann Ihrem Unternehmen helfen, relevante Rahmenbedingungen im Nordosten Brasiliens zu verstehen, bevor Sie über weitere Ressourcen entscheiden.",
    services: [
      {
        id: "market-analysis",
        title: "Marktanalyse",
        question: "Welche Marktbedingungen können unsere Entscheidung beeinflussen?",
        when: "Wenn Sie prüfen, ob die Region weitere Aufmerksamkeit verdient.",
        work:
          "Einordnung relevanter Steuerstrukturen, Zollvorschriften, der Wettbewerbssituation und der Rahmenbedingungen für einen Markteintritt.",
        deliverable:
          "Eine Analyse der relevanten Rahmenbedingungen mit praktischen Empfehlungen für Ihre Bewertung.",
      },
      {
        id: "partner-search",
        title: "Recherche zu möglichen Partnern",
        question: "Welche lokalen Akteure oder potenziellen Partner sind relevant?",
        when: "Wenn Ihr Unternehmen einen besseren Überblick über relevante Akteure vor Ort benötigt.",
        work:
          "Identifikation relevanter Akteure und Recherche potenzieller lokaler Partner mit Blick auf Ihre Branche und Ihren Bedarf.",
        deliverable:
          "Ein klareres Bild relevanter Akteure und möglicher lokaler Partner, die Sie in Betracht ziehen können.",
      },
      {
        id: "funding-research",
        title: "Recherche zu Fördermöglichkeiten",
        question: "Welche nationalen oder europäischen Programme könnten relevant sein?",
        when: "Wenn Sie Förder- oder Exportmöglichkeiten für Vorhaben mit Bezug zu Brasilien prüfen.",
        work:
          "Recherche zu relevanten nationalen und europäischen Förder- und Exportprogrammen sowie bei Bedarf Unterstützung im Antragsprozess.",
        deliverable:
          "Ein Überblick über möglicherweise relevante Programme und Unterstützung im Antragsprozess.",
      },
    ],
    approachTitle: "Ein Gespräch, bevor Sie sich festlegen",
    approachText:
      "Im ersten Gespräch geht es darum, die Kompetenzen Ihres Unternehmens, Ihr Interesse an der Region und Ihre offenen Fragen zu verstehen. Darauf aufbauend können wir besprechen, welche Arbeitsbereiche sinnvoll sein könnten.",
    contactLink: "Fragen besprechen",
  },

  "pt-BR": {
    title: "Serviços e abordagem",
    introduction:
      "Uma avaliação focada pode ajudar sua empresa a entender as condições relevantes no Nordeste do Brasil antes de decidir onde investir mais recursos.",
    services: [
      {
        id: "market-analysis",
        title: "Análise de mercado",
        question: "Quais condições de mercado podem influenciar nossa decisão?",
        when: "Quando sua empresa estiver avaliando se a região merece uma análise mais aprofundada.",
        work:
          "Análise de estruturas tributárias, regras aduaneiras, concorrência e condições para a entrada no mercado.",
        deliverable:
          "Uma análise das condições relevantes, com recomendações práticas para apoiar sua avaliação.",
      },
      {
        id: "partner-search",
        title: "Pesquisa de parceiros",
        question: "Quais atores locais ou potenciais parceiros são relevantes?",
        when: "Quando sua empresa precisar compreender melhor o cenário de atores locais.",
        work:
          "Identificação de atores relevantes e pesquisa de possíveis parceiros locais, considerando seu setor e suas necessidades.",
        deliverable:
          "Uma visão mais clara dos atores relevantes e de possíveis parceiros locais a considerar.",
      },
      {
        id: "funding-research",
        title: "Pesquisa de financiamento",
        question: "Quais programas nacionais ou europeus podem ser relevantes?",
        when: "Quando sua empresa estiver explorando apoio financeiro ou à exportação para iniciativas ligadas ao Brasil.",
        work:
          "Pesquisa de programas nacionais e europeus de financiamento e exportação e, quando pertinente, apoio ao processo de candidatura.",
        deliverable:
          "Um panorama de programas potencialmente relevantes e apoio no processo de candidatura.",
      },
    ],
    approachTitle: "Uma conversa antes de assumir compromissos",
    approachText:
      "A primeira conversa serve para entender as competências da sua empresa, seu interesse na região e as questões que precisa avaliar. A partir daí, podemos discutir quais frentes de trabalho podem ser úteis.",
    contactLink: "Converse sobre suas questões",
  },
} as const;
function localizedServices(locale: Locale) {
  const details = serviceDetails[locale];
  return {
    ...details,
    introduction: homeContent[locale].introduction,
    services: homeContent[locale].services.map((summary) => {
      const detail = details.services.find((service) => service.id === summary.id);
      if (!detail) throw new Error(`Missing service details: ${locale}/${summary.id}`);
      return { ...detail, title: summary.title, work: summary.description };
    }),
    contactLink: homeContent[locale].contactLink,
  };
}

export const servicesContent = {
  en: localizedServices("en"),
  de: localizedServices("de"),
  "pt-BR": localizedServices("pt-BR"),
};

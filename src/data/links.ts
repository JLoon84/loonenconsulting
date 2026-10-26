import type { Locale } from './site';

// Add the real URLs here when ready. Empty values never create dead links.
export const externalLinks = {
  booking: '',
  linkedIn: '',
};

const callSubjects: Record<Locale, string> = {
  en: 'Request a free 30-minute initial call',
  de: 'Anfrage für ein kostenloses 30-minütiges Erstgespräch',
  'pt-BR': 'Solicitação de uma conversa inicial gratuita de 30 minutos',
};
export const bookingHelp: Record<Locale, string> = {
  en: 'Arrange your free 30-minute initial call by email.',
  de: 'Vereinbaren Sie Ihr kostenloses 30-minütiges Erstgespräch per E-Mail.',
  'pt-BR': 'Combine sua conversa inicial gratuita de 30 minutos por e-mail.',
};
export function bookingHref(locale: Locale) {
  return externalLinks.booking || `mailto:info@loonenconsulting.com?subject=${encodeURIComponent(callSubjects[locale])}`;
}

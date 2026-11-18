import { MessageCircle } from 'lucide-react';
import { BUSINESS_WHATSAPP_DIGITS, buildWhatsAppUrl } from '../utils/contact';

export function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_WHATSAPP_DIGITS,
    'Olá! Gostaria de falar com a Fiore Mio Flores.',
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp com Fiore Mio Flores"
      className="fixed right-4 bottom-4 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-[#7B2CBF] px-4 text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:scale-105 hover:bg-[#63209E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
}

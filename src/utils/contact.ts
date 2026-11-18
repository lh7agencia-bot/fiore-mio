export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export const BUSINESS_WHATSAPP_DIGITS = '6285555000';
export const BUSINESS_WHATSAPP_DISPLAY = '(62) 8555-5000';
export const BUSINESS_ADDRESS =
  'GO-462, km 16,5 — Sítio Fiore Mio, Santo Antônio de Goiás - GO, 75375-000';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(data: ContactFormData): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};
  const trimmedName = data.name.trim();
  const trimmedEmail = data.email.trim();
  const trimmedMessage = data.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Informe seu nome completo (mínimo 2 caracteres).';
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Informe um endereço de e-mail válido.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Descreva seu evento ou pedido (mínimo 10 caracteres).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatBrazilWhatsAppDigits(rawDigits: string): string {
  const digitsOnly = rawDigits.replace(/\D/g, '');
  if (digitsOnly.startsWith('55') && digitsOnly.length >= 12) {
    return digitsOnly;
  }
  return `55${digitsOnly}`;
}

export function buildWhatsAppUrl(
  rawPhone: string = BUSINESS_WHATSAPP_DIGITS,
  message?: string,
): string {
  const formatted = formatBrazilWhatsAppDigits(rawPhone);
  const base = `https://wa.me/${formatted}`;
  if (!message || !message.trim()) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function buildContactWhatsAppMessage(data: ContactFormData): string {
  return [
    'Olá, equipe Fiore Mio Flores!',
    `Meu nome é ${data.name.trim()}.`,
    `E-mail: ${data.email.trim()}`,
    `Mensagem: ${data.message.trim()}`,
  ].join('\n');
}

export function buildMailtoUrl(data: ContactFormData): string {
  const subject = `Solicitação de Decoração — ${data.name.trim()}`;
  const body = [
    `Nome: ${data.name.trim()}`,
    `E-mail: ${data.email.trim()}`,
    '',
    'Mensagem:',
    data.message.trim(),
  ].join('\n');

  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getNextGalleryIndex(
  currentIndex: number,
  direction: 'prev' | 'next',
  total: number,
): number {
  if (total <= 0) return 0;
  if (direction === 'next') {
    return (currentIndex + 1) % total;
  }
  return (currentIndex - 1 + total) % total;
}

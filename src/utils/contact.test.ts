import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BUSINESS_WHATSAPP_DIGITS,
  buildContactWhatsAppMessage,
  buildMailtoUrl,
  buildWhatsAppUrl,
  formatBrazilWhatsAppDigits,
  getNextGalleryIndex,
  validateContactForm,
} from './contact';

test('validateContactForm rejects empty or invalid fields with Portuguese errors', () => {
  const result = validateContactForm({
    name: 'A',
    email: 'email-invalido',
    message: 'Oi',
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid contact payload', () => {
  const result = validateContactForm({
    name: 'Mariana Costa',
    email: 'mariana@exemplo.com.br',
    message: 'Gostaria de um orçamento para decoração de casamento em novembro.',
  });

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('formatBrazilWhatsAppDigits prefixes 55 to local Brazilian number', () => {
  assert.equal(formatBrazilWhatsAppDigits(BUSINESS_WHATSAPP_DIGITS), '556285555000');
  assert.equal(formatBrazilWhatsAppDigits('(62) 8555-5000'), '556285555000');
  assert.equal(formatBrazilWhatsAppDigits('556285555000'), '556285555000');
});

test('buildWhatsAppUrl generates valid wa.me URL with encoded text', () => {
  const url = buildWhatsAppUrl(BUSINESS_WHATSAPP_DIGITS, 'Olá Fiore Mio!');
  assert.equal(url, 'https://wa.me/556285555000?text=Ol%C3%A1%20Fiore%20Mio!');

  const plainUrl = buildWhatsAppUrl(BUSINESS_WHATSAPP_DIGITS);
  assert.equal(plainUrl, 'https://wa.me/556285555000');
});

test('buildContactWhatsAppMessage and buildMailtoUrl format user inputs cleanly', () => {
  const data = {
    name: 'João Pedro',
    email: 'joao@dominio.com',
    message: 'Quero encomendar um buquê de rosas para sexta-feira.',
  };

  const whatsappText = buildContactWhatsAppMessage(data);
  assert.match(whatsappText, /João Pedro/);
  assert.match(whatsappText, /joao@dominio\.com/);

  const mailto = buildMailtoUrl(data);
  assert.ok(mailto.startsWith('mailto:?subject='));
  assert.ok(mailto.includes('Jo%C3%A3o%20Pedro'));
});

test('getNextGalleryIndex wraps forward and backward safely', () => {
  assert.equal(getNextGalleryIndex(0, 'next', 4), 1);
  assert.equal(getNextGalleryIndex(3, 'next', 4), 0);
  assert.equal(getNextGalleryIndex(0, 'prev', 4), 3);
  assert.equal(getNextGalleryIndex(2, 'prev', 4), 1);
  assert.equal(getNextGalleryIndex(0, 'next', 0), 0);
});

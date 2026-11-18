import { useState, FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  BUSINESS_ADDRESS,
  BUSINESS_WHATSAPP_DIGITS,
  BUSINESS_WHATSAPP_DISPLAY,
  ContactFormData,
  buildContactWhatsAppMessage,
  buildMailtoUrl,
  buildWhatsAppUrl,
  validateContactForm,
} from '../utils/contact';

type SubmitChannel = 'whatsapp' | 'email';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedState, setSubmittedState] = useState<{
    channel: SubmitChannel;
    actionUrl: string;
    name: string;
  } | null>(null);

  const handleChannelSubmit = (channel: SubmitChannel) => {
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedState(null);
      return;
    }

    setErrors({});
    const actionUrl =
      channel === 'whatsapp'
        ? buildWhatsAppUrl(BUSINESS_WHATSAPP_DIGITS, buildContactWhatsAppMessage(formData))
        : buildMailtoUrl(formData);

    setSubmittedState({
      channel,
      actionUrl,
      name: formData.name.trim(),
    });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleChannelSubmit('whatsapp');
  };

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const mapQuery = encodeURIComponent(
    'GO-462 km 16,5 Sítio Fiore Mio, Santo Antônio de Goiás - GO, 75375-000',
  );

  return (
    <section
      id="contato"
      className="bg-[#FAF4F6]/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Location & Direct Channels */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-[#7B2CBF]">Contato e Localização</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231926] sm:text-4xl [text-wrap:balance]">
                Vamos planejar a decoração do seu evento
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5E4F63] sm:text-base">
                Envie sua mensagem pelo formulário para iniciar o atendimento via
                WhatsApp ou e-mail com todos os detalhes do seu pedido.
              </p>

              <div className="mt-8 space-y-5 border-t border-[#EEDDE2] pt-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#7B2CBF]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-[#231926]">Endereço</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#5E4F63]">
                      {BUSINESS_ADDRESS}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-xs font-semibold text-[#7B2CBF] underline decoration-[#F7A8B8] underline-offset-4 hover:text-[#63209E]"
                    >
                      Ver rota no mapa
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#7B2CBF]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-[#231926]">
                      Telefone e WhatsApp
                    </h3>
                    <p className="mt-1 text-sm tabular-nums text-[#5E4F63]">
                      {BUSINESS_WHATSAPP_DISPLAY}
                    </p>
                    <a
                      href={buildWhatsAppUrl(
                        BUSINESS_WHATSAPP_DIGITS,
                        'Olá! Gostaria de solicitar um orçamento com a Fiore Mio Flores.',
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-xs font-semibold text-[#7B2CBF] underline decoration-[#F7A8B8] underline-offset-4 hover:text-[#63209E]"
                    >
                      Iniciar conversa direta no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#F7A8B8] bg-[#F7A8B8]/25 p-5">
              <p className="font-display text-xl font-semibold text-[#231926]">
                Fiore Mio Flores
              </p>
              <p className="mt-1 text-sm italic text-[#5E4F63]">
                “Beleza que respira harmonia”
              </p>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleFormSubmit}
              className="rounded-2xl border border-[#EEDDE2] bg-white p-6 sm:p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-[#231926]">
                Solicite seu orçamento
              </h3>
              <p className="mt-1 text-sm text-[#5E4F63]">
                Preencha os campos abaixo e escolha o canal de envio de sua preferência.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#231926]"
                  >
                    Nome completo
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    placeholder="Seu nome"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#EEDDE2] bg-[#FDFBFC] px-3.5 py-2.5 text-sm text-[#231926] placeholder:text-[#5E4F63]/60 focus:border-[#7B2CBF] focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]/20"
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#9D174D]"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#231926]"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="voce@exemplo.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#EEDDE2] bg-[#FDFBFC] px-3.5 py-2.5 text-sm text-[#231926] placeholder:text-[#5E4F63]/60 focus:border-[#7B2CBF] focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]/20"
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#9D174D]"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#231926]"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    placeholder="Conte sobre seu evento, data prevista, paleta de cores ou tipo de arranjo..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className="mt-1.5 block w-full rounded-lg border border-[#EEDDE2] bg-[#FDFBFC] px-3.5 py-2.5 text-sm text-[#231926] placeholder:text-[#5E4F63]/60 focus:border-[#7B2CBF] focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]/20"
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#9D174D]"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#7B2CBF] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#63209E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Enviar via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => handleChannelSubmit('email')}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#EEDDE2] bg-[#FAF4F6] px-5 py-2.5 text-sm font-semibold text-[#231926] transition-colors duration-150 hover:border-[#F7A8B8] hover:bg-[#F7A8B8]/25 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
                >
                  <Mail className="h-4 w-4 text-[#7B2CBF]" aria-hidden="true" />
                  Enviar por E-mail
                </button>
              </div>

              {submittedState && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 rounded-xl border border-[#7B2CBF]/30 bg-[#FAF4F6] p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#7B2CBF]"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#231926]">
                        Mensagem pronta para envio, {submittedState.name}!
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#5E4F63]">
                        {submittedState.channel === 'whatsapp'
                          ? 'Clique no botão abaixo para abrir sua conversa preenchida no WhatsApp da Fiore Mio Flores.'
                          : 'Clique no botão abaixo para abrir seu aplicativo de e-mail com os dados preenchidos.'}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <a
                          href={submittedState.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#7B2CBF] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#63209E]"
                        >
                          {submittedState.channel === 'whatsapp'
                            ? 'Abrir WhatsApp agora'
                            : 'Abrir aplicativo de E-mail'}
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({ name: '', email: '', message: '' });
                            setSubmittedState(null);
                          }}
                          className="inline-flex min-h-[40px] items-center justify-center rounded-lg px-3 py-2 text-xs font-medium text-[#5E4F63] hover:text-[#231926]"
                        >
                          Limpar formulário
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

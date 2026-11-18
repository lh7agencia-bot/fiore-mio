import { BUSINESS_ADDRESS, BUSINESS_WHATSAPP_DISPLAY } from '../utils/contact';

export function Footer() {
  return (
    <footer className="border-t border-[#EEDDE2] bg-[#FDFBFC] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-[#231926]">
              Fiore Mio Flores
            </p>
            <p className="mt-1 text-xs text-[#5E4F63]">
              Beleza que respira harmonia · {BUSINESS_ADDRESS}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#5E4F63]">
            <a href="#servicos" className="hover:text-[#7B2CBF]">
              Serviços
            </a>
            <a href="#galeria" className="hover:text-[#7B2CBF]">
              Galeria
            </a>
            <a href="#depoimentos" className="hover:text-[#7B2CBF]">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-[#7B2CBF]">
              FAQ
            </a>
            <a href="#contato" className="hover:text-[#7B2CBF]">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-[#EEDDE2] pt-6 text-xs text-[#5E4F63] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Fiore Mio Flores. Todos os direitos reservados.</p>
          <p className="tabular-nums">WhatsApp: {BUSINESS_WHATSAPP_DISPLAY}</p>
        </div>
      </div>
    </footer>
  );
}

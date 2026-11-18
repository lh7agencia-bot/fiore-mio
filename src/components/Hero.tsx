import { ArrowRight, Flower2 } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#EEDDE2] bg-[#FDFBFC]"
    >
      {/* Subtle Rosa Quartzo ambient backdrop wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-[#F7A8B8]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#F7A8B8]/20 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-sm font-semibold text-[#7B2CBF]">
              Decoração Floral · Santo Antônio de Goiás, GO
            </p>

            <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.5rem,4.5vw,4.125rem)] font-semibold leading-[1.06] tracking-tight text-[#231926] [text-wrap:balance]">
              Beleza que respira{' '}
              <span className="italic text-[#7B2CBF]">harmonia</span> em cada detalhe.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5E4F63] sm:text-lg">
              Na Fiore Mio Flores, criamos arranjos autorais, buquês frescos e
              decoração floral sob medida para transformar celebrações e ambientes
              com delicadeza natural, equilíbrio cromático e cuidado artesanal.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#7B2CBF] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#63209E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
              >
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#galeria"
                className="inline-flex min-h-[44px] items-center rounded-lg border border-[#F7A8B8] bg-[#F7A8B8]/25 px-5 py-3 text-sm font-semibold text-[#231926] transition-colors duration-150 hover:bg-[#F7A8B8]/45 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
              >
                Explorar Galeria
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-[#F7A8B8]/60 pt-6 sm:grid-cols-3 sm:gap-6">
              <div>
                <dt className="text-xs font-medium text-[#5E4F63]">Especialidade</dt>
                <dd className="mt-1 text-sm font-semibold text-[#231926]">
                  Decoração & Arranjos
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#5E4F63]">Atendimento</dt>
                <dd className="mt-1 text-sm font-semibold text-[#231926]">
                  Sítio Fiore Mio · GO-462
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#5E4F63]">Contato Direto</dt>
                <dd className="mt-1 text-sm font-semibold tabular-nums text-[#231926]">
                  (62) 8555-5000
                </dd>
              </div>
            </dl>
          </div>

          {/* Dominant Real Photography Column (Preserving 2:3 Portrait Proportions) */}
          <div className="flex items-center justify-center lg:col-span-5">
            <figure className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#F7A8B8] bg-[#F7A8B8]/20 p-3">
              <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-white">
                {!heroImgError ? (
                  <img
                    src="/images/fiore-mio-04.jpg"
                    alt="Buquê autoral Fiore Mio Flores com rosas champanhe, astromélias bordô e folhagens frescas em papel kraft"
                    width={1024}
                    height={1536}
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                    <Flower2 className="h-10 w-10 text-[#7B2CBF]" aria-hidden="true" />
                    <span className="font-display text-xl font-semibold text-[#231926]">
                      Fiore Mio Flores
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-2 px-1 text-xs font-medium text-[#231926]">
                <span>Buquê autoral em papel kraft</span>
                <span aria-hidden="true">·</span>
                <span>Produção Fiore Mio</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

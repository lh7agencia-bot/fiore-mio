import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="border-b border-[#EEDDE2] bg-[#FAF4F6]/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#7B2CBF]">Depoimentos</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231926] sm:text-4xl [text-wrap:balance]">
            O que dizem os clientes da Fiore Mio Flores
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-[#EEDDE2] bg-white p-6 sm:p-7"
            >
              <div>
                <div
                  className="flex items-center gap-1"
                  aria-label={`Avaliação: ${item.rating} de 5 estrelas`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-[#7B2CBF] text-[#7B2CBF]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-[#231926] sm:text-base">
                  “{item.text}”
                </blockquote>
              </div>

              <footer className="mt-6 border-t border-[#EEDDE2] pt-4">
                <p className="font-semibold text-[#231926]">{item.name}</p>
                <p className="mt-0.5 text-xs text-[#5E4F63]">{item.occasion}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

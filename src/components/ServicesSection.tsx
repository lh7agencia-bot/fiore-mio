import { SERVICES } from '../data/siteContent';

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="border-b border-[#EEDDE2] bg-[#FAF4F6]/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#7B2CBF]">Nossa Curadoria</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231926] sm:text-4xl [text-wrap:balance]">
              Projetos florais desenhados para cada momento
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#5E4F63]">
            Unimos seleção botânica cuidadosa, composição harmônica e montagem
            dedicada para receber seus convidados com elegância.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="flex flex-col justify-between rounded-2xl border border-[#EEDDE2] bg-white p-6 transition-colors duration-150 hover:border-[#F7A8B8] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-[#EEDDE2] pb-4">
                  <span className="font-display text-2xl font-semibold tabular-nums text-[#7B2CBF]">
                    {service.number}
                  </span>
                  <span className="text-xs font-medium text-[#5E4F63]">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-[#231926]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5E4F63] sm:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

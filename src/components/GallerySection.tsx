import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Flower2, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/siteContent';
import { getNextGalleryIndex } from '../utils/contact';

function GalleryImage({
  photo,
  className,
}: {
  photo: GalleryPhoto;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#FAF4F6] p-6 text-center">
        <Flower2 className="h-8 w-8 text-[#7B2CBF]" aria-hidden="true" />
        <span className="text-sm font-medium text-[#231926]">{photo.title}</span>
      </div>
    );
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activePhoto = selectedIndex !== null ? GALLERY_PHOTOS[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? 0 : getNextGalleryIndex(prev, 'next', GALLERY_PHOTOS.length),
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? 0 : getNextGalleryIndex(prev, 'prev', GALLERY_PHOTOS.length),
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const landscapePhotos = GALLERY_PHOTOS.filter((p) => p.orientation === 'landscape');
  const portraitPhoto = GALLERY_PHOTOS.find((p) => p.orientation === 'portrait');

  return (
    <section id="galeria" className="border-b border-[#EEDDE2] bg-[#FDFBFC] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-[#7B2CBF]">Galeria Real</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#231926] sm:text-4xl [text-wrap:balance]">
              Nosso espaço, flores frescas e decorações
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#5E4F63]">
            Clique em qualquer fotografia para ampliar e visualizar os detalhes
            de nossas montagens e do Sítio Fiore Mio.
          </p>
        </div>

        {/* Responsive gallery preserving original photo proportions */}
        <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            {landscapePhotos.map((photo, idx) => {
              const globalIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
              const isPrimarySpan = idx === 0;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedIndex(globalIndex)}
                  aria-label={`Ampliar foto: ${photo.title}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#EEDDE2] bg-white p-3 text-left transition-colors duration-150 hover:border-[#7B2CBF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF] ${
                    isPrimarySpan ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-xl bg-[#FAF4F6] ${
                      photo.id === 'fachada' ? 'aspect-[1024/649]' : 'aspect-[4/3]'
                    }`}
                  >
                    <GalleryImage
                      photo={photo}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#231926]/80 text-white opacity-90 transition-opacity group-hover:opacity-100"
                    >
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3 px-1">
                    <span className="font-display text-xl font-semibold text-[#231926]">
                      {photo.title}
                    </span>
                    <span className="text-xs text-[#5E4F63]">{photo.category}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {portraitPhoto && (
            <div className="flex flex-col gap-6 lg:col-span-4">
              {(() => {
                const portraitIndex = GALLERY_PHOTOS.findIndex(
                  (p) => p.id === portraitPhoto.id,
                );
                return (
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(portraitIndex)}
                    aria-label={`Ampliar foto: ${portraitPhoto.title}`}
                    className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[#EEDDE2] bg-white p-3 text-left transition-colors duration-150 hover:border-[#7B2CBF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B2CBF]"
                  >
                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-[#FAF4F6]">
                      <GalleryImage
                        photo={portraitPhoto}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#231926]/80 text-white opacity-90 transition-opacity group-hover:opacity-100"
                      >
                        <Expand className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between gap-3 px-1">
                      <span className="font-display text-xl font-semibold text-[#231926]">
                        {portraitPhoto.title}
                      </span>
                      <span className="text-xs text-[#5E4F63]">
                        {portraitPhoto.category}
                      </span>
                    </div>
                  </button>
                );
              })()}

              <div className="rounded-2xl border border-[#F7A8B8] bg-[#F7A8B8]/25 p-6">
                <p className="font-display text-2xl font-semibold text-[#231926]">
                  Flores selecionadas para cada ocasião
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#231926]/85">
                  Cada arranjo é preparado próximo à entrega para garantir frescor,
                  textura natural e equilíbrio entre tonalidades.
                </p>
                <a
                  href="#contato"
                  className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#7B2CBF] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#63209E]"
                >
                  Encomendar arranjo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualizador de fotos: ${activePhoto.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#231926]/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#1B131E] p-4 text-white sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-[#F7A8B8]">
                  {activePhoto.category} · Foto {selectedIndex + 1} de{' '}
                  {GALLERY_PHOTOS.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Fechar visualização da foto"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7A8B8]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl bg-black/40">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-xl text-sm text-white/80">{activePhoto.alt}</p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === null
                        ? 0
                        : getNextGalleryIndex(prev, 'prev', GALLERY_PHOTOS.length),
                    )
                  }
                  aria-label="Foto anterior"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7A8B8]"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === null
                        ? 0
                        : getNextGalleryIndex(prev, 'next', GALLERY_PHOTOS.length),
                    )
                  }
                  aria-label="Próxima foto"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-[#7B2CBF] px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#63209E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7A8B8]"
                >
                  Próxima
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

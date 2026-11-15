import { useEffect, useRef, useState } from 'react';
import { city } from '../data/city';
import { cityGalleryPhotos } from '../data/cityGallery';
import { project } from '../data/project';
import { Arrow } from './Arrow';

function LightboxPhoto({ photo }: { photo: (typeof cityGalleryPhotos)[number] }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      className={loaded ? 'is-loaded' : undefined}
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );
}

export function CityGallery({ onBack }: { onBack: () => void }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : cityGalleryPhotos[activeIndex];
  const isOpen = activePhoto !== null;

  useEffect(() => {
    document.title = 'Galeria da Cidade do Idoso - ' + project.title;
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function movePhoto(direction: number) {
    setActiveIndex((index) => index === null ? null : Math.max(0, Math.min(cityGalleryPhotos.length - 1, index + direction)));
  }

  return (
    <>
      <a className="skip-link" href="#city-gallery-photos">Pular para as fotografias</a>
      <main className="city-gallery" aria-labelledby="city-gallery-title">
        <header className="city-gallery__header">
          <button className="back-button" type="button" onClick={onBack}><Arrow back />Voltar à Cidade do Idoso</button>
          <p className="eyebrow">Galeria de fotografias</p>
          <h1 id="city-gallery-title" ref={headingRef} tabIndex={-1}>Cidade <em>do Idoso</em></h1>
          <div className="city-gallery__intro">
            <p>Selecione uma imagem para ampliar.</p>
          </div>
        </header>

        <section className="city-gallery__grid" id="city-gallery-photos" aria-label="Fotografias da Cidade do Idoso" tabIndex={-1}>
          {cityGalleryPhotos.map((photo, index) => (
            <figure className="city-gallery__item" key={photo.id}>
              <button className="city-gallery__photo" type="button" onClick={() => setActiveIndex(index)} aria-haspopup="dialog">
                <span className="sr-only">Ampliar fotografia: </span>
                <img src={photo.thumbnailSrc} width={photo.width} height={photo.height} alt={photo.alt} loading={index < 4 ? 'eager' : 'lazy'} decoding="async" />
              </button>
            </figure>
          ))}
        </section>

        <footer className="city-gallery__footer">
          <aside className="city-source" aria-label="Fonte das informações sobre a Cidade do Idoso">
            <p className="eyebrow">Para saber mais sobre o programa</p>
            <a href={city.source.url} target="_blank" rel="noreferrer">{city.source.label}<Arrow /></a>
          </aside>
          <button className="back-button" type="button" onClick={onBack}><Arrow back />Voltar à Cidade do Idoso</button>
        </footer>
      </main>

      <dialog className="photo-lightbox" ref={dialogRef} aria-label="Fotografia ampliada da Cidade do Idoso" onCancel={(event) => { event.preventDefault(); setActiveIndex(null); }} onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); movePhoto(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); movePhoto(1); }
        if (event.key === 'Home') { event.preventDefault(); setActiveIndex(0); }
        if (event.key === 'End') { event.preventDefault(); setActiveIndex(cityGalleryPhotos.length - 1); }
      }}>
        {activePhoto && (
          <div className="photo-lightbox__layout">
            <header className="photo-lightbox__header">
              <p>Cidade do Idoso</p>
              <button type="button" ref={closeRef} className="photo-lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Fechar fotografia ampliada">Fechar<span aria-hidden="true">×</span></button>
            </header>
            <figure className="photo-lightbox__figure">
              <div className="photo-lightbox__image-frame">
                <LightboxPhoto key={activePhoto.id} photo={activePhoto} />
              </div>
            </figure>
            <nav className="photo-lightbox__controls" aria-label="Navegar pelas fotografias">
              <button type="button" onClick={() => movePhoto(-1)} disabled={activeIndex === 0} aria-label="Fotografia anterior" aria-keyshortcuts="ArrowLeft"><Arrow back /><span>Anterior</span></button>
              <p aria-live="polite" aria-atomic="true"><span className="sr-only">Fotografia </span>{(activeIndex ?? 0) + 1} / {cityGalleryPhotos.length}</p>
              <button type="button" onClick={() => movePhoto(1)} disabled={activeIndex === cityGalleryPhotos.length - 1} aria-label="Próxima fotografia" aria-keyshortcuts="ArrowRight"><span>Próxima</span><Arrow /></button>
            </nav>
          </div>
        )}
      </dialog>
    </>
  );
}

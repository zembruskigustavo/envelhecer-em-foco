import { useEffect, useRef, useState } from 'react';
import { city } from '../data/city';
import { cityGalleryPhotos } from '../data/cityGallery';
import { Arrow } from './Arrow';

export function CityGallery({ onBack }: { onBack: () => void }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : cityGalleryPhotos[activeIndex];
  const isOpen = activePhoto !== null;

  useEffect(() => {
    document.title = 'Galeria da Cidade do Idoso - Envelhecer em Foco';
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
            <p>Fotografias de Emily Gilioli · Chapecó, Santa Catarina</p>
            <p>{cityGalleryPhotos.length} fotografias<span aria-hidden="true"> · </span>Selecione uma imagem para ampliar.</p>
          </div>
        </header>

        <section className="city-gallery__grid" id="city-gallery-photos" aria-label="Fotografias da Cidade do Idoso" tabIndex={-1}>
          {cityGalleryPhotos.map((photo, index) => (
            <figure className="city-gallery__item" key={photo.id}>
              <button className="city-gallery__photo" type="button" onClick={() => setActiveIndex(index)} aria-haspopup="dialog" aria-label={'Ampliar fotografia: ' + photo.alt}>
                <img src={photo.thumbnailSrc} width={photo.width} height={photo.height} alt="" loading={index < 4 ? 'eager' : 'lazy'} decoding="async" />
                <span className="city-gallery__expand" aria-hidden="true">↗</span>
              </button>
              {photo.caption && <figcaption>{photo.caption}</figcaption>}
            </figure>
          ))}
        </section>

        <footer className="city-gallery__footer">
          <p className="city-gallery__credit">Fotografias: Emily Gilioli</p>
          <aside className="city-source" aria-label="Fonte das informações sobre a Cidade do Idoso">
            <p className="eyebrow">Para saber mais sobre o programa</p>
            <a href={city.source.url} target="_blank" rel="noreferrer">{city.source.label}<Arrow /></a>
            <p>Informações sobre o programa baseadas na página oficial, consultada em {city.source.accessedAt}.</p>
          </aside>
          <button className="back-button" type="button" onClick={onBack}><Arrow back />Voltar à Cidade do Idoso</button>
        </footer>
      </main>

      <dialog className="photo-lightbox" ref={dialogRef} aria-label="Fotografia ampliada da Cidade do Idoso" aria-describedby={activePhoto?.caption ? 'city-photo-caption' : undefined} onCancel={(event) => { event.preventDefault(); setActiveIndex(null); }} onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); movePhoto(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); movePhoto(1); }
        if (event.key === 'Home') { event.preventDefault(); setActiveIndex(0); }
        if (event.key === 'End') { event.preventDefault(); setActiveIndex(cityGalleryPhotos.length - 1); }
      }}>
        {activePhoto && (
          <div className="photo-lightbox__layout">
            <header className="photo-lightbox__header">
              <p>Cidade do Idoso<span>Fotografias de Emily Gilioli</span></p>
              <button type="button" ref={closeRef} className="photo-lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Fechar fotografia ampliada">Fechar<span aria-hidden="true">×</span></button>
            </header>
            <figure className="photo-lightbox__figure">
              <div className="photo-lightbox__image-frame">
                <img key={activePhoto.id} src={activePhoto.src} width={activePhoto.width} height={activePhoto.height} alt={activePhoto.alt} decoding="async" />
              </div>
              {activePhoto.caption && <figcaption id="city-photo-caption" tabIndex={0}>{activePhoto.caption}</figcaption>}
            </figure>
            <nav className="photo-lightbox__controls" aria-label="Navegar pelas fotografias">
              <button type="button" onClick={() => movePhoto(-1)} disabled={activeIndex === 0} aria-label="Fotografia anterior" aria-keyshortcuts="ArrowLeft"><Arrow back /><span>Anterior</span></button>
              <p aria-live="polite" aria-atomic="true"><span className="sr-only">Fotografia </span>{(activeIndex ?? 0) + 1} / {cityGalleryPhotos.length}</p>
              <button type="button" onClick={() => movePhoto(1)} disabled={activeIndex === cityGalleryPhotos.length - 1} aria-label="Próxima fotografia" aria-keyshortcuts="ArrowRight"><span>Próxima</span><Arrow /></button>
            </nav>
            <a className="photo-lightbox__original" href={activePhoto.originalSrc} target="_blank" rel="noreferrer">Abrir fotografia original<span className="sr-only"> em nova aba</span></a>
          </div>
        )}
      </dialog>
    </>
  );
}

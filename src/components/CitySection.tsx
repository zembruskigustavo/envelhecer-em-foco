import { useEffect, useRef, useState } from 'react';
import { city } from '../data/city';
import { Arrow } from './Arrow';

export function CitySection() {
  const [imageFailed, setImageFailed] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const coverRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hasOpened = useRef(false);

  function focusDetails() {
    detailsRef.current?.focus({ preventScroll: true });
    detailsRef.current?.scrollIntoView({
      block: 'start',
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  function openDetails() {
    hasOpened.current = true;
    if (detailsVisible) focusDetails();
    else setDetailsVisible(true);
  }

  useEffect(() => {
    if (!hasOpened.current) return;
    if (detailsVisible) {
      focusDetails();
    } else {
      triggerRef.current?.focus({ preventScroll: true });
      coverRef.current?.scrollIntoView({
        block: 'start',
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      });
    }
  }, [detailsVisible]);

  return (
    <section className="city-section" id="cidade-do-idoso" aria-labelledby="city-title" onKeyDown={(event) => {
      if (event.key === 'Escape' && detailsVisible) {
        event.stopPropagation();
        setDetailsVisible(false);
      }
    }}>
      <div className="city-cover" ref={coverRef}>
        {!imageFailed && (
          <img className="city-cover__image" src={city.image.src} alt={city.image.alt} loading="lazy" decoding="async" onError={() => setImageFailed(true)} />
        )}
        <div className="city-cover__shade" aria-hidden="true" />
        <div className="city-cover__copy">
          <p className="city-cover__kicker">O lugar dessas histórias</p>
          <h2 id="city-title">Cidade<span>do Idoso</span></h2>
          <p className="city-cover__description">{city.introduction}</p>
          <button ref={triggerRef} className="city-cover__action" type="button" aria-controls="cidade-detalhes" aria-expanded={detailsVisible} onClick={openDetails}>Conhecer a Cidade do Idoso<Arrow /></button>
        </div>
        <p className="city-cover__credit">{imageFailed ? 'Imagem temporariamente indisponível' : 'Imagem: ' + city.image.credit}</p>
      </div>

      <div ref={detailsRef} className="city-details" id="cidade-detalhes" hidden={!detailsVisible} tabIndex={-1} aria-label="Sobre a Cidade do Idoso">
        {city.sections.map((section) => (
          <section className="city-chapter" key={section.id} aria-labelledby={section.id}>
            <div>
              <h3 id={section.id}>{section.title}</h3>
              <p>{section.text}</p>
            </div>
          </section>
        ))}
        <aside className="city-source" aria-label="Fonte das informações">
          <p className="eyebrow">Para saber mais</p>
          <a href={city.source.url} target="_blank" rel="noreferrer">{city.source.label}<Arrow /></a>
          <p>Texto baseado na página oficial, consultada em {city.source.accessedAt}.</p>
        </aside>
        <div className="city-details__actions">
          <button className="back-button" type="button" onClick={() => setDetailsVisible(false)}><Arrow back />Voltar à fotografia</button>
          <a href="#retratos">Voltar aos retratos<span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </section>
  );
}

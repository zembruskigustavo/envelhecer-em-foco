import { useEffect, useRef } from 'react';
import { interviewees } from '../data/interviewees';
import { useStoryNavigation } from '../hooks/useStoryNavigation';
import { PortraitGallery } from './PortraitGallery';
import { StoryView } from './StoryView';
import { BackButton } from './BackButton';
import { Arrow } from './Arrow';
import { CitySection } from './CitySection';
import { SiteFooter } from './SiteFooter';

export function HomePage() {
  const { selectedId, navigate } = useStoryNavigation();
  const person = interviewees.find((item) => item.id === selectedId);
  const hasNarrative = Boolean(person?.sections.length);
  const portraitButtons = useRef(new Map<string, HTMLButtonElement>());
  const lastSelected = useRef<string | null>(null);
  const storyHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.title = person ? person.fullName + ' - Envelhecer' : 'Envelhecer - histórias que permanecem';
    if (person) {
      lastSelected.current = person.id;
      storyHeading.current?.focus({ preventScroll: true });
    } else if (lastSelected.current) {
      portraitButtons.current.get(lastSelected.current)?.focus({ preventScroll: true });
    }
  }, [person]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedId) navigate(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId, navigate]);

  return (
    <>
      <a className="skip-link" href={person ? '#narrativa' : '#retratos'}>{person ? (hasNarrative ? 'Pular para a narrativa' : 'Pular para outras histórias') : 'Pular para os retratos'}</a>
      <main className={'experience' + (person ? ' experience--story' : '')}>
        <section className="stage" id="retratos" aria-label={person ? 'Apresentação da história' : 'Envelhecer'}>
          <PortraitGallery people={interviewees} selectedId={selectedId} onSelect={navigate} getButtonRef={(id) => (node) => { if (node) portraitButtons.current.set(id, node); else portraitButtons.current.delete(id); }} />
          <div className="home-content" aria-hidden={!!person} inert={!!person}>
            <header className="home-topline"><span className="project-mark"><span className="frame-mark" aria-hidden="true" />Fotodocumentário</span><span>Chapecó · Santa Catarina</span></header>
            <div className="home-title">
              <p className="home-title__intro">Um olhar de experiência capturado em imagem</p>
              <h1>ENVELHECER<span></span></h1>
            </div>
            <footer className="home-bottomline">
              <p>Selecione um retrato<br className="mobile-break" /> para conhecer sua história</p>
              <span className="home-scroll-cue"><span>Histórias da Cidade do Idoso</span><Arrow /></span>
            </footer>
          </div>
          {person && (
            <header className="story-intro" key={person.id}>
              <BackButton onBack={() => navigate(null)} />
              <div className="story-intro__body">
                <p className="eyebrow">Envelhecer</p>
                <h1 ref={storyHeading} tabIndex={-1}>{person.fullName}</h1>
                <div className="story-intro__quote">
                  <p className="eyebrow">Em suas palavras</p>
                  <blockquote>{person.quote}</blockquote>
                </div>
                {person.introduction && <p className="story-intro__description">{person.introduction}</p>}
                {hasNarrative && <a className="reading-link" href="#narrativa">Percorra a história <span aria-hidden="true">↓</span></a>}
              </div>
              <p className="photo-credit">Fotografia: <a href={person.image.source} target="_blank" rel="noreferrer">{person.image.credit}</a></p>
            </header>
          )}
        </section>
        {person && <div id="narrativa" tabIndex={-1}><StoryView person={person} people={interviewees} onSelect={navigate} onBack={() => navigate(null)} /></div>}
        {!person && <CitySection />}
      </main>
      <SiteFooter />
    </>
  );
}

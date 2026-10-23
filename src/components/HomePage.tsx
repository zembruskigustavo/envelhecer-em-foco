import { useEffect, useRef } from 'react';
import { interviewees } from '../data/interviewees';
import { useStoryNavigation } from '../hooks/useStoryNavigation';
import { PortraitGallery } from './PortraitGallery';
import { StoryView } from './StoryView';
import { BackButton } from './BackButton';
import { CitySection } from './CitySection';
import { SiteFooter } from './SiteFooter';

export function HomePage() {
  const { selectedId, navigate } = useStoryNavigation();
  const person = interviewees.find((item) => item.id === selectedId);
  const portraitButtons = useRef(new Map<string, HTMLButtonElement>());
  const lastSelected = useRef<string | null>(null);
  const storyHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.title = person ? person.name + ' — Envelhecer em Foco' : 'Envelhecer em Foco — histórias que permanecem';
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

  const hasDemo = interviewees.some((item) => item.isDemo);
  return (
    <>
      <a className="skip-link" href={person ? '#narrativa' : '#retratos'}>{person ? 'Pular para a narrativa' : 'Pular para os retratos'}</a>
      <main className={'experience' + (person ? ' experience--story' : '')}>
        <section className="stage" id="retratos" aria-label={person ? 'Apresentação da história' : 'Envelhecer em Foco'}>
          <PortraitGallery people={interviewees} selectedId={selectedId} onSelect={navigate} getButtonRef={(id) => (node) => { if (node) portraitButtons.current.set(id, node); else portraitButtons.current.delete(id); }} />
          <div className="home-content" aria-hidden={!!person} inert={!!person}>
            <header className="home-topline"><span className="project-mark"><span className="frame-mark" aria-hidden="true" />Um projeto documental</span><span>Chapecó · Santa Catarina</span></header>
            <div className="home-title">
              <p className="home-title__intro">Quatro vidas. Um tempo de escuta.</p>
              <h1>ENVELHECER<span>EM FOCO</span></h1>
            </div>
            <footer className="home-bottomline">
              <p>Selecione um retrato<br className="mobile-break" /> para conhecer sua história<span className="small-cross" aria-hidden="true">+</span></p>
              <span>{hasDemo ? 'Protótipo · imagens e conteúdo demonstrativos' : 'Histórias da Cidade do Idoso'}</span>
            </footer>
          </div>
          {person && (
            <header className="story-intro" key={person.id}>
              <BackButton onBack={() => navigate(null)} />
              <div className="story-intro__body">
                <p className="eyebrow">Envelhecer em Foco <span>História {person.number} / 04</span></p>
                {person.isDemo && <p className="demo-label">Nome, imagem e texto demonstrativos</p>}
                <h1 ref={storyHeading} tabIndex={-1}>{person.name}</h1>
                <div className="story-intro__quote">
                  <p className="eyebrow">{person.isDemo ? 'Espaço para uma frase da entrevista' : 'Em suas palavras'}</p>
                  {person.isDemo ? <p className="quote-placeholder">{person.quote}</p> : <blockquote>{person.quote}</blockquote>}
                </div>
                <p className="story-intro__description">{person.introduction}</p>
                <a className="reading-link" href="#narrativa">Percorra a história <span aria-hidden="true">↓</span></a>
              </div>
              <p className="photo-credit">{person.isDemo ? 'Imagem ilustrativa · não retrata participante da pesquisa. ' : 'Fotografia: '}<a href={person.image.source} target="_blank" rel="noreferrer">{person.image.credit}</a></p>
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

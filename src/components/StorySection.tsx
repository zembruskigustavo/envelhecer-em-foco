import type { NarrativeSection } from '../types';

export function StorySection({ section, index, isDemo }: { section: NarrativeSection; index: number; isDemo: boolean }) {
  return (
    <section className="story-section" id={section.id} aria-labelledby={section.id + '-title'}>
      <div className="story-section__label"><span>{String(index + 1).padStart(2, '0')}</span><span>Capítulo</span></div>
      <div className="story-section__body">
        <h2 id={section.id + '-title'}>{section.title}</h2>
        {isDemo && <span className="demo-label">Conteúdo demonstrativo</span>}
        {section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </div>
    </section>
  );
}

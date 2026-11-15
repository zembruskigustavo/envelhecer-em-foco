import type { Interviewee } from '../types';
import { project } from '../data/project';
import { StoryPhoto } from './StoryPhoto';
import { PortraitImage } from './PortraitImage';
import { BackButton } from './BackButton';
import { Arrow } from './Arrow';

export function StoryView({ person, people, onSelect, onBack }: {
  person: Interviewee; people: Interviewee[]; onSelect: (id: string) => void; onBack: () => void;
}) {
  return (
    <article className="story-view" aria-label={'Narrativa de ' + person.fullName}>
      {person.photos.length > 0 && <div className="story-content">
        {person.photos.map((photo) => <StoryPhoto key={photo.id} photo={photo} />)}
      </div>}
      <footer className="story-footer">
        <div className="story-footer__heading">
          <p className="eyebrow">Continue a escuta</p>
          <h2>Outras vidas.<br /><em>Novos olhares.</em></h2>
        </div>
        <nav className="other-stories" aria-label="Conhecer as outras histórias">
          {people.filter((item) => item.id !== person.id).map((other) => (
            <button className="other-story" key={other.id} onClick={() => onSelect(other.id)}>
              <span className="other-story__photo"><PortraitImage person={other} decorative /></span>
              <span className="other-story__text"><span className="other-story__name">{other.name}</span><span className="other-story__hint">Conheça a história <Arrow /></span></span>
            </button>
          ))}
        </nav>
        <div className="story-footer__bottom"><BackButton onBack={onBack} /><span>{project.title} · Chapecó, SC</span></div>
      </footer>
    </article>
  );
}

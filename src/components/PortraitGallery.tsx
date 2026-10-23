import type { RefCallback } from 'react';
import type { Interviewee } from '../types';
import { PortraitPanel } from './PortraitPanel';

export function PortraitGallery({ people, selectedId, onSelect, getButtonRef }: {
  people: Interviewee[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  getButtonRef: (id: string) => RefCallback<HTMLButtonElement>;
}) {
  return (
    <div className="portrait-gallery" role={selectedId ? 'img' : undefined} aria-label={selectedId ? people.find((person) => person.id === selectedId)?.image.alt : 'Quatro retratos, quatro histórias'}>
      {people.map((person) => (
        <PortraitPanel key={person.id} person={person} selectedId={selectedId} onSelect={onSelect} buttonRef={getButtonRef(person.id)} />
      ))}
    </div>
  );
}

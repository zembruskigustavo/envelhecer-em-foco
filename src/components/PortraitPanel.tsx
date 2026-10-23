import type { RefCallback } from 'react';
import type { Interviewee } from '../types';
import { PortraitImage } from './PortraitImage';
import { Arrow } from './Arrow';

export function PortraitPanel({ person, selectedId, onSelect, buttonRef }: {
  person: Interviewee;
  selectedId: string | null;
  onSelect: (id: string) => void;
  buttonRef: RefCallback<HTMLButtonElement>;
}) {
  const isSelected = person.id === selectedId;
  const inStory = selectedId !== null;
  return (
    <button
      ref={buttonRef}
      className={'portrait-panel' + (isSelected ? ' is-selected' : '')}
      onClick={() => onSelect(person.id)}
      aria-label={'Conhecer a história de ' + person.name + (person.isDemo ? ' — conteúdo demonstrativo' : '')}
      tabIndex={inStory ? -1 : 0}
      disabled={inStory}
      aria-hidden={inStory}
      data-number={person.number}
    >
      <PortraitImage person={person} className="portrait-panel__image" decorative eager />
      <span className="portrait-panel__shade" />
      <span className="portrait-panel__caption">
        <span className="portrait-panel__number">{person.number}<span className="portrait-panel__rule" /></span>
        <span className="portrait-panel__name">{person.name}</span>
        <span className="portrait-panel__action">Conheça a história <Arrow /></span>
      </span>
    </button>
  );
}

import { useState } from 'react';
import type { Interviewee } from '../types';

export function PortraitImage({ person, className = '', decorative = false, eager = false }: {
  person: Interviewee; className?: string; decorative?: boolean; eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      className={className}
      src={failed ? person.image.fallback : person.image.src}
      alt={decorative ? '' : failed
        ? 'Ilustração provisória de um rosto, usada enquanto a fotografia demonstrativa está indisponível.'
        : person.image.alt}
      style={{ objectPosition: person.image.position }}
      width="900"
      height="1200"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => { if (!failed) setFailed(true); }}
    />
  );
}

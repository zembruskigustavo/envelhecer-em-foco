import { useState } from 'react';
import type { Interviewee } from '../types';

export function PortraitImage({ person, variant = 'full', className = '', decorative = false, eager = false }: {
  person: Interviewee; variant?: 'gallery' | 'full'; className?: string; decorative?: boolean; eager?: boolean;
}) {
  const src = variant === 'gallery' ? person.image.gallerySrc : person.image.src;
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === src;
  return (
    <img
      className={className}
      src={failed ? person.image.fallback : src}
      alt={decorative ? '' : failed
        ? 'Ilustração provisória de um rosto, usada enquanto a fotografia demonstrativa está indisponível.'
        : person.image.alt}
      style={{ objectPosition: person.image.position }}
      width="900"
      height="1200"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => { if (!failed) setFailedSrc(src); }}
    />
  );
}

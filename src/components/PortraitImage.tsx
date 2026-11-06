import type { Interviewee } from '../types';

export function PortraitImage({ person, variant = 'full', className = '', decorative = false, eager = false }: {
  person: Interviewee; variant?: 'gallery' | 'full'; className?: string; decorative?: boolean; eager?: boolean;
}) {
  const src = variant === 'gallery' ? person.image.gallerySrc : person.image.src;
  return (
    <img
      className={className}
      src={src}
      alt={decorative ? '' : person.image.alt}
      style={{ objectPosition: person.image.position }}
      width="900"
      height="1200"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

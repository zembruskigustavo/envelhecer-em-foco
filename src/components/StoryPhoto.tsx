import { useLayoutEffect, useRef, useState } from 'react';
import type { StoryPhoto as StoryPhotoData } from '../types';

export function StoryPhoto({ photo }: { photo: StoryPhotoData }) {
  const figureRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [phase, setPhase] = useState<'static' | 'pending' | 'visible'>('static');
  const [loaded, setLoaded] = useState(false);
  const ratio = photo.width / photo.height;
  const shape = ratio < 0.9 ? ' story-photo--portrait' : ratio <= 1.1 ? ' story-photo--square' : '';
  const appearance = phase === 'static' ? '' : phase === 'visible' && loaded ? ' story-photo--revealed' : ' story-photo--pending';

  useLayoutEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;
    if (typeof window.IntersectionObserver !== 'function' || typeof window.matchMedia !== 'function') {
      setPhase('static');
      return;
    }
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) {
      setPhase('static');
      return;
    }

    setLoaded(Boolean(imageRef.current?.complete));
    setPhase('pending');
    const observer = new window.IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPhase('visible');
        observer.disconnect();
      }
    }, { threshold: 0.01 });
    const onPreferenceChange = () => {
      if (preference.matches) {
        observer.disconnect();
        setPhase('static');
      }
    };
    preference.addEventListener?.('change', onPreferenceChange);
    observer.observe(figure);
    return () => {
      observer.disconnect();
      preference.removeEventListener?.('change', onPreferenceChange);
    };
  }, [photo.src]);

  return (
    <figure ref={figureRef} className={'story-photo' + shape + appearance}>
      <img ref={imageRef} src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async" onLoad={() => setLoaded(true)} onError={() => setLoaded(true)} />
      {photo.caption && <figcaption>{photo.caption}</figcaption>}
    </figure>
  );
}

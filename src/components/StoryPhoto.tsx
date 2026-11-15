import type { StoryPhoto as StoryPhotoData } from '../types';

export function StoryPhoto({ photo }: { photo: StoryPhotoData }) {
  const ratio = photo.width / photo.height;
  const shape = ratio < 0.9 ? ' story-photo--portrait' : ratio <= 1.1 ? ' story-photo--square' : '';

  return (
    <figure className={'story-photo' + shape}>
      <img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async" />
      {photo.caption && <figcaption>{photo.caption}</figcaption>}
    </figure>
  );
}

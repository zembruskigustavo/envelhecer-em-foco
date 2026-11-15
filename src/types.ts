export interface StoryPhoto {
  id: string;
  src: string;
  originalSrc: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface Interviewee {
  id: string;
  name: string;
  fullName: string;
  image: {
    src: string;
    gallerySrc: string;
    alt: string;
    position: string;
    credit: string;
    source: string;
  };
  quote: string;
  photos: StoryPhoto[];
}

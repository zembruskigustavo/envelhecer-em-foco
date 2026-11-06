export interface NarrativeSection {
  id: string;
  title: string;
  paragraphs: string[];
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
  introduction?: string;
  sections: NarrativeSection[];
}

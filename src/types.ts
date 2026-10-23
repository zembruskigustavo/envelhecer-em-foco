export interface NarrativeSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface Interviewee {
  id: string;
  number: string;
  name: string;
  image: {
    src: string;
    fallback: string;
    alt: string;
    position: string;
    credit: string;
    source: string;
  };
  quote: string;
  introduction: string;
  sections: NarrativeSection[];
  // Alterar para false somente quando todo o conteúdo tiver sido substituído.
  isDemo: boolean;
}

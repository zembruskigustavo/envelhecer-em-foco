import type { Interviewee } from '../types';
import { getStoryPhotos } from './storyPhotos';

export const interviewees: Interviewee[] = [
  {
    id: 'retrato-01',
    name: 'Zélia',
    fullName: 'Zélia Deola Kuhn',
    image: {
      src: './images/optimized/zelia.jpg',
      gallerySrc: './images/zelia/zeliametade.jpg',
      alt: 'Retrato da participante Zélia Deola Kuhn.',
      position: '50% 38%',
      credit: 'Emily Gilioli',
      source: './images/zelia/zelia.jpg',
    },
    quote: '"É o processo da vida. Nós estamos aqui só de passagem."',
    photos: getStoryPhotos('zelia'),
  },
  {
    id: 'jaime-02',
    name: 'Jaime',
    fullName: 'Jaime Constante Zuffo',
    image: {
      src: './images/optimized/jaimerecortecolorida.jpg',
      gallerySrc: './images/jaime/jaimemetade.jpg',
      alt: 'Retrato do participante Jaime Constante Zuffo.',
      position: '50% 40%',
      credit: 'Emily Gilioli',
      source: './images/jaime/jaime.jpg',
    },
    quote: '"A velhice é boa, mas tem que saber viver."',
    photos: getStoryPhotos('jaime'),
  },
  {
    id: 'dorotilde-03',
    name: 'Dorotilde',
    fullName: 'Dorotilde Bernardes',
    image: {
      src: './images/optimized/dorotilde.jpg',
      gallerySrc: './images/dorotilde/dorotildemetade.jpg',
      alt: 'Retrato da participante Dorotilde Bernardes.',
      position: '50% 35%',
      credit: 'Emily Gilioli',
      source: './images/dorotilde/dorotilde.jpg',
    },
    quote: '"Não sinto a idade que tenho."',
    photos: getStoryPhotos('dorotilde'),
  },
  {
    id: 'luiz-04',
    name: 'Luiz',
    fullName: 'Luiz Fernando Costa',
    image: {
      src: './images/optimized/luiz.jpg',
      gallerySrc: './images/luiz/luizmetade.jpg',
      alt: 'Retrato do participante Luiz Fernando Costa.',
      position: '50% 40%',
      credit: 'Emily Gilioli',
      source: './images/luiz/luiz.jpg',
    },
    quote: '"Seja verdadeiro, aceite a realidade e não acredite em todos que falam contigo."',
    photos: getStoryPhotos('luiz'),
  },
];

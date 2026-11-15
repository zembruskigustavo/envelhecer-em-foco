import images from './storyImages.json';
import type { StoryPhoto } from '../types';

// Cada identificador acompanha a numeracao do arquivo original.
// Preencha caption com as legendas e falas editadas das entrevistas.
// As descricoes em alt sao independentes das legendas visiveis.
const editorial: Record<string, Pick<StoryPhoto, 'alt' | 'caption'>> = {
  'zelia-01': { alt: 'Zélia, de jaleco branco, conversa com um homem sentado na sala.', caption: '' },
  'zelia-02': { alt: 'Detalhe das mãos de Zélia cruzadas sobre o jaleco branco.', caption: '' },
  'zelia-03': { alt: 'Zélia se inclina junto a um homem sentado, com as mãos sobre o braço dele.', caption: '' },
  'zelia-04': { alt: 'Zélia olha para o computador, com o rosto parcialmente encoberto pelo monitor.', caption: '' },
  'zelia-05': { alt: 'Detalhe da mão de Zélia apoiada em um móvel metálico.', caption: '' },
  'zelia-06': { alt: 'Zélia sentada à mesa, com papéis e uma caneta à sua frente.', caption: '' },
  'jaime-01': { alt: 'Detalhe do boné cinza e dos óculos de Jaime.', caption: '' },
  'jaime-02': { alt: 'Jaime e outro homem posam lado a lado e sorriem.', caption: '' },
  'jaime-03': { alt: 'Jaime, de camisa xadrez, em pé junto a um grupo e a um homem de vestes brancas.', caption: '' },
  'jaime-04': { alt: 'Detalhe do relógio de pulso de Jaime junto à manga da camisa xadrez.', caption: '' },
  'jaime-05': { alt: 'Detalhe do rosto de Jaime, com óculos e bigode.', caption: '' },
  'jaime-06': { alt: 'Jaime, de boné cinza, segura um prato junto ao balcão de refeições.', caption: '' },
  'dorotilde-01': { alt: 'Dorotilde olha por cima do ombro, usando óculos de armação escura e casaco preto.', caption: '' },
  'dorotilde-02': { alt: 'Detalhe de uma mão estendida, com bolas sobre a pista ao fundo.', caption: '' },
  'dorotilde-03': { alt: 'Dorotilde se inclina para colocar uma bola na pista.', caption: '' },
  'dorotilde-04': { alt: 'Dorotilde sorri ao lado de uma mulher e de um homem.', caption: '' },
  'dorotilde-05': { alt: 'Dorotilde, de óculos e blusa marrom, olha para baixo.', caption: '' },
  'dorotilde-06': { alt: 'Vista de trás dos cabelos grisalhos e do casaco de Dorotilde.', caption: '' },
  'luiz-01': { alt: 'Luiz sorri e acena com a mão levantada no salão da Cidade do Idoso.', caption: '' },
  'luiz-02': { alt: 'Retrato aproximado do rosto de Luiz sorrindo.', caption: '' },
  'luiz-03': { alt: 'Luiz, com camiseta da Cidade do Idoso, sentado à mesa com um prato de comida.', caption: '' },
  'luiz-04': { alt: 'Detalhe do rosto de Luiz, com o olhar voltado para o lado.', caption: '' },
};

export function getStoryPhotos(participant: keyof typeof images): StoryPhoto[] {
  return images[participant].map((image) => ({
    ...image,
    alt: editorial[image.id]?.alt ?? 'Fotografia da Cidade do Idoso, em Chapecó.',
    caption: editorial[image.id]?.caption ?? '',
  }));
}

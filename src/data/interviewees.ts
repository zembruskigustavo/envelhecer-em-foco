import type { Interviewee } from '../types';

// Todo o conteúdo abaixo é provisório. As pessoas nas fotografias de banco
// de imagens NÃO são participantes da pesquisa. Não há biografias inventadas.
export const interviewees: Interviewee[] = [
  {
    id: 'retrato-01',
    name: 'Zélia',
    image: {
      src: './public/images/zelia.jpg',
      gallerySrc: './images/zeliametade.jpg',
      fallback: './images/retrato-01.svg',
      alt: 'Retrato da participante Zélia.',
      position: '50% 38%',
      credit: 'Emily Gilioli / Unochapecó',
      source: 'https://unsplash.com/photos/l9I93gZKTG4',
    },
    quote: '[Uma frase da entrevista será inserida aqui.]',
    introduction: '[Conteúdo demonstrativo] Este espaço receberá a apresentação da primeira pessoa entrevistada, com informações verificadas a partir da pesquisa.',
    sections: [
      {
        id: 'primeiras-memorias',
        title: 'As primeiras memórias',
        paragraphs: [
          'Conteúdo demonstrativo. Este capítulo poderá reunir lembranças da infância, lugares e pessoas mencionadas na entrevista. O texto final será construído a partir do relato da participante.',
          'Espaço reservado para a continuação da narrativa. Nenhuma informação biográfica foi atribuída à pessoa retratada na imagem ilustrativa.',
        ],
      },
      {
        id: 'caminhos-e-encontros',
        title: 'Caminhos e encontros',
        paragraphs: ['Conteúdo demonstrativo. Aqui poderão aparecer momentos, vínculos e mudanças que a pessoa entrevistada considere importantes em sua trajetória.'],
      },
      {
        id: 'tempo-presente',
        title: 'O tempo presente',
        paragraphs: ['Conteúdo demonstrativo. Esta seção está reservada às perspectivas da pessoa entrevistada sobre o presente e o envelhecimento. Os depoimentos reais ainda não foram inseridos.'],
      },
    ],
    isDemo: false,
  },
  {
    id: 'jaime-02',
    name: 'Jaime',
    image: {
      src: './public/images/jaimerecortecolorida.jpg',
      gallerySrc: './images/jaimemetade.jpg',
      fallback: './images/retrato-02.svg',
      alt: 'Fotografia demonstrativa de um homem idoso. Não representa um participante da pesquisa.',
      position: '50% 40%',
      credit: 'Rafael Leão / Unsplash',
      source: 'https://unsplash.com/photos/NRnPv3Gs-Nc',
    },
    quote: '[Espaço reservado para uma frase da segunda entrevista.]',
    introduction: '[Conteúdo demonstrativo] Esta será a apresentação da segunda pessoa entrevistada. Nome, fotografia e texto serão substituídos pelos materiais do projeto.',
    sections: [
      { id: 'origens', title: 'Lugares de origem', paragraphs: ['Conteúdo demonstrativo. Este espaço poderá apresentar as origens da pessoa entrevistada e suas lembranças dos lugares em que viveu.'] },
      { id: 'trajetoria', title: 'Uma trajetória em construção', paragraphs: ['Conteúdo demonstrativo. A narrativa desta seção será escrita a partir dos acontecimentos compartilhados durante a entrevista.'] },
      { id: 'olhar', title: 'Um olhar sobre o agora', paragraphs: ['Conteúdo demonstrativo. Espaço para as reflexões do entrevistado sobre o presente. Nenhum depoimento real está sendo reproduzido.'] },
    ],
    isDemo: false,
  },
  {
    id: 'dorotilde-03',
    name: 'Dorotilde',
    image: {
      src: './public/images/dorotilde.jpg',
      gallerySrc: './images/dorotildemetade.jpg',
      fallback: './images/retrato-03.svg',
      alt: 'Fotografia demonstrativa de uma mulher idosa. Não representa uma participante da pesquisa.',
      position: '50% 35%',
      credit: 'Michael Thomson / Unsplash',
      source: 'https://unsplash.com/photos/exSbVjfRXTo',
    },
    quote: '[Uma passagem marcante da terceira entrevista entrará aqui.]',
    introduction: '[Conteúdo demonstrativo] Esta introdução será dedicada à terceira pessoa entrevistada e ao contexto de sua participação no projeto.',
    sections: [
      { id: 'lembrancas', title: 'O que a memória guarda', paragraphs: ['Conteúdo demonstrativo. Espaço reservado às lembranças escolhidas pela pessoa entrevistada.'] },
      { id: 'vinculos', title: 'Pessoas e afetos', paragraphs: ['Conteúdo demonstrativo. Este capítulo poderá abordar os vínculos mencionados na entrevista, respeitando as palavras e escolhas da participante.'] },
      { id: 'perspectivas', title: 'Perspectivas do presente', paragraphs: ['Conteúdo demonstrativo. Esta seção receberá as perspectivas da entrevistada. O conteúdo definitivo ainda será incluído.'] },
    ],
    isDemo: false,
  },
  {
    id: 'luiz-04',
    name: 'Luiz',
    image: {
      src: './public/images/luiz.jpg',
      gallerySrc: './images/luizmetade.jpg',
      fallback: './images/retrato-04.svg',
      alt: 'Fotografia demonstrativa de um homem idoso com chapéu. Não representa um participante da pesquisa.',
      position: '50% 40%',
      credit: 'Ricardo Alfaro / Unsplash',
      source: 'https://unsplash.com/photos/MeU7XG3HOes',
    },
    quote: '[Uma frase da quarta entrevista será acrescentada aqui.]',
    introduction: '[Conteúdo demonstrativo] Espaço de apresentação da quarta pessoa entrevistada. O texto final acompanhará a fotografia e o relato reais.',
    sections: [
      { id: 'comeco', title: 'O começo do caminho', paragraphs: ['Conteúdo demonstrativo. Este capítulo será desenvolvido com as primeiras lembranças compartilhadas pelo entrevistado.'] },
      { id: 'experiencias', title: 'Experiências que ficam', paragraphs: ['Conteúdo demonstrativo. Aqui serão organizadas as experiências que a pessoa entrevistada desejar compartilhar.'] },
      { id: 'envelhecer', title: 'Sobre envelhecer', paragraphs: ['Conteúdo demonstrativo. Espaço para a perspectiva do entrevistado sobre o envelhecimento. Ainda não há transcrições ou depoimentos reais nesta página.'] },
    ],
    isDemo: false,
  },
];

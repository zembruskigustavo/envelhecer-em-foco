# Envelhecer em Foco

Protótipo de uma exposição documental interativa para um TCC sobre quatro pessoas entrevistadas na Cidade do Idoso, em Chapecó, SC.

## Executar localmente

Requisito: Node.js 22.12 ou superior, com npm.

No terminal, dentro da pasta do projeto:

```powershell
npm install
npm run dev
```

Abra o endereço informado pelo Vite, normalmente http://127.0.0.1:5173.

No PowerShell, se houver uma restrição à execução de npm.ps1, use `npm.cmd install` e `npm.cmd run dev`.

A instalação requer acesso à internet. As fotografias demonstrativas são carregadas do Unsplash; caso não estejam disponíveis, o site usa ilustrações SVG locais. A interface não depende de fontes externas.

Para conferir a tipagem e gerar a versão de produção:

```powershell
npm run typecheck
npm run build
npm run preview
```

O resultado da compilação fica em `dist/`. Não abra `index.html` diretamente: os arquivos TypeScript e TSX precisam do Vite.

## Experiência implementada

- Quatro retratos em painéis verticais no desktop; grade de dois por dois no celular.
- Título ENVELHECER sobreposto aos retratos, com EM FOCO em segundo plano.
- Aproximação discreta da fotografia e identificação da história no hover.
- O painel selecionado se expande e passa a ocupar a área de retrato da história.
- Apresentação, espaço para frase da entrevista e capítulos de narrativa.
- Navegação para as outras três histórias.
- Retorno à galeria com recuperação do foco no retrato anterior.
- Links diretos por parâmetro, por exemplo `?historia=retrato-02`.
- Voltar e Avançar do navegador; Escape também retorna à galeria.
- Botões nativos com ativação por Enter e Espaço, foco visível, atalho para o conteúdo e respeito a `prefers-reduced-motion`.

Não foram incluídos backend, autenticação, CMS, áudio, vídeo, linha do tempo ou galerias adicionais.

## Estrutura

A página inicial também inclui a seção **Cidade do Idoso**, com capa de tela inteira. A apresentação fica oculta até a ativação do botão “Conhecer a Cidade do Idoso”, por clique, Enter ou Espaço. O texto aparece abaixo, recebe o foco e é alcançado por rolagem suave, mantendo o tamanho da fotografia. “Voltar à fotografia” ou Escape fecha a apresentação e devolve o foco ao botão. A preferência por movimento reduzido desativa a rolagem animada.

- `src/components/CitySection.tsx`: capa, acesso ao texto e apresentação da Cidade do Idoso.
- `src/data/city.ts`: resumo da página oficial, fonte, data de consulta e fotografia.
- `src/components/SiteFooter.tsx`: rodapé compartilhado com créditos acadêmicos e contatos.
- `src/data/project.ts`: nomes, telefones, perfis do LinkedIn e GitHub do desenvolvedor.

A foto indicada no Instagram não ficou acessível durante o desenvolvimento. A capa usa provisoriamente uma imagem da página oficial da Prefeitura. Para trocar a foto, altere `city.image.src`, a descrição e o crédito em `src/data/city.ts`; uma imagem local pode ser colocada em `public/images/`.

```text
envelhecer-em-foco/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── retrato-01.svg
│       ├── retrato-02.svg
│       ├── retrato-03.svg
│       └── retrato-04.svg
├── src/
│   ├── components/
│   │   ├── Arrow.tsx
│   │   ├── BackButton.tsx
│   │   ├── CitySection.tsx
│   │   ├── HomePage.tsx
│   │   ├── PortraitGallery.tsx
│   │   ├── PortraitImage.tsx
│   │   ├── PortraitPanel.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── StorySection.tsx
│   │   └── StoryView.tsx
│   ├── data/
│   │   ├── city.ts
│   │   ├── interviewees.ts
│   │   └── project.ts
│   ├── hooks/
│   │   └── useStoryNavigation.ts
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Substituir conteúdo

Edite somente `src/data/interviewees.ts` para alterar os quatro participantes:

- `id`: identificador do link; mantenha estável depois de compartilhar.
- `number`: numeração editorial.
- `name`: nome da pessoa entrevistada.
- `image.src`: caminho ou URL da fotografia.
- `image.fallback`: imagem alternativa local.
- `image.alt`: descrição acessível da fotografia.
- `image.position`: posição do enquadramento, por exemplo `50% 35%`.
- `image.credit` e `image.source`: autoria e origem da fotografia.
- `quote`: frase transcrita da entrevista.
- `introduction`: apresentação da pessoa.
- `sections`: capítulos, com título e uma lista de parágrafos.
- `isDemo`: mantenha `true` enquanto houver conteúdo provisório.

Para usar uma foto local, coloque-a em `public/images/` e use, por exemplo, `src: './images/maria.jpg'`. Prefira WebP ou JPEG otimizado. Atualize a imagem alternativa, o crédito, o enquadramento e os textos junto com a fotografia. Depois de substituir todo o material de uma pessoa, altere seu `isDemo` para `false`.

O layout e a quantidade de capítulos são derivados dos dados, sem duplicar a estrutura dos componentes.

## Identidade e movimento

As variáveis no início de `src/styles.css` controlam cores, fontes, espaçamentos e duração da expansão. Os títulos usam Georgia e os textos usam fontes do sistema.

A galeria permanece montada ao abrir uma história. A largura da galeria e a proporção dos painéis são animadas em CSS; o conteúdo aparece como continuação da composição. Em telas de até 700 px, o retrato ocupa o topo e o texto segue abaixo.

## Material demonstrativo

**Nenhuma fotografia de banco de imagens representa os participantes da pesquisa. Não há nomes, biografias ou depoimentos reais no protótipo.** Os nomes são identificadores provisórios e as frases reservadas não são apresentadas como citações.

Fotografias de demonstração, com links de origem:

1. Danie Franco — https://unsplash.com/photos/l9I93gZKTG4
2. Rafael Leão — https://unsplash.com/photos/NRnPv3Gs-Nc
3. Michael Thomson — https://unsplash.com/photos/exSbVjfRXTo
4. Ricardo Alfaro — https://unsplash.com/photos/MeU7XG3HOes

As quatro ilustrações SVG locais são placeholders gráficos criados para este protótipo.

## Revisão de UX

O título da galeria considera a altura da tela, com espaço reservado antes dos nomes. A capa da Cidade do Idoso traz “O lugar dessas histórias” em itálico acima do título e uma introdução em fonte serifada. O botão não tem moldura e usa uma seta em destaque, com estados de hover e foco visível. A apresentação preserva a divisão em assuntos, sem cabeçalho adicional ou numeração. O rodapé mantém as cores do projeto, com tipografia sem serifa, espaçamentos menores e os links de contato, incluindo o GitHub de Gustavo.

A revisão anterior confirmou ausência de sobreposição entre “Em foco” e os nomes em desktop e celular. Nesta revisão, a capa e o conteúdo foram conferidos em 989 × 572, 1280 × 720, 390 × 844 e 320 × 568, sem rolagem horizontal ou cortes no texto da capa. A apresentação começa oculta; Enter, Espaço e clique a revelam e transferem o foco. O botão de retorno e Escape a fecham e restauram o foco. A fotografia mantém a altura da tela. O endereço do GitHub foi conferido sem abrir páginas externas.

O `typecheck` passou nesta revisão. A compilação de produção continua limitada pelo erro `EPERM` de `realpath` no ambiente do Codex; a prévia já em execução permitiu verificar a interface no navegador.

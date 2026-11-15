# Envelhecer

**Título completo:** Envelhecer: Um olhar de experiência capturado em imagem.

Fotodocumentário interativo de Emily Gilioli, desenvolvido para o Trabalho de Conclusão de Curso da graduação em Jornalismo da Unochapecó. O projeto apresenta retratos e falas de quatro pessoas entrevistadas na Cidade do Idoso, em Chapecó, Santa Catarina.

Todas as fotografias são de **Emily Gilioli** e integram o acervo local do projeto.

## Participantes

- Zélia Deola Kuhn
- Jaime Constante Zuffo
- Dorotilde Bernardes
- Luiz Fernando Costa

## Experiência

- Galeria com quatro retratos lado a lado no computador e grade de dois por dois no celular.
- Retratos recortados na página inicial e fotografias completas como fonte das histórias expandidas.
- Ajuste das imagens ao painel, preservando a proporção e preenchendo a área sem margens.
- Nome completo e frase da entrevista na apresentação de cada participante.
- Aberturas com aspas tipográficas em cobre e agrupamento dos nomes para equilibrar as quebras de linha.
- Ensaios com seis fotos adicionais de Zélia, Jaime e Dorotilde e quatro de Luiz, inteiras e alinhadas alternadamente à esquerda e à direita, com os espaços laterais vazios.
- Legendas imediatamente abaixo das fotos, acompanhando sua largura, em 10 px e entrelinha simples.
- Contorno fino nas fotos dos ensaios e aparecimento suave de 180 ms ao entrar na tela, após o carregamento.
- Navegação entre histórias, retorno à galeria e suporte ao histórico do navegador.
- Indicador animado de rolagem na página inicial.
- Capa da Cidade do Idoso em tela inteira, com apresentação revelada pelo botão “Conhecer a Cidade do Idoso”.
- Galeria da Cidade do Idoso em uma tela própria, com 44 fotografias inteiras em colunas de alturas variadas.
- Ampliação das fotografias, navegação por setas e descrições acessíveis no texto alternativo das imagens.
- Créditos acadêmicos, autoria das fotografias e contatos do projeto.
- Encerramento das histórias e créditos com fundo, margens e colunas alinhados, separados por uma linha discreta.

## Tecnologias

React, TypeScript, Vite e CSS. A aplicação funciona no navegador e utiliza arquivos estáticos para conteúdo e fotografias. A tipografia usa fontes do sistema, incluindo Georgia.

## Executar localmente

Requisito: **Node.js 22.12 ou superior**, com npm.

Na pasta do projeto:

```powershell
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente http://127.0.0.1:5173/. Se a porta estiver ocupada, o Vite informará outra.

No PowerShell, caso a execução de `npm.ps1` esteja restrita, utilize `npm.cmd` nos mesmos comandos.

## Comandos

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run typecheck` | Verifica os tipos TypeScript. |
| `npm run build` | Verifica os tipos e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão compilada. |

## Organização do código

| Caminho | Responsabilidade |
| --- | --- |
| `public/images/` | Fotografias originais e recortes do acervo de Emily Gilioli. |
| `src/components/HomePage.tsx` | Página inicial, apresentação dos participantes e composição das seções. |
| `src/components/PortraitGallery.tsx` e `PortraitPanel.tsx` | Galeria e seleção dos retratos. |
| `src/components/PortraitImage.tsx` | Seleção da fotografia conforme a galeria ou a história. |
| `src/components/StoryView.tsx` e `StoryPhoto.tsx` | Ensaio fotográfico, legendas e navegação entre participantes. |
| `src/components/CitySection.tsx` | Capa e apresentação da Cidade do Idoso. |
| `src/components/CityGallery.tsx` | Galeria da Cidade do Idoso e visualização ampliada. |
| `src/components/SiteFooter.tsx` | Créditos e contatos. |
| `src/data/interviewees.ts` | Identificação dos participantes, fotografias e conteúdo das entrevistas. |
| `src/data/storyPhotos.ts` | Descrições acessíveis e campos de legenda das fotos de cada participante. |
| `src/data/storyImages.json` | Caminhos e dimensões dos ensaios, gerados pelo script de preparação. |
| `src/data/city.ts` | Apresentação da Cidade do Idoso, fotografia e referência do texto. |
| `src/data/cityGallery.ts` | Descrições acessíveis das fotografias da galeria. |
| `src/data/cityGalleryImages.json` | Caminhos e dimensões das imagens, gerados pelo script de preparação. |
| `scripts/prepare-city-gallery.ps1` | Geração das versões leves das fotografias, preservando os originais. |
| `scripts/prepare-main-images.ps1` | Geração das versões leves dos retratos expandidos e da capa da Cidade do Idoso. |
| `scripts/prepare-story-photos.ps1` | Preparação e ordenação das fotos adicionais de cada participante. |
| `scripts/photo-helpers.ps1` | Redimensionamento e orientação dos retratos e das fotos dos ensaios, preservando os originais. |
| `src/data/project.ts` | Créditos acadêmicos e contatos do projeto. |
| `src/hooks/useStoryNavigation.ts` | Navegação entre histórias e galeria, links diretos e histórico do navegador. |
| `src/types.ts` | Tipos dos dados editoriais. |
| `src/styles.css` | Identidade visual, responsividade e animações. |

## Acervo fotográfico

Os arquivos abaixo ficam em `public/images/`. A autoria de todos eles é de Emily Gilioli.

| Pessoa ou local | Galeria inicial | História ou capa |
| --- | --- | --- |
| Zélia Deola Kuhn | `zelia/zeliametade.jpg` | `zelia/zelia.jpg` |
| Jaime Constante Zuffo | `jaime/jaimemetade.jpg` | `jaime/jaimerecortecolorida.jpg` |
| Dorotilde Bernardes | `dorotilde/dorotildemetade.jpg` | `dorotilde/dorotilde.jpg` |
| Luiz Fernando Costa | `luiz/luizmetade.jpg` | `luiz/luiz.jpg` |
| Cidade do Idoso | — | `cidadedoidoso.jpg` |

O arquivo `jaime/jaime.jpg` também pertence ao acervo e é a fotografia original vinculada ao crédito da história de Jaime.

Os quatro retratos expandidos e a capa da Cidade do Idoso usam versões JPEG em `public/images/optimized/`, com o mesmo nome dos arquivos de origem, lado maior de até 2560 pixels e qualidade 88. Os recortes da página inicial ficam nas pastas dos participantes. Os arquivos originais são preservados, incluindo os destinos dos links de crédito. Para regenerar essas cinco versões no Windows:

```powershell
powershell -NoProfile -File scripts/prepare-main-images.ps1
```

Os ensaios de Zélia, Jaime e Dorotilde reúnem seis fotos além do retrato da abertura; o de Luiz reúne quatro. Cada sequência acompanha a numeração no final dos nomes dos arquivos. Os originais ficam nas pastas `public/images/zelia/`, `jaime/`, `dorotilde/` e `luiz/`.

Para gerar as versões leves dos ensaios e atualizar `src/data/storyImages.json`, execute no Windows:

```powershell
powershell -NoProfile -File scripts/prepare-story-photos.ps1
```

O script cria uma subpasta `optimized/` em cada pasta com fotos numeradas. A quantidade esperada é configurada por participante em `$expectedCounts`: seis para Zélia, Jaime e Dorotilde e quatro para Luiz. A numeração começa em 1 e não pode ter lacunas ou repetições; uma pasta sem fotos numeradas é aceita enquanto seu ensaio estiver pendente. Os retratos da abertura não entram nessa contagem. As versões preservam as proporções, com lado maior de até 2560 pixels e qualidade JPEG 88. Os textos de legenda permanecem separados da geração das imagens.

As 44 fotografias da galeria da Cidade do Idoso ficam em `public/images/cidadedoidoso/`, com os nomes `editadas_1.jpg` a `editadas_44.jpg`. A galeria segue essa ordem numérica e usa versões leves da subpasta `optimized/`: miniaturas na grade e imagens maiores na ampliação. O visualizador mantém a navegação e o fechamento na própria página, com os rótulos "Anterior" e "Próxima" também nas telas menores. Os originais permanecem no acervo do projeto.

Nas configurações, use caminhos como `./images/zelia/zeliametade.jpg`: o Vite publica o conteúdo de `public/` na raiz do site. Preserve os acentos, espaços e a correspondência entre maiúsculas e minúsculas nos nomes dos arquivos.

## Manutenção do conteúdo

Os dados editoriais ficam separados dos componentes em `src/data/`.

| Campo de participante | Uso |
| --- | --- |
| `id` | Identificador usado nos links diretos; preserve-o ao editar o conteúdo. |
| `name` | Nome curto nos retratos e na navegação. |
| `fullName` | Nome completo na história, no título da página e nos rótulos acessíveis. |
| `image.src` | Fotografia da história expandida e das sugestões de outras histórias. |
| `image.gallerySrc` | Recorte usado na galeria inicial. |
| `image.alt` | Descrição acessível da fotografia. |
| `image.position` | Ponto de referência do enquadramento. |
| `image.credit` | Autoria da fotografia. |
| `image.source` | Arquivo local aberto pelo link do crédito. |
| `quote` | Frase da entrevista. |
| `photos` | Fotos adicionais do ensaio, com descrição acessível e legenda. |

As fotografias, os nomes e as frases de abertura correspondem aos participantes. A narrativa abaixo da abertura é construída com fotos, pequenos fragmentos e falas nas legendas. Os espaços ao lado das imagens permanecem vazios, sem textos ou elementos de preenchimento.

Para inserir as legendas, preencha `caption` em `src/data/storyPhotos.ts`. O identificador `zelia-01`, por exemplo, corresponde ao arquivo numerado 1 de Zélia. Os campos estão vazios até o recebimento dos textos e só aparecem na página quando preenchidos. O campo `alt` descreve visualmente a imagem para leitores de tela e pode ser revisado separadamente.

As legendas são planejadas para 1 a 3 linhas e usam fonte de 10 px, entrelinha simples e a largura exata da imagem. Quebras de linha explícitas são preservadas; o texto não é truncado se ocupar mais linhas em uma tela menor. As fotos mantêm suas proporções e a alternância de alinhamento também no celular.

As fotos da sequência usam 90% da largura prevista no primeiro layout para cada formato de imagem, com a altura ajustada proporcionalmente. Os intervalos entre elas variam de 32 a 64 px para manter a página mais compacta.

Os links diretos usam o parâmetro `historia`:

| Participante | Link |
| --- | --- |
| Zélia | `?historia=retrato-01` |
| Jaime | `?historia=jaime-02` |
| Dorotilde | `?historia=dorotilde-03` |
| Luiz | `?historia=luiz-04` |

O texto da Cidade do Idoso mantém como referência a [página oficial da Prefeitura de Chapecó](https://www.chapeco.sc.gov.br/conteudo/502/cidade-do-idoso). A referência do texto é independente da autoria das fotografias.

A galeria tem o endereço `?galeria=cidade-do-idoso`, que pode ser aberto diretamente ou compartilhado. O link da Prefeitura fica no rodapé dessa tela; a apresentação do programa oferece o acesso "Ir para a galeria".

As descrições das fotografias ficam no campo `alt` do respectivo arquivo em `src/data/cityGallery.ts`. Por exemplo, `editadas_1` corresponde a `editadas_1.jpg`. Elas são usadas como texto alternativo tanto na grade quanto na ampliação, sem legendas visíveis. A instrução de ampliação permanece no cabeçalho da galeria, e o crédito de autoria fica no rodapé geral do projeto.

Ao substituir fotografias ou acrescentar arquivos à sequência `editadas_N.jpg`, regenere as versões leves no Windows:

```powershell
powershell -NoProfile -File scripts/prepare-city-gallery.ps1
```

O script atualiza as imagens em `optimized/` e o manifesto `src/data/cityGalleryImages.json`, sem alterar os originais ou as descrições acessíveis. Para novas fotografias, inclua também a entrada editorial correspondente em `src/data/cityGallery.ts`. As imagens geradas acompanham o projeto; a hospedagem não precisa executar esse script.

## Acessibilidade

A interface usa HTML semântico, textos alternativos e botões nativos com ativação por Enter e Espaço. A seleção de uma história direciona o foco ao nome do participante; o retorno à galeria restaura o foco no retrato selecionado.

Escape retorna das histórias à galeria e fecha a apresentação da Cidade do Idoso. A preferência `prefers-reduced-motion` desativa animações e rolagem suave, mantendo a seta de continuação estática e as fotos dos ensaios visíveis sem animação. O aparecimento de cada foto ocorre uma única vez; sem suporte a `IntersectionObserver`, as imagens são exibidas diretamente.

Na galeria da Cidade do Idoso, a ampliação usa um diálogo modal com foco contido: Escape fecha a fotografia e devolve o foco à miniatura. As setas esquerda e direita navegam pelas fotos, e Home/End acessam a primeira e a última. O retorno à apresentação do programa abre seus detalhes e posiciona o foco no link da galeria.

## Compilação e publicação

```powershell
npm run build
npm run preview
```

Publique o conteúdo de `dist/` em uma hospedagem de arquivos estáticos. O projeto usa caminhos relativos, configurados por `base: './'` em `vite.config.ts`. O servidor deve entregar `index.html` como documento inicial e servir os arquivos de `assets/` e `images/` gerados no build.

### Vercel

O arquivo `vercel.json` configura o projeto como Vite, instala as dependências com `npm ci`, executa `npm run build` e publica a pasta `dist/`.

Para publicar pelo GitHub:

1. Na Vercel, crie um projeto importando `zembruskigustavo/envelhecer-em-foco`.
2. Use a raiz do repositório como diretório do projeto e `master` como branch de produção.
3. Confira as configurações abaixo e publique.

| Configuração | Valor |
| --- | --- |
| Framework | Vite |
| Instalação | `npm ci` |
| Build | `npm run build` |
| Diretório de saída | `dist` |
| Variáveis de ambiente | Nenhuma necessária |

Após vincular o repositório, os novos commits na branch de produção podem ser publicados automaticamente pela integração da Vercel com o GitHub. Os links das histórias usam parâmetros de consulta na página inicial e não exigem regras adicionais de reescrita de rotas.

## Créditos

- **Projeto jornalístico, entrevistas e fotografias:** [Emily Gilioli](https://www.linkedin.com/in/emily-gilioli/).
- **Desenvolvimento:** [Gustavo Zembruski](https://github.com/zembruskigustavo).
- **Vínculo acadêmico:** Trabalho de Conclusão de Curso de Jornalismo da Unochapecó.
- **Local:** Chapecó, Santa Catarina.

Os contatos publicados no rodapé são mantidos em `src/data/project.ts`.

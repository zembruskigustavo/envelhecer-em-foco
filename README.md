# Envelhecer em Foco

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
- Apresentação e três capítulos por participante, com espaços reservados para os textos das histórias.
- Navegação entre histórias, retorno à galeria e suporte ao histórico do navegador.
- Indicador animado de rolagem na página inicial.
- Capa da Cidade do Idoso em tela inteira, com apresentação revelada pelo botão “Conhecer a Cidade do Idoso”.
- Créditos acadêmicos, autoria das fotografias e contatos do projeto.

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
| `src/components/StoryView.tsx` e `StorySection.tsx` | Narrativa e navegação entre participantes. |
| `src/components/CitySection.tsx` | Capa e apresentação da Cidade do Idoso. |
| `src/components/SiteFooter.tsx` | Créditos e contatos. |
| `src/data/interviewees.ts` | Identificação dos participantes, fotografias e conteúdo das entrevistas. |
| `src/data/city.ts` | Apresentação da Cidade do Idoso, fotografia e referência do texto. |
| `src/data/project.ts` | Créditos acadêmicos e contatos do projeto. |
| `src/hooks/useStoryNavigation.ts` | Seleção das histórias, links diretos e histórico do navegador. |
| `src/types.ts` | Tipos dos dados editoriais. |
| `src/styles.css` | Identidade visual, responsividade e animações. |

## Acervo fotográfico

Os arquivos abaixo ficam em `public/images/`. A autoria de todos eles é de Emily Gilioli.

| Pessoa ou local | Galeria inicial | História ou capa |
| --- | --- | --- |
| Zélia Deola Kuhn | `zeliametade.jpg` | `zelia.jpg` |
| Jaime Constante Zuffo | `jaimemetade.jpg` | `jaimerecortecolorida.jpg` |
| Dorotilde Bernardes | `dorotildemetade.jpg` | `dorotilde.jpg` |
| Luiz Fernando Costa | `luizmetade.jpg` | `luiz.jpg` |
| Cidade do Idoso | — | `cidadedoidoso.jpg` |

O arquivo `jaime.jpg` também pertence ao acervo e é a fotografia original vinculada ao crédito da história de Jaime.

Nas configurações, use caminhos como `./images/zelia.jpg`: o Vite publica o conteúdo de `public/` na raiz do site. Preserve a correspondência entre maiúsculas e minúsculas nos nomes dos arquivos.

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
| `introduction` | Texto de apresentação, opcional. |
| `sections` | Capítulos da narrativa, com `id`, `title` e `paragraphs`. |

As fotografias, os nomes e as frases de abertura correspondem aos participantes. Os textos corridos das histórias ainda não foram incluídos: cada participante possui uma apresentação e três capítulos com espaços reservados, explicitamente identificados.

Para inserir os textos editados das entrevistas, substitua o conteúdo de `introduction` e de `sections[].paragraphs` em `src/data/interviewees.ts`. Os títulos e a divisão dos capítulos também podem ser ajustados nesses dados. A apresentação e os capítulos são exibidos somente quando possuem conteúdo.

Os links diretos usam o parâmetro `historia`:

| Participante | Link |
| --- | --- |
| Zélia | `?historia=retrato-01` |
| Jaime | `?historia=jaime-02` |
| Dorotilde | `?historia=dorotilde-03` |
| Luiz | `?historia=luiz-04` |

O texto da Cidade do Idoso mantém como referência a [página oficial da Prefeitura de Chapecó](https://www.chapeco.sc.gov.br/conteudo/502/cidade-do-idoso). A referência do texto é independente da autoria das fotografias.

## Acessibilidade

A interface usa HTML semântico, textos alternativos e botões nativos com ativação por Enter e Espaço. A seleção de uma história direciona o foco ao nome do participante; o retorno à galeria restaura o foco no retrato selecionado.

Escape retorna das histórias à galeria e fecha a apresentação da Cidade do Idoso. A preferência `prefers-reduced-motion` desativa animações e rolagem suave, mantendo a seta de continuação estática.

## Compilação e publicação

```powershell
npm run build
npm run preview
```

Publique o conteúdo de `dist/` em uma hospedagem de arquivos estáticos. O projeto usa caminhos relativos, configurados por `base: './'` em `vite.config.ts`. O servidor deve entregar `index.html` como documento inicial e servir os arquivos de `assets/` e `images/` gerados no build.

## Créditos

- **Projeto jornalístico, entrevistas e fotografias:** [Emily Gilioli](https://www.linkedin.com/in/emily-gilioli/).
- **Desenvolvimento:** [Gustavo Zembruski](https://github.com/zembruskigustavo).
- **Vínculo acadêmico:** Trabalho de Conclusão de Curso de Jornalismo da Unochapecó.
- **Local:** Chapecó, Santa Catarina.

Os contatos publicados no rodapé são mantidos em `src/data/project.ts`.

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
- Galeria da Cidade do Idoso em uma tela própria, com 44 fotografias inteiras em colunas de alturas variadas.
- Ampliação das fotografias, navegação por setas e campos preparados para as legendas.
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
| `src/components/CityGallery.tsx` | Galeria da Cidade do Idoso e visualização ampliada. |
| `src/components/SiteFooter.tsx` | Créditos e contatos. |
| `src/data/interviewees.ts` | Identificação dos participantes, fotografias e conteúdo das entrevistas. |
| `src/data/city.ts` | Apresentação da Cidade do Idoso, fotografia e referência do texto. |
| `src/data/cityGallery.ts` | Descrições acessíveis e legendas das fotografias da galeria. |
| `src/data/cityGalleryImages.json` | Caminhos e dimensões das imagens, gerados pelo script de preparação. |
| `scripts/prepare-city-gallery.ps1` | Geração das versões leves das fotografias, preservando os originais. |
| `src/data/project.ts` | Créditos acadêmicos e contatos do projeto. |
| `src/hooks/useStoryNavigation.ts` | Navegação entre histórias e galeria, links diretos e histórico do navegador. |
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

As 44 fotografias da galeria da Cidade do Idoso ficam em `public/images/cidadedoidoso/`, com os nomes `editadas_1.jpg` a `editadas_44.jpg`. A galeria segue essa ordem numérica e usa versões leves da subpasta `optimized/`: miniaturas na grade e imagens maiores na ampliação. O arquivo original permanece disponível no visualizador.

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

A galeria tem o endereço `?galeria=cidade-do-idoso`, que pode ser aberto diretamente ou compartilhado. O link da Prefeitura fica no rodapé dessa tela; a apresentação do programa oferece o acesso "Ir para a galeria".

Para adicionar as legendas, preencha o campo `caption` do respectivo arquivo em `src/data/cityGallery.ts`. Por exemplo, `editadas_1` corresponde a `editadas_1.jpg`. Os campos estão vazios até o recebimento dos textos e são exibidos abaixo da fotografia e na ampliação quando preenchidos. O campo `alt` contém a descrição visual acessível e pode ser revisado independentemente da legenda.

Ao substituir fotografias ou acrescentar arquivos à sequência `editadas_N.jpg`, regenere as versões leves no Windows:

```powershell
powershell -NoProfile -File scripts/prepare-city-gallery.ps1
```

O script atualiza as imagens em `optimized/` e o manifesto `src/data/cityGalleryImages.json`, sem alterar os originais ou as legendas. Para novas fotografias, inclua também a entrada editorial correspondente em `src/data/cityGallery.ts`. As imagens geradas acompanham o projeto; a hospedagem não precisa executar esse script.

## Acessibilidade

A interface usa HTML semântico, textos alternativos e botões nativos com ativação por Enter e Espaço. A seleção de uma história direciona o foco ao nome do participante; o retorno à galeria restaura o foco no retrato selecionado.

Escape retorna das histórias à galeria e fecha a apresentação da Cidade do Idoso. A preferência `prefers-reduced-motion` desativa animações e rolagem suave, mantendo a seta de continuação estática.

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

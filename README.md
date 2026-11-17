# Green Petroil - Site Corporativo

Trabalho semestral da disciplina Front-end Frameworks (UNG), aula 7: Single Page Applications, SSR e CSR.

Site da Green Petroil, uma empresa de petróleo fictícia, feito em Angular. Os dados do site (notícias, projetos sociais e informações da empresa) vêm de uma API simples feita em Node.js com Express.

## Grupo

- Guilherme Barros Moura Silva
- Gustavo Barros Moura Silva
- Ryan Barbosa
- Esthefany Eduarda

## Páginas

- Início: apresentação da empresa e feed com as 3 últimas notícias
- Sobre nós: história, missão, visão e valores
- Notícias: lista de todas as notícias e página com o post completo
- Projetos sociais: projetos mantidos pela empresa, com filtro por área

## Componentes compartilhados

- Cabeçalho, menu e rodapé
- Card de notícia (usado no início, na página de notícias e no "Leia também")
- Card de projeto (usado no início e na página de projetos)
- Banner do topo das páginas internas
- Mensagem de carregando/erro
- Ícones e logo

## Como rodar

Precisa ter o Node.js instalado (versão 20.19 ou mais nova).

```bash
git clone https://github.com/guiocreator/green-petroil.git
cd green-petroil
npm install
npm start
```

O site abre em http://localhost:4200 e a API roda em http://localhost:3000/api.

Se quiser rodar separado, use `npm run api` em um terminal e `npm run site` em outro.

## API

| Rota | O que retorna |
| --- | --- |
| GET /api/posts | todas as notícias, da mais nova para a mais antiga |
| GET /api/posts?limite=3 | só as 3 mais recentes (usado no feed) |
| GET /api/posts/:slug | uma notícia completa |
| GET /api/projetos | projetos sociais |
| GET /api/empresa | história, missão, visão e valores |

Os dados ficam em arquivos JSON na pasta `backend/data`.

## Estrutura

```
green-petroil/
  backend/
    data/          arquivos JSON com os dados
    server.js      rotas da API
  frontend/
    src/app/
      core/        serviço da API e tipos
      layout/      cabeçalho, menu, rodapé e logo
      shared/      componentes usados em mais de uma página
      pages/       páginas do site
```

## Acessibilidade e responsividade

Usamos tags semânticas (header, nav, main, article, section, footer), um h1 por página, textos alternativos e atributos aria no menu e nos filtros. Dá para navegar pelo site só com o teclado e tem um link para pular direto para o conteúdo.

O layout foi feito com Grid e Flexbox e se adapta ao celular. Em telas menores o menu vira um botão.

## Tecnologias

- Angular 20
- TypeScript e SCSS
- Node.js e Express

A Green Petroil é uma empresa fictícia, criada só para este trabalho.

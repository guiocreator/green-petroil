import { Routes } from '@angular/router';

/**
 * Rotas do site. As páginas são carregadas sob demanda (lazy loading),
 * o que deixa o carregamento inicial da SPA mais rápido.
 */
export const routes: Routes = [
  {
    path: '',
    title: 'Green Petroil | Energia com responsabilidade',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'sobre',
    title: 'Sobre nós | Green Petroil',
    loadComponent: () => import('./pages/sobre/sobre.component').then((m) => m.SobreComponent),
  },
  {
    path: 'noticias',
    title: 'Notícias | Green Petroil',
    loadComponent: () =>
      import('./pages/noticias/noticias.component').then((m) => m.NoticiasComponent),
  },
  {
    path: 'noticias/:slug',
    title: 'Notícia | Green Petroil',
    loadComponent: () => import('./pages/post/post.component').then((m) => m.PostComponent),
  },
  {
    path: 'projetos-sociais',
    title: 'Projetos sociais | Green Petroil',
    loadComponent: () =>
      import('./pages/projetos/projetos.component').then((m) => m.ProjetosComponent),
  },
  {
    path: '**',
    title: 'Página não encontrada | Green Petroil',
    loadComponent: () =>
      import('./pages/nao-encontrada/nao-encontrada.component').then(
        (m) => m.NaoEncontradaComponent,
      ),
  },
];

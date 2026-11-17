import { Component, input } from '@angular/core';

/**
 * Banner de abertura usado no topo das páginas internas
 * (Sobre, Notícias e Projetos Sociais).
 */
@Component({
  selector: 'app-page-hero',
  template: `
    <header class="hero">
      <div class="container">
        @if (sobretitulo()) {
          <p class="hero__sobretitulo">{{ sobretitulo() }}</p>
        }
        <h1 [id]="idTitulo()">{{ titulo() }}</h1>
        @if (descricao()) {
          <p class="hero__descricao">{{ descricao() }}</p>
        }
      </div>
    </header>
  `,
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  readonly titulo = input.required<string>();
  readonly sobretitulo = input<string>();
  readonly descricao = input<string>();
  readonly idTitulo = input('titulo-pagina');
}

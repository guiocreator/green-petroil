import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Página exibida para rotas inexistentes (erro 404) */
@Component({
  selector: 'app-nao-encontrada',
  imports: [RouterLink],
  template: `
    <section class="container erro" aria-labelledby="titulo-erro">
      <p class="erro__codigo" aria-hidden="true">404</p>
      <h1 id="titulo-erro">Página não encontrada</h1>
      <p>O endereço que você acessou não existe. Que tal voltar para a página inicial?</p>
      <a routerLink="/" class="botao botao--primario">Ir para o início</a>
    </section>
  `,
  styles: `
    .erro {
      padding-block: 5rem;
      text-align: center;
    }
    .erro__codigo {
      font-family: var(--fonte-titulo);
      font-size: clamp(5rem, 15vw, 8rem);
      font-weight: 800;
      line-height: 1;
      color: var(--verde-100);
      -webkit-text-stroke: 2px var(--verde-500);
      margin: 0;
    }
  `,
})
export class NaoEncontradaComponent {}

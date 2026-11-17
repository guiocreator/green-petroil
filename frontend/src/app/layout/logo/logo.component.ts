import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Logotipo da Green Petroil (usado no cabeçalho e no rodapé) */
@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo" [class.logo--claro]="claro()" aria-label="Green Petroil – página inicial">
      <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true" focusable="false">
        <path d="M32 4C22 18 12 30 12 40a20 20 0 0 0 40 0C52 30 42 18 32 4z" class="logo__gota" />
        <path d="M24 44c0-10 7-17 18-18 0 11-7 18-18 18zm0 0l9-9" class="logo__folha" />
      </svg>
      <span class="logo__texto">Green<strong>Petroil</strong></span>
    </a>
  `,
  styles: `
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      font-family: var(--fonte-titulo);
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--verde-900);
      letter-spacing: -0.01em;
    }
    .logo strong { font-weight: 800; color: var(--verde-700); }
    .logo__gota { fill: var(--verde-700); }
    .logo__folha { fill: var(--verde-300); stroke: var(--verde-300); stroke-width: 2; stroke-linecap: round; }
    .logo--claro { color: #fff; }
    .logo--claro strong { color: var(--verde-300); }
    .logo--claro .logo__gota { fill: var(--verde-500); }
  `,
})
export class LogoComponent {
  /** Versão para fundos escuros */
  readonly claro = input(false);
}

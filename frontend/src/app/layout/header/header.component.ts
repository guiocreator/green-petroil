import { Component, signal } from '@angular/core';

import { IconComponent } from '../../shared/icon/icon.component';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';

/** Cabeçalho fixo do site com logotipo e menu (com botão "hambúrguer" no celular) */
@Component({
  selector: 'app-header',
  imports: [LogoComponent, MenuComponent, IconComponent],
  template: `
    <header class="header">
      <div class="container header__conteudo">
        <app-logo />

        <button
          type="button"
          class="header__botao-menu"
          [attr.aria-expanded]="menuAberto()"
          aria-controls="menu-principal"
          (click)="alternarMenu()"
        >
          <app-icon [nome]="menuAberto() ? 'fechar' : 'menu'" />
          <span class="sr-only">{{ menuAberto() ? 'Fechar menu' : 'Abrir menu' }}</span>
        </button>

        <app-menu
          idMenu="menu-principal"
          [aberto]="menuAberto()"
          (navegou)="fecharMenu()"
        />
      </div>
    </header>
  `,
  styles: `
    :host {
      position: sticky;
      top: 0;
      z-index: 50;
      display: block;
    }
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--borda);
    }
    .header__conteudo {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: var(--altura-header);
    }
    .header__botao-menu {
      display: none;
      padding: 0.5rem;
      border: 1px solid var(--borda);
      border-radius: 10px;
      background: var(--superficie);
      color: var(--verde-900);
      cursor: pointer;
    }
    @media (max-width: 767px) {
      .header__botao-menu { display: inline-flex; }
    }
  `,
  host: { '(document:keydown.escape)': 'fecharMenu()' },
})
export class HeaderComponent {
  protected readonly menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}

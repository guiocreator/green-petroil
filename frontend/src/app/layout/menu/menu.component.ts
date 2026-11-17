import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface ItemMenu {
  rotulo: string;
  rota: string;
  exato?: boolean;
}

/** Itens de navegação do site, compartilhados entre cabeçalho e rodapé */
export const ITENS_MENU: ItemMenu[] = [
  { rotulo: 'Início', rota: '/', exato: true },
  { rotulo: 'Sobre nós', rota: '/sobre' },
  { rotulo: 'Notícias', rota: '/noticias' },
  { rotulo: 'Projetos sociais', rota: '/projetos-sociais' },
];

/**
 * Menu de navegação. A variante "principal" fica no cabeçalho
 * e a variante "rodape" é reaproveitada no rodapé.
 */
@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  host: { '[class]': '"menu--" + variante()' },
})
export class MenuComponent {
  readonly variante = input<'principal' | 'rodape'>('principal');
  readonly rotuloAcessivel = input('Navegação principal');
  readonly idMenu = input<string>();
  readonly aberto = input(false);
  /** Emitido quando um link é clicado (usado para fechar o menu no celular) */
  readonly navegou = output<void>();

  protected readonly itens = ITENS_MENU;
}

import { Component, computed, input } from '@angular/core';

/** Desenhos dos ícones (SVG 24x24, traço) */
const ICONES: Record<string, string> = {
  gota: 'M12 3c-3.5 4.5-6 7.8-6 11a6 6 0 0 0 12 0c0-3.2-2.5-6.5-6-11z',
  folha: 'M5 19C5 11 11 5 20 5c0 9-6 15-15 14zM5 19l7-7',
  onda: 'M2 9c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2',
  livro: 'M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z',
  arvore: 'M12 2l6 9h-4l5 7H5l5-7H6zM12 18v4',
  ferramenta: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z',
  bola: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
  plataforma: 'M3 21h18M6 21V11h12v10M9 11V5h6v6M12 5V2M8 15h8',
  chama: 'M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 5',
  raio: 'M13 2L4 14h7l-1 8 9-12h-7z',
  fabrica: 'M3 21V10l5 3V10l5 3V4h3v17zM3 21h18M17 8h4v13',
  relogio: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  calendario: 'M4 6h16v15H4zM4 10h16M8 3v4M16 3v4',
  pin: 'M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  pessoas: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a7 7 0 0 1 14 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a7 7 0 0 0-4-6.3',
  alvo: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
  olho: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  coracao: 'M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z',
  'seta-direita': 'M5 12h14M13 6l6 6-6 6',
  'seta-esquerda': 'M19 12H5M11 6l-6 6 6 6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  fechar: 'M6 6l12 12M18 6L6 18',
  alerta: 'M12 3L2 21h20zM12 10v5M12 18v.01',
};

/**
 * Componente compartilhado de ícones SVG.
 * Os ícones são decorativos (aria-hidden); o texto ao redor dá o significado.
 */
@Component({
  selector: 'app-icon',
  template: `
    <svg
      [attr.width]="tamanho()"
      [attr.height]="tamanho()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path [attr.d]="caminho()" />
    </svg>
  `,
  styles: `
    :host { display: inline-flex; line-height: 0; }
  `,
})
export class IconComponent {
  readonly nome = input.required<string>();
  readonly tamanho = input(24);

  protected readonly caminho = computed(() => ICONES[this.nome()] ?? ICONES['folha']);
}

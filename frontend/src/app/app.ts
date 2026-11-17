import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Link "Pular para o conteúdo": leva o foco direto ao <main> (acessibilidade) */
  pularParaConteudo(evento: Event): void {
    evento.preventDefault();
    const main = document.getElementById('conteudo');
    main?.focus();
    main?.scrollIntoView();
  }
}

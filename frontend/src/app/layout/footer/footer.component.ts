import { Component } from '@angular/core';

import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';

/** Rodapé do site */
@Component({
  selector: 'app-footer',
  imports: [LogoComponent, MenuComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly ano = new Date().getFullYear();
}

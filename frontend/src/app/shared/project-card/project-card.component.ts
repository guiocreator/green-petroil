import { Component, input } from '@angular/core';

import { ProjetoSocial } from '../../core/models';
import { IconComponent } from '../icon/icon.component';

/**
 * Cartão de projeto social. Usado na página inicial (destaques)
 * e na página de Projetos Sociais.
 */
@Component({
  selector: 'app-project-card',
  imports: [IconComponent],
  template: `
    <article class="projeto">
      <div class="projeto__icone" aria-hidden="true">
        <app-icon [nome]="projeto().icone" [tamanho]="28" />
      </div>
      <p class="projeto__area">{{ projeto().area }}</p>
      <h3 class="projeto__nome">{{ projeto().nome }}</h3>
      <p class="projeto__descricao">{{ projeto().descricao }}</p>

      @if (detalhado()) {
        <dl class="projeto__dados">
          <div>
            <dt><app-icon nome="pin" [tamanho]="16" /> Onde</dt>
            <dd>{{ projeto().local }}</dd>
          </div>
          <div>
            <dt><app-icon nome="pessoas" [tamanho]="16" /> Impacto</dt>
            <dd>{{ projeto().beneficiados }}</dd>
          </div>
          <div>
            <dt><app-icon nome="calendario" [tamanho]="16" /> Desde</dt>
            <dd>{{ projeto().inicio }}</dd>
          </div>
        </dl>
      }
    </article>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly projeto = input.required<ProjetoSocial>();
  /** Quando verdadeiro, mostra local, impacto e ano de início */
  readonly detalhado = input(true);
}

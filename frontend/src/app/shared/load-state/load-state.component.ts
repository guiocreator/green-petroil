import { Component, input, output } from '@angular/core';

import { EstadoCarregamento } from '../../core/models';
import { IconComponent } from '../icon/icon.component';

/**
 * Componente compartilhado que exibe o estado de carregamento ou de erro
 * das requisições à API. Anunciado para leitores de tela via aria-live.
 */
@Component({
  selector: 'app-load-state',
  imports: [IconComponent],
  template: `
    @if (estado() === 'carregando') {
      <div class="estado" role="status" aria-live="polite">
        <span class="spinner" aria-hidden="true"></span>
        <p>{{ mensagemCarregando() }}</p>
      </div>
    } @else if (estado() === 'erro') {
      <div class="estado estado--erro" role="alert">
        <app-icon nome="alerta" [tamanho]="32" />
        <p>
          Não foi possível carregar as informações. Verifique se a API está em execução
          (<code>npm run api</code>) e tente novamente.
        </p>
        <button type="button" class="botao botao--contorno" (click)="tentarNovamente.emit()">
          Tentar novamente
        </button>
      </div>
    }
  `,
  styles: `
    .estado {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: 2.5rem 1rem;
      text-align: center;
      color: var(--texto-suave);
    }
    .estado--erro { color: #8a1c1c; }
    .estado--erro p { max-width: 46ch; color: var(--texto); }
    .spinner {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid var(--verde-100);
      border-top-color: var(--verde-500);
      animation: girar 0.9s linear infinite;
    }
    @keyframes girar { to { transform: rotate(360deg); } }
  `,
})
export class LoadStateComponent {
  readonly estado = input.required<EstadoCarregamento>();
  readonly mensagemCarregando = input('Carregando...');
  readonly tentarNovamente = output<void>();
}

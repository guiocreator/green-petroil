import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ApiService } from '../../core/api.service';
import { Empresa, EstadoCarregamento } from '../../core/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { LoadStateComponent } from '../../shared/load-state/load-state.component';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';

/** Página institucional: história, missão, visão e valores */
@Component({
  selector: 'app-sobre',
  imports: [RouterLink, PageHeroComponent, LoadStateComponent, IconComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements OnInit {
  private readonly api = inject(ApiService);

  protected readonly empresa = signal<Empresa | null>(null);
  protected readonly estado = signal<EstadoCarregamento>('carregando');

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.estado.set('carregando');
    this.api.buscarEmpresa().subscribe({
      next: (empresa) => {
        this.empresa.set(empresa);
        this.estado.set('ok');
      },
      error: () => this.estado.set('erro'),
    });
  }
}

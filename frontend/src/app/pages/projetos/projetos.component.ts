import { Component, OnInit, computed, inject, signal } from '@angular/core';

import { ApiService } from '../../core/api.service';
import { EstadoCarregamento, ProjetoSocial } from '../../core/models';
import { LoadStateComponent } from '../../shared/load-state/load-state.component';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

/** Página de projetos sociais, com filtro por área de atuação */
@Component({
  selector: 'app-projetos',
  imports: [PageHeroComponent, LoadStateComponent, ProjectCardComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent implements OnInit {
  private readonly api = inject(ApiService);

  protected readonly projetos = signal<ProjetoSocial[]>([]);
  protected readonly estado = signal<EstadoCarregamento>('carregando');
  protected readonly areaSelecionada = signal<string>('Todas');

  /** Áreas únicas para os botões de filtro */
  protected readonly areas = computed(() => [
    'Todas',
    ...new Set(this.projetos().map((p) => p.area)),
  ]);

  protected readonly projetosFiltrados = computed(() => {
    const area = this.areaSelecionada();
    return area === 'Todas' ? this.projetos() : this.projetos().filter((p) => p.area === area);
  });

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.estado.set('carregando');
    this.api.listarProjetos().subscribe({
      next: (projetos) => {
        this.projetos.set(projetos);
        this.estado.set('ok');
      },
      error: () => this.estado.set('erro'),
    });
  }

  filtrar(area: string): void {
    this.areaSelecionada.set(area);
  }
}

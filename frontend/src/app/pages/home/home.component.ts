import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ApiService } from '../../core/api.service';
import { EstadoCarregamento, Numero, PostResumo, ProjetoSocial } from '../../core/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { LoadStateComponent } from '../../shared/load-state/load-state.component';
import { PostCardComponent } from '../../shared/post-card/post-card.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

/** Página inicial: destaque, feed com os 3 últimos posts, números e projetos sociais */
@Component({
  selector: 'app-home',
  imports: [RouterLink, IconComponent, LoadStateComponent, PostCardComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly api = inject(ApiService);

  protected readonly posts = signal<PostResumo[]>([]);
  protected readonly estadoPosts = signal<EstadoCarregamento>('carregando');

  protected readonly projetos = signal<ProjetoSocial[]>([]);
  protected readonly estadoProjetos = signal<EstadoCarregamento>('carregando');

  protected readonly numeros = signal<Numero[]>([]);

  ngOnInit(): void {
    this.carregarPosts();
    this.carregarProjetos();
    this.api.buscarEmpresa().subscribe({
      next: (empresa) => this.numeros.set(empresa.numeros),
      error: () => this.numeros.set([]),
    });
  }

  /** Feed: busca apenas os 3 posts mais recentes na API */
  carregarPosts(): void {
    this.estadoPosts.set('carregando');
    this.api.listarPosts(3).subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.estadoPosts.set('ok');
      },
      error: () => this.estadoPosts.set('erro'),
    });
  }

  carregarProjetos(): void {
    this.estadoProjetos.set('carregando');
    this.api.listarProjetos().subscribe({
      next: (projetos) => {
        this.projetos.set(projetos.slice(0, 3));
        this.estadoProjetos.set('ok');
      },
      error: () => this.estadoProjetos.set('erro'),
    });
  }
}

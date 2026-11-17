import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { ApiService } from '../../core/api.service';
import { visualDaCategoria } from '../../core/categorias';
import { EstadoCarregamento, Post, PostResumo } from '../../core/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { LoadStateComponent } from '../../shared/load-state/load-state.component';
import { PostCardComponent } from '../../shared/post-card/post-card.component';

/** Página que exibe o post completo, buscado na API pelo slug da URL */
@Component({
  selector: 'app-post',
  imports: [RouterLink, DatePipe, IconComponent, LoadStateComponent, PostCardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  private readonly api = inject(ApiService);
  private readonly titulo = inject(Title);

  /** Parâmetro :slug da rota (recebido via withComponentInputBinding) */
  readonly slug = input.required<string>();

  protected readonly post = signal<Post | null>(null);
  protected readonly estado = signal<EstadoCarregamento>('carregando');
  protected readonly naoEncontrado = signal(false);
  protected readonly relacionados = signal<PostResumo[]>([]);

  protected readonly visual = computed(() => visualDaCategoria(this.post()?.categoria ?? ''));

  constructor() {
    // Recarrega sempre que o slug da URL mudar
    effect(() => this.carregar(this.slug()));
  }

  carregar(slug: string = this.slug()): void {
    this.estado.set('carregando');
    this.naoEncontrado.set(false);

    this.api.buscarPost(slug).subscribe({
      next: (post) => {
        this.post.set(post);
        this.estado.set('ok');
        this.titulo.setTitle(`${post.titulo} | Green Petroil`);
        this.carregarRelacionados(post.slug);
      },
      error: (erro) => {
        if (erro.status === 404) {
          this.naoEncontrado.set(true);
          this.estado.set('ok');
          this.titulo.setTitle('Notícia não encontrada | Green Petroil');
        } else {
          this.estado.set('erro');
        }
      },
    });
  }

  private carregarRelacionados(slugAtual: string): void {
    this.api.listarPosts().subscribe({
      next: (posts) => this.relacionados.set(posts.filter((p) => p.slug !== slugAtual).slice(0, 3)),
      error: () => this.relacionados.set([]),
    });
  }
}

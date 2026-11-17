import { Component, OnInit, inject, signal } from '@angular/core';

import { ApiService } from '../../core/api.service';
import { EstadoCarregamento, PostResumo } from '../../core/models';
import { LoadStateComponent } from '../../shared/load-state/load-state.component';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { PostCardComponent } from '../../shared/post-card/post-card.component';

/** Lista completa de notícias */
@Component({
  selector: 'app-noticias',
  imports: [PageHeroComponent, LoadStateComponent, PostCardComponent],
  template: `
    <app-page-hero
      sobretitulo="Notícias"
      titulo="Projetos que movem o país"
      descricao="Acompanhe as novidades sobre exploração, refino, gás natural e inovação na Green Petroil."
    />

    <section class="secao" aria-labelledby="titulo-pagina">
      <div class="container">
        <app-load-state
          [estado]="estado()"
          mensagemCarregando="Carregando notícias..."
          (tentarNovamente)="carregar()"
        />

        @if (estado() === 'ok') {
          <p class="total" aria-live="polite">{{ posts().length }} notícias publicadas</p>
          <ul class="grade lista">
            @for (post of posts(); track post.id) {
              <li><app-post-card [post]="post" [nivelTitulo]="2" /></li>
            }
          </ul>
        }
      </div>
    </section>
  `,
  styles: `
    .lista { list-style: none; margin: 0; padding: 0; }
    .total { color: var(--texto-suave); margin-bottom: 1.5rem; }
  `,
})
export class NoticiasComponent implements OnInit {
  private readonly api = inject(ApiService);

  protected readonly posts = signal<PostResumo[]>([]);
  protected readonly estado = signal<EstadoCarregamento>('carregando');

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.estado.set('carregando');
    this.api.listarPosts().subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.estado.set('ok');
      },
      error: () => this.estado.set('erro'),
    });
  }
}

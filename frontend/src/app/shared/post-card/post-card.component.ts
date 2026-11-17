import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { visualDaCategoria } from '../../core/categorias';
import { PostResumo } from '../../core/models';
import { IconComponent } from '../icon/icon.component';

/**
 * Cartão de notícia. Usado no feed da página inicial,
 * na listagem de notícias e no "Leia também" do post.
 */
@Component({
  selector: 'app-post-card',
  imports: [RouterLink, DatePipe, IconComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  readonly post = input.required<PostResumo>();
  /** Nível do título, para manter a hierarquia correta de cabeçalhos em cada página */
  readonly nivelTitulo = input<2 | 3>(3);

  protected readonly visual = computed(() => visualDaCategoria(this.post().categoria));
}

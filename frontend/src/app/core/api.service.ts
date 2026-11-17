import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Empresa, Post, PostResumo, ProjetoSocial } from './models';

/**
 * Serviço responsável por toda a comunicação com a API back-end.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  /** Lista os posts do mais recente para o mais antigo. Use `limite` para o feed. */
  listarPosts(limite?: number): Observable<PostResumo[]> {
    let params = new HttpParams();
    if (limite) {
      params = params.set('limite', limite);
    }
    return this.http.get<PostResumo[]>(`${this.baseUrl}/posts`, { params });
  }

  /** Busca um post completo pelo slug */
  buscarPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${slug}`);
  }

  /** Lista os projetos sociais mantidos pela empresa */
  listarProjetos(): Observable<ProjetoSocial[]> {
    return this.http.get<ProjetoSocial[]>(`${this.baseUrl}/projetos`);
  }

  /** Dados institucionais: história, missão, visão e valores */
  buscarEmpresa(): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/empresa`);
  }
}

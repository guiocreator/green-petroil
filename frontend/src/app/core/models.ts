/** Tipos dos dados recebidos da API */

export interface PostResumo {
  id: number;
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  autor: string;
  data: string;
  tempoLeitura: number;
}

export interface Post extends PostResumo {
  conteudo: string[];
}

export interface ProjetoSocial {
  id: number;
  nome: string;
  area: string;
  descricao: string;
  local: string;
  beneficiados: string;
  inicio: number;
  icone: string;
}

export interface MarcoHistorico {
  ano: number;
  titulo: string;
  texto: string;
}

export interface Valor {
  titulo: string;
  texto: string;
}

export interface Numero {
  valor: string;
  rotulo: string;
}

export interface Empresa {
  nome: string;
  slogan: string;
  historia: MarcoHistorico[];
  missao: string;
  visao: string;
  valores: Valor[];
  numeros: Numero[];
}

/** Estado de carregamento usado pelas páginas */
export type EstadoCarregamento = 'carregando' | 'ok' | 'erro';

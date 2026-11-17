/** Define ícone e cor de capa para cada categoria de post */
export interface VisualCategoria {
  icone: string;
  gradiente: string;
}

const VISUAIS: Record<string, VisualCategoria> = {
  'Exploração': { icone: 'plataforma', gradiente: 'linear-gradient(135deg, #0b3d2e 0%, #11694a 60%, #1f9d6b 100%)' },
  'Refino': { icone: 'fabrica', gradiente: 'linear-gradient(135deg, #10201c 0%, #2b4a42 60%, #4c7a6c 100%)' },
  'Gás Natural': { icone: 'chama', gradiente: 'linear-gradient(135deg, #0b3d2e 0%, #6b7f1e 70%, #f2a900 100%)' },
  'Inovação': { icone: 'raio', gradiente: 'linear-gradient(135deg, #072a20 0%, #0e5a6b 60%, #2bb3a3 100%)' },
};

export function visualDaCategoria(categoria: string): VisualCategoria {
  return VISUAIS[categoria] ?? { icone: 'gota', gradiente: 'linear-gradient(135deg, #0b3d2e, #1f9d6b)' };
}

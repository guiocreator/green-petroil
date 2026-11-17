/**
 * API back-end do site Green Petroil.
 * Fornece os dados de notícias (feed), projetos sociais e informações institucionais.
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/** Lê um arquivo JSON da pasta data/ */
function lerDados(arquivo) {
  const caminho = path.join(__dirname, 'data', arquivo);
  return JSON.parse(fs.readFileSync(caminho, 'utf-8'));
}

/** Retorna os posts ordenados do mais recente para o mais antigo */
function postsOrdenados() {
  return lerDados('posts.json').sort((a, b) => new Date(b.data) - new Date(a.data));
}

// GET /api/posts?limite=3 -> lista de posts (sem o conteúdo completo)
app.get('/api/posts', (req, res) => {
  const limite = Number(req.query.limite) || undefined;
  const posts = postsOrdenados()
    .slice(0, limite)
    .map(({ conteudo, ...resumo }) => resumo);
  res.json(posts);
});

// GET /api/posts/:slug -> post completo
app.get('/api/posts/:slug', (req, res) => {
  const post = postsOrdenados().find((p) => p.slug === req.params.slug);
  if (!post) {
    return res.status(404).json({ erro: 'Post não encontrado' });
  }
  res.json(post);
});

// GET /api/projetos -> projetos sociais
app.get('/api/projetos', (req, res) => {
  res.json(lerDados('projetos.json'));
});

// GET /api/empresa -> história, missão, visão e valores
app.get('/api/empresa', (req, res) => {
  res.json(lerDados('empresa.json'));
});

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

app.listen(PORT, () => {
  console.log(`API Green Petroil rodando em http://localhost:${PORT}/api`);
});

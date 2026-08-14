import { useState } from 'react';
import { Link } from 'react-router-dom';
import { produtos, categorias } from '../data/produtos';
import type { Produto } from '../data/produtos';
import { getWhatsappLink } from '../utils/whatsapp';

function Produtos() {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const produtosFiltrados =
    filtroAtivo === 'todos'
      ? produtos
      : produtos.filter((p) => p.categoria === filtroAtivo);

  const solicitarOrcamento = (produto: Produto) => {
    const mensagem = `Olá! Tenho interesse no produto: *${produto.nome}*. Gostaria de solicitar um orçamento.`;
    return getWhatsappLink(mensagem);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-navy dark:from-black dark:via-brand-grayDark dark:to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            NOSSOS PRODUTOS
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Catálogo completo
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Conheça nossa linha completa de lonas, encerados e acessórios. Todos
            os produtos podem ser fabricados sob medida.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-30 bg-white/95 dark:bg-brand-grayDark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFiltroAtivo(cat.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  filtroAtivo === cat.id
                    ? 'bg-brand-yellow text-brand-navy shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.nome}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-gray dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Mostrando{' '}
              <strong className="text-brand-navy dark:text-white">
                {produtosFiltrados.length}
              </strong>{' '}
              {produtosFiltrados.length === 1 ? 'produto' : 'produtos'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className="group bg-white dark:bg-brand-grayDark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-brand-yellow text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                      {categorias
                        .find((c) => c.id === produto.categoria)
                        ?.nome.replace('Lonas ', '')
                        .replace('para ', '')}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-2">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {produto.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {produto.destaques.map((d, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow px-2.5 py-1 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <a
                    href={solicitarOrcamento(produto)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-brand-navy hover:bg-brand-navyLight dark:bg-brand-yellow dark:hover:bg-brand-yellowDark text-white dark:text-brand-navy font-semibold px-4 py-3 rounded-lg transition-colors"
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 dark:text-slate-400">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-brand-grayDark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-navy to-brand-navyLight dark:from-brand-yellow dark:to-brand-yellowDark rounded-3xl p-10 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white dark:text-brand-navy mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-lg text-white/90 dark:text-brand-navy/90 mb-8 max-w-2xl mx-auto">
              Fabricamos lonas 100% sob medida. Fale com nossa equipe e vamos
              desenvolver a solução ideal para o seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-white dark:bg-brand-navy dark:hover:bg-white text-brand-navy dark:text-white dark:hover:text-brand-navy font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl"
              >
                Falar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 dark:bg-brand-navy/10 dark:hover:bg-brand-navy/20 backdrop-blur-sm border-2 border-white/30 dark:border-brand-navy/30 text-white dark:text-brand-navy font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Contato completo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Produtos;

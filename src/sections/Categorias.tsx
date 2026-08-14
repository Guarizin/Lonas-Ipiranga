import { Link } from 'react-router-dom';

function Categorias() {
  const categorias = [
    {
      nome: 'Lonas Especiais',
      descricao:
        'Toldos, feiras, tatames, piscinas, tanques e coberturas técnicas',
      imagem:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
      destaques: ['Toldos', 'Feiras', 'Tatames', 'Piscinas'],
    },
    {
      nome: 'Lonas Plásticas',
      descricao:
        'Dupla face, transparentes, para silagem, feno e proteção diversa',
      imagem:
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&auto=format&fit=crop',
      destaques: ['Silagem', 'Feno', 'Transparentes', 'Coloridas'],
    },
    {
      nome: 'Lonas para Caminhões',
      descricao: 'PVC, polietileno, tela e enceradas para transporte de cargas',
      imagem:
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop',
      destaques: ['PVC', 'Polietileno', 'Tela', 'Encerada'],
    },
    {
      nome: 'Acessórios',
      descricao: 'Amarração de cargas, catracas, cordas, ganchos e ilhoses',
      imagem:
        'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=800&auto=format&fit=crop',
      destaques: ['Catracas', 'Cordas', 'Ganchos', 'Ilhoses'],
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-white dark:bg-brand-grayDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            NOSSOS PRODUTOS
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-4">
            Soluções para cada necessidade
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Fabricamos uma linha completa de lonas e acessórios para atender
            diversos segmentos com qualidade e precisão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categorias.map((cat, index) => (
            <Link
              key={index}
              to="/produtos"
              className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 aspect-[4/3] shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={cat.imagem}
                alt={cat.nome}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent"></div>

              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  {cat.nome}
                </h3>
                <p className="text-slate-200 mb-4 max-w-md">{cat.descricao}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.destaques.map((d, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-brand-yellow font-semibold group-hover:gap-4 transition-all">
                  <span>Ver produtos</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navyLight dark:bg-brand-yellow dark:hover:bg-brand-yellowDark text-white dark:text-brand-navy font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
          >
            Ver catálogo completo
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Categorias;

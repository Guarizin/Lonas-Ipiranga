function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Carlos Mendes',
      empresa: 'Transportadora Rota Sul',
      cargo: 'Diretor de Operações',
      texto:
        'Trabalhamos com a Lonas Ipiranga há mais de 8 anos. A qualidade das lonas para nossa frota é impecável e o atendimento sempre atende nossas urgências.',
      avaliacao: 5,
    },
    {
      nome: 'Ana Paula Rodrigues',
      empresa: 'Agropecuária Santa Fé',
      cargo: 'Proprietária',
      texto:
        'As lonas para silagem que compramos superaram nossas expectativas em durabilidade. Já é o terceiro pedido e sempre recomendo para outros produtores da região.',
      avaliacao: 5,
    },
    {
      nome: 'Roberto Silva',
      empresa: 'Construtora Silva & Filhos',
      cargo: 'Engenheiro Civil',
      texto:
        'Compramos bobinas de lona plástica preta para nossas obras. Preço justo, entrega no prazo e produto de qualidade. Fornecedor de confiança.',
      avaliacao: 5,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-brand-grayDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A confiança de quem trabalha com a gente é o nosso maior patrimônio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((dep, index) => (
            <div
              key={index}
              className="bg-brand-gray dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute top-6 right-6 text-6xl text-brand-yellow/30 font-display leading-none">
                "
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: dep.avaliacao }).map((_, i) => (
                  <span key={i} className="text-brand-yellow text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 relative">
                {dep.texto}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 bg-brand-navy dark:bg-brand-yellow rounded-full flex items-center justify-center text-white dark:text-brand-navy font-bold text-lg">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brand-navy dark:text-white">
                    {dep.nome}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {dep.cargo} • {dep.empresa}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;

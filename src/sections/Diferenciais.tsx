function Diferenciais() {
  const diferenciais = [
    {
      numero: '01',
      titulo: 'Fabricação sob medida',
      descricao:
        'Cada lona é produzida de acordo com as especificações exatas do cliente, garantindo o encaixe perfeito para a aplicação.',
    },
    {
      numero: '02',
      titulo: 'Matéria-prima de qualidade',
      descricao:
        'Trabalhamos apenas com fornecedores homologados e materiais que atendem às normas técnicas do setor.',
    },
    {
      numero: '03',
      titulo: 'Atendimento técnico especializado',
      descricao:
        'Nossa equipe orienta na escolha do material ideal para cada tipo de aplicação, otimizando custo e durabilidade.',
    },
    {
      numero: '04',
      titulo: 'Consertos e manutenção',
      descricao:
        'Oferecemos serviços de reparo em lonas de todos os modelos, prolongando a vida útil do seu produto.',
    },
    {
      numero: '05',
      titulo: 'Prazo de entrega diferenciado',
      descricao:
        'Estrutura própria de produção que garante agilidade e cumprimento dos prazos acordados.',
    },
    {
      numero: '06',
      titulo: 'Cobertura nacional',
      descricao:
        'Entregamos em todo o território brasileiro com logística confiável e embalagem adequada.',
    },
  ];

  return (
    <section className="py-24 bg-brand-navy dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-yellow/10 text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            NOSSOS DIFERENCIAIS
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher a Lonas Ipiranga?
          </h2>
          <p className="text-lg text-slate-300">
            Mais de três décadas construindo relacionamentos baseados em
            qualidade, confiança e atendimento personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-yellow/50 transition-all"
            >
              <div className="font-display text-5xl font-bold text-brand-yellow/30 group-hover:text-brand-yellow transition-colors mb-4">
                {item.numero}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {item.titulo}
              </h3>
              <p className="text-slate-300 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;

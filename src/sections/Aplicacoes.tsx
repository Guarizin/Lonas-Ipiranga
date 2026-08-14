function Aplicacoes() {
  const aplicacoes = [
    {
      icone: '🚛',
      titulo: 'Transporte',
      descricao:
        'Lonas para caminhões, capas e acessórios de amarração de carga',
    },
    {
      icone: '🌾',
      titulo: 'Agronegócio',
      descricao: 'Silagem, feno, expurgo, cobertura de grãos e tanques',
    },
    {
      icone: '🏭',
      titulo: 'Indústria',
      descricao: 'Cortinas industriais, capas para máquinas e equipamentos',
    },
    {
      icone: '🎪',
      titulo: 'Eventos e Feiras',
      descricao: 'Coberturas para barracas, tendas e estruturas temporárias',
    },
    {
      icone: '🏊',
      titulo: 'Piscinas e Tanques',
      descricao: 'Capas para piscinas, tanques de peixes e reservatórios',
    },
    {
      icone: '🏠',
      titulo: 'Residencial',
      descricao: 'Toldos, coberturas de área externa e proteção solar',
    },
    {
      icone: '🏗️',
      titulo: 'Construção Civil',
      descricao: 'Lonas de proteção de obra, tapumes e cobertura de materiais',
    },
    {
      icone: '🤸',
      titulo: 'Esportivo',
      descricao:
        'Coberturas de tatames, slackline, skibunda e áreas esportivas',
    },
  ];

  return (
    <section id="aplicacoes" className="py-24 bg-brand-gray dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            APLICAÇÕES
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-4">
            Atendemos diversos segmentos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Nossas lonas são desenvolvidas para atender às mais variadas
            necessidades, sempre com qualidade e resistência.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aplicacoes.map((app, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-brand-grayDark rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-brand-yellow/10 group-hover:bg-brand-yellow rounded-xl flex items-center justify-center text-3xl mb-4 transition-colors">
                {app.icone}
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy dark:text-white mb-2">
                {app.titulo}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {app.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aplicacoes;

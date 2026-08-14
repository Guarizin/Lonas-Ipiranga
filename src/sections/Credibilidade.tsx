function Credibilidade() {
  const itens = [
    {
      icone: '🛡️',
      titulo: '+31 anos de tradição',
      descricao: 'Experiência consolidada no mercado de lonas',
    },
    {
      icone: '🏭',
      titulo: 'Fabricação própria',
      descricao: 'Produção com controle total de qualidade',
    },
    {
      icone: '✂️',
      titulo: '100% sob medida',
      descricao: 'Produtos personalizados para cada necessidade',
    },
    {
      icone: '🚚',
      titulo: 'Entrega nacional',
      descricao: 'Atendemos clientes em todo o Brasil',
    },
  ];

  return (
    <section className="py-16 bg-brand-gray dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {itens.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white dark:bg-brand-grayDark rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm">
                {item.icone}
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy dark:text-white mb-2">
                {item.titulo}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credibilidade;

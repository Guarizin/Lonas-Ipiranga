import { Link } from 'react-router-dom';

function SobreEmpresa() {
  const numeros = [
    { valor: '31+', label: 'Anos de tradição' },
    { valor: '50+', label: 'Tipos de produtos' },
    { valor: '3000+', label: 'Clientes atendidos' },
    { valor: 'BR', label: 'Cobertura nacional' },
  ];

  return (
    <section id="empresa" className="py-24 bg-white dark:bg-brand-grayDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              SOBRE A EMPRESA
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white mb-6 leading-tight">
              Experiência que protege sua história
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              A{' '}
              <strong className="text-brand-navy dark:text-white">
                Lonas Ipiranga
              </strong>{' '}
              investe há mais de 3 décadas num time de profissionais
              especializados e capacitados a fornecer um acervo completo de
              lonas especiais, plásticas e para caminhões.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Além do fornecimento, oferecemos serviços complementares como{' '}
              <strong className="text-brand-navy dark:text-white">
                projetos personalizados
              </strong>{' '}
              e{' '}
              <strong className="text-brand-navy dark:text-white">
                consertos de lonas
              </strong>{' '}
              de todos os modelos, com o compromisso de trabalhar com
              matérias-primas de qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/empresa"
                className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navyLight dark:bg-brand-yellow dark:hover:bg-brand-yellowDark text-white dark:text-brand-navy font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
              >
                Conheça nossa história
                <span>→</span>
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy dark:border-brand-yellow text-brand-navy dark:text-brand-yellow hover:bg-brand-navy hover:text-white dark:hover:bg-brand-yellow dark:hover:text-brand-navy font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Fale conosco
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-brand-navy to-brand-navyLight dark:from-brand-yellow dark:to-brand-yellowDark rounded-3xl p-10 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <div className="relative h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-6">
                  {numeros.map((num, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-white dark:text-brand-navy font-display mb-2">
                        {num.valor}
                      </div>
                      <div className="text-sm text-white/80 dark:text-brand-navy/80 font-medium">
                        {num.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-brand-yellow dark:bg-white rounded-2xl shadow-xl px-6 py-4">
              <div className="text-brand-navy">
                <div className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  Desde
                </div>
                <div className="text-2xl font-bold font-display">1995</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreEmpresa;

import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-navy dark:from-black dark:via-brand-grayDark dark:to-black"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                +31 anos de tradição no mercado
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Lonas e encerados{' '}
              <span className="text-brand-yellow">sob medida</span> para o seu
              negócio
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Fabricamos lonas especiais, plásticas e para caminhões com alta
              qualidade e tecnologia. Atendemos transporte, indústria,
              agronegócio, eventos e muito mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellowDark text-brand-navy font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-brand-yellow/20"
              >
                Solicitar Orçamento
              </Link>
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Ver Produtos
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-brand-yellow">31+</div>
                <div className="text-sm text-slate-400 mt-1">
                  Anos de mercado
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-yellow">100%</div>
                <div className="text-sm text-slate-400 mt-1">Sob medida</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-yellow">BR</div>
                <div className="text-sm text-slate-400 mt-1">
                  Entrega nacional
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop"
                alt="Fábrica de lonas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-brand-grayDark rounded-2xl shadow-xl p-5 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-brand-navy dark:text-white">
                    Fabricação própria
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Qualidade garantida
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-brand-yellow rounded-2xl shadow-xl p-5">
              <div className="text-brand-navy">
                <div className="text-2xl font-bold">+50</div>
                <div className="text-xs font-semibold">Tipos de lonas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

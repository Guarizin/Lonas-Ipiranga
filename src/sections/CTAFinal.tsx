import { Link } from 'react-router-dom';
import { getWhatsappLink } from '../utils/whatsapp';
function CTAFinal() {
  return (
    <section className="py-24 bg-brand-gray dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-navy to-brand-navyLight dark:from-brand-yellow dark:to-brand-yellowDark rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-80 h-80 border-2 border-white rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-brand-navy mb-6 leading-tight">
              Precisa de uma lona sob medida?
            </h2>
            <p className="text-lg md:text-xl text-white/90 dark:text-brand-navy/90 mb-10">
              Fale agora com nossa equipe e receba um orçamento personalizado
              para o seu projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-yellow hover:bg-white dark:bg-brand-navy dark:hover:bg-white text-brand-navy dark:text-white dark:hover:text-brand-navy font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl"
              >
                <span className="text-xl">💬</span>
                Falar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 dark:bg-brand-navy/10 dark:hover:bg-brand-navy/20 backdrop-blur-sm border-2 border-white/30 dark:border-brand-navy/30 text-white dark:text-brand-navy font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Solicitar orçamento
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 pt-10 border-t border-white/20 dark:border-brand-navy/20">
              <div className="flex items-center gap-2 text-white/90 dark:text-brand-navy/90">
                <span>📞</span>
                <span className="font-semibold">11 2068-3888</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 dark:text-brand-navy/90">
                <span>✉️</span>
                <span className="font-semibold">nfe@lonasipiranga.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAFinal;

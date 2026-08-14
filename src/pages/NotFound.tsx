import { Link } from 'react-router-dom';
import { getWhatsappLink } from '../utils/whatsapp';

function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-navy dark:from-black dark:via-brand-grayDark dark:to-black relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="font-display text-9xl md:text-[12rem] font-bold text-brand-yellow leading-none mb-4">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Página não encontrada
        </h1>
        <p className="text-lg text-slate-300 mb-10 max-w-md mx-auto">
          Parece que essa página se perdeu. Mas não se preocupe, temos várias
          soluções pra você!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellowDark text-brand-navy font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl"
          >
            Voltar ao início
          </Link>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;

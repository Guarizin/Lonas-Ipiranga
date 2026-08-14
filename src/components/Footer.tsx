import { Link } from 'react-router-dom';
import { getWhatsappLink } from '../utils/whatsapp';
function Footer() {
  const anoAtual = new Date().getFullYear();

  const linksInstitucional = [
    { label: 'Início', to: '/' },
    { label: 'Empresa', to: '/empresa' },
    { label: 'Contato', to: '/contato' },
  ];

  const linksProdutos = [
    { label: 'Lonas Especiais', to: '/produtos' },
    { label: 'Lonas Plásticas', to: '/produtos' },
    { label: 'Lonas para Caminhões', to: '/produtos' },
    { label: 'Acessórios', to: '/produtos' },
  ];

  return (
    <footer className="bg-brand-navy dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center font-bold text-brand-navy text-lg">
                LIP
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">
                  Lonas Ipiranga
                </div>
                <div className="text-xs text-slate-400 -mt-1">
                  Lonas e Encerados
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Há mais de 31 anos fornecendo lonas e encerados sob medida com
              qualidade e atendimento especializado.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-yellow">
              Institucional
            </h4>
            <ul className="space-y-2">
              {linksInstitucional.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-yellow">
              Produtos
            </h4>
            <ul className="space-y-2">
              {linksProdutos.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-yellow">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <span className="mt-0.5">📞</span>
                <div>
                  <div className="font-semibold text-white">Televendas</div>
                  <div>11 2068-3888</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <span className="mt-0.5">💬</span>
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div>11 97330-0025</div>
                  <div>11 97466-9073</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <span className="mt-0.5">✉️</span>
                <div>
                  <div className="font-semibold text-white">E-mail</div>
                  <div>nfe@lonasipiranga.com.br</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © {anoAtual} Lonas Ipiranga. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 hover:bg-brand-yellow hover:text-brand-navy rounded-lg flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              💬
            </a>
            <a
              href="mailto:nfe@lonasipiranga.com.br"
              className="w-10 h-10 bg-white/5 hover:bg-brand-yellow hover:text-brand-navy rounded-lg flex items-center justify-center transition-colors"
              aria-label="E-mail"
            >
              ✉️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

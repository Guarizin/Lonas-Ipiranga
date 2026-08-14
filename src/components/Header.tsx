import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getWhatsappLink } from '../utils/whatsapp';
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', to: '/' },
    { label: 'Produtos', to: '/produtos' },
    { label: 'Empresa', to: '/empresa' },
    { label: 'Contato', to: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-brand-grayDark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center font-bold text-brand-navy text-lg">
              LIP
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-lg leading-tight text-brand-navy dark:text-white">
                Lonas Ipiranga
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                Lonas e Encerados
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-brand-navy dark:text-brand-yellow'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-navy dark:hover:text-brand-yellow'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Alternar tema"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellowDark text-brand-navy font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              WhatsApp
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive(link.to)
                    ? 'text-brand-navy dark:text-brand-yellow'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-navy dark:hover:text-brand-yellow'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-brand-grayDark text-brand-navy dark:text-white transition-colors flex flex-col">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsappFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;

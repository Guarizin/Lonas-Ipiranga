import { Link } from 'react-router-dom';
import { getWhatsappLink } from '../utils/whatsapp';

function Empresa() {
  const numeros = [
    { valor: '31+', label: 'Anos de tradição', descricao: 'Fundada em 1995' },
    {
      valor: '3000+',
      label: 'Clientes atendidos',
      descricao: 'Em todo o Brasil',
    },
    { valor: '50+', label: 'Tipos de produtos', descricao: 'Linha completa' },
    { valor: '100%', label: 'Sob medida', descricao: 'Cada projeto único' },
  ];

  const valores = [
    {
      icone: '🎯',
      titulo: 'Missão',
      descricao:
        'Prover soluções em coberturas e lonas com excelência e personalização, unindo tradição de décadas à inovação técnica para garantir a proteção e satisfação total dos nossos clientes.',
    },
    {
      icone: '👁️',
      titulo: 'Visão',
      descricao:
        'Ser a principal referência em soluções de proteção e coberturas na região, expandindo nossa presença através da qualidade superior de nossos produtos e do atendimento profissional que nos define.',
    },
    {
      icone: '⭐',
      titulo: 'Valores',
      descricao:
        'Qualidade, compromisso, transparência, atendimento personalizado e responsabilidade. Trabalhamos com matérias-primas de qualidade e focamos em resultados reais para nossos clientes.',
    },
  ];

  const estrutura = [
    {
      titulo: 'Produção',
      descricao:
        'Equipamentos modernos para corte, solda térmica e acabamento de lonas de todos os tipos.',
      icone: '⚙️',
    },
    {
      titulo: 'Estoque',
      descricao:
        'Amplo estoque de matérias-primas para atender pedidos com agilidade e qualidade.',
      icone: '📦',
    },
    {
      titulo: 'Equipe técnica',
      descricao:
        'Profissionais capacitados com décadas de experiência no setor de lonas e encerados.',
      icone: '👥',
    },
    {
      titulo: 'Logística',
      descricao:
        'Estrutura de entrega para todo o território nacional com embalagem adequada.',
      icone: '🚚',
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-navy dark:from-black dark:via-brand-grayDark dark:to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            NOSSA EMPRESA
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Experiência que protege sua história
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Mais de 3 décadas fornecendo lonas e encerados com qualidade,
            tradição e compromisso com nossos clientes.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-brand-grayDark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                NOSSA HISTÓRIA
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-6 leading-tight">
                Uma trajetória construída com qualidade e dedicação
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Desde 1995, a{' '}
                  <strong className="text-brand-navy dark:text-white">
                    Lonas Ipiranga
                  </strong>{' '}
                  investe num time de profissionais especializados e capacitados
                  a fornecer um acervo de lonas especiais, plásticas e para
                  caminhões com variadas aplicações e materiais.
                </p>
                <p>
                  Na categoria de{' '}
                  <strong className="text-brand-navy dark:text-white">
                    lonas especiais
                  </strong>
                  , atuamos com lonas para Slackline, grua, expurgo, tanque de
                  peixes, Skibunda, barco, capas para máquinas e equipamentos,
                  cortinas e lonas toucas.
                </p>
                <p>
                  Em{' '}
                  <strong className="text-brand-navy dark:text-white">
                    lonas plásticas
                  </strong>
                  , oferecemos dupla face, para feiras, proteção de fenos,
                  piscinas, silagem, toldos, pretas, coloridas e transparentes.
                </p>
                <p>
                  Para atender caminhoneiros, disponibilizamos{' '}
                  <strong className="text-brand-navy dark:text-white">
                    lonas de caminhão
                  </strong>{' '}
                  confeccionadas com polietileno, PVC, telas e enceradas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {numeros.map((num, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-brand-navy to-brand-navyLight dark:from-brand-yellow dark:to-brand-yellowDark rounded-2xl p-6 text-white dark:text-brand-navy"
                >
                  <div className="text-4xl md:text-5xl font-bold font-display mb-2">
                    {num.valor}
                  </div>
                  <div className="font-semibold mb-1">{num.label}</div>
                  <div className="text-sm opacity-80">{num.descricao}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                O QUE NOS MOVE
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
                Missão, Visão e Valores
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Os princípios que guiam nosso trabalho todos os dias.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {valores.map((item, index) => (
                <div
                  key={index}
                  className="bg-brand-gray dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center text-3xl mb-6">
                    {item.icone}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brand-navy dark:text-white mb-4">
                    {item.titulo}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                ESTRUTURA
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
                Nossa fábrica
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Uma estrutura completa para atender às mais diversas demandas
                com qualidade e agilidade.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-navy to-brand-navyLight dark:from-slate-900 dark:to-black rounded-3xl p-8 md:p-12 mb-12">
              <div className="aspect-video bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-white/60">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-lg font-semibold">Foto da fábrica</p>
                <p className="text-sm">Será adicionada em breve</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {estrutura.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-brand-yellow dark:hover:border-brand-yellow transition-colors"
                >
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-2xl mb-4">
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

          <div className="bg-gradient-to-br from-brand-navy to-brand-navyLight dark:from-brand-yellow dark:to-brand-yellowDark rounded-3xl p-10 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white dark:text-brand-navy mb-4">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-lg text-white/90 dark:text-brand-navy/90 mb-8 max-w-2xl mx-auto">
              Conte com nossa experiência para encontrar a solução ideal para o
              seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-white dark:bg-brand-navy dark:hover:bg-white text-brand-navy dark:text-white dark:hover:text-brand-navy font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-xl"
              >
                Falar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 dark:bg-brand-navy/10 dark:hover:bg-brand-navy/20 backdrop-blur-sm border-2 border-white/30 dark:border-brand-navy/30 text-white dark:text-brand-navy font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Empresa;

import { useState } from 'react';
import { getWhatsappLink } from '../utils/whatsapp';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `*Novo contato pelo site*%0A%0A*Nome:* ${formData.nome}%0A*Empresa:* ${formData.empresa}%0A*Telefone:* ${formData.telefone}%0A*E-mail:* ${formData.email}%0A*Assunto:* ${formData.assunto}%0A%0A*Mensagem:*%0A${formData.mensagem}`;
    const link = getWhatsappLink(decodeURIComponent(texto));
    window.open(link, '_blank');
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-navy dark:from-black dark:via-brand-grayDark dark:to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FALE CONOSCO
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Vamos conversar?
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Entre em contato conosco e receba um atendimento personalizado para
            o seu projeto.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-brand-grayDark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-gray dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
              <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center text-2xl mb-4">
                📞
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-2">
                Televendas
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Atendimento comercial para pedidos e orçamentos.
              </p>
              <a
                href="tel:1120683888"
                className="text-brand-navy dark:text-brand-yellow font-bold text-lg hover:underline"
              >
                11 2068-3888
              </a>
            </div>

            <div className="bg-brand-gray dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
              <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center text-2xl mb-4">
                💬
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Resposta rápida e atendimento direto pelo aplicativo.
              </p>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Falar agora
              </a>
            </div>

            <div className="bg-brand-gray dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
              <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center text-2xl mb-4">
                ✉️
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-2">
                E-mail
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                Envie sua solicitação por e-mail e retornaremos em breve.
              </p>
              <a
                href="mailto:nfe@lonasipiranga.com.br"
                className="text-brand-navy dark:text-brand-yellow font-bold hover:underline break-all"
              >
                nfe@lonasipiranga.com.br
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                FORMULÁRIO
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
                Solicite seu orçamento
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Preencha o formulário abaixo e enviaremos sua solicitação
                diretamente pelo WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-white mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-navy dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-white mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-navy dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-white mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-navy dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-white mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-navy dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-navy dark:text-white mb-2">
                    Assunto *
                  </label>
                  <select
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-navy dark:text-white focus:outline-none focus:border-brand-yellow transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Lonas Especiais">Lonas Especiais</option>
                    <option value="Lonas Plásticas">Lonas Plásticas</option>
                    <option value="Lonas para Caminhões">
                      Lonas para Caminhões
                    </option>
                    <option value="Acessórios">Acessórios</option>
                    <option value="Conserto de Lonas">Conserto de Lonas</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-navy dark:text-white mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva sua necessidade, medidas, quantidade..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-navy dark:text-white focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-yellow hover:bg-brand-yellowDark text-brand-navy font-bold px-8 py-4 rounded-lg transition-all hover:scale-[1.02] shadow-lg shadow-brand-yellow/20"
                >
                  Enviar via WhatsApp
                </button>

                {enviado && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg text-sm text-center">
                    ✓ Redirecionando para o WhatsApp...
                  </div>
                )}
              </form>
            </div>

            <div>
              <div className="inline-block bg-brand-yellow/10 text-brand-navy dark:text-brand-yellow text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                LOCALIZAÇÃO
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
                Onde estamos
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Visite nossa fábrica e conheça de perto nossa estrutura.
              </p>

              <div className="bg-brand-gray dark:bg-slate-900 rounded-2xl p-6 mb-6 border border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-navy dark:text-white mb-1">
                      Endereço
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Rua Dom Lucas Obes, 758
                      <br />
                      Ipiranga - São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gray dark:bg-slate-900 rounded-2xl p-6 mb-6 border border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-navy dark:text-white mb-1">
                      Horário de atendimento
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Segunda a Sexta: 08h às 17h Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Dom+Lucas+Obes,+758+-+Ipiranga,+S%C3%A3o+Paulo&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;

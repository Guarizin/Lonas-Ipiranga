# Lonas Ipiranga — Site Institucional

Site institucional moderno e responsivo da **Lonas Ipiranga**, empresa com mais de 31 anos de tradição na fabricação de lonas e encerados sob medida.

---

## Sobre o projeto

Nova versão do site institucional, desenvolvida do zero com foco em:

- Design moderno e profissional
- Experiência mobile impecável
- Alta conversão via WhatsApp
- SEO otimizado
- Performance e acessibilidade
- Modo claro e escuro

---

## Tecnologias

- **React 18** — biblioteca de UI
- **TypeScript** — tipagem estática
- **Vite** — build tool ultrarrápido
- **Tailwind CSS** — estilização utilitária
- **React Router DOM** — navegação entre páginas

---

## Estrutura do projeto

```
src/
├── components/          Componentes reutilizáveis (Header, Footer, WhatsappFloat, ScrollToTop)
├── sections/            Seções da home (Hero, Categorias, Aplicacoes, etc.)
├── pages/               Páginas do site (Home, Produtos, Empresa, Contato, NotFound)
├── hooks/               Hooks customizados (useDarkMode)
├── data/                Dados estáticos (catálogo de produtos)
├── utils/               Funções utilitárias (rodízio de WhatsApp)
├── assets/              Imagens e mídias locais
├── App.tsx              Componente raiz com rotas
├── main.tsx             Ponto de entrada
└── index.css            Estilos globais + Tailwind
```

---

## Páginas

| Rota        | Descrição                                                   |
| ----------- | ----------------------------------------------------------- |
| `/`         | Home com todas as seções (hero, produtos, aplicações, etc.) |
| `/produtos` | Catálogo completo com filtros por categoria                 |
| `/empresa`  | História, missão, visão, valores e estrutura                |
| `/contato`  | Formulário, informações de contato e mapa                   |
| `*`         | Página 404 personalizada                                    |

---

## Funcionalidades

- **Dark mode** com persistência via localStorage
- **Rodízio automático de WhatsApp** entre duas atendentes (baseado no minuto atual)
- **Formulário de contato** que envia dados formatados via WhatsApp
- **Botão flutuante do WhatsApp** presente em todas as páginas
- **Filtros dinâmicos** na página de produtos
- **Design responsivo** (mobile, tablet e desktop)
- **Scroll to top automático** ao trocar de página
- **SEO otimizado** com meta tags e Open Graph

---

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
git clone https://github.com/seu-usuario/lonas-ipiranga.git
cd lonas-ipiranga
npm install
```

### Rodar em desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### Build de produção

```bash
npm run build
npm run preview
```

---

## Paleta de cores

| Cor           | Hex       | Uso                                |
| ------------- | --------- | ---------------------------------- |
| Amarelo marca | `#FFC72C` | Destaques, botões primários        |
| Azul marinho  | `#0A2540` | Cor institucional, textos, headers |
| Cinza claro   | `#F5F5F7` | Fundo em modo claro                |
| Cinza escuro  | `#1A1A1A` | Fundo em modo escuro               |

---

## Configuração do WhatsApp

Os números de atendimento estão centralizados em `src/utils/whatsapp.ts`.

Para adicionar, remover ou alterar números, edite o array:

```ts
const numerosWhatsapp = [
  '5511973300025',
  '5511974669073',
];
```

O sistema alterna entre os números automaticamente baseado no minuto atual, garantindo distribuição justa entre atendentes.

---

## Gerenciamento de produtos

O catálogo de produtos fica em `src/data/produtos.ts`.

Para adicionar um novo produto, basta acrescentar um objeto ao array `produtos`:

```ts
{
  id: 'id-unico',
  nome: 'Nome do Produto',
  categoria: 'especiais',
  descricao: 'Descrição do produto...',
  imagem: 'url-da-imagem',
  destaques: ['Tag 1', 'Tag 2', 'Tag 3'],
},
```

Categorias disponíveis: `especiais`, `plasticas`, `caminhoes`, `acessorios`.

---

## Contatos da empresa

- **Televendas:** 11 2068-3888
- **WhatsApp:** 11 97330-0025 / 11 97466-9073
- **E-mail:** nfe@lonasipiranga.com.br
- **Endereço:** Rua Dom Lucas Obes, 758 — Ipiranga, São Paulo/SP

---

## Roadmap de melhorias futuras

- [ ] Substituir imagens placeholder por fotos reais da fábrica e produtos
- [ ] Integrar formulário com serviço de envio de e-mail (Formspree, Web3Forms)
- [ ] Adicionar Google Analytics para acompanhamento de conversões
- [ ] Implementar página individual de cada produto com galeria
- [ ] Área administrativa para gestão de produtos
- [ ] Blog de conteúdo técnico para SEO

---

## Deploy

O projeto pode ser publicado gratuitamente em plataformas como:

- **Vercel** — recomendado, integração direta com GitHub
- **Netlify** — alternativa igualmente simples
- **Cloudflare Pages** — ótima performance global

Basta conectar o repositório e o build acontece automaticamente.

---

## Licença

Projeto de uso interno da **Lonas Ipiranga**. Todos os direitos reservados.

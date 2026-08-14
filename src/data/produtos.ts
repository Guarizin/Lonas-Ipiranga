export interface Produto {
  id: string;
  nome: string;
  categoria: 'especiais' | 'plasticas' | 'caminhoes' | 'acessorios';
  descricao: string;
  imagem: string;
  destaques: string[];
}

export const categorias = [
  { id: 'todos', nome: 'Todos os produtos' },
  { id: 'especiais', nome: 'Lonas Especiais' },
  { id: 'plasticas', nome: 'Lonas Plásticas' },
  { id: 'caminhoes', nome: 'Lonas para Caminhões' },
  { id: 'acessorios', nome: 'Acessórios' },
];

export const produtos: Produto[] = [
  {
    id: 'lona-toldos',
    nome: 'Lonas para Toldos',
    categoria: 'especiais',
    descricao:
      'Fabricadas com polietileno, versáteis e aplicáveis em residências, comércios e áreas externas. Tamanhos personalizados de acordo com o cliente.',
    imagem:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop',
    destaques: ['Sob medida', 'Polietileno', 'Uso externo'],
  },
  {
    id: 'lona-expurgo',
    nome: 'Lonas para Expurgos',
    categoria: 'especiais',
    descricao:
      'Confeccionadas em PVC ou polietileno, garantem a segurança dos produtos contra raios ultravioletas e agentes externos.',
    imagem:
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&auto=format&fit=crop',
    destaques: ['PVC/PE', 'Proteção UV', 'Segurança'],
  },
  {
    id: 'lona-transparente',
    nome: 'Lonas Transparentes',
    categoria: 'plasticas',
    descricao:
      'Confeccionadas em polietileno de baixa densidade. A transparência garante que as matérias-primas utilizadas são virgens, ideais para estufas.',
    imagem:
      'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&auto=format&fit=crop',
    destaques: ['PE virgem', 'Alta transparência', 'Ideal estufas'],
  },
  {
    id: 'lona-polietileno',
    nome: 'Lonas de Polietileno',
    categoria: 'polietileno',
    descricao:
      'Lona de PE com tela laminada, soldas térmicas, bainhas soldadas, ilhoses zincados. Disponível em várias cores.',
    imagem:
      'https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?w=600&auto=format&fit=crop',
    destaques: ['Tela laminada', 'Ilhoses zincados', 'Várias cores'],
  },
  {
    id: 'lona-preta-obra',
    nome: 'Lona Plástica Preta',
    categoria: 'plasticas',
    descricao:
      'Bobinas de lona plástica preta ideais para construção civil, cobertura de chão em obras, proteção de materiais e tapumes.',
    imagem:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop',
    destaques: ['Construção civil', 'Bobinas', 'Alta resistência'],
  },
  {
    id: 'lona-dupla-face',
    nome: 'Lona Dupla Face',
    categoria: 'plasticas',
    descricao:
      'Lona com dupla proteção, ideal para múltiplas aplicações. Resistente ao sol, chuva e agentes externos com durabilidade prolongada.',
    imagem:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop',
    destaques: ['Dupla face', 'Versátil', 'Alta durabilidade'],
  },
  {
    id: 'lona-pvc-caminhao',
    nome: 'Lona de PVC XP 1000',
    categoria: 'caminhoes',
    descricao:
      'Lona de PVC com laminado reforçado. Peso 690 g/m², espessura 0,60mm, largura 1400mm. Ideal para caminhões com viagens de longas durações.',
    imagem:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop',
    destaques: ['690 g/m²', 'Laminado reforçado', 'Longa duração'],
  },
  {
    id: 'lona-encerada',
    nome: 'Lonas Enceradas',
    categoria: 'caminhoes',
    descricao:
      'Fabricada com matéria-prima 100% algodão. Opções em Urdume (17 fios/cm) ou Trama (13 fios/cm). Ideal para transporte de produtos secos.',
    imagem:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&auto=format&fit=crop',
    destaques: ['100% algodão', 'Ventilação', 'Verde/Caqui'],
  },
  {
    id: 'lona-tela-caminhao',
    nome: 'Lonas de Tela para Caminhão',
    categoria: 'caminhoes',
    descricao:
      'Confeccionadas por profissionais que garantem qualidade, resistência e proteção UV. Ideais para transporte de sucatas e materiais recicláveis.',
    imagem:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop',
    destaques: ['Ventilada', 'Proteção UV', 'Materiais leves'],
  },
  {
    id: 'amarracao-cargas',
    nome: 'Amarração de Cargas',
    categoria: 'acessorios',
    descricao:
      'Conjuntos de amarração para cegonha, guincho e prancha. Fivelas de inox e plástico, catracas tubulares, kits multiuso e protetores específicos.',
    imagem:
      'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=600&auto=format&fit=crop',
    destaques: ['Catracas', 'Fivelas inox', 'Kits multiuso'],
  },
  {
    id: 'cordas-ganchos',
    nome: 'Cordas e Ganchos',
    categoria: 'acessorios',
    descricao:
      'Cordas de amarração de alta resistência, ganchos zincados e ilhoses para fixação de lonas em diversas aplicações.',
    imagem:
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&auto=format&fit=crop',
    destaques: ['Alta resistência', 'Zincados', 'Diversos tamanhos'],
  },
];

// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  priceRetail: number;     // Preço Varejo
  priceWholesale: number;  // Preço Atacado
  minWholesaleQty: number; // Quantidade mínima para preço de atacado
  imageUrl: string;
}

export const CATEGORIES = {
  'Lingeries': ['Conjuntos', 'Body', 'Fantasias'],
  'Cosméticos': ['Géis de Massagem', 'Lubrificantes', 'Excitantes'],
  'Brinquedos': ['Vibradores', 'Dildos'],
  'Acessórios': ['Algemas', 'Vendas']
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Conjunto de Lingerie Rendada Sedução',
    description: 'Conjunto em renda premium com detalhes em fita de cetim. Extremamente sensual.',
    category: 'Lingeries',
    subcategory: 'Conjuntos',
    priceRetail: 89.90,
    priceWholesale: 54.90,
    minWholesaleQty: 3,
    imageUrl: 'https://images.unsplash.com/photo-1612601006505-1793738cf56e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Gel de Massagem Beijável Morango com Champagne',
    description: 'Gel corporal com efeito térmico e sabor delicioso de morango com champagne.',
    category: 'Cosméticos',
    subcategory: 'Géis de Massagem',
    priceRetail: 34.90,
    priceWholesale: 19.90,
    minWholesaleQty: 5,
    imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcca?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Vibrador Bullet Recarregável',
    description: 'Vibrador silencioso e potente com 10 modos. Ideal para estimulação precisa.',
    category: 'Brinquedos',
    subcategory: 'Vibradores',
    priceRetail: 129.90,
    priceWholesale: 79.90,
    minWholesaleQty: 2,
    imageUrl: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=600&auto=format&fit=crop'
  }
];
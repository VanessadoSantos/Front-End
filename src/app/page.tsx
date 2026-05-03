// src/app/page.tsx
'use client';

import { useState } from 'react';
import { MOCK_PRODUCTS, CATEGORIES } from '@/data/products';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtragem dos produtos por Busca e Categoria
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      {/* Topo / Banner */}
      <header className="bg-gradient-to-r from-pink-600 to-purple-800 text-white py-12 px-4 text-center shadow-md">
        <h1 className="text-4xl font-extrabold mb-2">Menina Sapeka Sexshop</h1>
        <p className="text-pink-100 max-w-md mx-auto text-sm font-medium">
          O e-commerce mais discreto e completo. Compre no varejo ou economize no atacado!
        </p>
      </header>

      {/* Grid principal (Filtros + Produtos) */}
      <section className="max-w-7xl mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Barra Lateral de Filtros */}
        <aside className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 h-fit">
          <h2 className="text-lg font-bold text-slate-800">Filtrar por Categoria</h2>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === null 
                  ? 'bg-pink-600 text-white shadow-sm' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Todas
            </button>
            {Object.keys(CATEGORIES).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? 'bg-pink-600 text-white shadow-sm' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* Barra de Pesquisa + Grade de Produtos */}
        <div className="md:col-span-3 flex flex-col gap-6">
          {/* Campo de Busca */}
          <input
            type="text"
            placeholder="🔍 Digite o que você está procurando..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 font-medium transition-all"
          />

          {/* Listagem de Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <article key={product.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col h-full">
                {/* Imagem do Produto */}
                <div className="h-52 w-full bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Detalhes do Produto */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 mt-1 mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-xs line-clamp-2 mb-4">
                    {product.description}
                  </p>

                  {/* Preços Atacado vs Varejo */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col gap-1 mt-auto">
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-500">Varejo:</span>
                      <span className="text-sm font-bold text-slate-800">
                        R$ {product.priceRetail.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200/60 pt-1 mt-1">
                      <span className="text-xs font-semibold text-purple-700">Atacado:</span>
                      <span className="text-base font-extrabold text-purple-700">
                        R$ {product.priceWholesale.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 text-right">
                      *Mínimo de {product.minWholesaleQty} unidades
                    </span>
                  </div>

                  {/* Botão de Compra */}
                  <button className="w-full mt-4 bg-slate-900 hover:bg-pink-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
// src/components/CartSidebar.tsx
'use client';

import { useCart } from '@/hooks/useCart';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm transition-all duration-300">
      {/* Clique fora para fechar */}
      <div className="flex-1" onClick={onClose} />

      {/* Painel lateral do carrinho */}
      <div className="w-full max-w-md bg-white h-screen shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
        
        {/* Cabeçalho do carrinho */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Seu Carrinho</h2>
            <p className="text-xs text-slate-400">Totalmente discreto e seguro</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 font-medium text-sm px-3 py-1 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all"
          >
            Fechar
          </button>
        </div>

        {/* Lista de itens adicionados */}
        <div className="flex-1 overflow-y-auto my-4 flex flex-col gap-4 pr-1">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-3xl">🛒</span>
              <p className="text-slate-500 font-medium text-sm mt-2">Seu carrinho está vazio.</p>
            </div>
          ) : (
            items.map((item) => {
              const isWholesale = item.quantity >= item.minWholesaleQty;
              const unitPrice = isWholesale ? item.priceWholesale : item.priceRetail;

              return (
                <div key={item.id} className="flex gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100 items-center">
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden border border-slate-200/60 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col min-w-0">
                    <h4 className="text-sm font-bold text-slate-800 truncate">{item.name}</h4>
                    
                    {/* Exibe se o preço ativo é atacado ou varejo */}
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded w-fit my-1 ${
                      isWholesale ? 'bg-pink-100 text-pink-700' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isWholesale ? 'Atacado aplicado!' : 'Preço Varejo'}
                    </span>

                    <span className="text-sm font-extrabold text-slate-800">
                      R$ {(unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                    </span>

                    {/* Controles de Quantidade */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-slate-200 bg-white rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-semibold transition-all"
                        >
                          -
                        </button>
                        <span className="px-3 text-sm font-bold text-slate-700">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-semibold transition-all"
                        >
                          +
                        </button>
                      </div>

                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-red-500 hover:underline font-medium"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Rodapé e Totalizador */}
        {items.length > 0 && (
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-600">Total Geral:</span>
              <span className="text-xl font-extrabold text-pink-600">
                R$ {getTotalPrice().toFixed(2).replace('.', ',')}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <button 
                onClick={() => alert('Parabéns! Você avançou para o checkout!')}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-pink-200 text-center"
              >
                Finalizar Compra
              </button>
              <button 
                onClick={clearCart}
                className="w-full bg-slate-50 hover:bg-slate-100 text-slate-400 font-semibold py-2 rounded-xl transition-all text-sm border border-slate-100"
              >
                Limpar carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
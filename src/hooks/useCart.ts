// src/hooks/useCart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // Adiciona item ao carrinho (ou aumenta a quantidade se já existir)
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },

      // Remove item do carrinho
      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },

      // Atualiza a quantidade do item
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },

      // Limpa todo o carrinho
      clearCart: () => set({ items: [] }),

      // Retorna a quantidade total de itens no carrinho
      getTotalItems: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },

      // Calcula o preço total dinamicamente (Varejo vs Atacado por item)
      getTotalPrice: () => {
        return get().items.reduce((acc, item) => {
          const isWholesale = item.quantity >= item.minWholesaleQty;
          const priceToUse = isWholesale ? item.priceWholesale : item.priceRetail;
          return acc + priceToUse * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'menina-sapeka-cart', // Guarda o carrinho no LocalStorage para não perder ao atualizar a página
    }
  )
);
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/cart";

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (item) => {
        const existing = get().cartItems.find((i) => i.id === item.id);
        if (existing) {
          set({
            cartItems: get().cartItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            cartItems: [...get().cartItems, { ...item, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) =>
        set({
          cartItems: get().cartItems.filter((item) => item.id !== id),
        }),

      updateQuantity: (id, quantity) =>
        set({
          cartItems: get().cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }),

      clearCart: () => set({ cartItems: [] }),

      getCartCount: () =>
        get().cartItems.reduce((sum, item) => sum + item.quantity, 0),

      getCartTotal: () =>
        get().cartItems.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        ),
    }),
    {
      name: "cart-storage",
    }
  )
);

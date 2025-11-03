import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  isOpen: false,
  totalPrice: 0,
  addItem: (newItem) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const newItems = existingItem
        ? state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item,
          )
        : [...state.items, newItem];

      const totalPrice = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return { items: newItems, totalPrice };
    }),
  removeItem: (itemId) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== itemId);
      const totalPrice = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      return { items: newItems, totalPrice };
    }),
  updateQuantity: (itemId, quantity) =>
    set((state) => {
      const newItems = state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      );
      const totalPrice = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      return { items: newItems, totalPrice };
    }),
  clearCart: () => set({ items: [], totalPrice: 0 }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set({ isOpen: false }),
}));

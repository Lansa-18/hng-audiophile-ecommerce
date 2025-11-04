import { create } from "zustand";
import { toast } from "@/lib/toast";

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

export const useCartStore = create<CartStore>()((set) => ({
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

      toast.success("Added to cart", {
        description: `${newItem.name} x${newItem.quantity} added to your cart`,
      });

      return { items: newItems, totalPrice };
    }),
  removeItem: (itemId) =>
    set((state) => {
      const item = state.items.find((item) => item.id === itemId);
      const newItems = state.items.filter((item) => item.id !== itemId);
      const totalPrice = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      if (item) {
        toast.info("Removed from cart", {
          description: `${item.name} removed from your cart`,
        });
      }

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

      const updatedItem = newItems.find((item) => item.id === itemId);
      if (updatedItem) {
        toast.info("Cart updated", {
          description: `${updatedItem.name} quantity updated to ${quantity}`,
        });
      }

      return { items: newItems, totalPrice };
    }),
  clearCart: () => {
    toast.success("Cart cleared", {
      description: "All items have been removed from your cart",
    });
    return set({ items: [], totalPrice: 0 });
  },
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set({ isOpen: false }),
}));

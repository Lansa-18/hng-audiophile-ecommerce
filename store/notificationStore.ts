import { create } from "zustand";

interface NotificationStore {
  message: string;
  showNotification: (message: string) => void;
  hideNotification: () => void;
}

export const useNotificationStore = create<NotificationStore>()((set) => ({
  message: "",
  showNotification: (message: string) => {
    set({ message });
    setTimeout(() => {
      set({ message: "" });
    }, 3000);
  },
  hideNotification: () => set({ message: "" }),
}));

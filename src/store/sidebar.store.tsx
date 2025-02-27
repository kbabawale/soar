import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  toggleFn: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleFn: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));

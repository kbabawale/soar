import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  isMobile: boolean;
  toggleFn: () => void;
  setIsMobile: (input: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  isMobile: false,
  toggleFn: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
  setIsMobile: (input: boolean) => {
    set(() => ({ isMobile: input }));
  },
}));

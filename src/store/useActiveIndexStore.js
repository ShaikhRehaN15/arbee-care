import { create } from 'zustand';

export const useActiveIndexStore = create((set) => ({
  activeIndex: 3,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));

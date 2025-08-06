import { create } from 'zustand';

export const useActiveIndexStore = create((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));

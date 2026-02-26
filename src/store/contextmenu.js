import { create } from 'zustand';

const useContextMenuStore = create((set) => ({
    isOpen: false,
    x: 0,
    y: 0,
    items: [],

    openMenu: (x, y, items) => set({ isOpen: true, x, y, items }),
    closeMenu: () => set({ isOpen: false, x: 0, y: 0, items: [] }),
}));

export default useContextMenuStore;

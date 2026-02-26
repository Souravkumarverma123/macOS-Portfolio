import { create } from 'zustand';

const useSnapStore = create((set) => ({
    snapZone: null, // 'left' | 'right' | 'top' | null
    setSnapZone: (zone) => set({ snapZone: zone }),
    clearSnapZone: () => set({ snapZone: null }),
}));

export default useSnapStore;

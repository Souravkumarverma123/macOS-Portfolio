import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#components/constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';


const useWindowStore = create(immer((set) => (
    {
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
        }),
        closeWindow: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey];
            // Defensive : if the windowKey is invalid, do nothing.
            if (!win) return;
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),
        minimizeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            // For now, minimize behaves like close (hides the window)
            // You can enhance this later to animate to dock
            win.isOpen = false;
        }),
        maximizeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            // Toggle maximized state
            win.isMaximized = !win.isMaximized;
        }),
        focusWindow: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey];
            win.zIndex = state.nextZIndex++;
        }),
    })));

export default useWindowStore;
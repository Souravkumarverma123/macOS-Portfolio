import { create } from 'zustand';

const getInitialTheme = () => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

const useThemeStore = create((set, get) => ({
    isDark: getInitialTheme(),

    toggleTheme: () => set((state) => {
        const next = !state.isDark;
        localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', next);
        return { isDark: next };
    }),

    initTheme: () => {
        const { isDark } = get();
        document.documentElement.classList.toggle('dark', isDark);
    },
}));

export default useThemeStore;

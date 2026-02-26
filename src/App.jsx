import { lazy, Suspense, useEffect, useCallback } from "react";
import gsap from "gsap"
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, Dock } from "./components"
import ContextMenu from "./components/ContextMenu";
import SnapIndicator from "./components/SnapIndicator";
import useThemeStore from "#store/theme";
import useContextMenuStore from "#store/contextmenu";
import useWindowStore from "#store/window";

// Lazy load window components for better performance
const Terminal = lazy(() => import("#windows/Terminal"));
const Safari = lazy(() => import("#windows/Safari"));
const Resume = lazy(() => import("#windows/Resume"));
const Finder = lazy(() => import("#windows/Finder"));
const Text = lazy(() => import("#windows/Text"));
const Image = lazy(() => import("#windows/Image"));
const Contact = lazy(() => import("#windows/Contact"));
const Home = lazy(() => import("#windows/Home"));
const Photos = lazy(() => import("#windows/Photos"));

const App = () => {
  const { initTheme, toggleTheme, isDark } = useThemeStore();
  const { openMenu } = useContextMenuStore();
  const { openWindow } = useWindowStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    openMenu(e.clientX, e.clientY, [
      {
        label: "New Finder Window",
        action: () => openWindow("finder"),
      },
      { type: "separator" },
      {
        label: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
        action: () => toggleTheme(),
        shortcut: "⌘D",
      },
      { type: "separator" },
      {
        label: "About This Portfolio",
        action: () => openWindow("terminal"),
      },
      {
        label: "View Resume",
        action: () => openWindow("resume"),
      },
    ]);
  }, [openMenu, openWindow, toggleTheme, isDark]);

  return (
    <main onContextMenu={handleContextMenu}>
      <Navbar />
      <Welcome />
      <Dock />
      <Suspense fallback={null}>
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Image />
        <Contact />
        <Home />
        <Photos />
      </Suspense>
      <ContextMenu />
      <SnapIndicator />
    </main>
  )
}

export default App
import { lazy, Suspense } from "react";
import gsap from "gsap"
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, Dock } from "./components"

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
  return (
    <main>
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
    </main>
  )
}

export default App
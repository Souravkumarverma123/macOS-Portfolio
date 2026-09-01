import { useGSAP } from "@gsap/react";
import useWindowStore from "../store/window.js"
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useSnapStore from "#store/snap";

const EDGE_THRESHOLD = 15;

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, isMaximized } = windows[windowKey];
        const { setSnapZone, clearSnapZone } = useSnapStore();
        const ref = useRef(null);
        const [snapped, setSnapped] = useState(null); // 'left' | 'right' | 'top' | null

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },

            );
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            const [instance] = Draggable.create(el, {
                dragClickables: false, // let clicks on inputs/buttons/links/etc. behave normally instead of starting a drag
                onPress: () => focusWindow(windowKey),
                onDrag() {
                    const x = this.pointerX;
                    const y = this.pointerY;
                    const vw = window.innerWidth;

                    if (x <= EDGE_THRESHOLD) {
                        setSnapZone('left');
                    } else if (x >= vw - EDGE_THRESHOLD) {
                        setSnapZone('right');
                    } else if (y <= EDGE_THRESHOLD) {
                        setSnapZone('top');
                    } else {
                        clearSnapZone();
                    }
                },
                onDragEnd() {
                    const x = this.pointerX;
                    const y = this.pointerY;
                    const vw = window.innerWidth;
                    const vh = window.innerHeight;

                    clearSnapZone();

                    if (x <= EDGE_THRESHOLD) {
                        // Snap left
                        gsap.to(el, {
                            x: 0, y: 40, width: vw / 2, height: vh - 85,
                            duration: 0.3, ease: "power2.out"
                        });
                        setSnapped('left');
                    } else if (x >= vw - EDGE_THRESHOLD) {
                        // Snap right
                        gsap.to(el, {
                            x: vw / 2, y: 40, width: vw / 2, height: vh - 85,
                            duration: 0.3, ease: "power2.out"
                        });
                        setSnapped('right');
                    } else if (y <= EDGE_THRESHOLD) {
                        // Snap full (maximize)
                        gsap.to(el, {
                            x: 0, y: 40, width: vw, height: vh - 85,
                            duration: 0.3, ease: "power2.out"
                        });
                        setSnapped('top');
                    } else if (snapped) {
                        // Un-snap: reset width/height
                        gsap.to(el, {
                            width: '', height: '',
                            duration: 0.3, ease: "power2.out"
                        });
                        setSnapped(null);
                    }
                },
            });

            return () => instance.kill();
        }, []);


        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? "block" : "none";
        }, [isOpen])

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className={`absolute ${isMaximized ? 'fixed! inset-0! w-screen! h-screen! top-0! left-0!' : ''}`}
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}

export default WindowWrapper;
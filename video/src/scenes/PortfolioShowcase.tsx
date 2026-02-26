import {
    AbsoluteFill,
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
    Img,
    staticFile,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadGeorama } from "@remotion/google-fonts/Georama";

const { fontFamily } = loadFont("normal", {
    weights: ["400", "700"],
    subsets: ["latin"],
});

const { fontFamily: fontGeorama } = loadGeorama("normal", {
    weights: ["100", "400", "700", "900"],
    subsets: ["latin"],
});

const DOCK_APPS = [
    { src: staticFile("images/finder.png"), name: "Finder" },
    { src: staticFile("images/safari.png"), name: "Safari" },
    { src: staticFile("images/photos.png"), name: "Photos" },
    { src: staticFile("images/contact.png"), name: "Contacts" },
    { src: staticFile("images/terminal.png"), name: "Terminal" },
    { src: staticFile("images/trash-1.png"), name: "Trash" },
];

const NAV_LINKS = ["Projects", "Contact", "Resume"];

export const PortfolioShowcase = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Fade in from white
    const fadeIn = interpolate(frame, [0, 20], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Navbar slides down
    const navSpring = spring({ frame, fps, delay: 10, config: { damping: 200 } });
    const navY = interpolate(navSpring, [0, 1], [-40, 0]);
    const navOpacity = interpolate(navSpring, [0, 1], [0, 1]);

    // Welcome text fades in
    const welcomeOpacity = interpolate(frame, [20, 45], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // "Portfolio" typewriter
    const fullText = "Portfolio";
    const charsToShow = Math.floor(
        interpolate(frame, [35, 75], [0, fullText.length], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        })
    );
    const displayText = fullText.slice(0, charsToShow);
    const showCursor = frame >= 35 && frame < 80 && Math.floor(frame / 8) % 2 === 0;

    // Dock slides up
    const dockSpring = spring({ frame, fps, delay: 20, config: { damping: 200 } });
    const dockY = interpolate(dockSpring, [0, 1], [60, 0]);
    const dockOpacity = interpolate(dockSpring, [0, 1], [0, 1]);

    // Desktop icons fade in
    const iconsOpacity = interpolate(frame, [30, 50], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Mouse cursor
    const cursorOpacity = interpolate(frame, [80, 90], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const cursorX = interpolate(frame, [90, 130], [960, 300], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const cursorY = interpolate(frame, [90, 130], [500, 20], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const clickFlash = frame >= 128 && frame <= 135;

    return (
        <AbsoluteFill style={{ fontFamily, overflow: "hidden" }}>
            {/* macOS wallpaper */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #1a5276 0%, #2980b9 30%, #3498db 50%, #85c1e9 75%, #1a5276 100%)",
                }}
            />

            {/* Navbar */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 36,
                    background: "rgba(255,255,255,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    transform: `translateY(${navY}px)`,
                    opacity: navOpacity,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#111",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <Img src={staticFile("images/logo.svg")} style={{ width: 14, height: 17 }} />
                    <span style={{ fontWeight: 700 }}>Sourav's Portfolio</span>
                    {NAV_LINKS.map((item) => (
                        <span
                            key={item}
                            style={{
                                fontWeight: 400,
                                fontSize: 13,
                                padding: "2px 8px",
                                borderRadius: 4,
                                background: clickFlash && item === "Contact" ? "rgba(0,0,0,0.08)" : "transparent",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, fontWeight: 400 }}>
                    <Img src={staticFile("icons/wifi.svg")} style={{ width: 14, height: 14, filter: "invert(0)" }} />
                    <Img src={staticFile("icons/search.svg")} style={{ width: 14, height: 14 }} />
                    <span>Thu Feb 27 12:00 PM</span>
                </div>
            </div>

            {/* Desktop folder icons */}
            <div
                style={{
                    position: "absolute",
                    top: 60,
                    left: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    opacity: iconsOpacity,
                }}
            >
                {["Youtube title enhancer", "Food Delivery App", "Streamify"].map((name) => (
                    <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                        <Img src={staticFile("images/folder.png")} style={{ width: 64, height: 52, objectFit: "contain" }} />
                        <span style={{ color: "white", fontSize: 11, textAlign: "center", maxWidth: 90, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
                            {name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Welcome text */}
            <div
                style={{
                    position: "absolute",
                    top: "37%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    opacity: welcomeOpacity,
                }}
            >
                <div
                    style={{
                        fontSize: 26,
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: fontGeorama,
                        fontWeight: 100,
                    }}
                >
                    Hey, I'm Sourav! Welcome to my
                </div>
                <div
                    style={{
                        fontSize: 110,
                        fontWeight: 400,
                        fontFamily: fontGeorama,
                        fontStyle: "italic",
                        color: "rgba(255,255,255,0.85)",
                        textShadow: "0 4px 30px rgba(0,0,0,0.2)",
                        letterSpacing: -2,
                        marginTop: 8,
                    }}
                >
                    {displayText}
                    {showCursor && <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>}
                </div>
            </div>

            {/* Dock with real icons */}
            <div
                style={{
                    position: "absolute",
                    bottom: 16,
                    left: "50%",
                    transform: `translateX(-50%) translateY(${dockY}px)`,
                    opacity: dockOpacity,
                    display: "flex",
                    gap: 4,
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: 18,
                    padding: "6px 8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                }}
            >
                {DOCK_APPS.map((app, i) => {
                    const appScale = spring({
                        frame,
                        fps,
                        delay: 25 + i * 4,
                        config: { damping: 200 },
                    });
                    return (
                        <div
                            key={app.name}
                            style={{
                                width: 56,
                                height: 56,
                                transform: `scale(${interpolate(appScale, [0, 1], [0, 1])})`,
                            }}
                        >
                            <Img
                                src={app.src}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Mouse cursor */}
            {cursorOpacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        left: cursorX,
                        top: cursorY,
                        opacity: cursorOpacity,
                        width: 0,
                        height: 0,
                        borderLeft: "7px solid white",
                        borderRight: "7px solid transparent",
                        borderBottom: "12px solid transparent",
                        borderTop: "12px solid white",
                        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.5))",
                        zIndex: 100,
                    }}
                />
            )}

            {/* Fade from white */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "#fff",
                    opacity: fadeIn,
                    pointerEvents: "none",
                }}
            />
        </AbsoluteFill>
    );
};

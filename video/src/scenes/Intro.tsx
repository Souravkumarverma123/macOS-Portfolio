import {
    AbsoluteFill,
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
    Easing,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
    weights: ["400", "500", "700"],
    subsets: ["latin"],
});

export const Intro = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Browser window scales in
    const windowSpring = spring({
        frame,
        fps,
        config: { damping: 200 },
        durationInFrames: 30,
    });
    const windowScale = interpolate(windowSpring, [0, 1], [0.9, 1]);
    const windowOpacity = interpolate(windowSpring, [0, 1], [0, 1]);

    // URL typing animation
    const url = "souravkumar.dev";
    const urlChars = Math.floor(
        interpolate(frame, [25, 55], [0, url.length], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        })
    );
    const typedUrl = url.slice(0, urlChars);
    const showCursor = frame >= 25 && frame < 60 && Math.floor(frame / 6) % 2 === 0;

    // Enter key press effect — brief flash on URL bar
    const enterFlash = frame >= 58 && frame <= 62;

    // Loading bar
    const loadProgress = interpolate(frame, [60, 90], [0, 100], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.quad),
    });
    const showLoader = frame >= 60 && frame < 95;

    // Fade to white (transition to next scene)
    const fadeOut = interpolate(frame, [100, 120], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background: "#1a1a2e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily,
            }}
        >
            {/* Browser chrome mockup */}
            <div
                style={{
                    width: 1600,
                    height: 900,
                    background: "#fff",
                    borderRadius: 12,
                    boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
                    overflow: "hidden",
                    transform: `scale(${windowScale})`,
                    opacity: windowOpacity,
                }}
            >
                {/* Browser tab bar */}
                <div
                    style={{
                        height: 44,
                        background: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 16px",
                        gap: 8,
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />

                    {/* URL bar */}
                    <div
                        style={{
                            flex: 1,
                            marginLeft: 60,
                            marginRight: 120,
                            height: 30,
                            background: enterFlash ? "#e8f0fe" : "#fff",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            padding: "0 14px",
                            fontSize: 14,
                            color: "#333",
                            border: "1px solid #ccc",
                        }}
                    >
                        <span style={{ color: "#999", marginRight: 4 }}>🔒</span>
                        <span>{typedUrl}</span>
                        {showCursor && <span style={{ color: "#333" }}>|</span>}
                    </div>
                </div>

                {/* Loading bar */}
                {showLoader && (
                    <div
                        style={{
                            height: 3,
                            background: "#e0e0e0",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${loadProgress}%`,
                                background: "#2563eb",
                                borderRadius: 2,
                            }}
                        />
                    </div>
                )}

                {/* Page content area — blank white during loading */}
                <div
                    style={{
                        flex: 1,
                        background: frame < 90 ? "#fafafa" : "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {frame < 60 && (
                        <div style={{ color: "#bbb", fontSize: 16 }}>New Tab</div>
                    )}
                    {frame >= 60 && frame < 90 && (
                        <div style={{ color: "#999", fontSize: 14 }}>Loading...</div>
                    )}
                </div>
            </div>

            {/* Fade to white overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "#fff",
                    opacity: fadeOut,
                }}
            />
        </AbsoluteFill>
    );
};

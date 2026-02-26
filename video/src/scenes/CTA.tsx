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

const { fontFamily } = loadFont("normal", {
    weights: ["400", "500", "700"],
    subsets: ["latin"],
});

const DOCK_APPS = [
    staticFile("images/finder.png"),
    staticFile("images/safari.png"),
    staticFile("images/photos.png"),
    staticFile("images/contact.png"),
    staticFile("images/terminal.png"),
    staticFile("images/trash-1.png"),
];

export const CTA = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const bgDarken = interpolate(frame, [0, 30], [0, 0.3], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const cardSpring = spring({ frame, fps, config: { damping: 15, stiffness: 80 } });
    const cardScale = interpolate(cardSpring, [0, 1], [0.85, 1]);
    const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

    const thankSpring = spring({ frame, fps, delay: 20, config: { damping: 200 } });
    const urlSpring = spring({ frame, fps, delay: 40, config: { damping: 200 } });

    const socials = [
        { icon: staticFile("icons/github.svg"), name: "GitHub" },
        { icon: staticFile("icons/linkedin.svg"), name: "LinkedIn" },
        { icon: staticFile("icons/twitter.svg"), name: "Twitter" },
    ];

    return (
        <AbsoluteFill style={{ fontFamily, overflow: "hidden" }}>
            {/* Wallpaper with dark overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a5276 0%, #2980b9 30%, #3498db 50%, #85c1e9 75%, #1a5276 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: `rgba(0,0,0,${bgDarken})` }} />

            {/* Navbar */}
            <div
                style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 36,
                    background: "rgba(255,255,255,0.45)",
                    display: "flex", alignItems: "center", padding: "0 20px",
                    fontSize: 13, fontWeight: 700, color: "#111", gap: 16,
                }}
            >
                <Img src={staticFile("images/logo.svg")} style={{ width: 14, height: 17 }} />
                <span>Sourav's Portfolio</span>
            </div>

            {/* Central card */}
            <div
                style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: `translate(-50%, -50%) scale(${cardScale})`,
                    opacity: cardOpacity, textAlign: "center",
                }}
            >
                {/* Profile photo */}
                <div style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden", margin: "0 auto 20px", border: "3px solid rgba(255,255,255,0.3)" }}>
                    <Img src={staticFile("images/sourav.png")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                <div style={{ fontSize: 72, fontWeight: 700, color: "white", textShadow: "0 4px 30px rgba(0,0,0,0.3)", letterSpacing: -2 }}>
                    Sourav Kumar
                </div>

                <div
                    style={{
                        fontSize: 20, color: "rgba(255,255,255,0.7)", marginTop: 10,
                        opacity: interpolate(thankSpring, [0, 1], [0, 1]),
                        transform: `translateY(${interpolate(thankSpring, [0, 1], [15, 0])}px)`,
                        fontWeight: 400,
                    }}
                >
                    Full-Stack Web Developer  •  React  •  Next.js  •  Node.js
                </div>

                <div style={{ width: interpolate(frame, [30, 55], [0, 300], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }), height: 1, background: "rgba(255,255,255,0.25)", margin: "30px auto" }} />

                {/* Social icons */}
                <div style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 30 }}>
                    {socials.map((s, i) => {
                        const sSpring = spring({ frame, fps, delay: 35 + i * 6, config: { damping: 200 } });
                        return (
                            <div
                                key={s.name}
                                style={{
                                    display: "flex", alignItems: "center", gap: 8,
                                    background: "rgba(255,255,255,0.12)", padding: "10px 20px",
                                    borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)",
                                    opacity: interpolate(sSpring, [0, 1], [0, 1]),
                                    transform: `scale(${interpolate(sSpring, [0, 1], [0.8, 1])})`,
                                }}
                            >
                                <Img src={s.icon} style={{ width: 20, height: 20, filter: "brightness(0) invert(1)" }} />
                                <span style={{ color: "white", fontSize: 14, fontWeight: 500 }}>{s.name}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Website URL */}
                <div style={{ opacity: interpolate(urlSpring, [0, 1], [0, 1]), transform: `translateY(${interpolate(urlSpring, [0, 1], [10, 0])}px)` }}>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 3, marginBottom: 8 }}>Visit</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "white", letterSpacing: 1 }}>souravkumar.dev</div>
                </div>
            </div>

            {/* Dock */}
            <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4, background: "rgba(255,255,255,0.18)", borderRadius: 18, padding: "6px 8px", border: "1px solid rgba(255,255,255,0.15)" }}>
                {DOCK_APPS.map((src, i) => (
                    <Img key={i} src={src} style={{ width: 56, height: 56, objectFit: "contain" }} />
                ))}
            </div>
        </AbsoluteFill>
    );
};

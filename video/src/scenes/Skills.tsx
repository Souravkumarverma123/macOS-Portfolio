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
    weights: ["400", "600", "700"],
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

const SOCIALS = [
    { icon: staticFile("icons/github.svg"), name: "Github", color: "#24292e" },
    { icon: staticFile("icons/linkedin.svg"), name: "LinkedIn", color: "#0e76a8" },
    { icon: staticFile("icons/twitter.svg"), name: "Twitter/X", color: "#1da1f2" },
];

export const ContactWindow = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Window opens
    const windowSpring = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 100 },
    });
    const windowScale = interpolate(windowSpring, [0, 1], [0.8, 1]);
    const windowOpacity = interpolate(windowSpring, [0, 1], [0, 1]);

    // Form fields
    const formOpacity = interpolate(frame, [40, 55], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Typing animation
    const nameText = "Hey Sourav!";
    const nameChars = Math.floor(
        interpolate(frame, [55, 80], [0, nameText.length], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        })
    );

    const msgText = "Love the macOS portfolio concept! Would love to collab on a project.";
    const msgChars = Math.floor(
        interpolate(frame, [82, 110], [0, msgText.length], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        })
    );

    const sendClick = frame >= 112;
    const sentSpring = spring({ frame, fps, delay: 115, config: { damping: 200 } });

    return (
        <AbsoluteFill style={{ fontFamily, overflow: "hidden" }}>
            {/* Wallpaper */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a5276 0%, #2980b9 30%, #3498db 50%, #85c1e9 75%, #1a5276 100%)" }} />

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
                <span style={{ fontWeight: 400 }}>Projects</span>
                <span style={{ fontWeight: 400, background: "rgba(0,0,0,0.06)", padding: "2px 8px", borderRadius: 4 }}>Contact</span>
                <span style={{ fontWeight: 400 }}>Resume</span>
            </div>

            {/* Contact window */}
            <div
                style={{
                    position: "absolute", top: 120, left: "50%",
                    transform: `translateX(-50%) scale(${windowScale})`,
                    opacity: windowOpacity, width: 680,
                    background: "#fff", borderRadius: 12,
                    boxShadow: "0 25px 80px rgba(0,0,0,0.35)", overflow: "hidden",
                }}
            >
                {/* Window header */}
                <div style={{ height: 40, background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", padding: "0 14px", gap: 7 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
                    <span style={{ flex: 1, textAlign: "center", fontSize: 13, fontWeight: 700, color: "#333" }}>Contact Me</span>
                </div>

                <div style={{ padding: "24px 28px" }}>
                    {/* Profile section with real photo */}
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                        <div style={{ width: 60, height: 60, borderRadius: "50%", overflow: "hidden" }}>
                            <Img src={staticFile("images/sourav.png")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div>
                            <div style={{ fontSize: 18, fontWeight: 700, color: "#222" }}>Let's Connect</div>
                            <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>souravkumarverma56@gmail.com</div>
                        </div>
                    </div>

                    {/* Social links with real icons */}
                    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                        {SOCIALS.map((s, i) => {
                            const socialSpring = spring({ frame, fps, delay: 15 + i * 5, config: { damping: 200 } });
                            return (
                                <div
                                    key={s.name}
                                    style={{
                                        flex: 1, background: s.color, borderRadius: 10,
                                        padding: "12px 12px", color: "white", fontSize: 12, fontWeight: 600,
                                        display: "flex", alignItems: "center", gap: 8,
                                        opacity: interpolate(socialSpring, [0, 1], [0, 1]),
                                        transform: `translateY(${interpolate(socialSpring, [0, 1], [10, 0])}px)`,
                                    }}
                                >
                                    <Img src={s.icon} style={{ width: 18, height: 18, filter: "brightness(0) invert(1)" }} />
                                    {s.name}
                                </div>
                            );
                        })}
                    </div>

                    <div style={{ borderTop: "1px solid #eee", marginBottom: 16 }} />

                    {/* Contact form */}
                    <div style={{ opacity: formOpacity }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 10 }}>Send me a message</div>

                        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                            <div style={{ flex: 1, background: "#f7f7f7", border: "1px solid #e0e0e0", borderRadius: 8, padding: "10px 12px", fontSize: 13, color: nameChars > 0 ? "#222" : "#aaa" }}>
                                {nameChars > 0 ? nameText.slice(0, nameChars) : "Your Name"}
                            </div>
                            <div style={{ flex: 1, background: "#f7f7f7", border: "1px solid #e0e0e0", borderRadius: 8, padding: "10px 12px", fontSize: 13, color: "#aaa" }}>
                                Your Email
                            </div>
                        </div>

                        <div style={{ background: "#f7f7f7", border: "1px solid #e0e0e0", borderRadius: 8, padding: "10px 12px", fontSize: 13, color: msgChars > 0 ? "#222" : "#aaa", minHeight: 70, marginBottom: 12 }}>
                            {msgChars > 0 ? msgText.slice(0, msgChars) : "What's on your mind?"}
                        </div>

                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: sendClick ? "#1d4ed8" : "#2563eb", color: "white", fontSize: 13, fontWeight: 600, padding: "10px 22px", borderRadius: 8, transform: `scale(${sendClick ? interpolate(sentSpring, [0, 0.5, 1], [1, 0.95, 1]) : 1})` }}>
                            {sendClick ? "✓ Sent!" : "Send Message"}
                        </div>
                    </div>
                </div>
            </div>

            {/* Dock with real icons */}
            <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4, background: "rgba(255,255,255,0.18)", borderRadius: 18, padding: "6px 8px", border: "1px solid rgba(255,255,255,0.15)" }}>
                {DOCK_APPS.map((src, i) => (
                    <Img key={i} src={src} style={{ width: 56, height: 56, objectFit: "contain" }} />
                ))}
            </div>
        </AbsoluteFill>
    );
};

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

const TECH_ROWS = [
    { label: "Frontend", items: "React.js, Next.js, JavaScript" },
    { label: "Backend", items: "Node.js, Express, MongoDB" },
    { label: "Styling", items: "Tailwind CSS, Shadcn UI" },
    { label: "Dev Tools", items: "Git, GitHub, Docker" },
];

const PROJECTS = [
    { name: "Youtube title enhancer", type: "Extension", img: staticFile("images/project-1.png") },
    { name: "Food Delivery App", type: "Full-Stack", img: staticFile("images/project-2.png") },
    { name: "Streamify", type: "Platform", img: staticFile("images/project-3.png") },
    { name: "macOS Portfolio", type: "Frontend", img: staticFile("images/project-1.png") },
];

export const Projects = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Terminal opens
    const termSpring = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
    const termScale = interpolate(termSpring, [0, 1], [0.8, 1]);
    const termOpacity = interpolate(termSpring, [0, 1], [0, 1]);

    // Command typing
    const cmd = "sourav --show-stack";
    const cmdChars = Math.floor(
        interpolate(frame, [15, 40], [0, cmd.length], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        })
    );
    const typedCmd = cmd.slice(0, cmdChars);
    const showCursor = frame < 45 && Math.floor(frame / 6) % 2 === 0;

    // Finder window
    const finderSpring = spring({ frame, fps, delay: 60, config: { damping: 15, stiffness: 80 } });
    const finderScale = interpolate(finderSpring, [0, 1], [0.8, 1]);
    const finderOpacity = interpolate(finderSpring, [0, 1], [0, 1]);

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
                <span style={{ fontWeight: 400 }}>Contact</span>
                <span style={{ fontWeight: 400 }}>Resume</span>
            </div>

            {/* Terminal — left side */}
            <div
                style={{
                    position: "absolute", top: 80, left: 60, width: 700,
                    background: "#1e1e1e", borderRadius: 12,
                    boxShadow: "0 25px 80px rgba(0,0,0,0.4)", overflow: "hidden",
                    transform: `scale(${termScale})`, opacity: termOpacity,
                }}
            >
                <div style={{ height: 36, background: "#2d2d2d", display: "flex", alignItems: "center", padding: "0 14px", gap: 7 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
                    <span style={{ flex: 1, textAlign: "center", fontSize: 12, color: "#888" }}>Terminal</span>
                </div>

                <div style={{ padding: "18px 20px", fontFamily: "monospace", fontSize: 14, lineHeight: 1.9 }}>
                    <div>
                        <span style={{ color: "#4ec9b0" }}>❯ </span>
                        <span style={{ color: "#d4d4d4" }}>{typedCmd}</span>
                        {showCursor && <span style={{ color: "#4ec9b0" }}>█</span>}
                    </div>

                    {TECH_ROWS.map((row, i) => {
                        const rowDelay = 45 + i * 10;
                        const rowSpring = spring({ frame, fps, delay: rowDelay, config: { damping: 200 } });
                        const rowOpacity = interpolate(rowSpring, [0, 1], [0, 1]);
                        return (
                            <div key={row.label} style={{ opacity: rowOpacity, display: "flex", gap: 12, marginTop: i === 0 ? 14 : 0 }}>
                                <span style={{ color: "#4ec9b0" }}>✓</span>
                                <span style={{ color: "#569cd6", fontWeight: 700, width: 100 }}>{row.label}</span>
                                <span style={{ color: "#d4d4d4" }}>{row.items}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Finder window — right side with project screenshots */}
            <div
                style={{
                    position: "absolute", top: 100, right: 60, width: 560,
                    background: "#fff", borderRadius: 12,
                    boxShadow: "0 25px 80px rgba(0,0,0,0.35)", overflow: "hidden",
                    transform: `scale(${finderScale})`, opacity: finderOpacity,
                }}
            >
                <div style={{ height: 40, background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", display: "flex", alignItems: "center", padding: "0 14px", gap: 7 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
                    <span style={{ flex: 1, textAlign: "center", fontSize: 13, fontWeight: 700, color: "#333" }}>Projects</span>
                </div>

                <div style={{ display: "flex", minHeight: 320 }}>
                    {/* Sidebar */}
                    <div style={{ width: 150, background: "#f8f8f8", borderRight: "1px solid #eee", padding: "12px 10px" }}>
                        {["Favourites", "Work", "About", "Resume"].map((item) => (
                            <div
                                key={item}
                                style={{
                                    fontSize: 12, padding: "6px 10px", borderRadius: 6,
                                    color: item === "Work" ? "#2563eb" : "#555",
                                    fontWeight: item === "Work" ? 600 : 400,
                                    background: item === "Work" ? "rgba(37,99,235,0.08)" : "transparent",
                                    marginBottom: 2,
                                    display: "flex", alignItems: "center", gap: 6,
                                }}
                            >
                                {item === "Favourites" && "📌"} {item === "Work" && "💼"} {item === "About" && "👤"} {item === "Resume" && "📄"} {item}
                            </div>
                        ))}
                    </div>

                    {/* Project list with thumbnail previews */}
                    <div style={{ flex: 1, padding: "12px 16px" }}>
                        {PROJECTS.map((proj, i) => {
                            const projDelay = 70 + i * 8;
                            const projSpring = spring({ frame, fps, delay: projDelay, config: { damping: 200 } });
                            const projOpacity = interpolate(projSpring, [0, 1], [0, 1]);
                            const projX = interpolate(projSpring, [0, 1], [15, 0]);

                            return (
                                <div
                                    key={proj.name}
                                    style={{
                                        display: "flex", alignItems: "center", gap: 10,
                                        padding: "8px 12px", borderRadius: 8,
                                        opacity: projOpacity, transform: `translateX(${projX}px)`,
                                        marginBottom: 4,
                                        background: i === 0 ? "rgba(37,99,235,0.06)" : "transparent",
                                    }}
                                >
                                    <div style={{ width: 48, height: 32, borderRadius: 4, overflow: "hidden", border: "1px solid #eee" }}>
                                        <Img src={proj.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 600, color: "#222" }}>{proj.name}</div>
                                        <div style={{ fontSize: 11, color: "#999" }}>{proj.type}</div>
                                    </div>
                                </div>
                            );
                        })}
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

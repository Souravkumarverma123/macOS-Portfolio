import { useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";
import {
    Send,
    Loader2,
    CheckCircle2,
    AlertCircle,
    Mail,
    User,
    MessageSquare,
    Copy,
    Check,
} from "lucide-react";

const EMAIL = "souravkumarverma56@gmail.com";

// Set WEB3FORMS_ACCESS_KEY (or VITE_WEB3FORMS_ACCESS_KEY) in a .env.local file
// (get a free key at web3forms.com)
const WEB3FORMS_ACCESS_KEY =
    import.meta.env.WEB3FORMS_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState("");
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard API unavailable (older browser / no permission) — fail quietly.
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!WEB3FORMS_ACCESS_KEY) {
            setStatus("error");
            setErrorMessage("Form isn't configured yet — missing Web3Forms access key.");
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New message from ${form.name} via portfolio`,
                    ...form,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Couldn't reach the server. Check your connection and try again.");
        }
    };

    const handleSendAnother = () => {
        setStatus("idle");
        setErrorMessage("");
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="contact-body">
                <div className="contact-intro">
                    <img src="/images/sourav.png"
                        alt="Sourav"
                        className="avatar"
                        loading="lazy" />

                    <div className="availability">
                        <span className="dot" />
                        Available for new opportunities
                    </div>

                    <h3>Let's Connect</h3>
                    <p>Got an idea? A bug to fix? Or just want to chat? I'm always open for new opportunities.</p>

                    <button type="button" className="email-chip" onClick={handleCopyEmail}>
                        <Mail size={14} />
                        <span>{EMAIL}</span>
                        {copied ? <Check size={14} className="copied" /> : <Copy size={14} />}
                    </button>
                </div>

                <ul className="social-links">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ "--brand": bg }}>
                            <a href={link} target="_blank" rel="noreferrer noopener" title={text} aria-label={text}>
                                <img src={icon} alt="" className="size-4" loading="lazy" />
                            </a>
                            <p>{text}</p>
                        </li>
                    ))}
                </ul>

                {status === "success" ? (
                    <div className="form-success">
                        <CheckCircle2 size={32} />
                        <h4>Message sent!</h4>
                        <p>Thanks for reaching out — I'll get back to you soon.</p>
                        <button type="button" onClick={handleSendAnother}>
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h4>Send me a message</h4>

                        <div className="form-row">
                            <label className="field">
                                <span className="field-label">
                                    <User size={13} /> Name
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label className="field">
                                <span className="field-label">
                                    <Mail size={13} /> Email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <label className="field">
                            <span className="field-label">
                                <MessageSquare size={13} /> Message
                            </span>
                            <textarea
                                name="message"
                                placeholder="What's on your mind?"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <button type="submit" disabled={status === "loading"}>
                            {status === "loading" && <Loader2 className="animate-spin" size={16} />}
                            {status !== "loading" && <Send size={16} />}
                            <span>{status === "loading" ? "Sending…" : "Send Message"}</span>
                        </button>

                        {status === "error" && (
                            <p className="form-error">
                                <AlertCircle size={14} />
                                {errorMessage}
                            </p>
                        )}
                    </form>
                )}
            </div>
        </>
    )
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;

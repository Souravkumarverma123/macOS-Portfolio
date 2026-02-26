import { useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";
import { Send, Loader2, CheckCircle } from "lucide-react";

const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your Web3Forms access key

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    ...form,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
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
                        className="w-20 rounded-full"
                        loading="lazy" />

                    <h3>Let's Connect</h3>
                    <p>Got an idea? A bug to fix? Or just want to chat? I'm always open for new opportunities.</p>
                    <p className="email">souravkumarverma56@gmail.com</p>
                </div>

                <ul className="social-links">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ background: bg }}>
                            <a href={link} target="_blank" rel="noreferrer noopener" title={text}>
                                <img src={icon} alt={text} className="size-5" loading="lazy" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>

                <form onSubmit={handleSubmit} className="contact-form">
                    <h4>Send me a message</h4>

                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="What's on your mind?"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" disabled={status === "loading"}>
                        {status === "loading" && <Loader2 className="animate-spin" size={16} />}
                        {status === "success" && <CheckCircle size={16} />}
                        {status === "idle" && <Send size={16} />}
                        {status === "error" && <Send size={16} />}
                        <span>
                            {status === "loading" ? "Sending…" :
                                status === "success" ? "Sent!" :
                                    status === "error" ? "Try Again" :
                                        "Send Message"}
                        </span>
                    </button>

                    {status === "error" && (
                        <p className="form-error">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </>
    )
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
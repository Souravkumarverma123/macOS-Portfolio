import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'
import { locations, techStack, socials, blogPosts } from '#constants';
import { Download, ExternalLink } from 'lucide-react';


const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 }
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === " " ? '\u00A0' : char}
        </span>
    ))
};

const setupTextHover = (container, type) => {
    if (!container) return;
    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHTS[type];


    const animateLetter = (letters, weight, duration = 0.25) => {
        return gsap.to(letters, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,

        })
    };

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };
    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.3))
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);


    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    }
}

const projects = locations.work?.children ?? [];

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title");
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            titleCleanup();
            subtitleCleanup();
        }

    }, [])

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>
                {renderText(
                    "Hey, I'm Sourav! Welcome to my",
                    "text-3xl font-georama",
                    100,
                )}
            </p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText("Portfolio", 'text-9xl italic font-georama')}
            </h1>

            {/* Mobile Layout */}
            <div className='mobile-portfolio'>
                <div className='mobile-hero'>
                    <img src="/images/sourav.png" alt="Sourav Kumar" className='mobile-avatar' />
                    <h1>Sourav Kumar</h1>
                    <p className='mobile-tagline'>Full-Stack Web Developer</p>
                    <p className='mobile-bio'>I build sleek, interactive & scalable web apps with React, Next.js, and modern JavaScript.</p>
                </div>

                <div className='mobile-section'>
                    <h2>Projects</h2>
                    <div className='mobile-projects'>
                        {projects.map((project) => {
                            const imgChild = project.children?.find(c => c.fileType === 'img');
                            const urlChild = project.children?.find(c => c.fileType === 'url');
                            return (
                                <div key={project.id} className='mobile-project-card'>
                                    {imgChild && (
                                        <img src={imgChild.imageUrl} alt={project.name} loading="lazy" />
                                    )}
                                    <div className='mobile-project-info'>
                                        <h3>{project.name}</h3>
                                        {urlChild?.href && (
                                            <a href={urlChild.href} target="_blank" rel="noopener noreferrer">
                                                View <ExternalLink size={12} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='mobile-section'>
                    <h2>Skills</h2>
                    <div className='mobile-skills'>
                        {techStack.map(({ category, items }) => (
                            <div key={category} className='mobile-skill-group'>
                                <h4>{category}</h4>
                                <div className='mobile-skill-pills'>
                                    {items.map((item, i) => (
                                        <span key={i}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mobile-section'>
                    <h2>Blog</h2>
                    <div className='mobile-blogs'>
                        {blogPosts.map(({ id, title, date, link }) => (
                            <a key={id} href={link} target="_blank" rel="noopener noreferrer" className='mobile-blog-card'>
                                <p className='mobile-blog-date'>{date}</p>
                                <h3>{title}</h3>
                            </a>
                        ))}
                    </div>
                </div>

                <div className='mobile-section'>
                    <h2>Connect</h2>
                    <div className='mobile-socials'>
                        {socials.map(({ id, bg, link, text, icon }) => (
                            <a key={id} href={link} target="_blank" rel="noopener noreferrer" style={{ background: bg }} className='mobile-social-btn'>
                                <img src={icon} alt={text} />
                                <span>{text}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className='mobile-section mobile-resume'>
                    <a href="files/my_resume.pdf" download className='mobile-resume-btn'>
                        <Download size={18} />
                        <span>Download Resume</span>
                    </a>
                </div>

                <footer className='mobile-footer'>
                    <p>Built with React, GSAP & ❤️</p>
                </footer>
            </div>
        </section>
    );
};

export default Welcome
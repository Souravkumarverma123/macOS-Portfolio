import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";
import useThemeStore from "#store/theme";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const { toggleTheme } = useThemeStore();
    const [time, setTime] = useState(dayjs().format("ddd MMM D h:mm A"));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs().format("ddd MMM D h:mm A"));
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleIconClick = (id) => {
        if (id === 4) toggleTheme();
    };

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" loading="eager" />
                <p className="font-bold">Sourav's Portfolio</p>

                <ul>
                    {
                        navLinks.map(({ id, name, type }) => (
                            <li key={id} onClick={() => openWindow(type)}>
                                <p>{name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <ul>
                    {
                        navIcons.map(({ id, img }) => (
                            <li key={id} onClick={() => handleIconClick(id)}>
                                <img src={img} className="icon-hover" alt={`icon-${id}`} loading="lazy" />
                            </li>
                        ))
                    }
                </ul>

                <time>{time}</time>
            </div>
        </nav>
    )
}

export default Navbar;
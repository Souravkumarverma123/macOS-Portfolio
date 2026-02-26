import { useEffect, useRef } from 'react';
import useContextMenuStore from '#store/contextmenu';

const ContextMenu = () => {
    const { isOpen, x, y, items, closeMenu } = useContextMenuStore();
    const menuRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClick = () => closeMenu();
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeMenu();
        };

        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, closeMenu]);

    // Adjust position to keep menu within viewport
    useEffect(() => {
        if (!isOpen || !menuRef.current) return;
        const el = menuRef.current;
        const rect = el.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        if (rect.right > vw) el.style.left = `${x - rect.width}px`;
        if (rect.bottom > vh) el.style.top = `${y - rect.height}px`;
    }, [isOpen, x, y]);

    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            className="context-menu"
            style={{ left: x, top: y }}
        >
            <ul>
                {items.map((item, i) => {
                    if (item.type === 'separator') {
                        return <li key={i} className="separator" />;
                    }
                    return (
                        <li
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                item.action?.();
                                closeMenu();
                            }}
                            className={item.disabled ? 'disabled' : ''}
                        >
                            {item.icon && <span className="menu-icon">{item.icon}</span>}
                            <span>{item.label}</span>
                            {item.shortcut && <span className="shortcut">{item.shortcut}</span>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ContextMenu;

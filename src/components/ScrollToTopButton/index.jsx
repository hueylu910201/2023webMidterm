import React, { useState, useEffect } from 'react';
import { theme } from 'antd';
import styles from "../ScrollToTopButton/ScrollToTopButton.module.css"

function ScrollToTopButton() {

    const {
        token: { colorButtonTop ,colorTextBase},
    } = theme.useToken();
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (y > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            id="scroll-to-top"
            onClick={handleClick}
            style={{ display: isVisible ? 'block' : 'none', backgroundColor: colorButtonTop }}
            className={styles.button}
        >   
            <a style={{color:colorTextBase}}>Top</a>
        </button>
    );
}

export default ScrollToTopButton;
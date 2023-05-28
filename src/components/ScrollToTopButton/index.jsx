import React, { useState, useEffect } from 'react';
import { theme } from 'antd';
import styles from "../ScrollToTopButton/ScrollToTopButton.module.css"

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

function ScrollToTopButton() {

    const {
        token: { colorButtonTop ,colorTextBase},
    } = theme.useToken();
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        const duration = 800; // 滚动的总时间，单位为毫秒
        const start = window.scrollY;
        const startTime = performance.now();
      
        const animateScroll = (timestamp) => {
          const currentTime = timestamp - startTime;
          const scrollProgress = currentTime / duration;
      
          if (currentTime >= duration) {
            window.scrollTo(0, 0);
            return;
          }
      
          const easeProgress = easeOutQuart(scrollProgress);
          const scrollDistance = start * (1 - easeProgress);
      
          window.scrollTo(0, scrollDistance);
          requestAnimationFrame(animateScroll);
        };
      
        requestAnimationFrame(animateScroll);
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
            <a style={{color:colorTextBase}}>▲</a>
        </button>
    );
}

export default ScrollToTopButton;
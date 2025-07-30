'use client';
import React, { useEffect } from 'react';

const ScrollProgress: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollableHeight) * 100;

            const progressBar = document.getElementById("scroll-progress") as HTMLElement;
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="scroll-progress" className="bg-[#d73e0f] h-1 fixed top-0 left-0 z-50"></div>
    );
};

export default ScrollProgress;

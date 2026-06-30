import { useEffect, useRef } from 'react';

export default function ScrollGlitch() {
  const requestRef = useRef<number>();
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Calculate velocity (abs delta)
      const velocity = Math.min(Math.abs(delta), 100); // Cap at 100
      
      // If scrolling fast enough, trigger the quantum glitch
      if (velocity > 5) {
        // Map velocity to distortion intensity
        const skewAmount = delta * 0.05; // Skew based on direction
        const rgbSplit = velocity * 0.15; // Max ~15px split
        const blurAmount = velocity * 0.02;

        document.documentElement.style.setProperty('--scroll-skew', `${skewAmount}deg`);
        document.documentElement.style.setProperty('--scroll-rgb', `${rgbSplit}px`);
        document.documentElement.style.setProperty('--scroll-blur', `${blurAmount}px`);
        document.documentElement.classList.add('is-scrolling');
      } else {
        // Decay back to normal rapidly
        document.documentElement.style.setProperty('--scroll-skew', `0deg`);
        document.documentElement.style.setProperty('--scroll-rgb', `0px`);
        document.documentElement.style.setProperty('--scroll-blur', `0px`);
        document.documentElement.classList.remove('is-scrolling');
      }

      requestRef.current = requestAnimationFrame(updateScroll);
    };

    requestRef.current = requestAnimationFrame(updateScroll);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return null;
}

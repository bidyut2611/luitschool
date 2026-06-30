import { useEffect, useRef, useState } from 'react';

export default function CursorEffects() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Refs for tracking coordinates without triggering re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const trailingPos = useRef({ x: 0, y: 0 });

  // Refs for direct DOM manipulation to avoid lag
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    const iteractableElements = document.querySelectorAll('a, button, input, select, textarea');
    iteractableElements.forEach(el => (el as HTMLElement).style.cursor = 'none');

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const clickable = !!target.closest('a, button, input, select, textarea, .card-hover, .magnetic-btn');
      setIsHovering(clickable);

      // Immediately update the fast dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0) scale(${isClicking ? 0.5 : isHovering ? 2 : 1})`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Trailing animation loop for the outer ring and spotlight
    let animationFrameId: number;
    const render = () => {
      const prev = trailingPos.current;
      const target = mousePos.current;
      
      // Lerp (linear interpolation) for smooth trailing
      const dx = target.x - prev.x;
      const dy = target.y - prev.y;
      
      trailingPos.current = {
        x: prev.x + dx * 0.25, // 0.25 = smooth trailing speed
        y: prev.y + dy * 0.25,
      };

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailingPos.current.x - 20}px, ${trailingPos.current.y - 20}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }
      
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${trailingPos.current.x - 300}px, ${trailingPos.current.y - 300}px, 0) scale(${isClicking ? 0.8 : isHovering ? 1.2 : 1})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'auto';
    };
  }, [isHovering, isClicking, isVisible]); // Only re-bind when state changes (which is rare compared to mouse movement)

  return (
    <>
      {/* 1. Core Dot (Immediate) */}
      <div 
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference transition-transform duration-75"
        style={{
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)'
        }}
      />

      {/* 2. Robotic Trailing Ring & HUD */}
      <div 
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center transition-transform duration-100"
        style={{
          width: '100px',
          height: '100px',
          marginLeft: '-50px',
          marginTop: '-50px',
          opacity: isVisible ? (isClicking ? 0.3 : isHovering ? 1 : 0.6) : 0,
        }}
      >
        {/* Outer rotating brackets */}
        <div 
          className="absolute inset-0 border border-brand-400/30 rounded-full animate-spin-slow transition-transform duration-300"
          style={{ transform: `scale(${isHovering ? 1.2 : 0.8})` }}
        >
          <div className="absolute -top-1 left-1/2 w-4 h-2 -translate-x-1/2 bg-brand-400" />
          <div className="absolute -bottom-1 left-1/2 w-4 h-2 -translate-x-1/2 bg-brand-400" />
        </div>

        {/* Inner reverse rotating dashed ring */}
        <div 
          className="absolute inset-2 border border-dashed border-brand-400/50 rounded-full animate-spin-reverse-slow transition-transform duration-300"
          style={{ transform: `scale(${isHovering ? 1.1 : 0.7})` }}
        />

        {/* Center crosshairs */}
        <div className="absolute inset-0 transition-transform duration-300" style={{ transform: `scale(${isHovering ? 0.9 : 0.5})` }}>
          <div className="absolute top-0 left-1/2 h-full w-[1px] -translate-x-1/2 bg-brand-400/30" />
          <div className="absolute left-0 top-1/2 w-full h-[1px] -translate-y-1/2 bg-brand-400/30" />
        </div>

        {/* Lock-on square that appears on hover */}
        <div 
          className="absolute w-12 h-12 border-2 border-brand-400 transition-all duration-300"
          style={{ 
            opacity: isHovering ? 1 : 0,
            transform: `scale(${isHovering ? 1 : 2}) rotate(${isHovering ? '45deg' : '0deg'})`,
            boxShadow: isHovering ? '0 0 15px rgba(245,158,11,0.5), inset 0 0 10px rgba(245,158,11,0.3)' : 'none'
          }}
        />
      </div>

      {/* 3. The large soft spotlight */}
      <div 
        ref={spotlightRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] w-[600px] h-[600px] rounded-full blur-[80px] transition-transform duration-300 mix-blend-screen"
        style={{
          background: isHovering 
            ? 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 60%)' 
            : 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
}

import { useEffect, useRef, useState } from 'react';

interface PixelRevealProps {
  src: string;
  alt: string;
  className?: string;
  srcSet?: string;
  sizes?: string;
}

export default function PixelReveal({ src, alt, className = '', srcSet, sizes }: PixelRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [gridSize] = useState({ rows: 12, cols: 12 }); // 144 blocks
  
  // Create an array of random indices to determine the order blocks disappear
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  useEffect(() => {
    // Generate random order once on mount
    const totalBlocks = gridSize.rows * gridSize.cols;
    const indices = Array.from({ length: totalBlocks }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledIndices(indices);
  }, [gridSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && shuffledIndices.length > 0) {
          // Add a tiny delay so user sees the "pixelated" state for a split second before reveal
          setTimeout(() => setIsVisible(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shuffledIndices]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* The actual image underneath */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* The pixel grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none flex flex-wrap z-10"
        style={{ opacity: isVisible ? 1 : 1 }} 
      >
        {shuffledIndices.length > 0 && Array.from({ length: gridSize.rows * gridSize.cols }).map((_, i) => {
          // Find when this specific block should animate based on its randomized index
          const revealOrderIndex = shuffledIndices.indexOf(i);
          // Calculate delay: spreading the animation over 1.5 seconds
          const delay = (revealOrderIndex / (gridSize.rows * gridSize.cols)) * 1.5;
          
          return (
            <div
              key={i}
              className="bg-[#0a0a0c] border border-white/[0.02]"
              style={{
                width: `${100 / gridSize.cols}%`,
                height: `${100 / gridSize.rows}%`,
                opacity: isVisible ? 0 : 1,
                transform: isVisible ? 'scale(0)' : 'scale(1)',
                transition: `opacity 0.3s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${delay}s`,
                // Add a glowing bright color right before it disappears for extreme sci-fi feel
                backgroundColor: isVisible ? 'rgba(245, 158, 11, 0.8)' : '#0a0a0c',
              }}
            />
          );
        })}
      </div>
      
      {/* Sci-fi scanning line effect on top of the image */}
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden mix-blend-overlay opacity-30">
          <div className="h-1 w-full bg-brand-400 shadow-[0_0_15px_3px_#fbbf24] animate-scanline" />
        </div>
      )}
    </div>
  );
}

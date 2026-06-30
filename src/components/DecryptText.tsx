import React, { useEffect, useState, useRef } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|[]\\;\':",./<>?';

interface DecryptTextProps {
  text: string;
  speed?: number; // ms per iteration
  maxIterations?: number; // how many random chars before settling
  className?: string;
  elementType?: React.ElementType;
}

export default function DecryptText({ 
  text, 
  speed = 40, 
  maxIterations = 10,
  className = '',
  elementType: Element = 'span' 
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startDecryption();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startDecryption = () => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    // We animate letter by letter from left to right
    interval = setInterval(() => {
      setDisplayText(
        text.split('')
          .map((char, index) => {
            if (char === ' ') return ' '; // Preserve spaces immediately
            
            // If we've passed the threshold for this letter, show actual char
            // Multiply iteration by a factor to make later letters decrypt later
            if (iteration > (index * (maxIterations / text.length)) + maxIterations) {
              return char;
            }
            
            // Otherwise show random char
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('')
      );

      // Total iterations needed is maxIterations plus the time it takes to reach the last letter
      if (iteration > maxIterations + maxIterations) {
        clearInterval(interval);
        setDisplayText(text); // Ensure it perfectly matches at end
      }
      
      iteration += 1;
    }, speed);
  };

  return (
    <Element ref={containerRef as any} className={`${className} font-mono font-bold tracking-tight`}>
      {hasAnimated ? displayText : text.replace(/[^\s]/g, '-')}
    </Element>
  );
}

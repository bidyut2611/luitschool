import { useEffect, useState } from 'react';

export default function BootSequence() {
  const [isBooting, setIsBooting] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only run boot sequence once per session
    if (sessionStorage.getItem('booted')) {
      setIsBooting(false);
      return;
    }

    const bootSequence = [
      'INITIALIZING NEURAL INTERFACE...',
      'ESTABLISHING SECURE CONNECTION...',
      'DECRYPTING CORE ASSETS: [||||||||  ]',
      'LOADING LUIT PROTOCOLS...',
      'CALIBRATING 3D SPACE MATRIX...',
      'OVERRIDING MANUAL CONTROLS...',
      'SYSTEM ONLINE.'
    ];

    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        setProgress(Math.floor(((currentLine + 1) / bootSequence.length) * 100));
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsBooting(false);
          sessionStorage.setItem('booted', 'true');
        }, 800);
      }
    }, 250); // Fast printing

    return () => clearInterval(interval);
  }, []);

  if (!isBooting) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex flex-col items-start justify-end bg-[#050505] p-8 md:p-12 font-mono text-sm sm:text-base transition-opacity duration-700 pointer-events-none">
      
      {/* Glitch Overlay during boot */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="w-full h-full animate-scanline bg-brand-400" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {lines.map((line, i) => (
          <div key={i} className="text-brand-400 font-bold mb-2 tracking-widest opacity-90 animate-pulse-fast">
            {'>'} {line}
          </div>
        ))}
        
        {/* Progress Bar */}
        <div className="mt-8 flex items-center gap-4 w-full">
          <div className="text-brand-300">SYS_LOAD:</div>
          <div className="h-2 flex-1 border border-brand-400/30 bg-black overflow-hidden p-[2px]">
            <div 
              className="h-full bg-brand-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-brand-300">{progress}%</div>
        </div>
      </div>
      
      {/* HUD Accents */}
      <div className="absolute top-8 right-8 text-brand-400/50 text-xs text-right hidden sm:block">
        <div>LAT: 26.1445° N</div>
        <div>LON: 91.7362° E</div>
        <div>UPLINK: ACTIVE</div>
      </div>
    </div>
  );
}

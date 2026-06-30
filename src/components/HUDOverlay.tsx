import { useEffect, useState } from 'react';

export default function HUDOverlay() {
  const [telemetry, setTelemetry] = useState({ 
    alpha: Math.random().toFixed(4), 
    beta: Math.random().toFixed(4),
    time: new Date().toLocaleTimeString('en-US', { hour12: false })
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        alpha: Math.random().toFixed(4),
        beta: Math.random().toFixed(4),
        time: new Date().toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 2 })
      });
    }, 100); // 10fps update for robotic feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden mix-blend-screen opacity-40">
      
      {/* Corner targeting brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-brand-400/60" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-brand-400/60" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-brand-400/60" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-brand-400/60" />

      {/* Telemetry Data (Bottom Left) */}
      <div className="absolute bottom-8 left-8 font-mono text-[0.65rem] text-brand-300/70 hidden sm:block">
        <div>DATA STREAM: ACTIVE</div>
        <div>SYS_TIME: {telemetry.time}</div>
        <div>TRK_A: {telemetry.alpha}</div>
        <div>TRK_B: {telemetry.beta}</div>
      </div>

      {/* Hex/Binary Stream (Right Side) */}
      <div className="absolute top-1/3 right-4 font-mono text-[0.55rem] text-brand-400/40 tracking-widest leading-relaxed writing-vertical-rl hidden lg:block">
        {'01101100 01110101 01101001 01110100'.split(' ').map((bin, i) => (
          <div key={i} className="my-1 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
            {bin}
          </div>
        ))}
      </div>

      {/* Rotating Background Tech Ring */}
      <div className="absolute top-1/2 left-1/2 w-[120vh] h-[120vh] border border-brand-400/5 rounded-full" style={{ animation: 'spin-custom 60s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-brand-400/20 rotate-45" />
        <div className="absolute bottom-0 left-1/2 w-4 h-4 -translate-x-1/2 translate-y-1/2 bg-brand-400/20 rotate-45" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 w-[80vh] h-[80vh] border border-dashed border-brand-400/10 rounded-full" style={{ animation: 'spin-reverse 40s linear infinite' }} />
    </div>
  );
}

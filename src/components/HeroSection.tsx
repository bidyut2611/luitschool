import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DecryptText from './DecryptText';
import MagneticButton from './MagneticButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" id="hero">
      {/* Hero content */}
      <div className="container-page relative z-10 pb-0" style={{ paddingTop: 'clamp(8rem, 22vh, 14rem)' }}>
        <span className="tag rise">Guwahati, Assam</span>

        <h1 className="display-hero rise rise-2 mt-5 max-w-4xl font-bold text-white leading-tight">
          <DecryptText text="Northeast's only " elementType="span" />
          <span className="text-gradient glitch-text" data-text="Startup Focused">Startup Focused</span>
          <br className="hidden md:block" />
          <DecryptText text=" Business School" elementType="span" />
        </h1>

        <p className="rise rise-3 mt-4 font-display text-xl md:text-2xl font-bold text-white/90">
          Six weeks. A real business. Yours.
        </p>

        <p className="rise rise-3 mt-5 max-w-xl text-white/55 leading-relaxed">
          Luit is a business school in Guwahati where you do not just study business. You start one.
          In 6 weeks of full days you go from an idea to a real business with a real product in the market.
          A restaurant, an app, a shop, anything. After that, we support you for life.
        </p>

        <div className="rise rise-4 mt-7 flex flex-wrap items-center gap-3">
          <MagneticButton
            to="/apply"
            className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300"
          >
            Enroll now <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton
            to="/approach"
            className="liquid-glass rounded-full px-7 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            See how it works
          </MagneticButton>
        </div>
      </div>

      {/* Glance strip */}
      <div className="rise rise-4 relative z-10 mt-12 border-t border-white/10 section-glass-light">
        <div className="container-page grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
          {[
            { label: 'The program', value: '6 weeks, full days' },
            { label: 'After that', value: 'Lifetime support' },
            { label: 'Where', value: 'Guwahati, in person' },
            { label: 'You leave with', value: 'A running business' },
          ].map((item) => (
            <div key={item.label} className="glance-cell px-1 md:px-6">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/40">{item.label}</div>
              <div className="mt-1.5 font-display text-base md:text-lg font-bold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

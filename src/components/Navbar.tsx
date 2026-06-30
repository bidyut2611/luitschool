import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const navLinks = [
  { label: 'The Program', href: '/programs' },
  { label: 'How it works', href: '/approach' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <nav className="liquid-glass-strong rounded-full px-5 py-3 flex items-center justify-between max-w-5xl mx-auto border border-white/5 shadow-[0_0_20px_-5px_rgba(245,158,11,0.2)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Luit School of Business home">
          <svg className="h-9 w-9 shrink-0 animate-spin-slow" style={{ animationDuration: '30s' }} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="11" fill="#f59e0b" />
            <text x="20" y="27" textAnchor="middle" fontFamily="'Bricolage Grotesque', system-ui, sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.5" fill="#fff">L</text>
            <circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-white">Luit</span>
            <span className="-mt-px text-[0.55rem] font-semibold uppercase tracking-[0.06em] text-white/50">School of Business</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5 ${isActive ? 'text-white bg-white/5' : 'text-white/70 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2">
            Talk to us
          </Link>
          <MagneticButton
            to="/apply"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm font-semibold text-brand-50 bg-brand-400 hover:bg-brand-500 transition-colors shadow-[0_0_15px_-3px_rgba(245,158,11,0.5)]"
          >
            Enroll now
          </MagneticButton>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/5 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-2 liquid-glass-strong rounded-2xl p-3 max-w-5xl mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            Talk to us
          </Link>
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="liquid-glass rounded-full px-6 py-3 text-sm font-semibold text-white text-center block mt-2 hover:bg-white/5 transition-colors"
          >
            Enroll now
          </Link>
        </div>
      )}
    </header>
  );
}

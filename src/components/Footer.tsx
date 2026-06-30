import { Camera, Send, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="section-glass-strong text-white border-t border-white/[0.06]" id="contact">
      {/* Big CTA band */}
      <div className="container-page border-b border-white/10 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="display-2 max-w-2xl font-bold text-white">
            Ready to build something that is yours?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/apply"
              className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300"
            >
              Enroll now
            </Link>
            <Link
              to="/contact"
              className="liquid-glass rounded-full px-7 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="11" fill="#fff" />
              <text x="20" y="27" textAnchor="middle" fontFamily="'Bricolage Grotesque', system-ui, sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.5" fill="#d97706">L</text>
            </svg>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-white">Luit</span>
              <span className="-mt-px text-[0.6rem] font-semibold uppercase tracking-[0.06em] text-white/55">School of Business</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Luit School of Business. Leave with a real business, not just a certificate.
          </p>
          <p className="mt-4 text-sm text-white/45">Guwahati, Northeast India</p>

          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            {[
              { icon: Camera, label: 'Instagram' },
              { icon: Send, label: 'Twitter' },
              { icon: Globe, label: 'Website' },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="liquid-glass rounded-full p-3.5 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: 'The Program', href: '/programs' },
              { label: 'How it works', href: '/approach' },
              { label: 'Admissions', href: '/admissions' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="text-white/65 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Programs</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/programs/founder-program" className="text-white/65 transition-colors hover:text-white">
                The Founder Program
              </Link>
            </li>
          </ul>

          <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="mailto:hello@luitschool.com" className="text-white/65 transition-colors hover:text-white">
                hello@luitschool.com
              </a>
            </li>
            <li>
              <span className="text-white/65">+91 70861 99464</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-white/45 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Luit School of Business. Operated by Luit School of Business, Guwahati, Northeast India.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
            <a href="https://luitschool.com/privacy" className="text-white/60 transition-colors hover:text-white">Privacy Policy</a>
            <a href="https://luitschool.com/terms" className="text-white/60 transition-colors hover:text-white">Terms &amp; Conditions</a>
            <a href="https://luitschool.com/refund" className="text-white/60 transition-colors hover:text-white">Cancellation &amp; Refund</a>
            <Link to="/contact" className="text-white/60 transition-colors hover:text-white">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

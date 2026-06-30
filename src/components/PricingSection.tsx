import { Link } from 'react-router-dom';

export default function PricingSection() {
  return (
    <section className="section-glass section-pad depth-grid" id="pricing">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div className="reveal">
            <span className="tag">The investment</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-white md:text-4xl">
              One fee. Everything included.
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              One fee covers the full six weeks and lifetime support after you finish.
              We are not competing with anyone. We are setting the standard.
            </p>
            <Link
              to="/apply"
              className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300 inline-flex items-center gap-2 mt-7"
            >
              Enroll now
            </Link>
          </div>

          {/* Pricing card */}
          <div className="reveal card glow-card p-7 md:p-8">
            <span className="tag">Lifetime support included</span>

            <div className="mt-5 font-display text-3xl font-bold md:text-4xl">
              <span className="text-gradient">₹1,20,000</span>
            </div>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              Indian students
            </p>

            <div className="mt-5 border-t border-white/[0.06] pt-5">
              <div className="font-display text-xl font-bold text-white">₹5,00,000</div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                International students
              </p>
            </div>

            <div className="mt-5 border-t border-white/[0.06] pt-5">
              <div className="font-display text-lg font-bold text-white">₹1,000</div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                One time admission fee
              </p>
            </div>

            <p className="mt-5 text-sm text-white/45 leading-relaxed">
              One fee for everything. Six weeks in person plus lifetime support. You can pay in installments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { number: '6', desc: 'Weeks of full days, in person. We go all in together' },
  { number: '4', desc: 'Weeks until your product is in the market, in front of real customers' },
  { number: '1', desc: 'Real business that is yours, built from your own idea' },
  { number: 'Life', desc: 'How long we support you after you finish. Nobody else offers this' },
];

export default function StatsSection() {
  return (
    <section className="section-glass section-pad depth-grid" id="stats">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <div className="reveal overflow-hidden rounded-[1.75rem] border border-white/[0.06]">
            <img
              src="https://luitschool.com/images/work-w1920.webp"
              srcSet="https://luitschool.com/images/work-w480.webp 480w, https://luitschool.com/images/work-w800.webp 800w, https://luitschool.com/images/work-w1280.webp 1280w, https://luitschool.com/images/work-w1920.webp 1920w"
              sizes="(min-width: 1024px) 42vw, 100vw"
              alt="A founder at work"
              width={2400}
              height={3599}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content */}
          <div>
            <span className="tag reveal">The point</span>
            <h2 className="display-2 reveal mt-6 font-bold text-white">
              You don't leave with a certificate. You leave with a business.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={stat.number} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="text-gradient font-display text-5xl md:text-6xl font-bold">{stat.number}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

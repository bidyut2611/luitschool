const weeks = [
  {
    num: 1,
    label: 'Week 1',
    title: 'Find and test your idea',
    desc: 'Talk to real customers and choose your idea. A restaurant, an app, a shop, a service. Any business that solves a real problem.',
  },
  {
    num: 2,
    label: 'Week 2',
    title: 'Build your product',
    desc: 'Make a product people can buy, using modern tools and AI. You build fast and you build it properly.',
  },
  {
    num: 3,
    label: 'Week 3',
    title: 'Learn to sell',
    desc: 'Go out and talk to real customers. You learn pricing, how to present, and how to close. Real selling, not role play.',
  },
  {
    num: 4,
    label: 'Week 4',
    title: 'Your product enters the market',
    desc: 'Your product is ready and in front of real customers. From here, everything you do happens in a real business.',
  },
  {
    num: 5,
    label: 'Week 5',
    title: 'Market and grow',
    desc: 'Run real marketing campaigns with real budgets. Learn from the numbers, not from guesses.',
  },
  {
    num: 6,
    label: 'Week 6',
    title: 'Demo day and your plan',
    desc: 'Show your live business to founders, mentors and investors. Then we plan your first year of growth together.',
  },
];

export default function TimelineSection() {
  return (
    <section className="border-y border-white/[0.06] section-glass-strong section-pad shimmer" id="timeline">
      <div className="container-page">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="tag">The six weeks</span>
            <h2 className="display-2 mt-6 font-bold text-white">
              From a blank page to a business, week by week.
            </h2>
          </div>
          <a href="https://luitschool.com/approach" className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors shrink-0">
            See the full approach
          </a>
        </div>

        <div className="mt-14">
          <ol className="grid gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {weeks.map((week, i) => (
              <li key={week.num} className={`reveal reveal-delay-${(i % 4) + 1} relative flex flex-col`}>
                {/* Connector line (desktop only, not on last in row) */}
                {i < 5 && (i + 1) % 3 !== 0 && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 left-14 top-[1.4rem] hidden h-px bg-gradient-to-r from-brand-400/50 to-brand-400/15 lg:block"
                  />
                )}

                {/* Number badge */}
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/60 bg-surface font-display text-sm font-bold text-brand-300 shadow-[0_0_28px_-6px] shadow-brand-400/50 animate-pulse-glow">
                  {week.num}
                </span>

                {/* Card */}
                <div className="card mt-5 flex-1 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-300">
                    {week.label}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{week.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-white/50">{week.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

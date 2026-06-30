const cards = [
  {
    num: '01',
    title: 'Your class is a real business',
    desc: 'You do not study other companies from far away. You start your own business, and every lesson comes from running it.',
  },
  {
    num: '02',
    title: 'In the market by week 4',
    desc: 'By week 4 your product is real and in front of real customers. Then you sell and market it, for real.',
  },
  {
    num: '03',
    title: 'Any business, your business',
    desc: 'A restaurant, a mobile app, a shop, a service. We do not care what kind of business it is. We care that it is real, and we take you from idea to product to market.',
  },
  {
    num: '04',
    title: 'Learn from international founders',
    desc: 'Founders who built companies in the USA and Europe teach you in person and online. You learn from people who have really done it.',
  },
  {
    num: '05',
    title: 'In person, full days',
    desc: 'This is not an online course. Six weeks of full days in Guwahati, with your teachers in the same room.',
  },
  {
    num: '06',
    title: 'Support for life',
    desc: 'The program ends. Our support does not. Office hours, demo days and our network stay open to you for life.',
  },
];

export default function ApproachSection() {
  return (
    <section className="border-y border-white/[0.06] section-glass-strong section-pad shimmer" id="approach">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="tag">How it works</span>
          <h2 className="display-2 mt-6 font-bold text-white">
            We swapped the lecture hall for the workshop.
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Six convictions about how founders are actually made.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div key={card.num} className={`reveal reveal-delay-${(i % 4) + 1} card card-hover p-7`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/15 font-display text-lg font-bold text-brand-300">
                {card.num}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-white/50">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

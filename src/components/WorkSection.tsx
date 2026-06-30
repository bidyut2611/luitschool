const workCards = [
  {
    tag: 'Sell',
    title: 'Sell to real people',
    desc: 'Take your real product to real people and learn how to sell, face to face. Not role play. Real selling.',
    image: 'https://luitschool.com/images/sell-w1920.webp',
    srcSet: 'https://luitschool.com/images/sell-w480.webp 480w, https://luitschool.com/images/sell-w800.webp 800w, https://luitschool.com/images/sell-w1280.webp 1280w, https://luitschool.com/images/sell-w1920.webp 1920w',
  },
  {
    tag: 'Build',
    title: 'Build something people pay for',
    desc: 'Design, build and launch a product people can use and pay for, with modern tools and AI.',
    image: 'https://luitschool.com/images/build-w1920.webp',
    srcSet: 'https://luitschool.com/images/build-w480.webp 480w, https://luitschool.com/images/build-w800.webp 800w, https://luitschool.com/images/build-w1280.webp 1280w, https://luitschool.com/images/build-w1920.webp 1920w',
  },
  {
    tag: 'Launch',
    title: 'Take the stage on demo day',
    desc: 'In week 6, show your live business to a room of founders, mentors and investors.',
    image: 'https://luitschool.com/images/celebrate-w1920.webp',
    srcSet: 'https://luitschool.com/images/celebrate-w480.webp 480w, https://luitschool.com/images/celebrate-w800.webp 800w, https://luitschool.com/images/celebrate-w1280.webp 1280w, https://luitschool.com/images/celebrate-w1920.webp 1920w',
  },
];

export default function WorkSection() {
  return (
    <section className="section-glass section-pad depth-grid">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="tag">The work</span>
          <h2 className="display-2 mt-6 font-bold text-white">What your six weeks look like.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {workCards.map((card, i) => (
            <article key={card.tag} className={`reveal reveal-delay-${i + 1} card card-hover group flex flex-col overflow-hidden`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  srcSet={card.srcSet}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt={card.title}
                  width={2400}
                  height={1600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white bg-black/50 border border-white/15 backdrop-blur-sm">
                  {card.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-white/50">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const cofounders = [
  {
    name: 'Reynaldo Enriquez',
    role: 'Cofounder and Lead Faculty',
    desc: 'Reynaldo is a cofounder of Luit and teaches the core of building a company, from first idea to first revenue.',
    image: 'https://luitschool.com/images/people/reynaldo-enriquez.webp',
  },
  {
    name: 'Rimpi Medhi',
    role: 'Cofounder and CEO',
    desc: 'Rimpi is a cofounder of Luit and runs the school on the ground in Guwahati, from admissions to the day-to-day of every cohort.',
    image: 'https://luitschool.com/images/people/rimpi-medhi.webp',
  },
];

const visitingFounders = [
  {
    name: 'Alex Theuma',
    role: 'Founder, SaaStock',
    desc: 'Built one of Europe\'s leading business conferences, connecting thousands of founders and investors.',
    image: 'https://luitschool.com/images/people/theuma.webp',
  },
  {
    name: 'Stefan Smulders',
    role: 'Founder, Expandi',
    desc: 'Built Expandi to $10M in revenue, reaching $7M in its first two years, with no investor money.',
    image: 'https://luitschool.com/images/people/smulders.webp',
  },
  {
    name: 'Alexandru Stan',
    role: 'Founder, Tekpon',
    desc: 'Built Tekpon into a leading SaaS marketplace and acquired The Next Web, a major European tech platform.',
    image: 'https://luitschool.com/images/people/stan.webp',
  },
  {
    name: 'Cristian Dina',
    role: 'CRO, The Next Web',
    desc: 'Cofounder of Tekpon and a Forbes 30 Under 30 honoree for building high growth tech businesses.',
    image: 'https://luitschool.com/images/people/dina.webp',
  },
  {
    name: 'Rahul Lakhaney',
    role: 'Founder and operator',
    desc: 'Reached $12M in annual revenue in under a year through fast, careful execution.',
    image: 'https://luitschool.com/images/people/lakhaney.webp',
  },
  {
    name: 'Yusuf Gad',
    role: 'Founder and operator',
    desc: 'Scaled a company from zero to $10M, securing funding before he had even launched the product.',
    image: 'https://luitschool.com/images/people/gad.webp',
  },
];

export default function TeamSection() {
  return (
    <section className="section-glass section-pad depth-grid" id="team">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="tag">Who teaches you</span>
          <h2 className="display-2 mt-6 font-bold text-white">
            People who've done it, not just taught it.
          </h2>
        </div>

        {/* Cofounders */}
        <div className="mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {cofounders.map((person) => (
            <article key={person.name} className="reveal card flex flex-col overflow-hidden sm:flex-row">
              <div className="relative aspect-square w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-44">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center p-7">
                <span className="tag w-fit">Cofounder</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">{person.name}</h3>
                <p className="text-sm font-medium text-brand-400">{person.role}</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/50">{person.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Visiting founders */}
        <div className="reveal mt-16 max-w-3xl">
          <span className="tag">Visiting founders</span>
          <h3 className="display-2 mt-6 font-bold text-white">Meet some of your instructors.</h3>
          <p className="mt-5 text-lg text-white/50">
            Your instructors are founders who built and scaled real companies in the USA and
            Europe. They come to Guwahati to teach in person, and join classes online through
            the program. These are only some of the people you will learn from.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visitingFounders.map((person, i) => (
            <article key={person.name} className={`reveal reveal-delay-${(i % 4) + 1} card card-hover group flex flex-col overflow-hidden`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="font-display text-lg font-bold text-white">{person.name}</h4>
                <p className="text-sm font-medium text-brand-400">{person.role}</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/50">{person.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Briefcase, Globe, CheckCircle } from 'lucide-react';

const extras = [
  {
    icon: BookOpen,
    title: 'Real classroom discussions',
    desc: 'Learn how founders really make decisions. Real cases, discussed together in the room, not theory from a textbook.',
  },
  {
    icon: Briefcase,
    title: 'Real world projects',
    desc: 'Work on live projects for real companies and solve problems that matter to them.',
  },
  {
    icon: Globe,
    title: 'A powerful network',
    desc: 'Meet founders, operators and investors, in India and abroad, through our faculty.',
  },
  {
    icon: CheckCircle,
    title: 'From idea to product',
    desc: 'We work next to you, step by step, to turn your idea into a product people want to buy, whatever your business is.',
  },
];

export default function ExtrasSection() {
  return (
    <section className="border-y border-white/[0.06] section-glass-strong section-pad shimmer">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="tag">More than a classroom</span>
          <h2 className="display-2 mt-6 font-bold text-white">What you also get.</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`reveal reveal-delay-${i + 1} card card-hover p-7`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-white/50">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

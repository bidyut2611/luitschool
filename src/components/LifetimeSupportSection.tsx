import { Clock, ArrowUp, Globe, Wrench } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Your first year has a plan',
    desc: 'Office hours every month with faculty and mentors. We work on whatever your business needs right now.',
  },
  {
    icon: ArrowUp,
    title: 'Demo days through the year',
    desc: 'Come back and show your progress to the network. A real deadline every few months keeps you moving.',
  },
  {
    icon: Globe,
    title: 'A network for life',
    desc: 'Stay connected to our founders, mentors and students, in India, Europe and the US, for as long as you build.',
  },
  {
    icon: Wrench,
    title: 'Help when things break',
    desc: 'A launch that went wrong, a price that does not work, a market that moved. You will never have to fix it alone.',
  },
];

export default function LifetimeSupportSection() {
  return (
    <section className="relative overflow-hidden" id="support">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://luitschool.com/images/night-w1920.webp"
          srcSet="https://luitschool.com/images/night-w480.webp 480w, https://luitschool.com/images/night-w800.webp 800w, https://luitschool.com/images/night-w1280.webp 1280w, https://luitschool.com/images/night-w1920.webp 1920w"
          sizes="100vw"
          alt=""
          width={2400}
          height={3601}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[#0a0a0c]/75 backdrop-blur-sm" />
      <div className="grain absolute inset-0 -z-10" />

      <div className="container-page section-pad">
        <div className="reveal max-w-2xl">
          <span className="tag">After the program</span>
          <h2 className="display-2 mt-6 font-bold text-white">
            Lifetime support. Nobody else offers this.
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Most programs say goodbye after the last class. We do not. Your first year follows a clear plan
            with us, and after that you stay part of Luit for life. Your outcome is our outcome.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className={`reveal reveal-delay-${i + 1} card card-hover p-7 bg-surface/60 backdrop-blur-sm`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-white/50">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

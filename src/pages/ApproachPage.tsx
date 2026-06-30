import { Link } from 'react-router-dom';
import { Clock, ArrowUp, Globe, Wrench } from 'lucide-react';
import Footer from '../components/Footer';
import PixelReveal from '../components/PixelReveal';

const principles = [
  { num: '01', title: 'Your class is a real business', desc: 'You do not study other companies from far away. You start your own business, and every lesson comes from running it.' },
  { num: '02', title: 'In the market by week 4', desc: 'By week 4 your product is real and in front of real customers. Then you sell and market it, for real.' },
  { num: '03', title: 'Any business, your business', desc: 'A restaurant, a mobile app, a shop, a service. We do not care what kind of business it is. We care that it is real, and we take you from idea to product to market.' },
  { num: '04', title: 'Learn from international founders', desc: 'Founders who built companies in the USA and Europe teach you in person and online. You learn from people who have really done it.' },
  { num: '05', title: 'In person, full days', desc: 'This is not an online course. Six weeks of full days in Guwahati, with your teachers in the same room.' },
  { num: '06', title: 'Support for life', desc: 'The program ends. Our support does not. Office hours, demo days and our network stay open to you for life.' },
];

const weeks = [
  { num: 1, label: 'Week 1', title: 'Find and test your idea', desc: 'Talk to real customers and choose your idea. A restaurant, an app, a shop, a service. Any business that solves a real problem.' },
  { num: 2, label: 'Week 2', title: 'Build your product', desc: 'Make a product people can buy, using modern tools and AI. You build fast and you build it properly.' },
  { num: 3, label: 'Week 3', title: 'Learn to sell', desc: 'Go out and talk to real customers. You learn pricing, how to present, and how to close. Real selling, not role play.' },
  { num: 4, label: 'Week 4', title: 'Your product enters the market', desc: 'Your product is ready and in front of real customers. From here, everything you do happens in a real business.' },
  { num: 5, label: 'Week 5', title: 'Market and grow', desc: 'Run real marketing campaigns with real budgets. Learn from the numbers, not from guesses.' },
  { num: 6, label: 'Week 6', title: 'Demo day and your plan', desc: 'Show your live business to founders, mentors and investors. Then we plan your first year of growth together.' },
];

const support = [
  { title: 'Your first year has a plan', desc: 'Office hours every month with faculty and mentors. We work on whatever your business needs right now.' },
  { title: 'Demo days through the year', desc: 'Come back and show your progress to the network. A real deadline every few months keeps you moving.' },
  { title: 'A network for life', desc: 'Stay connected to our founders, mentors and students, in India, Europe and the US, for as long as you build.' },
  { title: 'Help when things break', desc: 'A launch that went wrong, a price that does not work, a market that moved. You will never have to fix it alone.' },
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-glass-strong section-pad pt-32 md:pt-40 text-center shimmer">
        <div className="container-page">
          <span className="tag mx-auto reveal">How it works</span>
          <h1 className="display-hero mx-auto mt-7 max-w-4xl font-bold text-white reveal">We don't just teach business. You leave running one.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/55 reveal">
            The whole program stands on one simple idea: you learn much more by doing the work
            than by hearing about it. So from day one you are testing, building and selling,
            next to teachers who have really done it.
          </p>
        </div>
      </section>

      {/* Banner image */}
      <section className="section-glass section-pad">
        <div className="container-page">
          <div className="reveal overflow-hidden rounded-[2rem] border border-white/[0.06]">
            <PixelReveal 
              src="https://luitschool.com/images/market-w1920.webp" 
              srcSet="https://luitschool.com/images/market-w480.webp 480w, https://luitschool.com/images/market-w800.webp 800w, https://luitschool.com/images/market-w1280.webp 1280w, https://luitschool.com/images/market-w1920.webp 1920w" 
              sizes="(min-width: 80rem) 77rem, 100vw" 
              alt="Real marketing numbers on a real dashboard" 
              className="aspect-[21/9] w-full"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-white/[0.06] section-glass-strong section-pad shimmer">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <span className="tag">The principles</span>
            <h2 className="display-2 mt-6 font-bold text-white">Six ways we replace lectures with doing.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((card, i) => (
              <div key={card.num} className={`reveal reveal-delay-${(i % 4) + 1} card card-hover p-7`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/15 font-display text-lg font-bold text-brand-300">{card.num}</div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-white/50">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-glass section-pad depth-grid">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <span className="tag">The six week journey</span>
            <h2 className="display-2 mt-6 font-bold text-white">From idea to a live business.</h2>
            <p className="mt-5 text-lg text-white/50">Six weeks, one real business that is yours at the end. By week 4 your product is in the market, in front of real customers.</p>
          </div>
          <div className="mt-12">
            <ol className="grid gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {weeks.map((week, i) => (
                <li key={week.num} className={`reveal reveal-delay-${(i % 4) + 1} relative flex flex-col`}>
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/60 bg-surface font-display text-sm font-bold text-brand-300 shadow-[0_0_28px_-6px] shadow-brand-400/50 animate-pulse-glow">{week.num}</span>
                  <div className="card mt-5 flex-1 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-300">{week.label}</span>
                    <h3 className="mt-3 font-display text-lg font-bold text-white">{week.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-white/50">{week.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Lifetime support */}
      <section className="border-y border-white/[0.06] section-glass-strong section-pad shimmer">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <span className="tag">After the program</span>
            <h2 className="display-2 mt-6 font-bold text-white">Lifetime support. Nobody else offers this.</h2>
            <p className="mt-5 text-lg text-white/50">Most programs say goodbye after the last class. We do not. Your first year follows a clear plan with us, and after that you stay part of Luit for life. Your outcome is our outcome.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {support.map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${i + 1} card card-hover p-7`}>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-12">
            <Link to="/apply" className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300 inline-flex items-center gap-2">Enroll now</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

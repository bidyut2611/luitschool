import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PixelReveal from '../components/PixelReveal';

export default function AboutPage() {
  return (
    <>
      <section className="container-page grid items-center gap-12 pb-16 pt-32 md:pt-40 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="tag reveal">About us</span>
          <h1 className="display-hero mt-7 font-bold text-white reveal">A school for a new generation.</h1>
          <p className="mt-7 max-w-2xl text-lg text-white/55 reveal">
            Luit was born from a simple frustration: too many business graduates know the
            theory but have never built anything real. So we turned the model around. Here you
            start a real business in six weeks, in Guwahati, next to people who have done it,
            and we support you for life after that. We are the first and only school of business
            in Northeast India built this way, and we care about one thing above all: your outcome.
          </p>
        </div>
        <div className="reveal overflow-hidden rounded-[1.75rem] border border-white/[0.06] section-glass">
          <PixelReveal
            src="https://luitschool.com/images/cohort-w1920.webp"
            srcSet="https://luitschool.com/images/cohort-w480.webp 480w, https://luitschool.com/images/cohort-w800.webp 800w, https://luitschool.com/images/cohort-w1280.webp 1280w, https://luitschool.com/images/cohort-w1920.webp 1920w"
            sizes="(min-width: 1024px) 45vw, 100vw"
            alt="The Luit community"
            className="aspect-[4/3] w-full"
          />
        </div>
      </section>

      <section className="section-glass-strong py-20 text-white border-y border-white/[0.06] shimmer">
        <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="reveal">
            <div className="font-display text-5xl font-bold text-brand-400">6</div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">Weeks of full days, in person. We go all in together</p>
          </div>
          <div className="reveal">
            <div className="font-display text-5xl font-bold text-brand-400">4</div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">Weeks until your product is in the market, in front of real customers</p>
          </div>
          <div className="reveal">
            <div className="font-display text-5xl font-bold text-brand-400">1</div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">Real business that is yours, built from your own idea</p>
          </div>
          <div className="reveal">
            <div className="font-display text-5xl font-bold text-brand-400">Life</div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">How long we support you after you finish. Nobody else offers this</p>
          </div>
        </div>
      </section>

      <section className="section-glass container-page grid gap-12 py-24 lg:grid-cols-2 depth-grid">
        <div className="reveal">
          <h2 className="font-display text-3xl font-bold text-brand-300">Why we exist</h2>
          <p className="mt-5 leading-relaxed text-white/55">
            The Northeast is full of talent and ambition, but too many people leave to build
            somewhere else. We want to change that. Everything we teach was learned building
            real companies in the USA and Europe. We brought it home to Assam, so a new
            generation can build strong businesses right here, without leaving.
          </p>
        </div>
        <div className="reveal">
          <h2 className="font-display text-3xl font-bold text-brand-300">How we teach</h2>
          <p className="mt-5 leading-relaxed text-white/55">
            Real work. Teachers who have built companies, not just studied them,
            including international founders who teach in person and online. You will build a
            product, run campaigns, close sales and present at demo day. You finish already
            running the business that proves you can do it.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

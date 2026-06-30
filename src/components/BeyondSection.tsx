import { Link } from 'react-router-dom';

export default function BeyondSection() {
  return (
    <section className="section-glass section-pad depth-grid">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="tag">Beyond the program</span>
          <h2 className="display-2 mt-6 font-bold text-white">Where this can take you.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="reveal card glow-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-white">A scholarship to Europe</h3>
            <p className="mt-3 leading-relaxed text-white/50">
              Our best students can earn a scholarship to do an internship in a real company in Europe.
              You work inside the company, see how it is run, and bring that experience back to your own business.
            </p>
          </div>
          <div className="reveal reveal-delay-1 card glow-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-white">We can incubate your business</h3>
            <p className="mt-3 leading-relaxed text-white/50">
              If your business shows real promise, we can take it into our incubator.
              You get a place to work, close guidance from our faculty, and our network behind you while your business grows.
            </p>
          </div>
        </div>

        <div className="reveal mt-10">
          <Link
            to="/apply"
            className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300 inline-flex items-center gap-2"
          >
            Enroll now
          </Link>
        </div>
      </div>
    </section>
  );
}

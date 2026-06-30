import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function ProgramsPage() {
  return (
    <>
      <section className="section-glass-strong section-pad pt-32 md:pt-40 text-center shimmer">
        <div className="container-page">
          <span className="tag mx-auto reveal">The program</span>
          <h1 className="display-hero mx-auto mt-7 max-w-4xl font-bold text-white reveal">One program. Built to make founders.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/55 reveal">
            Everything we do points at one outcome: you leave with a real, running business.
            Six weeks of full days in Guwahati, your product in the market by week 4,
            and lifetime support after you finish.
          </p>
        </div>
      </section>

      <section className="section-glass section-pad depth-grid">
        <div className="container-page">
          <Link to="/programs/founder-program" className="reveal card card-hover group grid overflow-hidden lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <img
                src="https://luitschool.com/images/build-w1920.webp"
                srcSet="https://luitschool.com/images/build-w480.webp 480w, https://luitschool.com/images/build-w800.webp 800w, https://luitschool.com/images/build-w1280.webp 1280w, https://luitschool.com/images/build-w1920.webp 1920w"
                sizes="(min-width: 1024px) 38rem, 100vw"
                alt="The Founder Program"
                width={2400}
                height={1556}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="tag w-fit">Flagship</span>
              <h2 className="mt-5 font-display text-3xl font-bold text-white">The Founder Program</h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Six weeks of full days to start a real business, guided by faculty who have built companies of their own.
                Your product is in the market by week 4, and in week 6 you show your business at demo day.
                After that, our support stays with you for life.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
                <span className="text-white font-medium">6 weeks, full days</span>
                <span>In person, Guwahati</span>
              </div>
              <span className="mt-7 inline-flex items-center gap-1.5 font-semibold text-brand-400">
                See the full program
                <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

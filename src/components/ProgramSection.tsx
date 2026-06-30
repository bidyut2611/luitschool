import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PixelReveal from './PixelReveal';

export default function ProgramSection() {
  return (
    <section className="border-y border-white/[0.06] section-glass-strong section-pad shimmer" id="program">
      <div className="container-page">
        <span className="tag reveal">The program</span>
        <h2 className="display-2 reveal mt-6 max-w-2xl font-bold text-white">
          One program, built to make founders.
        </h2>

        <Link to="/programs/founder-program" className="reveal mt-12 card card-hover group grid overflow-hidden lg:grid-cols-2 block">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <PixelReveal
              src="https://luitschool.com/images/build-w1920.webp"
              srcSet="https://luitschool.com/images/build-w480.webp 480w, https://luitschool.com/images/build-w800.webp 800w, https://luitschool.com/images/build-w1280.webp 1280w, https://luitschool.com/images/build-w1920.webp 1920w"
              sizes="(min-width: 1024px) 38rem, 100vw"
              alt="The Founder Program"
              className="h-full w-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20 pointer-events-none" />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="tag w-fit">Flagship</span>
            <h3 className="mt-5 font-display text-3xl font-bold text-white">The Founder Program</h3>
            <p className="mt-4 text-white/50 leading-relaxed">
              Six weeks of full days to start a real business, guided by faculty who have built companies
              of their own. Your product is in the market by week 4, and in week 6 you show your business
              at demo day. After that, our support stays with you for life.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
              <span className="text-white font-medium">6 weeks, full days</span>
              <span>In person, Guwahati</span>
            </div>
            <span className="mt-7 inline-flex items-center gap-1.5 font-semibold text-brand-400">
              Explore the program
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

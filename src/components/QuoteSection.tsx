export default function QuoteSection() {
  return (
    <section className="border-t border-white/[0.06] section-glass-strong section-pad shimmer">
      <div className="container-page">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="tag mx-auto">From the cofounder</span>
          <blockquote className="mt-8 font-display text-2xl font-bold leading-snug text-white md:text-4xl">
            <span className="text-brand-400">&ldquo;</span>
            Most schools give you a certificate and say goodbye. At Luit you start a real business in six weeks,
            the right way, and we support you for life. Your outcome is our outcome. That is the whole school.
            <span className="text-brand-400">&rdquo;</span>
          </blockquote>

          <div className="mt-9 flex items-center justify-center gap-4">
            <img
              src="https://luitschool.com/images/people/reynaldo-enriquez.webp"
              alt="Reynaldo Enriquez"
              loading="lazy"
              decoding="async"
              className="h-14 w-14 rounded-full object-cover object-top"
            />
            <div className="text-left">
              <div className="font-semibold text-white">Reynaldo Enriquez</div>
              <div className="text-sm text-white/50">Cofounder and Lead Faculty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CinematicBanner() {
  return (
    <section className="section-glass section-pad">
      <div className="container-page">
        <div className="reveal grain relative overflow-hidden rounded-[2rem] border border-white/[0.06]">
          <img
            src="https://luitschool.com/images/film-w1920.webp"
            srcSet="https://luitschool.com/images/film-w480.webp 480w, https://luitschool.com/images/film-w800.webp 800w, https://luitschool.com/images/film-w1280.webp 1280w, https://luitschool.com/images/film-w1920.webp 1920w"
            sizes="(min-width: 80rem) 77rem, 100vw"
            alt="Guwahati at night"
            width={2400}
            height={1600}
            className="aspect-[16/10] w-full object-cover sm:aspect-[21/9] kenburns"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/45 to-black/20" />
          <div className="grain absolute inset-0" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="display-2 max-w-3xl font-bold text-white">
              By week 4, you are <span className="text-gradient">in the market.</span>
            </h2>
            <p className="mt-4 max-w-md text-white/55 md:text-lg">
              A real product, in front of real customers. In week 6 you show your business to the world at demo day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

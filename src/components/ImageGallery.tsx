const images = [
  { src: 'https://luitschool.com/images/guwahati-w1920.webp', srcSet: 'https://luitschool.com/images/guwahati-w480.webp 480w, https://luitschool.com/images/guwahati-w800.webp 800w, https://luitschool.com/images/guwahati-w1280.webp 1280w, https://luitschool.com/images/guwahati-w1920.webp 1920w' },
  { src: 'https://luitschool.com/images/hero-w1920.webp', srcSet: 'https://luitschool.com/images/hero-w480.webp 480w, https://luitschool.com/images/hero-w800.webp 800w, https://luitschool.com/images/hero-w1280.webp 1280w, https://luitschool.com/images/hero-w1920.webp 1920w' },
  { src: 'https://luitschool.com/images/detail-w1920.webp', srcSet: 'https://luitschool.com/images/detail-w480.webp 480w, https://luitschool.com/images/detail-w800.webp 800w, https://luitschool.com/images/detail-w1280.webp 1280w, https://luitschool.com/images/detail-w1920.webp 1920w' },
  { src: 'https://luitschool.com/images/night-w1920.webp', srcSet: 'https://luitschool.com/images/night-w480.webp 480w, https://luitschool.com/images/night-w800.webp 800w, https://luitschool.com/images/night-w1280.webp 1280w, https://luitschool.com/images/night-w1920.webp 1920w' },
  { src: 'https://luitschool.com/images/sell-w1920.webp', srcSet: 'https://luitschool.com/images/sell-w480.webp 480w, https://luitschool.com/images/sell-w800.webp 800w, https://luitschool.com/images/sell-w1280.webp 1280w, https://luitschool.com/images/sell-w1920.webp 1920w' },
  { src: 'https://luitschool.com/images/celebrate-w1920.webp', srcSet: 'https://luitschool.com/images/celebrate-w480.webp 480w, https://luitschool.com/images/celebrate-w800.webp 800w, https://luitschool.com/images/celebrate-w1280.webp 1280w, https://luitschool.com/images/celebrate-w1920.webp 1920w' },
  { src: 'https://luitschool.com/images/work-w1920.webp', srcSet: 'https://luitschool.com/images/work-w480.webp 480w, https://luitschool.com/images/work-w800.webp 800w, https://luitschool.com/images/work-w1280.webp 1280w, https://luitschool.com/images/work-w1920.webp 1920w' },
  { src: 'https://luitschool.com/images/cohort-w1920.webp', srcSet: 'https://luitschool.com/images/cohort-w480.webp 480w, https://luitschool.com/images/cohort-w800.webp 800w, https://luitschool.com/images/cohort-w1280.webp 1280w, https://luitschool.com/images/cohort-w1920.webp 1920w' },
];

export default function ImageGallery() {
  return (
    <section className="overflow-hidden py-2 section-glass-light">
      <div className="marquee-track-gallery gap-4">
        {/* First set */}
        {images.map((img, i) => (
          <div
            key={`a-${i}`}
            className="h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/[0.06] md:h-72 md:w-[26rem]"
          >
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="(min-width: 768px) 26rem, 20rem"
              alt=""
              width={2400}
              height={1600}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, i) => (
          <div
            key={`b-${i}`}
            className="h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/[0.06] md:h-72 md:w-[26rem]"
          >
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="(min-width: 768px) 26rem, 20rem"
              alt=""
              width={2400}
              height={1600}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

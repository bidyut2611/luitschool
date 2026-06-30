const items = [
  'Find your idea',
  'Build your product',
  'Sell to real customers',
  'In the market by week 4',
  'Demo day',
  'Lifetime support',
];

export default function MarqueeStrip() {
  const renderItems = (alt: boolean) =>
    items.map((item, i) => (
      <span
        key={`${alt ? 'b' : 'a'}-${i}`}
        className={`flex items-center gap-10 whitespace-nowrap font-display text-xl font-bold ${
          i % 2 === 0 ? 'text-white/70' : 'text-white/30'
        }`}
      >
        {item}
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      </span>
    ));

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] section-glass-light py-5 shimmer">
      <div className="marquee-track gap-10">
        {renderItems(false)}
        {renderItems(true)}
      </div>
    </div>
  );
}

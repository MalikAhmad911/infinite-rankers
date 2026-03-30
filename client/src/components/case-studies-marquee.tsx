import { useState } from "react";

export interface MarqueeCaseStudy {
  badge: string;
  title: string;
  business: string;
  metrics: { value: string; label: string }[];
  quote: string;
  author?: string;
}

interface CaseStudiesMarqueeProps {
  cases: MarqueeCaseStudy[];
  label?: string;
  title?: string;
  description?: string;
  animationDuration?: string;
}

export default function CaseStudiesMarquee({
  cases,
  label = "Proven Results",
  title = "Real Businesses. Real Revenue Growth.",
  description = "A representative sample of results our AI Revenue Systems have generated.",
  animationDuration = "55s",
}: CaseStudiesMarqueeProps) {
  const [paused, setPaused] = useState(false);
  const duplicated = [...cases, ...cases];

  return (
    <section
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white overflow-hidden"
      data-testid="case-studies-marquee-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            {label}
          </span>
          <h2
            className="font-bold text-gray-900 mb-3 sm:mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
          >
            {title}
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
          >
            {description}
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        data-testid="case-studies-marquee-strip"
      >
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 sm:gap-6 animate-slide-left"
          style={{
            width: "max-content",
            animationDuration,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {duplicated.map((cs, i) => (
            <div
              key={i}
              className="w-[300px] sm:w-[360px] flex-shrink-0 bg-white rounded-xl border border-gray-200/80 p-4 sm:p-5 shadow-sm"
              data-testid={`case-study-card-${i}`}
            >
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 mb-2">
                {cs.badge}
              </span>
              <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-0.5">
                {cs.title}
              </h3>
              <p className="text-[11px] text-gray-400 mb-3 truncate">{cs.business}</p>

              <div className="grid grid-cols-2 gap-2 mb-3">
                {cs.metrics.slice(0, 4).map((m, j) => (
                  <div
                    key={j}
                    className="text-center p-2 rounded-lg bg-blue-50/70 border border-blue-100/50"
                  >
                    <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none mb-0.5">
                      {m.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative pl-3 border-l-2 border-blue-100">
                <p className="text-[11px] text-gray-500 italic leading-relaxed line-clamp-3">
                  &ldquo;{cs.quote}&rdquo;
                </p>
                {cs.author && (
                  <p className="text-[10px] text-gray-400 mt-1 font-medium">— {cs.author}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

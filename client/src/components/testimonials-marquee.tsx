import { useState } from "react";
import { Star } from "lucide-react";

export interface MarqueeTestimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

interface TestimonialsMarqueeProps {
  testimonials: MarqueeTestimonial[];
  label?: string;
  title?: string;
  description?: string;
  animationDuration?: string;
  bgFrom?: string;
  bgTo?: string;
}

export default function TestimonialsMarquee({
  testimonials,
  label = "Client Proof",
  title = "Results-Led Testimonials",
  description = "Every testimonial below leads with a measurable outcome — not generic praise.",
  animationDuration = "45s",
  bgFrom = "gray-50",
  bgTo = "white",
}: TestimonialsMarqueeProps) {
  const [paused, setPaused] = useState(false);
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section
      className={`py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-${bgFrom}/60 to-${bgTo} overflow-hidden`}
      data-testid="testimonials-section"
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
        data-testid="testimonials-marquee-strip"
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"
        />
        <div
          className="flex gap-4 sm:gap-6 animate-slide-left"
          style={{
            width: "max-content",
            animationDuration,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {duplicated.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[300px] sm:w-[380px] flex-shrink-0 bg-white rounded-xl border border-gray-200/80 p-4 sm:p-6 shadow-sm"
              data-testid={`testimonial-card-${i}`}
            >
              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3 sm:mb-4 font-medium">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 sm:gap-3 pt-3 border-t border-gray-100">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

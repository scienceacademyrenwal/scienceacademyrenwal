import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide { url: string; caption: string }

export function AutoCarousel({ slides, interval = 2000 }: { slides: Slide[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);
  const n = slides.length;

  const go = useCallback((i: number) => setIdx(((i % n) + n) % n), [n]);
  const next = useCallback(() => setIdx((i) => (i + 1) % n), [n]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(next, interval);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [paused, next, interval]);

  return (
    <div
      className="relative w-full overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[60vh] min-h-[380px] md:h-[78vh]">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: i === idx ? 1 : 0 }}
            aria-hidden={i !== idx}
          >
            <img src={s.url} alt={s.caption} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-10 left-0 right-0 px-6 md:px-16">
              <div className="max-w-3xl">
                <div className="inline-block px-3 py-1 rounded-full glass-dark text-white/90 text-xs font-medium tracking-widest uppercase mb-3">
                  Science Academy · Moments
                </div>
                <h3 className="text-white text-2xl md:text-4xl font-bold text-balance">{s.caption}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 size-11 md:size-14 rounded-full glass-dark text-white grid place-items-center hover:bg-sky/80 transition"
      >
        <ChevronLeft className="size-5 md:size-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 size-11 md:size-14 rounded-full glass-dark text-white grid place-items-center hover:bg-sky/80 transition"
      >
        <ChevronRight className="size-5 md:size-6" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}

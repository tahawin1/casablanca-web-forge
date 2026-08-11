import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function AnimatedLine({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bar = barRef.current;
    if (!wrap || !bar) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(bar, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={`overflow-hidden bg-border ${className}`}>
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-primary via-teal to-violet"
      />
    </div>
  );
}

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export function Marquee({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    tweenRef.current = gsap.to(el, { xPercent: -50, duration: 24, ease: "none", repeat: -1 });
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max gap-10">
        <div className="flex shrink-0 items-center gap-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

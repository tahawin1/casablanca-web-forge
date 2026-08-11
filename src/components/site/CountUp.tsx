import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export function CountUp({
  value,
  suffix = "",
  duration = 1.2,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Start at the final value so the server-rendered HTML (and any visitor
  // whose JS hasn't run yet) shows the real number, not "0". The animation
  // below is a pure enhancement layered on top once it scrolls into view.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration,
        ease: "power2.out",
        onUpdate: () => setDisplay(Math.round(counter.val)),
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

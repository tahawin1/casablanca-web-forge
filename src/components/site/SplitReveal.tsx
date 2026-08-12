import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export function SplitReveal({
  children,
  className = "",
  tag = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  tag?: ElementType;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const Tag = tag;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "words", wordsClass: "split-word" });
      gsap.fromTo(
        split.words,
        { opacity: 0, y: 24, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.035,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={className} style={{ perspective: 600 }}>
      {children}
    </Tag>
  );
}

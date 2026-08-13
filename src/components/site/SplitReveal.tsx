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
  accentWords = [],
}: {
  children: ReactNode;
  className?: string;
  tag?: ElementType;
  delay?: number;
  accentWords?: string[];
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
      // Color specific words after splitting (not via a nested <span> in children) so every
      // word stays a direct child of the animated element — a nested wrapper breaks the
      // rotateX perspective inherited from the parent and leaves that word invisible.
      if (accentWords.length) {
        const targets = accentWords.map((w) => w.toLowerCase());
        split.words.forEach((word) => {
          const clean = (word.textContent ?? "").toLowerCase().replace(/[.,!?]/g, "");
          if (targets.includes(clean)) word.classList.add("text-ember");
        });
      }
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

    // Safety net: guarantee the text is readable shortly after mount even if the
    // ScrollTrigger animation never fires for some reason (e.g. an edge-case layout
    // this wasn't tested against) — this is above-the-fold, business-critical copy.
    const safety = window.setTimeout(() => {
      if (split) gsap.set(split.words, { opacity: 1, y: 0, rotateX: 0 });
    }, 2000);

    return () => {
      window.clearTimeout(safety);
      ctx.revert();
      split?.revert();
    };
  }, [delay, accentWords]);

  return (
    <Tag ref={ref} className={className} style={{ perspective: 600 }}>
      {children}
    </Tag>
  );
}

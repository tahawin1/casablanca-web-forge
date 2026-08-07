import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { gsap } from "@/lib/gsap";

const centerSpot = { "--spot-x": "50%", "--spot-y": "50%" } as CSSProperties;

export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMounted(false);
      return;
    }

    const tl = gsap.timeline({ onComplete: () => setMounted(false) });
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power3.out" },
        "-=0.25",
      )
      .to({}, { duration: 0.45 })
      .to(overlayRef.current, { opacity: 0, duration: 0.6, ease: "power2.inOut" });

    return () => {
      tl.kill();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="spotlight absolute inset-0" style={centerSpot} />
      <div ref={logoRef} className="relative flex flex-col items-center opacity-0">
        <span className="text-3xl font-bold tracking-tight sm:text-4xl">
          Studio<span className="text-ember">Web</span>
        </span>
        <div ref={lineRef} className="mt-4 h-px w-16 origin-center scale-x-0 bg-primary" />
      </div>
    </div>
  );
}

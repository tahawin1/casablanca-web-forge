import { useRef, type ReactNode, type MouseEvent } from "react";
import { gsap } from "@/lib/gsap";

export function Magnetic({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const quickX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  function ensureQuick() {
    if (!ref.current || quickX.current) return;
    quickX.current = gsap.quickTo(ref.current, "x", { duration: 0.4, ease: "power3.out" });
    quickY.current = gsap.quickTo(ref.current, "y", { duration: 0.4, ease: "power3.out" });
  }

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    ensureQuick();
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    quickX.current?.(x * 0.25);
    quickY.current?.(y * 0.3);
  }

  function handleLeave() {
    ensureQuick();
    quickX.current?.(0);
    quickY.current?.(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  speed: number;
  phase: number;
};

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots: Dot[] = [];
    let raf = 0;
    let sized = false;
    let running = true;

    function applySize() {
      const c = canvasRef.current;
      if (!c) return false;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w === 0 || h === 0) return false;
      c.width = w * dpr;
      c.height = h * dpr;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      const count = Math.round((w * h) / 9000);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.1 + 0.4) * dpr,
        baseAlpha: Math.random() * 0.5 + 0.15,
        speed: Math.random() * 0.06 + 0.015,
        phase: Math.random() * Math.PI * 2,
      }));
      sized = true;
      return true;
    }

    function draw(time: number) {
      const c = canvasRef.current;
      if (!c) return;
      const h = c.height / dpr;
      ctx.clearRect(0, 0, c.width, c.height);
      for (const d of dots) {
        if (!reduceMotion) {
          d.y -= d.speed;
          if (d.y < -4) d.y = h + 4;
        }
        const twinkle = reduceMotion ? 1 : 0.6 + 0.4 * Math.sin(time / 900 + d.phase);
        ctx.beginPath();
        ctx.arc(d.x * dpr, d.y * dpr, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${d.baseAlpha * twinkle})`;
        ctx.fill();
      }
      if (!reduceMotion && running) raf = requestAnimationFrame(draw);
    }

    function handleResize() {
      applySize();
      if (reduceMotion) draw(0);
    }

    function handleVisibility() {
      running = document.visibilityState === "visible";
      if (!running) {
        cancelAnimationFrame(raf);
        return;
      }
      if (!sized) applySize();
      if (reduceMotion) draw(0);
      else raf = requestAnimationFrame(draw);
    }

    // Most loads can size synchronously right away. If the viewport isn't
    // settled yet (or the tab is backgrounded, where rAF never fires),
    // fall back to a timer retry and to the visibilitychange handler above.
    if (applySize()) {
      draw(performance.now());
    } else {
      setTimeout(() => {
        if (applySize()) draw(performance.now());
      }, 50);
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}

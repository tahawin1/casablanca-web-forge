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
    let raf1 = 0;
    let raf2 = 0;
    let running = true;

    function applySize() {
      const c = canvasRef.current;
      if (!c) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w === 0 || h === 0) return;
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
      if (running && !reduceMotion) raf = requestAnimationFrame(draw);
      else cancelAnimationFrame(raf);
    }

    // Wait a couple of frames so the viewport has a real, settled size
    // before the first measurement (a same-frame read can still be 0x0).
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        applySize();
        draw(performance.now());
      });
    });

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
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

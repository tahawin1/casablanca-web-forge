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
    let running = true;

    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
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
      const canvas = canvasRef.current;
      if (!canvas || !ctx) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.y -= d.speed;
        if (d.y < -4) d.y = h + 4;
        const twinkle = reduceMotion ? 1 : 0.6 + 0.4 * Math.sin(time / 900 + d.phase);
        ctx.beginPath();
        ctx.arc(d.x * dpr, d.y * dpr, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${d.baseAlpha * twinkle})`;
        ctx.fill();
      }
      if (!reduceMotion && running) raf = requestAnimationFrame(draw);
    }

    function handleVisibility() {
      running = document.visibilityState === "visible";
      if (running && !reduceMotion) raf = requestAnimationFrame(draw);
      else cancelAnimationFrame(raf);
    }

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
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

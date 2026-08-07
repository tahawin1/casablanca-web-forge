import { useEffect, useRef, useState } from "react";

export function AnimatedLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`origin-left overflow-hidden bg-border ${className}`}>
      <div
        className={`h-full bg-gradient-to-r from-primary via-teal to-violet transition-transform duration-[1400ms] ease-out motion-reduce:transition-none ${
          visible ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

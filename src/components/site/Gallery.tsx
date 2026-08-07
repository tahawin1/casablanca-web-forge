import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "./data";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((v) => (v === null ? v : (v + 1) % projects.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((v) => (v === null ? v : (v - 1 + projects.length) % projects.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Galerie</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Aperçu en images</h2>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground">
        Cliquez sur une capture pour l'agrandir.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {projects.map((p, i) => (
          <Reveal key={p.domain} delay={i * 80}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block aspect-[4/3] w-full overflow-hidden rounded-xl border border-border"
            >
              <img
                src={p.image}
                alt={`Aperçu du site ${p.name}`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-5 backdrop-blur"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setOpenIndex(null)}
            className="absolute right-5 top-5 rounded-full border border-border p-2 text-foreground hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Précédent"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((v) => (v === null ? v : (v - 1 + projects.length) % projects.length));
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border p-2 text-foreground hover:bg-secondary sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <figure
            className="max-h-[80vh] max-w-3xl overflow-hidden rounded-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[openIndex].image}
              alt={`Aperçu du site ${projects[openIndex].name}`}
              className="max-h-[70vh] w-full object-contain"
            />
            <figcaption className="border-t border-border bg-card/60 px-5 py-3 text-sm">
              <span className="font-semibold">{projects[openIndex].name}</span>
              <span className="text-muted-foreground"> · {projects[openIndex].domain}</span>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Suivant"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((v) => (v === null ? v : (v + 1) % projects.length));
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border p-2 text-foreground hover:bg-secondary sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}

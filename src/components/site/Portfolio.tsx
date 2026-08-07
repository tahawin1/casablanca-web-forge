import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";
import { Reveal } from "./Reveal";

export function Portfolio() {
  return (
    <section id="realisations" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.domain} delay={i * 80}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group surface-card block overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
              <img
                src={p.image}
                alt={`Aperçu du site ${p.name}`}
                loading="lazy"
                width={1200}
                height={675}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.city} · {p.type}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-medium text-primary">{p.domain}</p>
            </div>
          </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

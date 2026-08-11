import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "./data";
import { Reveal } from "./Reveal";

function ProjectCardBody({ p }: { p: (typeof projects)[number] }) {
  return (
    <>
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
      <div className="p-6 pb-0">
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
            <li key={h} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function Portfolio() {
  return (
    <section id="realisations" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.domain} delay={i * 80}>
            <div className="group surface-card overflow-hidden rounded-2xl transition-transform hover:-translate-y-1">
              {p.caseStudySlug ? (
                <Link to={`/realisations/${p.caseStudySlug}`} className="block">
                  <ProjectCardBody p={p} />
                </Link>
              ) : (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                  <ProjectCardBody p={p} />
                </a>
              )}
              <div className="flex items-center justify-between gap-3 p-6 pt-5">
                <p className="text-xs font-medium text-primary">{p.domain}</p>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  {p.caseStudySlug && (
                    <Link
                      to={`/realisations/${p.caseStudySlug}`}
                      className="inline-flex items-center gap-1 text-foreground hover:text-primary"
                    >
                      <FileText className="h-3.5 w-3.5" /> Étude de cas
                    </Link>
                  )}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
                  >
                    Voir le site <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

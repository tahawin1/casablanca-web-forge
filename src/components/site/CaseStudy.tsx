import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Target, Wrench, Layers } from "lucide-react";
import { projects } from "./data";
import { Reveal } from "./Reveal";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";

export function CaseStudy({ slug }: { slug: string }) {
  const project = projects.find((p) => p.caseStudySlug === slug);

  if (!project) {
    return (
      <div className="relative min-h-screen text-foreground">
        <Header />
        <main className="mx-auto max-w-3xl px-5 py-32 text-center">
          <h1 className="text-3xl font-bold">Étude de cas introuvable</h1>
          <Link to="/realisations" className="mt-6 inline-block text-primary hover:opacity-80">
            Voir toutes les réalisations
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow={`Étude de cas · ${project.city}`}
          title={project.name}
          description={`${project.type} — ${project.summary}`}
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
            >
              Voir le site en ligne <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </PageHero>

        <section className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={project.image}
                alt={`Aperçu du site ${project.name}`}
                width={1200}
                height={675}
                className="w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            <Reveal>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-xl font-semibold">Le besoin</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
            </Reveal>
            <Reveal delay={100}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Layers className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-xl font-semibold">La solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="mt-16 border-t border-border pt-10">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet/10 text-violet">
                <Wrench className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-xl font-semibold">Fonctionnalités livrées</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              {project.techUsed && (
                <>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Stack technique
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.techUsed.map((t) => (
                      <li key={t} className="rounded-full bg-secondary px-3 py-1.5 text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Reveal>
        </section>

        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Un projet similaire en tête ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Devis gratuit sous 24h. On en discute par téléphone ou WhatsApp.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

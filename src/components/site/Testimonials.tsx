import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Avis clients
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ce qu'ils en disent</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.company} delay={i * 100} className="surface-card flex h-full flex-col rounded-2xl p-7">
              <Quote className="h-6 w-6 text-primary/50" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                « {t.quote} »
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                    {t.city ? ` · ${t.city}` : ""}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

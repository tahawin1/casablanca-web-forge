import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-grid-fade">
      <div className="glow-blob -top-24 left-1/4 h-72 w-72 bg-primary" />
      <div className="glow-blob top-10 right-0 h-64 w-64 bg-teal" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Accueil
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{eyebrow}</span>
        </nav>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.05] sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}

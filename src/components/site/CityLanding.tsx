import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { accentStyles } from "./accent";
import { services, PHONE, PHONE_TEL, PHONE_WA, type CityInfo } from "./data";

export function CityLanding({ city }: { city: CityInfo }) {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow={`Création de site web · ${city.name}`}
          title={`Un site web professionnel pour votre activité à ${city.name}`}
          description={city.intro}
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Appelez-moi : {PHONE}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(`Bonjour, je souhaite un devis pour un site web à ${city.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Magnetic>
          </div>
        </PageHero>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Offres</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Nos formules pour {city.name}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => {
              const a = accentStyles[s.accent];
              return (
                <Reveal key={s.title} delay={i * 100} className="surface-card rounded-2xl p-7">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className={`mt-1 text-sm font-semibold ${a.text}`}>{s.price}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80"
            >
              Voir les tarifs détaillés <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <Reveal className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">{city.faq.q}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{city.faq.a}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Portfolio
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Des sites déjà en ligne</h2>
            </div>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80"
            >
              Voir toutes les réalisations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Discutons de votre projet à {city.name}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Devis gratuit sous 24h, sans engagement.
            </p>
            <Magnetic className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

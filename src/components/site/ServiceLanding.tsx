import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight, Check } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { accentStyles } from "./accent";
import { PHONE, PHONE_TEL, PHONE_WA, type ServiceLandingInfo } from "./data";

export function ServiceLanding({ service }: { service: ServiceLandingInfo }) {
  const a = accentStyles[service.accent];

  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero eyebrow={service.eyebrow} title={service.title} description={service.intro}>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className={`text-sm font-semibold ${a.text}`}>{service.price}</span>
            <span className="text-sm text-muted-foreground">Livré en {service.delay}</span>
          </div>
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
                href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(`Bonjour, je souhaite un devis pour : ${service.title}.`)}`}
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

        <section className="mx-auto max-w-4xl px-5 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Ce qui est inclus
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Ce que vous obtenez</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={i * 80} className="surface-card flex items-start gap-3 rounded-xl p-4">
                <Check className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} />
                <span className="text-sm text-muted-foreground">{f}</span>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <h2 className="text-2xl font-bold sm:text-3xl">Questions fréquentes</h2>
            <div className="mt-8 space-y-8">
              {service.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 80}>
                  <h3 className="text-base font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Parlons de votre projet</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Devis gratuit sous 24h, sans engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
            >
              Voir des exemples
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, ArrowRight, Gauge, Clock, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-casablanca.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PHONE, PHONE_TEL, PHONE_WA, projects, services } from "@/components/site/data";
import { accentStyles } from "@/components/site/accent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Création de sites web à Casablanca — Portfolio & devis" },
      {
        name: "description",
        content:
          "Développeur web à Casablanca : sites vitrines, boutiques en ligne et applications sur mesure. Découvrez mes réalisations au Maroc et à l'international. Devis gratuit par téléphone.",
      },
      { property: "og:title", content: "Création de sites web à Casablanca — Portfolio & devis" },
      {
        property: "og:description",
        content:
          "Sites vitrines, e-commerce et applications sur mesure. Réalisations : Volt Sports Water, Taj Auto Accessoire, Hôtel Ryad, Pressing Zerktouni.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Studio Web Casablanca",
          description:
            "Création de sites web, boutiques en ligne et applications sur mesure à Casablanca.",
          telephone: PHONE,
          areaServed: "Maroc",
          address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
        }),
      },
    ],
  }),
  component: Index,
});

const stats = [
  { v: "4+", l: "sites en ligne" },
  { v: "7-10 j", l: "délai vitrine" },
  { v: "100 %", l: "responsive mobile" },
];

const trust = [
  { icon: Gauge, t: "Rapide & référencé", accent: "teal" as const },
  { icon: Clock, t: "Livré en 7-10 jours", accent: "amber" as const },
  { icon: ShieldCheck, t: "Suivi après livraison", accent: "violet" as const },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-grid-fade">
          <img
            src={heroImage}
            alt="Vue nocturne de Casablanca avec une trame numérique lumineuse"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="glow-blob -top-16 right-10 h-80 w-80 bg-primary" />
          <div className="glow-blob top-40 left-0 h-64 w-64 bg-teal" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Casablanca, Maroc
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">
              Je crée des sites web <span className="text-ember">modernes</span> qui vous ramènent
              des clients.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Sites vitrines, boutiques en ligne et applications sur mesure. Livrés vite, pensés
              pour convertir, optimisés pour Google.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Appelez-moi : {PHONE}
              </a>
              <a
                href={`https://wa.me/${PHONE_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-bold text-ember sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {projects.map((p) => (
                <li key={p.domain} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {p.domain}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {trust.map((t) => {
              const a = accentStyles[t.accent];
              return (
                <div key={t.t} className="surface-card flex items-center gap-4 rounded-2xl p-5">
                  <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.iconBg}`}>
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold">{t.t}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="realisations" className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Portfolio
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Des sites déjà en ligne</h2>
              </div>
              <Link
                to="/realisations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80"
              >
                Voir toutes les réalisations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {projects.slice(0, 3).map((p) => (
                <a
                  key={p.domain}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group surface-card overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
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
                  <div className="p-5">
                    <h3 className="truncate text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {p.city} · {p.type}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Services</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ce que je réalise</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80"
            >
              Voir les tarifs détaillés <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const a = accentStyles[s.accent];
              return (
                <div key={s.title} className="surface-card rounded-2xl p-7">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className={`mt-1 text-sm font-semibold ${a.text}`}>{s.price}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center">
            <h2 className="text-3xl font-bold sm:text-5xl">Parlons de votre projet</h2>
            <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
              Un appel de 10 minutes suffit pour savoir ce que votre site va coûter et combien de
              temps il prendra. Devis gratuit, sans engagement.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-xl font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Demander un devis <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour un site web.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-5 text-lg font-medium transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

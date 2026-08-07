import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, type MouseEvent } from "react";
import { Phone, MessageCircle, MapPin, ArrowRight, Gauge, Clock, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-casablanca.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { CountUp } from "@/components/site/CountUp";
import { Magnetic } from "@/components/site/Magnetic";
import { PHONE, PHONE_TEL, PHONE_WA, projects, services } from "@/components/site/data";
import { accentStyles } from "@/components/site/accent";
import { pageHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "Création de site web à Casablanca — Devis gratuit | Studio Web · Casablanca",
      description:
        "Développeur web à Casablanca : création de sites vitrines, boutiques en ligne et applications sur mesure. Sites rapides, responsives et optimisés pour Google. Devis gratuit sous 24h.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#business`,
          name: "Studio Web Casablanca",
          description:
            "Création de sites web, boutiques en ligne et applications sur mesure à Casablanca.",
          url: SITE_URL,
          telephone: PHONE,
          priceRange: "3500 MAD - sur devis",
          areaServed: ["Casablanca", "Maroc"],
          address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const results = [
  { value: 4, suffix: "+", l: "sites livrés" },
  { value: 7, suffix: "-10 j", l: "délai vitrine" },
  { value: 100, suffix: " %", l: "responsive mobile" },
];

const trust = [
  { icon: Gauge, t: "Rapide & référencé", accent: "teal" as const },
  { icon: Clock, t: "Livré en 7-10 jours", accent: "amber" as const },
  { icon: ShieldCheck, t: "Suivi après livraison", accent: "violet" as const },
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);

  function handleHeroMove(e: MouseEvent<HTMLElement>) {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--spot-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section
          ref={heroRef}
          onMouseMove={handleHeroMove}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-fade" />
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
          <div className="spotlight pointer-events-none absolute inset-0 transition-[background] duration-300 motion-reduce:hidden" />

          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> Casablanca, Maroc
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">
                Je crée des sites web <span className="text-ember">modernes</span> qui vous
                ramènent des clients.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Sites vitrines, boutiques en ligne et applications sur mesure. Livrés vite, pensés
                pour convertir, optimisés pour Google.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
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
                    href={`https://wa.me/${PHONE_WA}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <div className="mt-16 max-w-2xl border-t border-border pt-6">
              <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
                Sites déjà en ligne
              </p>
              <Marquee>
                {projects.map((p) => (
                  <span key={p.domain} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {p.domain}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {trust.map((t, i) => {
              const a = accentStyles[t.accent];
              return (
                <Reveal key={t.t} delay={i * 100} className="surface-card flex items-center gap-4 rounded-2xl p-5">
                  <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.iconBg}`}>
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold">{t.t}</span>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="grid grid-cols-3 gap-6 text-center">
              {results.map((r, i) => (
                <Reveal key={r.l} delay={i * 100}>
                  <div className="text-4xl font-bold text-ember sm:text-5xl">
                    <CountUp value={r.value} suffix={r.suffix} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                    {r.l}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="realisations" className="bg-card/40">
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
              {projects.slice(0, 3).map((p, i) => (
                <Reveal key={p.domain} delay={i * 100}>
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
                    <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                        Voir le site <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="truncate text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {p.city} · {p.type}
                    </p>
                  </div>
                </a>
                </Reveal>
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
            {services.map((s, i) => {
              const a = accentStyles[s.accent];
              return (
                <Reveal
                  key={s.title}
                  delay={i * 100}
                  className="surface-card group relative overflow-hidden rounded-2xl p-7 transition-colors hover:border-transparent"
                >
                  <span className={`absolute -right-3 -top-3 text-6xl font-bold opacity-[0.08] ${a.text}`}>
                    0{i + 1}
                  </span>
                  <h3 className="relative text-xl font-semibold">{s.title}</h3>
                  <p className={`relative mt-1 text-sm font-semibold ${a.text}`}>{s.price}</p>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </Reveal>
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
              <Magnetic>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-xl font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
                >
                  Demander un devis <ArrowRight className="h-5 w-5" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour un site web.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-5 text-lg font-medium transition-colors hover:bg-secondary"
                >
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

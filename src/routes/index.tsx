import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-casablanca.jpg";

const PHONE = "+212 6 12 34 56 78";
const PHONE_TEL = "+212612345678";
const PHONE_WA = "212612345678";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Création de sites web à Casablanca — Studio web" },
      {
        name: "description",
        content:
          "Sites vitrines, e-commerce et applications sur mesure à Casablanca. Design moderne, performance et référencement. Devis gratuit par téléphone.",
      },
      { property: "og:title", content: "Création de sites web à Casablanca" },
      {
        property: "og:description",
        content:
          "Studio web à Casablanca : sites vitrines, e-commerce et applications sur mesure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Site vitrine",
    price: "à partir de 3 500 DH",
    text: "Une présence en ligne claire et crédible : présentation, services, contact et Google Maps.",
  },
  {
    title: "E-commerce",
    price: "à partir de 8 000 DH",
    text: "Boutique en ligne complète : catalogue, panier, paiement et livraison au Maroc.",
  },
  {
    title: "Application sur mesure",
    price: "sur devis",
    text: "Espace client, réservation, tableau de bord ou outil interne développé selon vos besoins.",
  },
];

const steps = [
  { n: "01", t: "Appel découverte", d: "10 minutes au téléphone pour cadrer votre besoin et votre budget." },
  { n: "02", t: "Maquette", d: "Vous validez le design avant la moindre ligne de code." },
  { n: "03", t: "Développement", d: "Site rapide, responsive et optimisé pour le référencement." },
  { n: "04", t: "Mise en ligne", d: "Nom de domaine, hébergement et formation à la prise en main." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Barre téléphone toujours visible */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span className="truncate text-sm font-medium tracking-tight">
              Studio Web · Casablanca
            </span>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Vue nocturne de Casablanca avec une trame numérique lumineuse"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Casablanca, Maroc
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">
            Je crée des sites web <span className="text-ember">modernes</span> qui vous
            ramènent des clients.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Sites vitrines, boutiques en ligne et applications sur mesure. Livrés vite,
            pensés pour convertir, optimisés pour Google.
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
          <p className="mt-5 text-sm text-muted-foreground">
            Devis gratuit sous 24 h · Paiement en 2 fois · Suivi après livraison
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Ce que je réalise</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="surface-card rounded-2xl p-7">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{s.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Méthode */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Comment ça se passe</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="text-sm font-bold tracking-widest text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">Parlons de votre projet</h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Un simple appel suffit pour savoir ce que votre site va coûter et combien de temps
          il prendra.
        </p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-xl font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5 sm:text-2xl"
        >
          {PHONE}
          <ArrowUpRight className="h-6 w-6" />
        </a>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Studio Web · Casablanca · {PHONE}
      </footer>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-casablanca.jpg";
import { Header } from "@/components/site/Header";
import { Portfolio } from "@/components/site/Portfolio";
import { Services, Advantages, Process, Faq, Contact } from "@/components/site/Sections";
import { PHONE, PHONE_TEL, PHONE_WA, projects } from "@/components/site/data";

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

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
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

        <Portfolio />
        <Services />
        <Advantages />
        <Process />
        <Faq />
        <Contact />
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Studio Web · Casablanca · {PHONE}
      </footer>
    </div>
  );
}

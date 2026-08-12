import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { accentStyles } from "@/components/site/accent";
import { services, maintenance } from "@/components/site/data";
import { pageHead } from "@/lib/seo";

const faqs = [
  {
    q: "Combien coûte un site web au Maroc en 2026 ?",
    a: "Un site vitrine simple démarre autour de 3 500 DH, une boutique en ligne autour de 8 000 DH, et une application sur mesure se chiffre sur devis selon la complexité. Les tarifs varient beaucoup d'un prestataire à l'autre selon l'expérience, le design et ce qui est réellement inclus.",
  },
  {
    q: "Pourquoi certaines agences facturent 15 000 DH ou plus pour un site vitrine ?",
    a: "Le prix dépend du positionnement (agence avec locaux et équipe vs indépendant), du niveau de personnalisation du design, et parfois de services annexes (stratégie de marque, publicité). Un tarif plus élevé n'est pas toujours synonyme de meilleure qualité technique.",
  },
  {
    q: "Existe-t-il des solutions gratuites ou moins chères (Wix, WordPress) ?",
    a: "Oui, des outils comme Wix ou WordPress permettent de créer un site soi-même à moindre coût. La différence : un développeur construit un site sur mesure, plus rapide, mieux structuré pour le référencement, sans les limites d'un outil générique.",
  },
  {
    q: "Le prix affiché inclut-il le nom de domaine et l'hébergement ?",
    a: "Chez Najah Web, oui : domaine, hébergement, certificat SSL et adresses e-mail professionnelles sont inclus la première année dans le tarif annoncé.",
  },
  {
    q: "Y a-t-il des frais cachés après la livraison ?",
    a: "Non. Le seul coût récurrent est optionnel : un pack maintenance (hébergement, sauvegardes, petites modifications) si vous souhaitez ne pas gérer ça vous-même — sinon le site reste à vous sans obligation de paiement supplémentaire.",
  },
];

export const Route = createFileRoute("/prix-creation-site-web-maroc")({
  head: () => ({
    ...pageHead({
      title: "Prix création de site web au Maroc — Tarifs réels | Najah Web",
      description:
        "Combien coûte un site web au Maroc ? Tarifs réels pour un site vitrine, une boutique en ligne ou une application sur mesure, sans frais cachés. Devis gratuit sous 24h.",
      path: "/prix-creation-site-web-maroc",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Tarifs"
          title="Combien coûte un site web au Maroc ?"
          description="Des tarifs réels, sans frais cachés : ce que vous payez pour un site vitrine, une boutique en ligne ou une application sur mesure, développeur web freelance basé à Casablanca."
        />

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => {
              const a = accentStyles[s.accent];
              return (
                <Reveal key={s.title} delay={i * 100} className="surface-card rounded-2xl p-7">
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  <p className={`mt-1 text-2xl font-bold ${a.text}`}>{s.price}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 space-y-2">
                    {s.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={300} className="surface-card mt-6 rounded-2xl p-7">
            <h2 className="text-xl font-semibold">Maintenance mensuelle (optionnelle)</h2>
            <p className="mt-1 text-2xl font-bold text-primary">{maintenance.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{maintenance.text}</p>
          </Reveal>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">Pourquoi les prix varient autant ?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Entre un template acheté en ligne pour 500 DH et une agence qui facture 20 000 DH pour un
              site vitrine, la fourchette est large. Ce qui fait la différence : le sur-mesure (vs un
              modèle générique), le référencement pensé dès la conception, la rapidité de livraison, et
              le fait de traiter directement avec la personne qui code — sans intermédiaire commercial
              qui gonfle la facture.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">Questions fréquentes sur les tarifs</h2>
          <div className="mt-8 space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <h3 className="text-base font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Un devis précis pour votre projet ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Décrivez votre besoin, recevez un prix exact sous 24h, sans engagement.
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Database, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    pageHead({
      title: "À propos — Développeur web & ingénieur cybersécurité | Najah Web",
      description:
        "Sites web conçus par un ingénieur en cybersécurité : HTTPS, formulaires protégés, données clients traitées avec rigueur dès la conception, pas ajoutées après coup.",
      path: "/a-propos",
    }),
  component: AboutPage,
});

const securityPoints = [
  {
    icon: Lock,
    t: "HTTPS et bonnes pratiques dès le départ",
    d: "Certificat SSL, en-têtes de sécurité et configuration serveur pensés dès la conception, pas ajoutés en urgence après un incident.",
  },
  {
    icon: ShieldCheck,
    t: "Formulaires et entrées protégés",
    d: "Vos formulaires de contact et de commande sont construits pour résister aux tentatives d'injection et au spam automatisé.",
  },
  {
    icon: Database,
    t: "Données clients traitées avec rigueur",
    d: "Ce que votre site collecte (contacts, commandes) est géré avec la même exigence qu'un projet en environnement professionnel sensible.",
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="À propos"
          title="Développeur web, avec une formation d'ingénieur en cybersécurité"
          description="La majorité des freelances qui créent des sites web au Maroc n'ont jamais été formés à la sécurité informatique. Mon parcours d'ingénieur en cybersécurité change la manière dont j'aborde chaque site que je construis."
        />

        <section className="mx-auto max-w-4xl px-5 py-20">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl font-bold text-primary">
              N
            </span>
            <p className="text-base leading-relaxed text-muted-foreground">
              Je conçois et développe des sites vitrines, boutiques en ligne et applications sur
              mesure pour des entreprises et indépendants au Maroc. Avant de me spécialiser dans la
              création de sites web, ma formation d'ingénieur en cybersécurité m'a appris à penser
              en termes de risques, de failles et de protection des données — un réflexe que
              j'applique à chaque projet, sans surcoût.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Ce que ça change pour vous
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Un site pensé comme un ingénieur cybersécurité le construirait
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {securityPoints.map((p, i) => (
                <Reveal key={p.t} delay={i * 100} className="surface-card rounded-2xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Comment je travaille</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Un appel découverte, une maquette validée avant tout développement, puis un site livré
            rapidement — sans jargon technique inutile.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/methode"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
            >
              Voir la méthode en détail
            </Link>
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Discutons de votre projet <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

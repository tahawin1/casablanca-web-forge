import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Sections";
import { faqs } from "@/components/site/data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageHead({
      title: "Questions fréquentes sur la création de site web | Najah Web",
      description:
        "Délais de création, hébergement, modification du site, zone d'intervention, paiement : les réponses aux questions les plus posées sur la création d'un site web à Casablanca.",
      path: "/faq",
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Les réponses aux questions les plus posées"
          description="Vous ne trouvez pas votre réponse ? Écrivez-moi directement, je réponds sous 24h."
        />
        <Faq />
        <div className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Une autre question ?</h2>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
            >
              Contactez-moi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

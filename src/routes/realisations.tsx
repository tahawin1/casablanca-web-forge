import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Portfolio } from "@/components/site/Portfolio";
import { Gallery } from "@/components/site/Gallery";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/realisations")({
  head: () => pageHead({
    title: "Réalisations : sites web créés à Casablanca et au Maroc | Studio Web · Casablanca",
    description:
      "Découvrez les sites vitrines, boutiques en ligne et sites de marque déjà livrés au Maroc et à l'international : exemples concrets de création de site web par Studio Web Casablanca.",
    path: "/realisations",
  }),
  component: RealisationsPage,
});

function RealisationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Réalisations"
          title="Des sites déjà en ligne, pour de vrais clients"
          description="Quatre projets livrés au Maroc et à l'international : marque, e-commerce, hôtellerie et service local. Chacun cliquable pour voir le site réel."
        />
        <Portfolio />
        <div className="border-t border-border bg-card/40">
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Portfolio } from "@/components/site/Portfolio";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Studio Web Casablanca" },
      {
        name: "description",
        content:
          "Sites déjà livrés au Maroc et à l'international : marque, e-commerce, hôtellerie et service local.",
      },
    ],
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

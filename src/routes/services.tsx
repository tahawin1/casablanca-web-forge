import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Services, Advantages } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & tarifs — Studio Web Casablanca" },
      {
        name: "description",
        content:
          "Site vitrine, boutique en ligne ou application sur mesure : tarifs, contenu inclus et délais de livraison.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="Un site adapté à votre budget et vos objectifs"
          description="Trois formules claires, sans surprise : ce qui est inclus, le prix de départ et le délai de livraison."
        />
        <Services />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}

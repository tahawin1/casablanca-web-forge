import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Services, Advantages } from "@/components/site/Sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => pageHead({
    title: "Tarifs création de site web à Casablanca | Studio Web · Casablanca",
    description:
      "Prix pour la création d'un site vitrine, d'une boutique en ligne ou d'une application sur mesure à Casablanca : contenu inclus, tarifs de départ et délais de livraison.",
    path: "/services",
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="relative min-h-screen text-foreground">
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

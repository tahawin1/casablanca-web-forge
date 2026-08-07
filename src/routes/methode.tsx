import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/methode")({
  head: () => pageHead({
    title: "Comment se déroule la création de votre site web | Studio Web · Casablanca",
    description:
      "De l'appel découverte à la mise en ligne : les 4 étapes du processus de création de site web à Casablanca, sans jargon ni surprise.",
    path: "/methode",
  }),
  component: MethodePage,
});

function MethodePage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Méthode"
          title="Un processus simple, en 4 étapes"
          description="Pas de jargon, pas de surprise : vous savez à chaque étape où en est votre projet."
        />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

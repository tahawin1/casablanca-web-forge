import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Sections";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: [
      { title: "Méthode de travail — Studio Web Casablanca" },
      {
        name: "description",
        content: "De l'appel découverte à la mise en ligne : les 4 étapes pour livrer votre site.",
      },
    ],
  }),
  component: MethodePage,
});

function MethodePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

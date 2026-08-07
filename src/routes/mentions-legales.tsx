import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { PHONE } from "@/components/site/data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () => {
    const head = pageHead({
      title: "Mentions légales | Studio Web · Casablanca",
      description: "Mentions légales et informations sur l'éditeur du site.",
      path: "/mentions-legales",
    });
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex" }] };
  },
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero eyebrow="Informations légales" title="Mentions légales" />
        <section className="mx-auto max-w-3xl px-5 py-16">
          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Éditeur du site</h2>
              <p className="mt-3">
                Le site « Studio Web · Casablanca » est édité par un professionnel indépendant
                (auto-entrepreneur) exerçant une activité de création de sites web, basé à
                Casablanca, Maroc.
              </p>
              <p className="mt-2">
                Contact : <span className="text-foreground">{PHONE}</span> (téléphone / WhatsApp)
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Hébergement</h2>
              <p className="mt-3">
                Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
                États-Unis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Propriété intellectuelle</h2>
              <p className="mt-3">
                L'ensemble des contenus présents sur ce site (textes, visuels, mises en page) est la
                propriété de l'éditeur, sauf mention contraire. Les captures et liens des sites
                présentés en réalisations restent la propriété de leurs clients respectifs et sont
                utilisés à titre de portfolio, avec leur accord.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Données personnelles</h2>
              <p className="mt-3">
                Ce site ne dispose pas de base de données de collecte de formulaires : le formulaire
                de contact compose simplement un message et l'envoie via WhatsApp, sans stockage sur
                le serveur du site. Aucune donnée personnelle n'est conservée par l'éditeur en dehors
                de la conversation WhatsApp ou téléphonique que vous initiez volontairement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Responsabilité</h2>
              <p className="mt-3">
                L'éditeur s'efforce d'assurer l'exactitude des informations diffusées sur ce site
                mais ne saurait être tenu responsable des erreurs, omissions ou de l'indisponibilité
                temporaire du service, notamment liée à l'hébergement ou à la connexion internet de
                l'utilisateur.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

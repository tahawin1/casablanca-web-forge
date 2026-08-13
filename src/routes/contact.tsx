import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/Sections";
import { PHONE, PHONE_TEL, PHONE_WA } from "@/components/site/data";
import { pageHead, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead({
      title: "Contact — Devis gratuit site web Casablanca | Najah Web",
      description:
        "Demandez un devis gratuit pour la création de votre site web à Casablanca, par téléphone, WhatsApp ou via le formulaire de contact. Réponse sous 24h.",
      path: "/contact",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Discutons de votre projet"
          description="Devis gratuit sous 24h. Décrivez votre besoin, je vous réponds par téléphone ou WhatsApp."
        />
        <section className="mx-auto max-w-5xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Coordonnées</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <a href={`tel:${PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-foreground">
                      {PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal text-teal-foreground">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href={`https://wa.me/${PHONE_WA}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Discuter directement
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet text-violet-foreground">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Zone d'intervention</p>
                    <p className="text-sm text-muted-foreground">
                      Casablanca, et à distance partout au Maroc et à l'international.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Disponibilité</p>
                    <p className="text-sm text-muted-foreground">Lundi au samedi, 9h – 20h</p>
                  </div>
                </li>
              </ul>
            </div>

            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

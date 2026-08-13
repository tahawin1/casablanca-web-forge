import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { serviceLandings } from "@/components/site/data";
import { pageHead, breadcrumbLd } from "@/lib/seo";

const service = serviceLandings.find((s) => s.slug === "creation-site-e-commerce")!;

export const Route = createFileRoute("/creation-site-e-commerce")({
  head: () => ({
    ...pageHead({
      title: "Création de site e-commerce à Casablanca | Najah Web",
      description:
        "Création de boutique en ligne au Maroc : catalogue, paiement, livraison et gestion des stocks. Site e-commerce à partir de 8 000 DH, livré en 2 à 4 semaines.",
      path: "/creation-site-e-commerce",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", path: "/" },
            { name: "Site e-commerce", path: "/creation-site-e-commerce" },
          ]),
        ),
      },
    ],
  }),
  component: () => <ServiceLanding service={service} />,
});

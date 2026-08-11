import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { serviceLandings } from "@/components/site/data";
import { pageHead } from "@/lib/seo";

const service = serviceLandings.find((s) => s.slug === "creation-application-web")!;

export const Route = createFileRoute("/creation-application-web")({
  head: () => ({
    ...pageHead({
      title: "Création d'application web sur mesure à Casablanca | Najah Web",
      description:
        "Développement d'applications web sur mesure : réservation en ligne, espace client, outil métier. Cahier des charges, développement dédié, devis gratuit sous 24h.",
      path: "/creation-application-web",
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
    ],
  }),
  component: () => <ServiceLanding service={service} />,
});

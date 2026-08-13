import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { serviceLandings } from "@/components/site/data";
import { pageHead, breadcrumbLd } from "@/lib/seo";

const service = serviceLandings.find((s) => s.slug === "creation-site-vitrine")!;

export const Route = createFileRoute("/creation-site-vitrine")({
  head: () => ({
    ...pageHead({
      title: "Création de site vitrine à Casablanca dès 3 500 DH | Najah Web",
      description:
        "Site vitrine professionnel pour indépendants et petites entreprises à Casablanca : 5 à 8 pages, responsive, référencement local, livré en 7 à 10 jours.",
      path: "/creation-site-vitrine",
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
            { name: "Site vitrine", path: "/creation-site-vitrine" },
          ]),
        ),
      },
    ],
  }),
  component: () => <ServiceLanding service={service} />,
});

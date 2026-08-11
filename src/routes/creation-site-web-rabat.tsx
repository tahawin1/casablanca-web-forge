import { createFileRoute } from "@tanstack/react-router";
import { CityLanding } from "@/components/site/CityLanding";
import { cities, PHONE } from "@/components/site/data";
import { pageHead, SITE_URL } from "@/lib/seo";

const city = cities.find((c) => c.slug === "rabat")!;

export const Route = createFileRoute("/creation-site-web-rabat")({
  head: () => ({
    ...pageHead({
      title: "Création de site web à Rabat — Sites vitrines & e-commerce | Studio Web · Casablanca",
      description:
        "Développeur web pour les entreprises de Rabat : sites vitrines, boutiques en ligne et applications sur mesure, projet mené entièrement à distance. Devis gratuit sous 24h.",
      path: "/creation-site-web-rabat",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Studio Web Casablanca",
          url: `${SITE_URL}/creation-site-web-rabat`,
          telephone: PHONE,
          areaServed: "Rabat",
          address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
        }),
      },
    ],
  }),
  component: () => <CityLanding city={city} />,
});

import { createFileRoute } from "@tanstack/react-router";
import { CityLanding } from "@/components/site/CityLanding";
import { cities, PHONE } from "@/components/site/data";
import { pageHead, SITE_URL } from "@/lib/seo";

const city = cities.find((c) => c.slug === "marrakech")!;

export const Route = createFileRoute("/creation-site-web-marrakech")({
  head: () => ({
    ...pageHead({
      title: "Création de site web à Marrakech — Sites vitrines & e-commerce | Najah Web",
      description:
        "Développeur web pour les entreprises de Marrakech : sites vitrines, boutiques en ligne et applications sur mesure, projet mené entièrement à distance. Devis gratuit sous 24h.",
      path: "/creation-site-web-marrakech",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Najah Web",
          url: `${SITE_URL}/creation-site-web-marrakech`,
          telephone: PHONE,
          areaServed: "Marrakech",
          address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
        }),
      },
    ],
  }),
  component: () => <CityLanding city={city} />,
});

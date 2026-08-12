import { createFileRoute } from "@tanstack/react-router";
import { CityLanding } from "@/components/site/CityLanding";
import { cities, PHONE } from "@/components/site/data";
import { pageHead, SITE_URL } from "@/lib/seo";

const city = cities.find((c) => c.slug === "casablanca")!;

export const Route = createFileRoute("/creation-site-web-casablanca")({
  head: () => ({
    ...pageHead({
      title: "Création de site web à Casablanca | Najah Web",
      description:
        "Développeur web basé à Casablanca : création de sites vitrines, boutiques en ligne et applications sur mesure pour les entreprises de la ville. Devis gratuit sous 24h.",
      path: "/creation-site-web-casablanca",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Najah Web",
          url: `${SITE_URL}/creation-site-web-casablanca`,
          telephone: PHONE,
          areaServed: "Casablanca",
          address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
        }),
      },
    ],
  }),
  component: () => <CityLanding city={city} />,
});

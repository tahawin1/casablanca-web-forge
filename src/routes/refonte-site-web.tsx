import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { serviceLandings } from "@/components/site/data";
import { pageHead } from "@/lib/seo";

const service = serviceLandings.find((s) => s.slug === "refonte-site-web")!;

export const Route = createFileRoute("/refonte-site-web")({
  head: () => ({
    ...pageHead({
      title: "Refonte de site web à Casablanca — Audit gratuit | Najah Web",
      description:
        "Votre site est lent, daté ou mal référencé ? Refonte complète : nouveau design, meilleures performances, SEO optimisé. Audit gratuit, devis sous 24h.",
      path: "/refonte-site-web",
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

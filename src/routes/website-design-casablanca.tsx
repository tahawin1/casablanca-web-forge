import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { PHONE, PHONE_TEL, PHONE_WA } from "@/components/site/data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/website-design-casablanca")({
  head: () => ({
    ...pageHead({
      title: "Website Design & Development in Casablanca, Morocco | Najah Web",
      description:
        "Professional website design and development in Casablanca, Morocco: business websites, online stores and custom web apps. Fast delivery, free quote within 24h.",
      path: "/website-design-casablanca",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Najah Web",
          areaServed: ["Casablanca", "Morocco"],
          telephone: PHONE,
          address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
        }),
      },
    ],
  }),
  component: WebsiteDesignPage,
});

const offers = [
  {
    title: "Business website",
    price: "from 3,500 MAD",
    text: "A clean, professional website that presents your business and turns visitors into leads.",
  },
  {
    title: "Online store",
    price: "from 8,000 MAD",
    text: "Full e-commerce: product catalog, cart, payment and delivery across Morocco.",
  },
  {
    title: "Custom web app",
    price: "on request",
    text: "Booking systems, client portals, internal tools — built exactly around your workflow.",
  },
];

const points = [
  "Delivered in 7–10 days for a standard business website",
  "Fast, mobile-first, optimized for Google",
  "Free quote within 24 hours, no obligation",
  "Domain, hosting and professional email included",
  "Remote-friendly: calls, WhatsApp, video conferencing",
];

function WebsiteDesignPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Web Design · Casablanca, Morocco"
          title="A professional website for your business in Casablanca"
          description="I design and build business websites, online stores and custom web applications for companies in Casablanca and across Morocco — fast delivery, clean design, built to convert."
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Call: {PHONE}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Hi, I'd like a quote for a website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Magnetic>
          </div>
        </PageHero>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">What I build</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={i * 100} className="surface-card rounded-2xl p-7">
                <h3 className="text-xl font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{o.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">Why work with me</h2>
            <ul className="mt-8 space-y-4">
              {points.map((p, i) => (
                <Reveal key={p} delay={i * 60} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{p}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Let's talk about your project</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Free quote within 24 hours, no commitment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
            >
              See past projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

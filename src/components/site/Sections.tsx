import { Check, Phone, MessageCircle, MapPin, Clock, ShieldCheck, Gauge } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, steps, faqs, PHONE, PHONE_TEL, PHONE_WA } from "./data";

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Services</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ce que je réalise</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="surface-card flex flex-col rounded-2xl p-7">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{s.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-2.5">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const advantages = [
  {
    icon: Gauge,
    t: "Rapide et bien référencé",
    d: "Chargement en moins de 2 secondes, structure optimisée pour Google et les recherches locales.",
  },
  {
    icon: Clock,
    t: "Livraison en 7 à 10 jours",
    d: "Un interlocuteur unique, pas d'agence à rallonge : vous êtes en ligne rapidement.",
  },
  {
    icon: ShieldCheck,
    t: "Suivi après livraison",
    d: "Corrections, mises à jour et conseils inclus pendant les premiers mois.",
  },
  {
    icon: MapPin,
    t: "Basé à Casablanca",
    d: "Rendez-vous possible sur place, et travail à distance partout au Maroc et à l'étranger.",
  },
];

export function Advantages() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Pourquoi travailler avec moi</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((a) => (
          <div key={a.t}>
            <a.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{a.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="methode" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Méthode</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Comment ça se passe</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-border pt-5">
              <span className="text-sm font-bold tracking-widest text-primary">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">Parlons de votre projet</h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Un appel de 10 minutes suffit pour savoir ce que votre site va coûter et combien de temps
          il prendra. Devis gratuit, sans engagement.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-xl font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-6 w-6" />
            {PHONE}
          </a>
          <a
            href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour un site web.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-5 text-lg font-medium transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Disponible du lundi au samedi, 9h – 20h · Casablanca, Maroc
        </p>
      </div>
    </section>
  );
}

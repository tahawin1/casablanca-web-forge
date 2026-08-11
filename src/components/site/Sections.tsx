import { useState, type FormEvent } from "react";
import {
  Check,
  MapPin,
  Clock,
  ShieldCheck,
  Gauge,
  Sparkles,
  Send,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { services, steps, faqs, technologies, PHONE_WA, type Accent } from "./data";
import { accentStyles } from "./accent";
import { Reveal } from "./Reveal";
import { AnimatedLine } from "./AnimatedLine";

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Services</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ce que je réalise</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const a = accentStyles[s.accent];
            return (
              <Reveal key={s.title} delay={i * 100}>
              <article
                className={`surface-card relative flex h-full flex-col rounded-2xl p-7 ${
                  s.popular ? `border-2 ${a.border}` : ""
                }`}
              >
                {s.popular && (
                  <span
                    className={`absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${a.badge}`}
                  >
                    <Sparkles className="h-3 w-3" /> Le plus demandé
                  </span>
                )}
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className={`mt-1 text-sm font-semibold ${a.text}`}>{s.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                      <span className="text-muted-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.link}
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text} hover:opacity-80`}
                >
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Stack utilisée</span>
          {technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const advantages: { icon: typeof Gauge; t: string; d: string; accent: Accent }[] = [
  {
    icon: Gauge,
    t: "Rapide et bien référencé",
    d: "Chargement en moins de 2 secondes, structure optimisée pour Google et les recherches locales.",
    accent: "teal",
  },
  {
    icon: Clock,
    t: "Livraison en 7 à 10 jours",
    d: "Un interlocuteur unique, pas d'agence à rallonge : vous êtes en ligne rapidement.",
    accent: "amber",
  },
  {
    icon: ShieldCheck,
    t: "Suivi après livraison",
    d: "Corrections, mises à jour et conseils inclus pendant les premiers mois.",
    accent: "violet",
  },
  {
    icon: MapPin,
    t: "Basé à Casablanca",
    d: "Rendez-vous possible sur place, et travail à distance partout au Maroc et à l'étranger.",
    accent: "teal",
  },
];

export function Advantages() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Garanties</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pourquoi travailler avec moi</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((a, i) => {
          const s = accentStyles[a.accent];
          return (
            <Reveal key={a.t} delay={i * 100}>
            <div className="surface-card h-full rounded-2xl p-6">
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}>
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </div>
            </Reveal>
          );
        })}
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
        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedLine className="absolute top-6 hidden h-px w-full lg:block" />
          {steps.map((s, i) => {
            const a = accentStyles[s.accent];
            return (
              <Reveal key={s.n} delay={i * 120} className="relative">
                <span
                  className={`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${a.iconBg}`}
                >
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">FAQ</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <AccordionItem value={f.q}>
              <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>
    </section>
  );
}

const projectTypes = ["Site vitrine", "Boutique en ligne", "Application sur mesure", "Autre"];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Bonjour, je m'appelle ${name || "—"}.`,
      phone ? `Mon numéro : ${phone}.` : null,
      `Type de projet : ${projectType}.`,
      message ? `Mon projet : ${message}` : null,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card grid gap-4 rounded-2xl p-7 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Nom
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary/40 focus:ring-2"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Téléphone
          </label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="06 00 00 00 00"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary/40 focus:ring-2"
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Type de projet
        </label>
        <select
          id="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary/40 focus:ring-2"
        >
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Votre projet
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Décrivez rapidement votre besoin, votre budget ou votre délai souhaité..."
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary/40 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" />
        Envoyer sur WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Ouvre WhatsApp avec votre message pré-rempli, prêt à envoyer.
      </p>
    </form>
  );
}

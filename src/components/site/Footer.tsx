import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_TEL, PHONE_WA, cities, serviceLandings } from "./data";

const links = [
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/prix-creation-site-web-maroc", label: "Tarifs & prix" },
  { to: "/methode", label: "Méthode" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-bold tracking-tight">Najah Web</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Sites vitrines, boutiques en ligne et applications sur mesure, conçus et développés à
            Casablanca pour des clients au Maroc et à l'international.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Nos services
          </p>
          <ul className="mt-4 space-y-2.5">
            {serviceLandings.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/${s.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.eyebrow}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Zones desservies
          </p>
          <ul className="mt-4 space-y-2.5">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/creation-site-web-${c.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Création de site web à {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4 text-primary" /> {PHONE}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${PHONE_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-teal" /> WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-violet" /> Casablanca, Maroc
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Un projet ?
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Devis gratuit sous 24h. Décrivez votre besoin par téléphone ou WhatsApp.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" /> Demander un devis
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Najah Web — Tous droits réservés.</span>
        <div className="flex items-center gap-4">
          <Link to="/website-design-casablanca" className="hover:text-foreground">
            English
          </Link>
          <Link to="/mentions-legales" className="hover:text-foreground">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}

export const PHONE = "+212 6 63 39 40 14";
export const PHONE_TEL = "+212663394014";
export const PHONE_WA = "212663394014";

export type Project = {
  name: string;
  url: string;
  domain: string;
  city: string;
  type: string;
  image: string;
  summary: string;
  highlights: string[];
  caseStudySlug?: string;
  challenge?: string;
  solution?: string;
  techUsed?: string[];
};

export const projects: Project[] = [
  {
    name: "Volt Sports Water",
    url: "https://www.voltsportswater.com",
    domain: "voltsportswater.com",
    city: "International",
    type: "Site de marque · Abonnement",
    image: "/portfolio/volt.jpg",
    summary:
      "Marque de boissons fonctionnelles installées en salle de sport. Site de marque avec page produit, test d'hydratation et demande d'offre pour les clubs.",
    highlights: ["Identité de marque forte", "Formulaire d'offre B2B", "Page test interactive"],
  },
  {
    name: "Taj Auto Accessoire",
    url: "https://www.tajautoaccessoire.com",
    domain: "tajautoaccessoire.com",
    city: "Casablanca",
    type: "Boutique en ligne",
    image: "/portfolio/taj.jpg",
    summary:
      "Spécialiste des accessoires automobiles premium. Catalogue par collections et par marques, promotions et commande simplifiée.",
    highlights: ["Catalogue filtrable", "Collections & promos", "Commande rapide"],
  },
  {
    name: "Hôtel Ryad",
    url: "https://www.hotelryad.ma",
    domain: "hotelryad.ma",
    city: "Nador",
    type: "Hôtellerie · Restaurant",
    image: "/portfolio/ryad.jpg",
    summary:
      "Hôtel 3★ au centre de Nador. Site vitrine élégant avec présentation des chambres, carte du restaurant panoramique et contact direct.",
    highlights: ["Carte du restaurant", "Galerie photos", "Contact & itinéraire"],
    caseStudySlug: "hotel-ryad",
    challenge:
      "L'hôtel n'avait pas de présence en ligne propre : les clients passaient uniquement par les plateformes de réservation tierces, avec leurs commissions, et n'avaient aucun moyen de découvrir le restaurant panoramique ou de contacter directement l'établissement.",
    solution:
      "Un site vitrine élégant présentant les chambres, une carte de restaurant mise en valeur avec des photos, une page contact avec itinéraire et appel direct en un clic, et une structure pensée pour rassurer un visiteur qui découvre l'hôtel pour la première fois.",
    techUsed: ["React", "Vite", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Pressing Zerktouni",
    url: "https://www.pressingzerktouni.com",
    domain: "pressingzerktouni.com",
    city: "Casablanca",
    type: "Service local · Commande en ligne",
    image: "/portfolio/pressing.jpg",
    summary:
      "Pressing du Bd Mohamed Zerktouni. Prise de commande en ligne, service express 6h, ramassage et livraison gratuits.",
    highlights: ["Commande en ligne", "Tarifs par service", "SEO local Casablanca"],
    caseStudySlug: "pressing-zerktouni",
    challenge:
      "Le pressing recevait ses commandes uniquement par téléphone ou en boutique, sans grille tarifaire claire en ligne, et restait invisible sur Google face à des concurrents mieux référencés sur les recherches locales à Casablanca.",
    solution:
      "Un site avec prise de commande en ligne, une grille tarifaire par service claire et à jour, la mise en avant du service express 6h et du ramassage/livraison gratuits, et une structure optimisée pour le référencement local (« pressing Casablanca », « nettoyage à sec Zerktouni »).",
    techUsed: ["React", "Vite", "Tailwind CSS", "Vercel"],
  },
];

export type Accent = "amber" | "teal" | "violet";

export const services: {
  title: string;
  price: string;
  text: string;
  items: string[];
  accent: Accent;
  popular?: boolean;
}[] = [
  {
    title: "Site vitrine",
    price: "à partir de 3 500 DH",
    text: "Présence en ligne claire et crédible : présentation, services, galerie, contact et Google Maps.",
    items: ["5 à 8 pages", "Responsive mobile", "Référencement local", "Livré en 7 à 10 jours"],
    accent: "teal",
  },
  {
    title: "Boutique en ligne",
    price: "à partir de 8 000 DH",
    text: "Vendez vos produits en ligne : catalogue, filtres, panier, paiement et livraison partout au Maroc.",
    items: ["Catalogue illimité", "Paiement & livraison", "Gestion des stocks", "Suivi des commandes"],
    accent: "amber",
    popular: true,
  },
  {
    title: "Application sur mesure",
    price: "sur devis",
    text: "Réservation, espace client, tableau de bord ou outil métier développé exactement selon votre besoin.",
    items: ["Cahier des charges", "Développement dédié", "Espace administrateur", "Évolutions continues"],
    accent: "violet",
  },
];

export const technologies = [
  "React",
  "Vite",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
];

export const steps: { n: string; t: string; d: string; accent: Accent }[] = [
  {
    n: "01",
    t: "Appel découverte",
    d: "10 minutes au téléphone pour cadrer votre besoin, votre délai et votre budget.",
    accent: "teal",
  },
  {
    n: "02",
    t: "Maquette",
    d: "Vous validez le design et les textes avant la moindre ligne de code.",
    accent: "amber",
  },
  {
    n: "03",
    t: "Développement",
    d: "Site rapide, responsive et optimisé pour Google, testé sur mobile et desktop.",
    accent: "violet",
  },
  {
    n: "04",
    t: "Mise en ligne",
    d: "Nom de domaine, hébergement, e-mails pro et formation à la prise en main.",
    accent: "teal",
  },
];

export type CityInfo = {
  slug: string;
  name: string;
  intro: string;
  remote: boolean;
  faq: { q: string; a: string };
};

export const cities: CityInfo[] = [
  {
    slug: "casablanca",
    name: "Casablanca",
    remote: false,
    intro:
      "Basé à Casablanca, je conçois et développe des sites vitrines, boutiques en ligne et applications sur mesure pour les entreprises et indépendants de la ville. Rendez-vous possible en personne, devis gratuit sous 24h.",
    faq: {
      q: "Peut-on se rencontrer en personne à Casablanca ?",
      a: "Oui, je suis basé à Casablanca et un rendez-vous en personne est possible pour cadrer votre projet, en plus des échanges par téléphone ou WhatsApp.",
    },
  },
  {
    slug: "rabat",
    name: "Rabat",
    remote: true,
    intro:
      "Je conçois et développe des sites vitrines, boutiques en ligne et applications sur mesure pour les entreprises et indépendants de Rabat. Basé à Casablanca, je travaille avec mes clients de Rabat entièrement à distance.",
    faq: {
      q: "Comment se passe un projet à distance depuis Rabat ?",
      a: "Tout se fait par téléphone, WhatsApp et visioconférence : cadrage du besoin, validation de la maquette, puis livraison du site. Aucun déplacement n'est nécessaire.",
    },
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    remote: true,
    intro:
      "Je conçois et développe des sites vitrines, boutiques en ligne et applications sur mesure pour les entreprises et indépendants de Marrakech. Basé à Casablanca, je travaille avec mes clients de Marrakech entièrement à distance.",
    faq: {
      q: "Comment se passe un projet à distance depuis Marrakech ?",
      a: "Tout se fait par téléphone, WhatsApp et visioconférence : cadrage du besoin, validation de la maquette, puis livraison du site. Aucun déplacement n'est nécessaire.",
    },
  },
];

export const faqs = [
  {
    q: "Combien de temps pour avoir mon site ?",
    a: "Un site vitrine est livré en 7 à 10 jours, une boutique en ligne en 2 à 4 semaines selon le nombre de produits.",
  },
  {
    q: "Le nom de domaine et l'hébergement sont-ils inclus ?",
    a: "Je m'occupe de tout : achat du domaine (.ma ou .com), hébergement, certificat SSL et adresses e-mail professionnelles.",
  },
  {
    q: "Puis-je modifier mon site moi-même ?",
    a: "Oui. Je mets en place une interface simple et je vous forme à la prise en main lors de la livraison.",
  },
  {
    q: "Travaillez-vous en dehors de Casablanca ?",
    a: "Oui. Je suis basé à Casablanca mais je travaille dans tout le Maroc et à l'international, à distance ou en rendez-vous.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "50 % à la commande, 50 % à la mise en ligne. Facture officielle fournie pour les entreprises.",
  },
];

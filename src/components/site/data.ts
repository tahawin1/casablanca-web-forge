// Set to a Formspree endpoint (e.g. "https://formspree.io/f/xxxxxxx") to also
// email-notify new contact form submissions. Leave empty to skip — the form
// still works via WhatsApp either way.
export const FORMSPREE_ENDPOINT = "";

export const PHONE = "+212 6 63 39 40 14";
export const PHONE_TEL = "+212663394014";
export const PHONE_WA = "212663394014";

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  city?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Samir",
    role: "Fondateur",
    company: "Volt Sports Water",
    quote:
      "On avait besoin d'un site qui reflète l'image de la marque, pas d'un template. Le formulaire de demande d'offre B2B nous ramène des clubs de sport chaque semaine. Réactif et carré sur les délais.",
  },
  {
    name: "Ahmed",
    role: "Gérant",
    company: "Taj Auto Accessoire",
    city: "Casablanca",
    quote:
      "Notre catalogue est enfin en ligne avec les filtres par marque. Les clients commandent directement au lieu d'appeler pour demander si on a la pièce. Livré dans les temps annoncés.",
  },
  {
    name: "Ali",
    role: "Direction",
    company: "Hôtel Ryad",
    city: "Nador",
    quote:
      "Le site donne une vraie image de l'hôtel, avec la carte du restaurant et les photos des chambres. Les gens réservent en connaissant déjà les lieux. Travail soigné et bon accompagnement.",
  },
  {
    name: "Simo",
    role: "Gérant",
    company: "Pressing Zerktouni",
    city: "Casablanca",
    quote:
      "La prise de commande en ligne nous a changé la vie, et on ressort maintenant sur Google quand les gens cherchent un pressing dans le quartier. Med comprend vite ce dont on a besoin.",
  },
];

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
    image: "/portfolio/volt.webp",
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
    image: "/portfolio/taj.webp",
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
    image: "/portfolio/ryad.webp",
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
    image: "/portfolio/pressing.webp",
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
  notIncluded: string[];
  accent: Accent;
  popular?: boolean;
  link: string;
}[] = [
  {
    title: "Site vitrine",
    price: "à partir de 3 500 DH",
    text: "Présence en ligne claire et crédible : présentation, services, galerie, contact et Google Maps.",
    items: [
      "5 à 8 pages",
      "Responsive mobile",
      "Référencement local",
      "Livré en 7 à 10 jours",
      "2 séries de révisions incluses",
    ],
    notIncluded: ["Rédaction des textes (vous les fournissez, aide possible sur devis)", "Séance photo professionnelle"],
    accent: "teal",
    link: "/creation-site-vitrine",
  },
  {
    title: "Boutique en ligne",
    price: "à partir de 8 000 DH",
    text: "Vendez vos produits en ligne : catalogue, filtres, panier, paiement et livraison partout au Maroc.",
    items: [
      "Catalogue illimité",
      "Paiement & livraison",
      "Gestion des stocks",
      "Suivi des commandes",
      "2 séries de révisions incluses",
    ],
    notIncluded: ["Photos et descriptions produits (vous les fournissez)", "Frais des prestataires de paiement en ligne"],
    accent: "amber",
    popular: true,
    link: "/creation-site-e-commerce",
  },
  {
    title: "Application sur mesure",
    price: "sur devis",
    text: "Réservation, espace client, tableau de bord ou outil métier développé exactement selon votre besoin.",
    items: ["Cahier des charges", "Développement dédié", "Espace administrateur", "Évolutions continues"],
    notIncluded: ["Contenu métier spécifique (fourni par vous ou cadré ensemble)"],
    accent: "violet",
    link: "/creation-application-web",
  },
];

export const maintenance = {
  price: "300 à 500 DH / mois",
  text: "Pour ne jamais avoir à vous soucier de votre site après la livraison.",
  items: [
    "Hébergement et nom de domaine",
    "Sauvegardes régulières",
    "Petites modifications de contenu (textes, photos, tarifs)",
    "Surveillance de sécurité",
    "Support prioritaire par téléphone ou WhatsApp",
  ],
};

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

export type ServiceLandingInfo = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  price: string;
  delay: string;
  accent: Accent;
  features: string[];
  faqs: { q: string; a: string }[];
};

export const serviceLandings: ServiceLandingInfo[] = [
  {
    slug: "creation-site-vitrine",
    eyebrow: "Site vitrine",
    title: "Création de site vitrine à Casablanca",
    intro:
      "Un site vitrine professionnel présente clairement votre activité et donne envie de vous contacter. Idéal pour les indépendants, cabinets, artisans et petites entreprises qui veulent une présence en ligne crédible, sans complexité inutile.",
    price: "à partir de 3 500 DH",
    delay: "7 à 10 jours",
    accent: "teal",
    features: [
      "5 à 8 pages (accueil, services, à propos, contact...)",
      "Design responsive, adapté mobile et desktop",
      "Formulaire de contact et intégration Google Maps",
      "Référencement local de base sur Google",
      "Nom de domaine et hébergement inclus la première année",
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un site vitrine exactement ?",
        a: "Un site qui présente votre activité, vos services et vos coordonnées, sans fonctionnalité de vente en ligne. C'est la solution la plus simple et la plus rapide pour exister sur Google.",
      },
      {
        q: "Combien de pages sont incluses ?",
        a: "Entre 5 et 8 pages selon votre activité : accueil, services, à propos, réalisations, contact. Des pages supplémentaires peuvent être ajoutées sur devis.",
      },
      {
        q: "Puis-je ajouter une boutique en ligne plus tard ?",
        a: "Oui, un site vitrine peut évoluer vers une boutique en ligne par la suite, sans tout reconstruire depuis zéro.",
      },
    ],
  },
  {
    slug: "creation-site-e-commerce",
    eyebrow: "Boutique en ligne",
    title: "Création de site e-commerce à Casablanca",
    intro:
      "Vendez vos produits en ligne 24h/24 avec une boutique e-commerce complète : catalogue, panier, paiement et livraison partout au Maroc. Une structure pensée pour convertir vos visiteurs en clients, pas juste pour être jolie.",
    price: "à partir de 8 000 DH",
    delay: "2 à 4 semaines",
    accent: "amber",
    features: [
      "Catalogue produits illimité avec filtres et collections",
      "Tunnel d'achat clair : panier, commande, confirmation",
      "Paiement en ligne et/ou paiement à la livraison",
      "Gestion des stocks et suivi des commandes",
      "Interface d'administration simple à prendre en main",
    ],
    faqs: [
      {
        q: "Quels moyens de paiement peut-on proposer ?",
        a: "Paiement à la livraison, virement, et intégration de solutions de paiement en ligne marocaines selon vos besoins et votre secteur.",
      },
      {
        q: "Combien de produits puis-je mettre en ligne ?",
        a: "Le catalogue n'est pas limité en nombre de produits. Le délai de livraison dépend surtout du volume de produits à intégrer au lancement.",
      },
      {
        q: "Est-ce que je peux gérer mes stocks moi-même ?",
        a: "Oui, une interface d'administration vous permet d'ajouter des produits, gérer les stocks et suivre les commandes sans compétence technique.",
      },
    ],
  },
  {
    slug: "creation-application-web",
    eyebrow: "Application sur mesure",
    title: "Création d'application web sur mesure",
    intro:
      "Réservation en ligne, espace client, tableau de bord interne, outil métier : je développe l'application web qui correspond exactement à votre besoin, quand aucune solution toute faite ne convient à votre activité.",
    price: "sur devis",
    delay: "selon le cahier des charges",
    accent: "violet",
    features: [
      "Cahier des charges détaillé avant tout développement",
      "Développement sur mesure (React, base de données)",
      "Espace administrateur pour gérer le contenu et les utilisateurs",
      "Évolutions et nouvelles fonctionnalités possibles après livraison",
      "Formation à la prise en main incluse",
    ],
    faqs: [
      {
        q: "Quel type de projet entre dans cette catégorie ?",
        a: "Tout ce qui dépasse un site vitrine ou une boutique classique : plateforme de réservation, espace client, outil interne, tableau de bord, intégration avec vos outils existants.",
      },
      {
        q: "Comment le prix est-il déterminé ?",
        a: "Après un échange pour cadrer précisément votre besoin, je vous envoie un devis détaillé sous 24h, sans engagement.",
      },
      {
        q: "Le code m'appartient-il ?",
        a: "Oui, le code source et l'application développée vous appartiennent une fois le projet livré et payé.",
      },
    ],
  },
  {
    slug: "refonte-site-web",
    eyebrow: "Refonte",
    title: "Refonte de site web à Casablanca",
    intro:
      "Site lent, design daté, mal adapté au mobile ou invisible sur Google ? Je modernise votre site existant : nouveau design, meilleures performances et structure optimisée pour le référencement, sans repartir de zéro sur votre contenu.",
    price: "à partir de 3 500 DH",
    delay: "7 à 10 jours",
    accent: "teal",
    features: [
      "Audit gratuit de votre site actuel",
      "Nouveau design moderne et responsive",
      "Reprise de votre contenu existant",
      "Amélioration de la vitesse de chargement",
      "Optimisation SEO incluse",
    ],
    faqs: [
      {
        q: "Comment savoir si mon site a besoin d'une refonte ?",
        a: "Les signaux les plus courants : site lent, mal affiché sur mobile, design daté, ou difficile à trouver sur Google. Un audit gratuit permet d'y voir clair.",
      },
      {
        q: "Vais-je perdre mon contenu actuel ?",
        a: "Non, votre contenu (textes, images, coordonnées) est repris et réorganisé dans la nouvelle version du site.",
      },
      {
        q: "Est-ce que je garde mon nom de domaine ?",
        a: "Oui, votre nom de domaine actuel est conservé, seul le site qu'il pointe change.",
      },
    ],
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
  {
    q: "Le site et le nom de domaine m'appartiennent-ils ?",
    a: "Oui, sans exception. Le nom de domaine est enregistré à votre nom, et le code du site vous appartient entièrement une fois le projet livré et payé. Vous n'êtes jamais dépendant de moi pour continuer à faire vivre votre site.",
  },
  {
    q: "Combien de révisions sont incluses ?",
    a: "Deux séries de révisions sont incluses sur la maquette avant le développement, pour ajuster le design et les textes. Des retouches ponctuelles après la mise en ligne sont possibles pendant la période de suivi.",
  },
];

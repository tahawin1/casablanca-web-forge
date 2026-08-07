export const PHONE = "+212 6 12 34 56 78";
export const PHONE_TEL = "+212612345678";
export const PHONE_WA = "212612345678";

export type Project = {
  name: string;
  url: string;
  domain: string;
  city: string;
  type: string;
  image: string;
  summary: string;
  highlights: string[];
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
  },
];

export const services = [
  {
    title: "Site vitrine",
    price: "à partir de 3 500 DH",
    text: "Présence en ligne claire et crédible : présentation, services, galerie, contact et Google Maps.",
    items: ["5 à 8 pages", "Responsive mobile", "Référencement local", "Livré en 7 à 10 jours"],
  },
  {
    title: "Boutique en ligne",
    price: "à partir de 8 000 DH",
    text: "Vendez vos produits en ligne : catalogue, filtres, panier, paiement et livraison partout au Maroc.",
    items: ["Catalogue illimité", "Paiement & livraison", "Gestion des stocks", "Suivi des commandes"],
  },
  {
    title: "Application sur mesure",
    price: "sur devis",
    text: "Réservation, espace client, tableau de bord ou outil métier développé exactement selon votre besoin.",
    items: ["Cahier des charges", "Développement dédié", "Espace administrateur", "Évolutions continues"],
  },
];

export const steps = [
  { n: "01", t: "Appel découverte", d: "10 minutes au téléphone pour cadrer votre besoin, votre délai et votre budget." },
  { n: "02", t: "Maquette", d: "Vous validez le design et les textes avant la moindre ligne de code." },
  { n: "03", t: "Développement", d: "Site rapide, responsive et optimisé pour Google, testé sur mobile et desktop." },
  { n: "04", t: "Mise en ligne", d: "Nom de domaine, hébergement, e-mails pro et formation à la prise en main." },
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

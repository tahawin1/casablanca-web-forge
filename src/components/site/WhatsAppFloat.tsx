import { MessageCircle } from "lucide-react";
import { PHONE_WA } from "./data";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour un site web.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:hidden" />
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

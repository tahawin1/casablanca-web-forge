import type { Accent } from "./data";

export const accentStyles: Record<
  Accent,
  { text: string; bg: string; border: string; iconBg: string; badge: string }
> = {
  amber: {
    text: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    iconBg: "bg-primary text-primary-foreground",
    badge: "bg-primary/15 text-primary",
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal/10",
    border: "border-teal/30",
    iconBg: "bg-teal text-teal-foreground",
    badge: "bg-teal/15 text-teal",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/10",
    border: "border-violet/30",
    iconBg: "bg-violet text-violet-foreground",
    badge: "bg-violet/15 text-violet",
  },
};

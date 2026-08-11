import * as gsapNS from "gsap";
import * as scrollTriggerNS from "gsap/ScrollTrigger";

type GsapNS = typeof gsapNS & { gsap?: typeof gsapNS.gsap; default?: typeof gsapNS.gsap };
type ScrollTriggerModule = typeof scrollTriggerNS & {
  ScrollTrigger?: typeof scrollTriggerNS.ScrollTrigger;
  default?: typeof scrollTriggerNS.ScrollTrigger;
};

const gsapAny = gsapNS as GsapNS;
const scrollTriggerAny = scrollTriggerNS as ScrollTriggerModule;

const gsap = gsapAny.gsap ?? gsapAny.default ?? (gsapNS as unknown as typeof gsapNS.gsap);
const ScrollTrigger =
  scrollTriggerAny.ScrollTrigger ??
  scrollTriggerAny.default ??
  (scrollTriggerNS as unknown as typeof scrollTriggerNS.ScrollTrigger);

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

import * as gsapNS from "gsap";
import * as scrollTriggerNS from "gsap/ScrollTrigger";

type GsapNS = typeof gsapNS & { gsap?: typeof gsapNS.gsap; default?: typeof gsapNS.gsap };
type ScrollTriggerModule = typeof scrollTriggerNS & {
  ScrollTrigger?: typeof scrollTriggerNS.ScrollTrigger;
  default?: typeof scrollTriggerNS.ScrollTrigger;
};

const gsapAny = gsapNS as GsapNS;
const scrollTriggerAny = scrollTriggerNS as ScrollTriggerModule;

const localGsap = gsapAny.gsap ?? gsapAny.default ?? (gsapNS as unknown as typeof gsapNS.gsap);
const localScrollTrigger =
  scrollTriggerAny.ScrollTrigger ??
  scrollTriggerAny.default ??
  (scrollTriggerNS as unknown as typeof scrollTriggerNS.ScrollTrigger);

// Route-based code splitting can end up bundling this module (and gsap
// itself) into more than one chunk, producing separate gsap instances that
// each think they're "the" instance. registerPlugin on one doesn't help the
// others. Use window as a cross-chunk coordination point so every copy of
// this module converges on whichever instance registered first.
type GsapWindow = typeof window & {
  __gsapInstance?: typeof localGsap;
  __scrollTriggerInstance?: typeof localScrollTrigger;
};

let gsap = localGsap;
let ScrollTrigger = localScrollTrigger;

if (typeof window !== "undefined") {
  const w = window as GsapWindow;
  if (w.__gsapInstance && w.__scrollTriggerInstance) {
    gsap = w.__gsapInstance;
    ScrollTrigger = w.__scrollTriggerInstance;
  } else if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    w.__gsapInstance = gsap;
    w.__scrollTriggerInstance = ScrollTrigger;
  }
}

export { gsap, ScrollTrigger };

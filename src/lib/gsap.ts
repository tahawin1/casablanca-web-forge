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

if (typeof window !== "undefined") {
  // TEMP DIAGNOSTIC — remove once the ScrollTrigger registration bug is confirmed fixed.
  console.log("[gsap-debug]", {
    hasGsap: !!gsap,
    hasScrollTrigger: !!ScrollTrigger,
    gsapVersion: gsap?.version,
    registerPluginType: typeof gsap?.registerPlugin,
    scrollTriggerType: typeof ScrollTrigger,
    scrollTriggerName: ScrollTrigger?.name,
  });
  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    console.log("[gsap-debug] after registerPlugin, pluginsRegistered:", !!gsap.core?.globals?.().ScrollTrigger);
  }
}

export { gsap, ScrollTrigger };

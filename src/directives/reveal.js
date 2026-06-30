import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * v-reveal directive
 *
 * Fades + slides an element into view the first time it scrolls into the
 * viewport, using GSAP's ScrollTrigger.
 *
 * Usage:
 *   <div v-reveal>...</div>
 *   <div v-reveal="{ y: 60, delay: 0.2 }">...</div>
 *
 * Options:
 *   x        horizontal offset to animate from (px)        default 0
 *   y        vertical offset to animate from (px)          default 40
 *   scale    starting scale                                default 1
 *   duration animation duration (s)                        default 0.8
 *   delay    delay before the animation starts (s)         default 0
 *   start    ScrollTrigger "start" position                default "top 88%"
 */
const reveal = {
  mounted(el, binding) {
    const opts = binding.value || {};
    const {
      x = 0,
      y = 40,
      scale = 1,
      duration = 0.8,
      delay = 0,
      start = "top 88%",
    } = opts;

    // Respect users who've asked for reduced motion.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x, y, scale },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    el._gsapRevealCtx = ctx;
  },
  unmounted(el) {
    if (el._gsapRevealCtx) {
      el._gsapRevealCtx.revert();
      delete el._gsapRevealCtx;
    }
  },
};

export default reveal;

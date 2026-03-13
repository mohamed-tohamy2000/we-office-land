import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapReveal(ref, options = {}) {
  const { y = 48, opacity = 0, scale = 0.98, duration = 0.9, stagger = 0.12, target = null, start = "top 85%" } = options;

  useLayoutEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const element = target ? ref.current.querySelectorAll(target) : ref.current;
      gsap.fromTo(
        element,
        { y, opacity, scale },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [duration, opacity, ref, scale, stagger, start, target, y]);
}

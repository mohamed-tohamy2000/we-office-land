import { useEffect } from "react";
import { gsap } from "gsap";

export default function useTiltEffect(ref, amount = 9) {
  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const node = ref.current;

    const handleMove = (event) => {
      const bounds = node.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateY = ((x / bounds.width) - 0.5) * amount * -1;
      const rotateX = ((y / bounds.height) - 0.5) * amount;

      gsap.to(node, {
        rotateX,
        rotateY,
        transformPerspective: 900,
        duration: 0.45,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(node, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [amount, ref]);
}

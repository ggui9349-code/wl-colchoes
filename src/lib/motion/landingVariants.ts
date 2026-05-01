import type { Transition, Variants } from "framer-motion";

export const landingMotion = {
  duration: {
    fast: 0.35,
    base: 0.5,
    slow: 0.65,
  },
  stagger: 0.08,
  viewport: { once: true, amount: 0.25 },
  easing: [0.22, 1, 0.36, 1] as const,
};

function transition(duration: number, delay = 0): Transition {
  return { duration, delay, ease: landingMotion.easing };
}

export function fadeUp(distance = 20, duration = landingMotion.duration.base, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: transition(duration, delay) },
  };
}

export function fadeSide(distance = 24, direction: "left" | "right" = "left", duration = landingMotion.duration.base, delay = 0): Variants {
  const x = direction === "left" ? -distance : distance;
  return {
    hidden: { opacity: 0, x },
    visible: { opacity: 1, x: 0, transition: transition(duration, delay) },
  };
}

export function softScale(duration = landingMotion.duration.base, delay = 0): Variants {
  return {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: transition(duration, delay) },
  };
}

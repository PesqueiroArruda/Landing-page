import type { Variants } from "motion/react";

// Curvas mais fortes que os easings nativos do Framer/CSS, que ficam fracos
// demais pra transições de UI. easeOut pra elementos entrando, easeInOut
// pra coisas se movendo dentro da tela.
export const easeOut = [0.23, 1, 0.32, 1] as const;
export const easeInOut = [0.77, 0, 0.175, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

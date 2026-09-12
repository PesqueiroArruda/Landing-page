"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface GroupProps {
  children: ReactNode;
  className?: string;
}

// Container com stagger: usar junto de RevealItem/RevealListItem, cujas
// variants (fadeUp) o container dispara em cascata ao entrar na viewport.
export function RevealGrid({ children, className = "" }: GroupProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: GroupProps) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function RevealList({ children, className = "" }: GroupProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <ul className={className}>{children}</ul>;

  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export function RevealListItem({ children, className = "" }: GroupProps) {
  return (
    <motion.li variants={fadeUp} className={className}>
      {children}
    </motion.li>
  );
}

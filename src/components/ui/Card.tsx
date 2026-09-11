"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

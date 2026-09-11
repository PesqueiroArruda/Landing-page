"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: LucideIcon;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-gold text-navy hover:bg-gold-strong",
  secondary: "bg-navy text-text-on-navy hover:bg-navy-hover",
  outline: "border-2 border-text-on-navy/60 text-text-on-navy hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.a>
  );
}

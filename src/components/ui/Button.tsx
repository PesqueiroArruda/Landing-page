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
  primary: "border-2 border-dashed border-ink-deep/40 bg-gold text-ink-deep hover:bg-gold-deep",
  secondary: "border-2 border-dashed border-paper/40 bg-bark text-paper hover:bg-ink-deep",
  outline: "border-2 border-dashed border-paper/50 text-paper hover:border-paper hover:bg-paper/10",
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[15px] font-bold transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.a>
  );
}

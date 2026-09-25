"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { easeOut } from "@/lib/motion";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: LucideIcon;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-gold text-ink-deep hover:bg-gold-deep pr-8 pl-6 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%)]",
  secondary: "rounded-sm bg-ink px-6 text-paper hover:bg-ink-deep",
  outline: "rounded-sm border-2 border-paper/50 px-6 text-paper hover:border-paper hover:bg-paper/10",
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
      whileHover={{ transform: "scale(1.03)" }}
      whileTap={{ transform: "scale(0.97)" }}
      transition={{ duration: 0.15, ease: easeOut }}
      className={`inline-flex items-center justify-center gap-2 py-3 text-[15px] font-bold transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.a>
  );
}

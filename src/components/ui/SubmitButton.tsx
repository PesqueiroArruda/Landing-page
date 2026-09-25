"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { easeOut } from "@/lib/motion";

export default function SubmitButton({
  children,
  pendingLabel = "Enviando...",
  className = "",
}: {
  children: ReactNode;
  pendingLabel?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={pending ? undefined : { transform: "scale(1.04)" }}
      whileTap={pending ? undefined : { transform: "scale(0.97)" }}
      transition={{ duration: 0.15, ease: easeOut }}
      className={`inline-flex items-center justify-center gap-2 bg-gold py-3 pr-8 pl-6 text-[15px] font-bold text-ink-deep transition-colors duration-200 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_50%,calc(100%-14px)_100%,0_100%)] hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {pending ? pendingLabel : children}
    </motion.button>
  );
}

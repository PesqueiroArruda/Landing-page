"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";

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
      whileHover={pending ? undefined : { scale: 1.04 }}
      whileTap={pending ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-[15px] font-bold text-ink-deep transition-colors duration-200 hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {pending ? pendingLabel : children}
    </motion.button>
  );
}

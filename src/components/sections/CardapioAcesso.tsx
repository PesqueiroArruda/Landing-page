"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Lock } from "lucide-react";
import SubmitButton from "@/components/ui/SubmitButton";
import { signInWithGoogle } from "@/app/actions/auth";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.88-3c-1.08.72-2.46 1.15-4.06 1.15-3.12 0-5.77-2.11-6.72-4.94H1.28v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.3a7.2 7.2 0 0 1 0-4.6v-3.1H1.28a12 12 0 0 0 0 10.8l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.6l4 3.1C6.23 6.86 8.88 4.75 12 4.75Z"
      />
    </svg>
  );
}

export default function CardapioAcesso({ hiddenCount }: { hiddenCount: number }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="mt-6 flex flex-col items-center gap-2 border-t border-ink/10 pt-6 text-center">
        <p className="text-sm text-bark/70">
          {hiddenCount > 0
            ? `+ ${hiddenCount} pratos esperando por você`
            : "Ainda tem mais no cardápio completo"}
        </p>
        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-[15px] font-bold text-ink-deep transition-colors duration-200 hover:bg-gold-deep"
        >
          <Lock size={18} />
          Ver cardápio completo
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cardapio-acesso-titulo"
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-deep/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-sm rounded-2xl bg-paper-soft p-6 text-center shadow-xl sm:p-8"
            >
              <h3 id="cardapio-acesso-titulo" className="text-xl font-semibold text-ink">
                Acesse nosso cardápio completo
              </h3>
              <p className="mt-2 text-sm text-bark/70">
                Entre com sua conta Google para visualizar todos os produtos disponíveis.
              </p>

              <form action={signInWithGoogle} className="mt-6">
                <SubmitButton pendingLabel="Abrindo o Google..." className="w-full">
                  <GoogleLogo />
                  Continuar com Google
                </SubmitButton>
              </form>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm font-semibold text-bark/60 hover:text-bark"
              >
                Agora não
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "pesqueiro-cookie-notice-dismissed";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function checkDismissed() {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
      } catch {
        setVisible(true);
      }
    }

    checkDismissed();
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Sem acesso ao localStorage (modo privado etc.): o aviso só some nesta sessão.
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="bg-chalkdust fixed inset-x-0 bottom-0 z-[60] border-t-2 border-dashed border-gold/30 bg-ink px-4 py-4 text-paper shadow-lg sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-center text-sm text-paper/80 sm:text-left">
          Usamos cookies essenciais (como os de login) e métricas anônimas de
          acesso para melhorar o site. Saiba mais na nossa{" "}
          <Link href="/privacidade" className="font-semibold text-gold hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-sm border-2 border-dashed border-ink-deep/40 bg-gold px-5 py-2 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-deep"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}

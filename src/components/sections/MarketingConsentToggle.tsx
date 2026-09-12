"use client";

import { useState, useTransition } from "react";
import { updateMarketingConsent } from "@/app/actions/marketing-consent";

export default function MarketingConsentToggle({ initialConsent }: { initialConsent: boolean }) {
  const [consent, setConsent] = useState(initialConsent);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleChange(checked: boolean) {
    setConsent(checked);
    setError(null);

    startTransition(async () => {
      const result = await updateMarketingConsent(checked);
      if (!result.ok) {
        setConsent(!checked);
        setError(result.error);
      }
    });
  }

  return (
    <div className="mt-6 border-t border-ink/10 pt-4">
      <label className="flex items-start gap-3 text-sm text-bark/80">
        <input
          type="checkbox"
          checked={consent}
          disabled={isPending}
          onChange={(event) => handleChange(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
        />
        Quero receber novidades e promoções por e-mail.
      </label>
      {isPending && <p className="mt-1 text-xs text-bark/50">Salvando...</p>}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}

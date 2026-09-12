"use server";

import { auth } from "@/auth";
import { setMarketingConsent } from "@/lib/menu-users";

export type UpdateMarketingConsentResult = { ok: true } | { ok: false; error: string };

export async function updateMarketingConsent(
  consent: boolean
): Promise<UpdateMarketingConsentResult> {
  const session = await auth();

  if (!session?.user.googleId) {
    return { ok: false, error: "Faça login para atualizar essa preferência." };
  }

  try {
    await setMarketingConsent(session.user.googleId, consent);
    return { ok: true };
  } catch {
    return { ok: false, error: "Não foi possível salvar sua preferência. Tente novamente." };
  }
}

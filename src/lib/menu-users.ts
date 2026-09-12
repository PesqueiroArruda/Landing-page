import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase";

type UpsertMenuUserInput = {
  googleId: string;
  name: string | null;
  email: string;
  avatarUrl: string | null;
};

// Identifica visitantes que fizeram login pra ver o cardápio completo. Não
// guarda produtos/preços — isso continua vindo só do backend administrativo.
export async function upsertMenuUser(input: UpsertMenuUserInput): Promise<void> {
  const { error } = await getSupabaseAdmin()
    .from("menu_users")
    .upsert(
      {
        google_id: input.googleId,
        name: input.name,
        email: input.email,
        avatar_url: input.avatarUrl,
        last_access_at: new Date().toISOString(),
      },
      { onConflict: "google_id" }
    );

  if (error) {
    console.error("Erro ao registrar usuário do cardápio:", error);
  }
}

export async function getMenuUserConsent(googleId: string): Promise<boolean> {
  const { data, error } = await getSupabaseAdmin()
    .from("menu_users")
    .select("marketing_consent")
    .eq("google_id", googleId)
    .maybeSingle();

  if (error || !data) return false;
  return data.marketing_consent === true;
}

export async function setMarketingConsent(googleId: string, consent: boolean): Promise<void> {
  const { error } = await getSupabaseAdmin()
    .from("menu_users")
    .update({ marketing_consent: consent })
    .eq("google_id", googleId);

  if (error) {
    console.error("Erro ao atualizar consentimento de marketing:", error);
    throw error;
  }
}

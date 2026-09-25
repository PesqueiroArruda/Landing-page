import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | undefined;

// Client único, server-only, com service role: ignora RLS.
// Nunca importar este arquivo de um Client Component.
// Criado sob demanda (e não no escopo do módulo) para não quebrar o build
// quando as env vars ainda não estiverem configuradas.
export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Supabase env vars ausentes (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  client = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });
  return client;
}

export type ReservationRow = {
  id: string;
  customer_name: string;
  customer_phone: string;
  reservation_date: string;
  reservation_time: string;
  party_size: number;
  environment: "interno" | "quiosque" | "externo";
  deposit_amount_cents: number;
  payment_status: "pending" | "paid" | "failed";
  infinitepay_invoice_slug: string | null;
  infinitepay_transaction_nsu: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

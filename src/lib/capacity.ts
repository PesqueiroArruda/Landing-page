import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase";
import { ENVIRONMENT_CAPACITY } from "@/lib/reservations";

// Vagas restantes (em número de pessoas) para um dia + ambiente, considerando
// só reservas com sinal pago (pendentes não ocupam vaga).
export async function getAvailableSpots(
  date: string,
  environment: keyof typeof ENVIRONMENT_CAPACITY
) {
  const { data, error } = await getSupabaseAdmin()
    .from("reservations")
    .select("party_size")
    .eq("reservation_date", date)
    .eq("environment", environment)
    .eq("payment_status", "paid");

  if (error) throw error;

  const occupied = (data ?? []).reduce((sum, row) => sum + row.party_size, 0);
  return ENVIRONMENT_CAPACITY[environment] - occupied;
}

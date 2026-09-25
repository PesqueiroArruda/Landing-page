"use server";

import { reservationSchema, DEPOSIT_AMOUNT_CENTS } from "@/lib/reservations";
import { getSupabaseAdmin } from "@/lib/supabase";
import { createReservationCheckoutLink } from "@/lib/infinitepay";
import { getAvailableSpots } from "@/lib/capacity";

export type CreateReservationState = {
  status: "idle" | "error" | "success";
  errors?: Record<string, string[]>;
  message?: string;
  checkoutUrl?: string;
};

export async function createReservation(
  _prevState: CreateReservationState,
  formData: FormData
): Promise<CreateReservationState> {
  // Honeypot: campo invisível que só bots costumam preencher.
  if (formData.get("website")) {
    return {
      status: "error",
      message: "Não foi possível registrar sua reserva. Tente novamente.",
    };
  }

  const parsed = reservationSchema.safeParse({
    customerName: formData.get("customerName"),
    customerPhone: formData.get("customerPhone"),
    reservationDate: formData.get("reservationDate"),
    reservationTime: formData.get("reservationTime"),
    partySize: formData.get("partySize"),
    environment: formData.get("environment"),
    notes: formData.get("notes") ?? "",
  });

  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      message: "Confira os campos destacados e tente novamente.",
    };
  }

  const data = parsed.data;

  try {
    const availableSpots = await getAvailableSpots(data.reservationDate, data.environment);
    if (data.partySize > availableSpots) {
      const message =
        availableSpots > 0
          ? `Esse ambiente já está quase lotado nesse dia. Restam apenas ${availableSpots} vaga${availableSpots === 1 ? "" : "s"}.`
          : "Esse ambiente já está com a capacidade esgotada para esse dia. Escolha outro ambiente ou outra data.";
      return {
        status: "error",
        errors: { environment: [message] },
        message,
      };
    }
  } catch (err) {
    console.error("Erro ao checar disponibilidade de vagas:", err);
    return {
      status: "error",
      message: "Não foi possível checar a disponibilidade agora. Tente novamente.",
    };
  }

  let reservationId: string;
  try {
    const { data: reservation, error: insertError } = await getSupabaseAdmin()
      .from("reservations")
      .insert({
        customer_name: data.customerName,
        customer_phone: data.customerPhone,
        reservation_date: data.reservationDate,
        reservation_time: data.reservationTime,
        party_size: data.partySize,
        environment: data.environment,
        notes: data.notes || null,
        deposit_amount_cents: DEPOSIT_AMOUNT_CENTS,
        payment_status: "pending",
      })
      .select("id")
      .single();

    if (insertError || !reservation) {
      throw insertError ?? new Error("Insert sem retorno de id.");
    }

    reservationId = reservation.id;
  } catch (err) {
    console.error("Erro ao criar reserva:", err);
    return {
      status: "error",
      message: "Não foi possível registrar sua reserva. Tente novamente.",
    };
  }

  try {
    const checkoutUrl = await createReservationCheckoutLink({
      id: reservationId,
      depositAmountCents: DEPOSIT_AMOUNT_CENTS,
    });

    return { status: "success", checkoutUrl };
  } catch (err) {
    console.error("Erro ao criar link de pagamento na InfinitePay:", err);
    return {
      status: "error",
      message:
        "Sua reserva foi registrada, mas não foi possível abrir o pagamento agora. Fale com a gente pelo WhatsApp.",
    };
  }
}

import "server-only";
import { Resend } from "resend";
import { DEPOSIT_AMOUNT_BRL } from "@/lib/reservations";
import type { ReservationRow } from "@/lib/supabase";

let resendClient: Resend | undefined;

// Criado sob demanda para não quebrar o build quando RESEND_API_KEY ainda
// não estiver configurada.
function getResend(): Resend {
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}

const FROM = process.env.RESEND_FROM_EMAIL ?? "Pesqueiro Arruda's <onboarding@resend.dev>";
const TO = process.env.RESERVATION_NOTIFICATION_EMAIL;

export async function sendReservationPaidEmail(
  reservation: Pick<
    ReservationRow,
    | "id"
    | "customer_name"
    | "customer_phone"
    | "reservation_date"
    | "reservation_time"
    | "party_size"
    | "environment"
  >,
  overCapacity = false
) {
  if (!TO || !process.env.RESEND_API_KEY) {
    console.warn(
      "RESEND_API_KEY ou RESERVATION_NOTIFICATION_EMAIL não configurados; e-mail não enviado."
    );
    return;
  }

  try {
    await getResend().emails.send({
      from: FROM,
      to: TO,
      subject: overCapacity
        ? `[Atenção: capacidade excedida] Nova reserva paga: ${reservation.customer_name}`
        : `Nova reserva paga: ${reservation.customer_name}`,
      html: `
        <h2>Reserva confirmada e sinal pago</h2>
        ${
          overCapacity
            ? `<p style="color:#b91c1c;font-weight:bold;">Esse pagamento foi confirmado depois que o ambiente já tinha atingido a capacidade máxima para o dia. Entre em contato com o cliente pra combinar o que fazer (trocar de ambiente, de data ou estornar o sinal manualmente).</p>`
            : ""
        }
        <p><strong>Cliente:</strong> ${reservation.customer_name}</p>
        <p><strong>Telefone:</strong> ${reservation.customer_phone}</p>
        <p><strong>Data:</strong> ${reservation.reservation_date} às ${reservation.reservation_time}</p>
        <p><strong>Pessoas:</strong> ${reservation.party_size}</p>
        <p><strong>Ambiente:</strong> ${reservation.environment}</p>
        <p><strong>Sinal pago:</strong> R$ ${DEPOSIT_AMOUNT_BRL.toFixed(2).replace(".", ",")}</p>
        <p><strong>ID da reserva:</strong> ${reservation.id}</p>
      `,
    });
  } catch (err) {
    // Falha ao notificar por e-mail não pode derrubar o webhook: a reserva já
    // foi marcada como paga, o dono só não recebe o aviso automático.
    console.error("Erro ao enviar e-mail de notificação de reserva:", err);
  }
}

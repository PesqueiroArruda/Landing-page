import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { checkInfinitePayPayment } from "@/lib/infinitepay";
import { sendReservationPaidEmail } from "@/lib/email";
import { DEPOSIT_AMOUNT_CENTS } from "@/lib/reservations";

type InfinitePayWebhookPayload = {
  invoice_slug?: string;
  order_nsu?: string;
  transaction_nsu?: string;
  paid_amount?: number;
};

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as InfinitePayWebhookPayload | null;

  const orderNsu = body?.order_nsu;
  const transactionNsu = body?.transaction_nsu;
  const slug = body?.invoice_slug;

  if (!orderNsu || !transactionNsu || !slug) {
    // payload incompleto: não há o que processar, mas confirmamos recebimento
    // para a InfinitePay não ficar reenviando.
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const { data: reservation } = await getSupabaseAdmin()
    .from("reservations")
    .select(
      "id, payment_status, customer_name, customer_phone, reservation_date, reservation_time, party_size, environment"
    )
    .eq("id", orderNsu)
    .maybeSingle();

  if (!reservation) {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  // Idempotência: já processado, nada a fazer.
  if (reservation.payment_status === "paid") {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  // O webhook da InfinitePay não tem assinatura/HMAC verificável, então nunca
  // confiamos só no corpo recebido: reconfirmamos o pagamento diretamente na
  // API deles antes de marcar a reserva como paga.
  let confirmed: Awaited<ReturnType<typeof checkInfinitePayPayment>>;
  try {
    confirmed = await checkInfinitePayPayment({
      orderNsu,
      transactionNsu,
      slug,
    });
  } catch (err) {
    console.error("Erro ao reconfirmar pagamento na InfinitePay:", err);
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const isReallyPaid =
    confirmed.success &&
    confirmed.paid &&
    (confirmed.paid_amount ?? 0) >= DEPOSIT_AMOUNT_CENTS;

  if (!isReallyPaid) {
    return NextResponse.json({ received: true }, { status: 200 });
  }

  const { error: updateError } = await getSupabaseAdmin()
    .from("reservations")
    .update({
      payment_status: "paid",
      infinitepay_invoice_slug: slug,
      infinitepay_transaction_nsu: transactionNsu,
    })
    .eq("id", reservation.id)
    .neq("payment_status", "paid");

  if (updateError) {
    // Pode ser a constraint unique em infinitepay_transaction_nsu disparando
    // por uma notificação concorrente já processada — tratamos como duplicata.
    console.warn("Webhook update ignorado (possível duplicata):", updateError.message);
    return NextResponse.json({ received: true }, { status: 200 });
  }

  await sendReservationPaidEmail({
    id: reservation.id,
    customer_name: reservation.customer_name,
    customer_phone: reservation.customer_phone,
    reservation_date: reservation.reservation_date,
    reservation_time: reservation.reservation_time,
    party_size: reservation.party_size,
    environment: reservation.environment,
  });

  return NextResponse.json({ received: true }, { status: 200 });
}

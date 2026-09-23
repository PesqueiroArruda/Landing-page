import "server-only";
import { getSiteUrl } from "@/lib/site-url";

const CHECKOUT_API_BASE = "https://api.checkout.infinitepay.io";

function getHandle(): string {
  const handle = process.env.INFINITEPAY_HANDLE;
  if (!handle) throw new Error("INFINITEPAY_HANDLE ausente.");
  return handle;
}

type CreateLinkResponse = {
  url: string;
};

export async function createReservationCheckoutLink(reservation: {
  id: string;
  depositAmountCents: number;
}): Promise<string> {
  const siteUrl = getSiteUrl();

  const response = await fetch(`${CHECKOUT_API_BASE}/links`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      handle: getHandle(),
      order_nsu: reservation.id,
      redirect_url: `${siteUrl}/reserva/confirmacao?reservation=${reservation.id}`,
      webhook_url: `${siteUrl}/api/payments/webhook`,
      items: [
        {
          quantity: 1,
          price: reservation.depositAmountCents,
          description: "Sinal de reserva - Pesqueiro Arruda's",
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Falha ao criar link de pagamento na InfinitePay (status ${response.status}).`
    );
  }

  const data = (await response.json()) as CreateLinkResponse;
  if (!data.url) throw new Error("Resposta da InfinitePay sem campo 'url'.");

  return data.url;
}

type PaymentCheckResponse = {
  success: boolean;
  paid: boolean;
  amount?: number;
  paid_amount?: number;
  installments?: number;
  capture_method?: string;
};

export async function checkInfinitePayPayment(params: {
  orderNsu: string;
  transactionNsu: string;
  slug: string;
}): Promise<PaymentCheckResponse> {
  const response = await fetch(`${CHECKOUT_API_BASE}/payment_check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      handle: getHandle(),
      order_nsu: params.orderNsu,
      transaction_nsu: params.transactionNsu,
      slug: params.slug,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Falha ao confirmar pagamento na InfinitePay (status ${response.status}).`
    );
  }

  return (await response.json()) as PaymentCheckResponse;
}

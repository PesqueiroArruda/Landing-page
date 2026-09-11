import Link from "next/link";
import { CheckCircle2, Clock, XCircle, HelpCircle } from "lucide-react";
import { getSupabaseAdmin } from "@/lib/supabase";
import { whatsappReservaLink } from "@/lib/whatsapp";

function StatusCard({
  icon,
  title,
  description,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tone: "success" | "pending" | "failed" | "notfound";
}) {
  const toneClasses: Record<typeof tone, string> = {
    success: "text-lake",
    pending: "text-gold",
    failed: "text-red-600",
    notfound: "text-bark/35",
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-paper px-4 py-24 sm:px-6">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-ink/10 bg-paper-soft p-8 text-center">
        <span className={toneClasses[tone]}>{icon}</span>
        <h1 className="text-2xl font-semibold text-ink">{title}</h1>
        <p className="text-sm text-bark/70 sm:text-base">{description}</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/"
            className="rounded-full border-2 border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink/5"
          >
            Voltar ao site
          </Link>
          <a
            href={whatsappReservaLink}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink-deep hover:bg-gold-deep"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default async function ConfirmacaoPage({
  searchParams,
}: {
  searchParams: Promise<{ reservation?: string }>;
}) {
  const { reservation: reservationId } = await searchParams;

  const reservation = reservationId
    ? (
        await getSupabaseAdmin()
          .from("reservations")
          .select(
            "id, payment_status, reservation_date, reservation_time, party_size, environment"
          )
          .eq("id", reservationId)
          .maybeSingle()
      ).data
    : null;

  if (!reservation) {
    return (
      <StatusCard
        icon={<HelpCircle size={48} />}
        title="Reserva não encontrada"
        description="Verifique o link ou entre em contato pelo WhatsApp para confirmar sua reserva."
        tone="notfound"
      />
    );
  }

  if (reservation.payment_status === "paid") {
    return (
      <StatusCard
        icon={<CheckCircle2 size={48} />}
        title="Reserva confirmada!"
        description={`Seu sinal foi pago e sua reserva para ${reservation.reservation_date} às ${reservation.reservation_time} está garantida. Te esperamos por lá!`}
        tone="success"
      />
    );
  }

  if (reservation.payment_status === "failed") {
    return (
      <StatusCard
        icon={<XCircle size={48} />}
        title="Pagamento não aprovado"
        description="Não conseguimos confirmar o pagamento do sinal. Tente novamente ou fale com a gente pelo WhatsApp para reservar."
        tone="failed"
      />
    );
  }

  return (
    <StatusCard
      icon={<Clock size={48} />}
      title="Pagamento em processamento"
      description="Assim que confirmarmos o pagamento (pode levar alguns instantes, principalmente no Pix), sua reserva é confirmada automaticamente. Atualize esta página em instantes."
      tone="pending"
    />
  );
}

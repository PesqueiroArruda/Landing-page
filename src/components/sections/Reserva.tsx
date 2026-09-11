"use client";

import { useActionState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SubmitButton from "@/components/ui/SubmitButton";
import {
  createReservation,
  type CreateReservationState,
} from "@/app/actions/reservations";
import {
  TIME_SLOTS,
  ENVIRONMENT_OPTIONS,
  DEPOSIT_AMOUNT_BRL,
} from "@/lib/reservations";

const initialState: CreateReservationState = { status: "idle" };

const inputClassName =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-bark/35 focus:border-lake focus:outline-none focus:ring-2 focus:ring-lake/25 sm:text-base";

const labelClassName = "mb-1.5 block text-sm font-semibold text-ink";

export default function Reserva() {
  const [state, formAction] = useActionState(createReservation, initialState);

  useEffect(() => {
    if (state.status === "success" && state.checkoutUrl) {
      window.location.href = state.checkoutUrl;
    }
  }, [state]);

  const fieldError = (field: string) => state.errors?.[field]?.[0];

  return (
    <section id="reserva" className="bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="Faça sua reserva online"
          description={`Reservas exigem um sinal de R$ ${DEPOSIT_AMOUNT_BRL.toFixed(2).replace(".", ",")}, pago aqui mesmo pelo site via Pix ou cartão. O restante é pago no dia, no local.`}
        />

        <form
          action={formAction}
          className="grid gap-4 rounded-2xl border border-ink/10 bg-paper-soft p-6 sm:p-8"
        >
            <div>
              <label htmlFor="customerName" className={labelClassName}>
                Nome completo
              </label>
              <input
                id="customerName"
                name="customerName"
                type="text"
                required
                className={inputClassName}
                placeholder="Seu nome"
              />
              {fieldError("customerName") && (
                <p className="mt-1 text-xs font-medium text-red-600">
                  {fieldError("customerName")}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="customerPhone" className={labelClassName}>
                Telefone / WhatsApp
              </label>
              <input
                id="customerPhone"
                name="customerPhone"
                type="tel"
                required
                className={inputClassName}
                placeholder="(11) 91234-5678"
              />
              {fieldError("customerPhone") && (
                <p className="mt-1 text-xs font-medium text-red-600">
                  {fieldError("customerPhone")}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="reservationDate" className={labelClassName}>
                  Dia
                </label>
                <input
                  id="reservationDate"
                  name="reservationDate"
                  type="date"
                  required
                  className={inputClassName}
                />
                {fieldError("reservationDate") && (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {fieldError("reservationDate")}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="reservationTime" className={labelClassName}>
                  Horário
                </label>
                <select
                  id="reservationTime"
                  name="reservationTime"
                  required
                  defaultValue=""
                  className={inputClassName}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {fieldError("reservationTime") && (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {fieldError("reservationTime")}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="partySize" className={labelClassName}>
                  Quantidade de pessoas
                </label>
                <input
                  id="partySize"
                  name="partySize"
                  type="number"
                  min={1}
                  max={60}
                  required
                  defaultValue={2}
                  className={inputClassName}
                />
                {fieldError("partySize") && (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {fieldError("partySize")}
                  </p>
                )}
              </div>

              <div>
                <span className={labelClassName}>Ambiente</span>
                <div className="flex gap-4 pt-1">
                  {ENVIRONMENT_OPTIONS.map((option, index) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 text-sm text-ink"
                    >
                      <input
                        type="radio"
                        name="environment"
                        value={option.value}
                        defaultChecked={index === 0}
                        required
                        className="h-4 w-4 accent-lake"
                      />
                      {option.label.replace("Ambiente ", "")}
                    </label>
                  ))}
                </div>
                {fieldError("environment") && (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {fieldError("environment")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="notes" className={labelClassName}>
                Observações (opcional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className={inputClassName}
                placeholder="Ex: aniversário, alguma necessidade especial..."
              />
            </div>

            {state.status === "error" && state.message && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {state.message}
              </p>
            )}

            <SubmitButton className="mt-2 w-full" pendingLabel="Redirecionando para pagamento...">
              Ir para pagamento do sinal
            </SubmitButton>

            <p className="text-center text-xs text-bark/55">
              Ao confirmar, você será redirecionado ao checkout seguro da
              InfinitePay para pagar o sinal de R${" "}
              {DEPOSIT_AMOUNT_BRL.toFixed(2).replace(".", ",")}.
            </p>
          </form>
      </div>
    </section>
  );
}

import { z } from "zod";

// Valor real do sinal em produção: R$50 (5000 centavos). Pode ser sobrescrito
// via NEXT_PUBLIC_RESERVATION_DEPOSIT_CENTS (ex: em .env.local, para testar o
// checkout de verdade pagando um valor baixo em vez de R$50). Precisa ser
// NEXT_PUBLIC_ porque este valor também é exibido no formulário (client).
const parsedDepositOverride = Number(
  process.env.NEXT_PUBLIC_RESERVATION_DEPOSIT_CENTS
);
export const DEPOSIT_AMOUNT_CENTS =
  Number.isFinite(parsedDepositOverride) && parsedDepositOverride > 0
    ? parsedDepositOverride
    : 5000;
export const DEPOSIT_AMOUNT_BRL = DEPOSIT_AMOUNT_CENTS / 100;

// Terça a domingo, das 8h às 17h — mesmo horário divulgado em Contato.tsx
const OPEN_WEEKDAYS = [0, 2, 3, 4, 5, 6]; // 0=domingo ... 6=sábado; 1=segunda fica de fora
const OPENING_HOUR = 8;
const CLOSING_HOUR = 17;

export const TIME_SLOTS = Array.from(
  { length: CLOSING_HOUR - OPENING_HOUR + 1 },
  (_, i) => `${String(OPENING_HOUR + i).padStart(2, "0")}:00`
);

export const ENVIRONMENT_OPTIONS = [
  { value: "interno", label: "Ambiente interno" },
  { value: "externo", label: "Ambiente externo" },
] as const;

export const reservationSchema = z.object({
  customerName: z.string().trim().min(3, "Informe seu nome completo").max(120),
  customerPhone: z
    .string()
    .trim()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Informe um telefone válido com DDD"),
  reservationDate: z
    .string()
    .refine((v) => !Number.isNaN(Date.parse(v)), "Data inválida")
    .refine((v) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(`${v}T00:00:00`) >= today;
    }, "Escolha uma data a partir de hoje.")
    .refine((v) => {
      const day = new Date(`${v}T00:00:00`).getDay();
      return OPEN_WEEKDAYS.includes(day);
    }, "Fechamos às segundas-feiras, exceto feriados. Escolha outro dia."),
  reservationTime: z.enum(TIME_SLOTS as [string, ...string[]], "Escolha um horário entre 8h e 17h"),
  partySize: z.coerce.number().int("Informe um número inteiro").min(1, "Mínimo de 1 pessoa").max(60, "Para grupos maiores, fale com a gente pelo WhatsApp"),
  environment: z.enum(["interno", "externo"], "Escolha o ambiente"),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

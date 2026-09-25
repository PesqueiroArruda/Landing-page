interface ReadoutChipProps {
  label: string;
  value: string;
  className?: string;
  light?: boolean;
}

/** Leitura numérica precisa, tipo painel medidor: usado pra horário, sinal e capacidade reais. */
export default function ReadoutChip({ label, value, className = "", light = false }: ReadoutChipProps) {
  return (
    <div
      className={`inline-flex items-baseline gap-2.5 rounded-md border px-3.5 py-2 ${
        light
          ? "border-paper/20 bg-paper/5"
          : "border-ink/15 bg-paper-soft"
      } ${className}`}
    >
      <span
        className={`text-[10px] font-bold tracking-[0.14em] uppercase ${
          light ? "text-paper/55" : "text-bark/50"
        }`}
      >
        {label}
      </span>
      <span
        className={`font-readout text-base font-medium ${light ? "text-gold" : "text-ink"}`}
      >
        {value}
      </span>
    </div>
  );
}

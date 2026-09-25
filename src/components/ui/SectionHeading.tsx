import ChalkRule from "@/components/ui/ChalkRule";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Seção com fundo claro (papel), em vez do padrão escuro da lousa. */
  onLight?: boolean;
}

export default function SectionHeading({
  title,
  description,
  align = "left",
  onLight = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-12 max-w-xl sm:mb-16 ${alignClass}`}>
      <h2
        className={`text-3xl leading-[1.2] font-normal sm:text-4xl ${
          onLight ? "text-chalk-dark text-ink" : "text-chalk text-paper"
        }`}
      >
        {title}
      </h2>
      <ChalkRule align={align} className={onLight ? "text-gold-deep" : "text-gold"} />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            onLight ? "text-bark/70" : "text-paper/75"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const ruleAlignClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-10 max-w-xl sm:mb-14 ${alignClass}`}>
      {kicker && (
        <p
          className={`mb-3 font-script text-2xl leading-none ${
            light ? "text-gold" : "text-lake"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`text-3xl leading-[1.08] font-semibold sm:text-4xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        aria-hidden
        className={`mt-4 block h-0.75 w-14 rounded-full ${ruleAlignClass} ${
          light ? "bg-gold" : "bg-gold"
        }`}
      />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-paper/80" : "text-bark/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

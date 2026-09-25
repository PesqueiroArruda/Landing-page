interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const ruleAlignClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 max-w-xl sm:mb-16 ${alignClass}`}>
      <h2
        className={`text-carved${light ? "-light" : ""} text-3xl leading-[1.15] font-normal sm:text-4xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        aria-hidden
        className={`mt-5 block h-1.5 w-9 rounded-sm ${ruleAlignClass} bg-gold`}
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

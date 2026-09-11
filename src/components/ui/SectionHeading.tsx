interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`mb-3 block text-sm font-semibold uppercase tracking-widest ${
            light ? "text-gold" : "text-cyan"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-bold sm:text-4xl ${
          light ? "text-text-on-navy" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg ${
            light ? "text-text-on-navy/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

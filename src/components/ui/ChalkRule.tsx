interface ChalkRuleProps {
  className?: string;
  align?: "left" | "center";
}

/** Risco de giz sublinhando um título, com leve irregularidade de traço à mão. */
export default function ChalkRule({ className = "", align = "left" }: ChalkRuleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 10"
      className={`mt-4 h-2.5 w-24 ${align === "center" ? "mx-auto" : ""} ${className}`}
    >
      <path
        d="M2 6.5C20 3 40 8 60 5S100 2 118 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

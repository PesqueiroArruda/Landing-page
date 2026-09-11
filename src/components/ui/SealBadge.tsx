interface SealBadgeProps {
  text: string;
  className?: string;
}

/** Selo circular com texto no contorno — usado uma única vez, como assinatura do herói. */
export default function SealBadge({ text, className = "" }: SealBadgeProps) {
  return (
    <svg viewBox="0 0 200 200" className={`h-full w-full ${className}`} aria-hidden>
      <path id="seal-arc" d="M10,104 A90,90 0 0,1 190,104" fill="none" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text fontSize="11.5" letterSpacing="1.5" fill="currentColor" fontWeight="600" textAnchor="middle">
        <textPath href="#seal-arc" startOffset="50%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

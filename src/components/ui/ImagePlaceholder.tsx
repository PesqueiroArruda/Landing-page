import type { LucideIcon } from "lucide-react";

interface ImagePlaceholderProps {
  icon: LucideIcon;
  label?: string;
  className?: string;
  /** Caminho esperado da foto real, só para referência em dev tools. */
  imagePath?: string;
}

/* TODO: trocar por <Image src={imagePath} alt={label} fill className="object-cover" /> quando as fotos reais chegarem */
export default function ImagePlaceholder({
  icon: Icon,
  label,
  className = "",
  imagePath,
}: ImagePlaceholderProps) {
  return (
    <div
      data-image-placeholder={imagePath}
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-ink ${className}`}
    >
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full text-paper/5"
        preserveAspectRatio="none"
      >
        <pattern id="ripple" width="42" height="42" patternUnits="userSpaceOnUse">
          <path
            d="M0 21c5-6 9-6 10.5 0s5.5 6 10.5 0 9-6 10.5 0 5.5 6 10.5 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#ripple)" />
      </svg>
      <Icon className="relative h-10 w-10 text-gold/70" strokeWidth={1.5} />
      {label && (
        <span className="relative px-4 text-center text-sm font-medium text-paper/70">
          {label}
        </span>
      )}
    </div>
  );
}

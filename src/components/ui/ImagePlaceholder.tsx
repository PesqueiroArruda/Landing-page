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
      className={`flex flex-col items-center justify-center gap-3 bg-linear-to-br from-navy via-cyan to-navy-hover ${className}`}
    >
      <Icon className="h-14 w-14 text-text-on-navy/70" strokeWidth={1.5} />
      {label && (
        <span className="px-4 text-center text-sm font-medium text-text-on-navy/70">
          {label}
        </span>
      )}
    </div>
  );
}

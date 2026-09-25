import type { ReactNode } from "react";

interface SignpostProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/** Placa de madeira apontando para uma área do sítio, usada na navegação e no totem de entrada. */
export default function Signpost({ href, children, className = "", onClick }: SignpostProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 whitespace-nowrap ${className}`}
    >
      <span aria-hidden className="text-gold transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
      <span>{children}</span>
    </a>
  );
}

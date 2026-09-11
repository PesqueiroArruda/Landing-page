"use client";

import { useState } from "react";
import { Fish, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { whatsappReservaLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#pesca", label: "Pesca" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-heading text-lg font-bold text-text-on-navy"
        >
          <Fish className="h-6 w-6 text-gold" />
          Pesqueiro Arruda&apos;s
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-on-navy/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={whatsappReservaLink} variant="primary" className="px-5 py-2 text-sm">
            Reservar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-text-on-navy md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-text-on-navy/80 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={whatsappReservaLink}
              variant="primary"
              className="mt-2 w-full"
            >
              Reservar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

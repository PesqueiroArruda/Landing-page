"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#pesca", label: "Pesca" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#kids", label: "Kids" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-gold/20 bg-ink transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-ink-deep/40" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/70">
            <Image
              src="/logo.jpeg"
              alt="Logo Pesqueiro Arruda's"
              fill
              sizes="36px"
              className="object-cover object-[50%_38%]"
              priority
            />
          </span>
          <span className="text-lg leading-none font-semibold text-paper">
            Pesqueiro <span className="font-script text-xl text-gold">Arruda&apos;s</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-paper/75 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#reserva" variant="primary" className="px-5 py-2 text-sm">
            Reservar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-paper md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/20 bg-ink px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-paper/80 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <Button href="#reserva" variant="primary" className="mt-2 w-full">
              Reservar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

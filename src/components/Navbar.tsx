"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Signpost from "@/components/ui/Signpost";
import { easeOut } from "@/lib/motion";

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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <header
      className={`bg-woodgrain fixed top-0 right-0 left-0 z-50 border-b-2 border-gold/25 bg-ink transition-shadow duration-300 ${
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
          <span className="text-carved font-display text-lg leading-none font-normal tracking-wide text-paper">
            Pesqueiro <span className="text-gold">Arruda&apos;s</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Signpost
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-paper/75 transition-colors hover:text-paper"
            >
              {link.label}
            </Signpost>
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="border-t border-gold/20 bg-ink px-4 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => (
                <Signpost
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-paper/80 hover:text-paper"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Signpost>
              ))}
              <Button href="#reserva" variant="primary" className="mt-2 w-full">
                Reservar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

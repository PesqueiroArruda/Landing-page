"use client";

import { motion } from "motion/react";
import { Fish, Waves } from "lucide-react";
import Button from "@/components/ui/Button";
import { whatsappReservaLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-navy via-navy to-cyan pt-24 text-text-on-navy"
    >
      <Waves
        className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 text-white/5"
        strokeWidth={1}
      />
      <Fish
        className="pointer-events-none absolute -top-10 -right-10 h-72 w-72 text-white/5"
        strokeWidth={1}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 rounded-full border border-gold/40 bg-white/5 px-4 py-1 text-sm font-semibold text-gold"
        >
          O melhor pesqueiro da região
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl leading-tight font-bold sm:text-5xl md:text-6xl"
        >
          Mais que um pesqueiro, lugar de memórias
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-text-on-navy/85 sm:text-xl"
        >
          Nossa família servindo a sua! Pesca, restaurante à beira do lago e
          lazer para a família toda, em Santana de Parnaíba.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href={whatsappReservaLink} variant="primary">
            Reservar pelo WhatsApp
          </Button>
          <Button href="#cardapio" variant="outline">
            Ver cardápio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

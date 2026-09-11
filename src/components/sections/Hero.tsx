"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fish, Waves } from "lucide-react";
import Button from "@/components/ui/Button";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 h-24 w-24 overflow-hidden rounded-full shadow-lg ring-2 ring-gold/60 sm:h-28 sm:w-28"
        >
          <Image
            src="/logo.jpeg"
            alt="Logo Pesqueiro Arruda's"
            fill
            sizes="112px"
            className="object-cover object-[50%_38%]"
            priority
          />
        </motion.div>

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
          <Button href="#reserva" variant="primary">
            Reservar online
          </Button>
          <Button href="#cardapio" variant="outline">
            Ver cardápio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SealBadge from "@/components/ui/SealBadge";
import Waterline from "@/components/ui/Waterline";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink pt-24 pb-16 text-paper sm:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,167,34,0.14),transparent_55%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]"
          >
            Mais que um pesqueiro,
            <br />
            lugar de memórias.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-md text-lg text-paper/80 lg:mx-0"
          >
            Pesca esportiva, tilápia na chapa feita na hora e uma tarde
            inteira à beira do lago, em Santana de Parnaíba. A família
            Arruda&apos;s cuidando de cada detalhe da sua mesa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start"
          >
            <Button href="#reserva" variant="primary">
              Reservar online
            </Button>
            <Button href="#cardapio" variant="outline">
              Ver cardápio
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-sm text-paper/55"
          >
            Terça a domingo, 8h às 17h · (11) 97231-1736
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative flex h-full w-full items-center justify-center"
          >
            <div className="absolute inset-0 text-gold/75">
              <SealBadge text="TRADIÇÃO DE FAMÍLIA" />
            </div>
            <span className="relative h-40 w-40 overflow-hidden rounded-full shadow-[0_0_0_6px_rgba(246,239,220,0.06)] ring-4 ring-gold/80 sm:h-44 sm:w-44">
              <Image
                src="/logo.jpeg"
                alt="Logo Pesqueiro Arruda's"
                fill
                sizes="176px"
                className="object-cover object-[50%_38%]"
                priority
              />
            </span>
          </motion.div>
        </motion.div>
      </div>

      <Waterline
        animated={!shouldReduceMotion}
        className="absolute right-0 bottom-0 left-0 h-10 w-full text-paper sm:h-14"
      />
    </section>
  );
}

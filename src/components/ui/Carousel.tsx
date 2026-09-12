"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselImage = {
  src: string;
  alt: string;
};

const AUTOPLAY_INTERVAL_MS = 5000;

export default function Carousel({
  images,
  className = "",
}: {
  images: CarouselImage[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length < 2 || paused || shouldReduceMotion) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(id);
  }, [images.length, paused, shouldReduceMotion]);

  if (images.length === 0) return null;

  function goTo(target: number) {
    setIndex(((target % images.length) + images.length) % images.length);
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Foto anterior"
            className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-deep/50 text-paper opacity-0 transition-opacity group-hover:opacity-100 hover:bg-ink-deep/70 focus-visible:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próxima foto"
            className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-deep/50 text-paper opacity-0 transition-opacity group-hover:opacity-100 hover:bg-ink-deep/70 focus-visible:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver foto ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-gold" : "w-2 bg-paper/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

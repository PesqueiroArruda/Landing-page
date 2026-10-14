"use client";

import { useEffect, useRef } from "react";

/**
 * Movimento de assinatura: a linha de pesca. Um fio desce pela margem
 * esquerda conforme a pagina rola e a boia acompanha a ponta. No ato "Do lago
 * a mesa" a boia afunda (a fisgada). So transform e opacity, sem layout.
 */
export default function FishingLine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let bitten = false;

    function update() {
      frame = 0;
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el!.style.setProperty("--lp", p.toFixed(4));

      const peak = document.getElementById("pico");
      if (peak) {
        const rect = peak.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;
        const peakP = travel > 0 ? -rect.top / travel : 0;
        const shouldBite = peakP > 0.42 && peakP < 0.7;
        if (shouldBite && !bitten) {
          bitten = true;
          el!.dataset.bite = "true";
        } else if (!shouldBite && bitten) {
          bitten = false;
          el!.dataset.bite = "false";
        }
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="fishing-line">
      <div className="fishing-line__thread" />
      <div className="fishing-line__float">
        <div className="fishing-line__bob" />
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      easing: easeOutCubic,
    });

    function handleClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement)?.closest<HTMLAnchorElement>(
        "a[href^='#']"
      );
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash.length <= 1) return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        onComplete: () => target.focus({ preventScroll: true }),
      });
      history.pushState(null, "", hash);
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return null;
}

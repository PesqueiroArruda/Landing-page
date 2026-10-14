"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

type ScrollCraftInstance = { layout: () => void };

declare global {
  interface Window {
    ScrollCraft?: { mount: (root: Element) => ScrollCraftInstance };
    __scrollcraftMounted?: boolean;
  }
}

/**
 * Carrega o motor scrollcraft (public/sc/scrollcraft.js, original e sem edicao)
 * e monta nos atos marcados com data-sc-*. O motor nao tem destroy: a montagem
 * acontece uma vez por carregamento de pagina, e os links que voltam para a
 * home vindo de outras rotas sao <a> comuns (carregamento completo).
 */
export default function ScrollMount() {
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => () => cleanupRef.current?.(), []);

  function start() {
    if (window.__scrollcraftMounted || !window.ScrollCraft) return;

    let instance: ScrollCraftInstance;
    try {
      instance = window.ScrollCraft.mount(document.body);
    } catch (error) {
      console.error("Falha ao montar o scrollcraft", error);
      return;
    }
    window.__scrollcraftMounted = true;

    // Conteudo que muda de altura depois (cardapio, fontes, imagens) precisa
    // recalcular os atos fixados.
    let lastHeight = document.body.scrollHeight;
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = document.body.scrollHeight;
        if (Math.abs(height - lastHeight) > 2) {
          lastHeight = height;
          instance.layout();
        }
      });
    });
    observer.observe(document.body);

    const relayout = () => instance.layout();
    if (document.readyState === "complete") {
      relayout();
    } else {
      window.addEventListener("load", relayout, { once: true });
    }
    document.fonts?.ready.then(relayout);

    cleanupRef.current = () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("load", relayout);
    };
  }

  return (
    <Script src="/sc/scrollcraft.js" strategy="afterInteractive" onReady={start} />
  );
}

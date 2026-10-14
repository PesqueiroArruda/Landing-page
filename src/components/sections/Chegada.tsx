/* eslint-disable @next/next/no-img-element */
import Waterline from "@/components/ui/Waterline";

/**
 * Ato 2 (pin): quatro frases, uma de cada vez, sobre a agua parada.
 * Camadas: fundo em parallax, nevoa em ritmo proprio, texto fixo na frente.
 */
export default function Chegada() {
  return (
    <section id="chegada" data-sc-act="pin" data-sc-span="2" className="theme-ink">
      <div data-sc-stage>
        <div className="peak-layer dim-image" data-sc-parallax="-1.4" aria-hidden="true">
          <img
            src="/media/lago.webp"
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            style={{ objectPosition: "8% 62%", scale: "1.35", transformOrigin: "10% 70%" }}
          />
        </div>
        <div className="mist" data-sc-parallax="1.6" aria-hidden="true" />
        <div className="mist mist--2" data-sc-parallax="0.8" aria-hidden="true" />
        <div className="scrim-lead-left" aria-hidden="true" />

        <p className="act-lede arrival-text arrival-text--a" data-sc-cue="0 0.32 0">
          Você chega cedo e a água ainda está parada.
        </p>
        <p className="act-lede arrival-text arrival-text--b" data-sc-cue="0.26 0.6">
          Vara na mão, sem pressa nenhuma.
        </p>
        <p className="act-lede arrival-text arrival-text--c" data-sc-cue="0.54 0.88">
          Quem cuida do lago é a mesma família que serve a sua mesa.
        </p>
        <p className="act-lede arrival-text arrival-text--d" data-sc-cue="0.7 1 0.2 0.1">
          O dia está só começando.
        </p>

        <Waterline className="absolute right-0 bottom-0 left-0 z-30 h-10 w-full text-paper sm:h-14" />
      </div>
    </section>
  );
}

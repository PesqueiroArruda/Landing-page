/* eslint-disable @next/next/no-img-element */

/**
 * Ato 5 (pico, pin): do lago a mesa. A agua parada e coberta pela mesa posta
 * num iris que abre com a rolagem. E o ato mais longo da pagina; a boia da
 * linha de pesca afunda aqui.
 */
export default function LagoMesa() {
  return (
    <section id="pico" data-sc-act="pin" data-sc-span="3.6" className="theme-ink">
      <div data-sc-stage>
        <div className="peak-layer" data-sc-parallax="-1.2" aria-hidden="true">
          <img
            src="/media/lago.webp"
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            style={{ objectPosition: "70% 60%" }}
          />
        </div>
        <div className="mist" data-sc-parallax="1.6" aria-hidden="true" />

        <div
          className="peak-layer"
          style={{ zIndex: 3 }}
          data-sc-reveal="iris"
          data-sc-reveal-at="0.16 0.64"
        >
          <img
            src="/media/mesa.webp"
            alt="Mesa posta à beira do lago, com tilápia grelhada, arroz, vinagrete e bebidas geladas"
            width={1920}
            height={1080}
            loading="lazy"
          />
        </div>

        <div className="scrim-lead-left" style={{ zIndex: 4 }} aria-hidden="true" />

        <div className="peak-copy" style={{ zIndex: 20 }}>
          <h2
            className="act-title text-[clamp(2.4rem,1.2rem+5.4vw,6rem)]"
            data-sc-cue="0 0.34 0"
            data-sc-kinetic="lines"
          >
            Primeiro, o lago.
          </h2>
        </div>
        <div className="peak-copy" style={{ zIndex: 20 }}>
          <h2
            className="act-title text-[clamp(2.4rem,1.2rem+5.4vw,6rem)]"
            data-sc-cue="0.52 1"
            data-sc-kinetic="lines"
          >
            Depois, a mesa.
          </h2>
          <p className="act-small mt-4" data-sc-cue="0.6 1 0.2 0.1">
            Tilápia na chapa feita na hora, com a água do lado.
          </p>
        </div>
      </div>
    </section>
  );
}

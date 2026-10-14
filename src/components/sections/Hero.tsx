/**
 * Ato 1 (scrub): o lago ao amanhecer. A camera entra devagar enquanto a mao
 * do visitante rola. O titulo ja esta na tela quando a pagina carrega (greet).
 */
export default function Hero() {
  return (
    <section
      id="top"
      data-sc-act="scrub"
      data-sc-span="2.2"
      data-sc-dwell="0.35"
      aria-label="Pesqueiro Arruda's"
    >
      <div data-sc-stage>
        <picture>
          <source media="(max-width: 700px)" srcSet="/media/hero-poster-m.webp" />
          <img
            className="sc-stage__poster"
            src="/media/hero-poster.webp"
            alt="Lago do pesqueiro ao amanhecer, com névoa sobre a água e um deck de madeira na margem"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </picture>
        <video
          data-sc-scrub
          data-sc-src="/media/hero.mp4"
          data-sc-src-mobile="/media/hero-m.mp4"
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="scrim-lead-left" aria-hidden="true" />

        <div className="sc-copy hero-copy">
          <h1
            className="act-title hero-h1"
            data-sc-cue="0 0.82 0"
            data-sc-kinetic="lines"
          >
            Mais que um pesqueiro, lugar de memórias.
          </h1>
          <p className="act-small mt-5" data-sc-cue="0 0.82 0">
            Pesca esportiva e tilápia na chapa à beira do lago, em Santana de
            Parnaíba.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
            data-sc-cue="0 0.82 0"
          >
            <a href="#reserva" className="cta-gold">
              Reservar minha mesa
            </a>
            <a href="#cardapio" className="cta-ghost">
              Ver o cardápio
            </a>
          </div>
          <p className="mt-6 text-sm text-(--sc-ink-soft)" data-sc-cue="0 0.82 0">
            Terça a domingo, das 8h às 17h
          </p>
        </div>
      </div>
    </section>
  );
}

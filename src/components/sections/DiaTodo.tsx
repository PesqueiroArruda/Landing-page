import Image from "next/image";

const ITENS = [
  { titulo: "Deck sobre o lago", texto: "O lugar perfeito pra ver o dia passar.", cue: "0 0.24 0" },
  { titulo: "Área coberta", texto: "Mesas protegidas do sol e da chuva.", cue: "0.22 0.46" },
  {
    titulo: "Espaço kids",
    texto: "Área coberta com brinquedos e espaço infantil externo, pra criançada se divertir em segurança.",
    cue: "0.42 0.7 0.2 0.2",
  },
  { titulo: "Música ao vivo", texto: "Em dias especiais, pra animar o passeio.", cue: "0.66 0.88" },
  { titulo: "Estacionamento", texto: "No local, sem complicação.", cue: "0.86 1 0.25 0.1" },
];

/** Ato 7 (pin): o dia todo, uma cena por vez. */
export default function DiaTodo() {
  return (
    <section id="estrutura" data-sc-act="pin" data-sc-span="2.4" className="theme-lake">
      <div data-sc-stage>
        <div className="absolute inset-y-[12svh] right-[var(--sc-gutter)] z-0 hidden aspect-[3/4] sm:block md:right-[calc(var(--sc-gutter)+2vw)]">
          <figure
            className="day-fig overflow-hidden rounded-[var(--sc-r-md)] shadow-(--sc-e3)"
            data-sc-cue="0 0.5 0 0.4"
          >
            <Image
              src="/images/pesca-9.jpg"
              alt="Vista do lago do Pesqueiro Arruda's a partir de uma mesa na área coberta"
              fill
              sizes="(min-width: 640px) 30vw, 0px"
              className="object-cover"
            />
          </figure>
          <figure
            className="day-fig overflow-hidden rounded-[var(--sc-r-md)] shadow-(--sc-e3)"
            data-sc-cue="0.4 1 0.3 0"
          >
            <Image
              src="/images/area-kids.jpg"
              alt="Playground da área Kids do Pesqueiro Arruda's, com escorregador, gangorras e balanços"
              fill
              sizes="(min-width: 640px) 30vw, 0px"
              className="object-cover"
            />
          </figure>
        </div>

        <div className="absolute top-[12svh] left-[var(--sc-gutter)] z-20 max-w-[min(30rem,84vw)]">
          <h2 className="act-title text-[clamp(2rem,1.3rem+2.8vw,3.6rem)]">
            Pensado pra família toda
          </h2>
        </div>

        {ITENS.map((item) => (
          <div key={item.titulo} className="day-copy" data-sc-cue={item.cue}>
            <h3 className="act-lede" style={{ fontSize: "clamp(1.7rem, 1.1rem + 2vw, 2.8rem)" }}>
              {item.titulo}
            </h3>
            <p className="act-small mt-3">{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

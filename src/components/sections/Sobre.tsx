import Image from "next/image";

const DIFERENCIAIS = [
  "Prato preparado na hora, com a receita da casa",
  "A nossa própria família trabalha no salão, com a mesma tradição de sempre",
  "Estrutura completa pra passar o dia, não é só pescar e ir embora",
  "Cardápio que vai além do peixe: pratos, porções, sobremesas e doses",
];

/** Ato 3 (flow + reveal): quem somos, com uma foto real da margem. */
export default function Sobre() {
  return (
    <section
      id="sobre"
      data-sc-act="flow"
      className="theme-paper sc-section"
      style={{ paddingTop: "clamp(3rem, 6vw, 6rem)" }}
    >
      <div className="sc-wrap grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="sc-stack" data-sc-in data-sc-stagger="70">
          <h2 className="act-title text-[clamp(2.2rem,1.4rem+3vw,4.2rem)] text-(--sc-ink)">
            Nossa família servindo a sua
          </h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-(--sc-ink-soft)">
            Em Santana de Parnaíba, o Pesqueiro Arruda&apos;s é o lugar pra
            passar o dia com quem você ama, seja pescando na nossa pesca
            esportiva, seja só sentando pra comer bem à beira do lago.
          </p>
          <p className="max-w-[46ch] text-lg leading-relaxed text-(--sc-ink-soft)">
            A ideia é simples: comida boa, sem pressa, com a família toda por
            perto, seja a sua ou a nossa.
          </p>
          <ul className="mt-8 divide-y divide-(--sc-hairline) border-y border-(--sc-hairline)">
            {DIFERENCIAIS.map((text) => (
              <li key={text} className="py-3.5 text-base text-(--sc-ink)">
                {text}
              </li>
            ))}
          </ul>
        </div>

        <figure
          data-sc-reveal="left"
          data-sc-reveal-at="0.12 0.5"
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--sc-r-md)] shadow-(--sc-e3) lg:max-w-none"
        >
          <Image
            src="/images/pesca-5.jpg"
            alt="Família pescando junta na margem do lago do Pesqueiro Arruda's"
            fill
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover object-[50%_40%]"
          />
        </figure>
      </div>
    </section>
  );
}

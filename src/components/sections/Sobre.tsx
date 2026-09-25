import { Fish, HeartHandshake, Sun, UtensilsCrossed } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import { RevealList, RevealListItem } from "@/components/ui/RevealGroup";
import ChalkRule from "@/components/ui/ChalkRule";

const DIFERENCIAIS = [
  {
    icon: Fish,
    text: "Prato preparado na hora, com a receita da casa",
  },
  {
    icon: HeartHandshake,
    text: "A nossa própria família trabalha no salão, com a mesma tradição de sempre",
  },
  {
    icon: Sun,
    text: "Estrutura completa pra passar o dia, não é só pescar e ir embora",
  },
  {
    icon: UtensilsCrossed,
    text: "Cardápio que vai além do peixe: pratos, porções, sobremesas e doses",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-chalkdust bg-bark px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-chalk text-3xl leading-[1.2] font-normal text-paper sm:text-4xl">
            Nossa família servindo a sua
          </h2>
          <ChalkRule className="text-gold" />

          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            Em Santana de Parnaíba, o Pesqueiro Arruda&apos;s é o destino
            ideal pra passar o dia com quem você ama — seja pescando na nossa
            pesca esportiva, seja só sentando pra comer bem à beira do lago.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            É a nossa família cuidando de cada detalhe, pra fazer da sua
            visita um momento de verdade em família.
          </p>

          <RevealList className="mt-9 flex flex-col gap-4">
            {DIFERENCIAIS.map(({ icon: Icon, text }) => (
              <RevealListItem key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lake/25 text-lake-deep ring-1 ring-lake/40">
                  <Icon className="h-4 w-4 text-gold" />
                </span>
                <span className="text-sm text-paper/80 sm:text-base">
                  {text}
                </span>
              </RevealListItem>
            ))}
          </RevealList>
        </Reveal>

        <Reveal>
          <ImagePlaceholder
            icon={Fish}
            label="Nossa família à beira do lago"
            imagePath="/images/sobre-familia.jpg"
            className="aspect-4/3 w-full rounded-sm"
          />
        </Reveal>
      </div>
    </section>
  );
}

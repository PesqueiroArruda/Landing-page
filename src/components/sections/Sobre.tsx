import { Fish, HeartHandshake, Sun, UtensilsCrossed } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const DIFERENCIAIS = [
  {
    icon: Fish,
    text: "Peixe fresco, pescado e preparado na hora",
  },
  {
    icon: HeartHandshake,
    text: "Tradição e história de família — a nossa família própria trabalha no salão",
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
    <section id="sobre" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <span className="mb-3 block text-sm font-semibold tracking-widest text-cyan uppercase">
            Sobre nós
          </span>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Nossa família servindo a sua!
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Em Santana de Parnaíba, o Pesqueiro Arruda&apos;s é o destino
            ideal pra passar o dia com quem você ama — seja pescando na nossa
            Pesca Esportiva, seja só sentando pra comer bem à beira do lago.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            É a nossa família cuidando de cada detalhe, com a mesma tradição
            de sempre, pra fazer da sua visita um momento de verdade em
            família.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {DIFERENCIAIS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-slate-700 sm:text-base">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ImagePlaceholder
            icon={Fish}
            label="Nossa família à beira do lago"
            imagePath="/images/sobre-familia.jpg"
            className="aspect-4/3 w-full rounded-3xl"
          />
        </FadeIn>
      </div>
    </section>
  );
}

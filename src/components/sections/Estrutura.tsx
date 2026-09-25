import { Baby, Music, ParkingCircle, Umbrella, Waves } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { RevealGrid, RevealItem } from "@/components/ui/RevealGroup";

const COMODIDADES = [
  {
    icon: ParkingCircle,
    titulo: "Estacionamento",
    descricao: "No local, sem complicação.",
  },
  {
    icon: Baby,
    titulo: "Espaço kids",
    descricao: "Área coberta com brinquedos e espaço infantil externo.",
  },
  {
    icon: Umbrella,
    titulo: "Área coberta",
    descricao: "Mesas protegidas do sol e da chuva.",
  },
  {
    icon: Music,
    titulo: "Música ao vivo",
    descricao: "Em dias especiais, pra animar o passeio.",
  },
  {
    icon: Waves,
    titulo: "Deck sobre o lago",
    descricao: "O lugar perfeito pra ver o dia passar.",
  },
];

export default function Estrutura() {
  return (
    <section id="estrutura" className="bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Pensado pra família toda"
            description="Tudo o que você precisa pra passar o dia com quem você ama, sem se preocupar com nada."
          />
        </Reveal>

        <RevealGrid className="bg-woodgrain overflow-hidden rounded-sm border border-ink/10 bg-ink text-paper sm:grid sm:grid-cols-5">
          {COMODIDADES.map(({ icon: Icon, titulo, descricao }, index) => (
            <RevealItem
              key={titulo}
              className={`flex items-start gap-3 border-b border-paper/10 px-5 py-6 sm:flex-col sm:items-start sm:border-r sm:border-b-0 sm:px-4 sm:py-8 ${
                index === COMODIDADES.length - 1 ? "border-b-0 sm:border-r-0" : ""
              }`}
            >
              <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
              <div>
                <h3 className="text-sm font-semibold text-paper sm:mt-3">{titulo}</h3>
                <p className="mt-1 text-xs text-paper/60">{descricao}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGrid>
      </div>
    </section>
  );
}

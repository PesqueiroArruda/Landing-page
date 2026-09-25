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
    <section id="estrutura" className="bg-chalkdust bg-ink px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Pensado pra família toda"
            description="Tudo o que você precisa pra passar o dia com quem você ama, sem se preocupar com nada."
          />
        </Reveal>

        <RevealGrid className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-sm border-2 border-dashed border-paper/15 p-6 sm:grid-cols-5 sm:p-8">
          {COMODIDADES.map(({ icon: Icon, titulo, descricao }) => (
            <RevealItem key={titulo} className="border-t-2 border-dashed border-gold/60 pt-4">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
              <h3 className="text-chalk mt-3 font-script text-base text-paper">
                {titulo}
              </h3>
              <p className="mt-1 text-sm text-paper/60">{descricao}</p>
            </RevealItem>
          ))}
        </RevealGrid>
      </div>
    </section>
  );
}

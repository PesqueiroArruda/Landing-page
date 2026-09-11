import { Baby, Music, ParkingCircle, Umbrella, Waves } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const COMODIDADES = [
  {
    icon: ParkingCircle,
    titulo: "Estacionamento",
    descricao: "Estacionamento no local, sem complicação.",
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
    titulo: "Deck com vista pro lago",
    descricao: "O lugar perfeito pra ver o dia passar.",
  },
];

export default function Estrutura() {
  return (
    <section id="estrutura" className="bg-[#f6f7f9] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Estrutura"
            title="Pensado pra família toda"
            description="Tudo o que você precisa pra passar o dia com quem você ama, sem se preocupar com nada."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {COMODIDADES.map(({ icon: Icon, titulo, descricao }, index) => (
            <FadeIn key={titulo} delay={index * 0.08}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-base font-bold text-navy">
                  {titulo}
                </h3>
                <p className="text-sm text-slate-600">{descricao}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

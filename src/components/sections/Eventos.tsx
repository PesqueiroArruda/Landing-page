import { Building2, CakeSlice } from "lucide-react";
import Button from "@/components/ui/Button";
import { whatsappEventosLink } from "@/lib/whatsapp";

const OCASIOES = [
  {
    icon: CakeSlice,
    titulo: "Aniversários",
    descricao:
      "Comemore seu aniversário com a família toda, à beira do lago.",
  },
  {
    icon: Building2,
    titulo: "Eventos corporativos",
    descricao:
      "A confraternização de fim de ano da sua empresa fica ainda melhor por aqui.",
  },
];

export default function Eventos() {
  return (
    <section id="eventos" className="bg-lake px-4 py-20 text-paper sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-3xl leading-[1.1] font-semibold sm:text-4xl">
              Seu evento merece um lugar assim.
            </h2>
            <span aria-hidden className="mt-4 block h-0.75 w-14 rounded-full bg-gold" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/75 sm:text-lg">
              Fale com a gente e organize sua comemoração à beira do lago.
            </p>
            <div className="mt-8">
              <Button href={whatsappEventosLink} variant="primary">
                Falar sobre meu evento
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-paper/15">
            {OCASIOES.map(({ icon: Icon, titulo, descricao }, index) => (
              <div key={titulo} className={index === 1 ? "sm:pl-8" : ""}>
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm text-paper/70">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

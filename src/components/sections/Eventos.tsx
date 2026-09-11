import { Building2, CakeSlice } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
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
    <section
      id="eventos"
      className="bg-linear-to-br from-navy to-navy-hover px-4 py-20 text-text-on-navy sm:px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <SectionHeading
            eyebrow="Ocasiões especiais"
            title="Seu evento merece um lugar assim"
            light
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {OCASIOES.map(({ icon: Icon, titulo, descricao }, index) => (
            <FadeIn key={titulo} delay={index * 0.15}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-lg font-bold">{titulo}</h3>
                <p className="text-sm text-text-on-navy/80">{descricao}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-10 max-w-xl text-text-on-navy/80">
            Entre em contato pra reservas e saiba mais sobre como organizar
            seu evento com a gente.
          </p>
          <div className="mt-6">
            <Button href={whatsappEventosLink} variant="primary">
              Falar sobre meu evento
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

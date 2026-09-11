import { ChefHat, Drumstick, Fish, Soup } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const PRATOS = [
  {
    icon: Fish,
    nome: "Tilápia Espalmada",
    descricao: "Exclusividade da casa, preparada na hora.",
    imagePath: "/images/cardapio-tilapia-espalmada.jpg",
  },
  {
    icon: Soup,
    nome: "Isca de Tilápia",
    descricao: "Crocante por fora, macia por dentro.",
    imagePath: "/images/cardapio-isca-tilapia.jpg",
  },
  {
    icon: Drumstick,
    nome: "Porções de Rã",
    descricao: "Um dos preferidos de quem visita a casa.",
    imagePath: "/images/cardapio-porcoes-ra.jpg",
  },
  {
    icon: ChefHat,
    nome: "Prato Executivo",
    descricao: "A partir de R$ 27,90 — terça a sexta, exceto feriados.",
    imagePath: "/images/cardapio-executivo.jpg",
  },
];

export default function Cardapio() {
  return (
    <section id="cardapio" className="bg-[#f6f7f9] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Cardápio"
            title="Muito além da pesca, um restaurante completo"
            description="Pratos, porções, bebidas e sobremesas — com destaque pra essas especialidades da casa."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRATOS.map((prato, index) => (
            <FadeIn key={prato.nome} delay={index * 0.1}>
              <Card className="h-full">
                <ImagePlaceholder
                  icon={prato.icon}
                  imagePath={prato.imagePath}
                  className="aspect-4/3 w-full"
                />
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {prato.nome}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {prato.descricao}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

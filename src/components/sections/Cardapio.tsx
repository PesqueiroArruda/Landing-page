import { ChefHat, Drumstick, Fish, Soup } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
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
    descricao: "Terça a sexta, exceto feriados.",
    preco: "R$ 27,90",
    imagePath: "/images/cardapio-executivo.jpg",
  },
];

export default function Cardapio() {
  return (
    <section id="cardapio" className="bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Muito além da pesca, um restaurante completo"
          description="Pratos, porções, bebidas e sobremesas — com destaque pra essas especialidades da casa."
        />

        <div className="rounded-2xl border border-ink/10 bg-paper-soft p-3 sm:p-6">
          <ul className="divide-y divide-ink/10">
            {PRATOS.map((prato) => (
              <li key={prato.nome} className="flex items-center gap-4 py-4 first:pt-1 last:pb-1 sm:gap-5 sm:py-5">
                <ImagePlaceholder
                  icon={prato.icon}
                  imagePath={prato.imagePath}
                  className="h-16 w-16 shrink-0 rounded-xl sm:h-20 sm:w-20"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-ink">
                    {prato.nome}
                  </h3>
                  <p className="mt-1 text-sm text-bark/70">
                    {prato.descricao}
                  </p>
                </div>
                {prato.preco && (
                  <span className="shrink-0 text-lg font-semibold text-lake">
                    {prato.preco}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

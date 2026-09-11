import Image from "next/image";
import { ChefHat, Drumstick, Fish, Soup } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { getMenu, type MenuItem } from "@/lib/menu";

// Ícone genérico por categoria do cardápio — só usado quando o produto
// ainda não tem foto configurada no Estoque.
function iconForCategory(category: string) {
  const normalized = category.toLowerCase();
  if (normalized.includes("bebida")) return Soup;
  if (normalized.includes("peix") || normalized.includes("tilápia")) return Fish;
  if (normalized.includes("carne") || normalized.includes("rã") || normalized.includes("frango")) {
    return Drumstick;
  }
  return ChefHat;
}

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

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Normaliza os dois formatos possíveis (item real do /menu vs. o array
// estático de fallback) pro mesmo shape de renderização.
function toRow(item: MenuItem) {
  return {
    key: item.id,
    icon: iconForCategory(item.category),
    nome: item.name,
    descricao: item.description,
    preco: item.price ? formatPrice(item.price) : undefined,
    imageUrl: item.image,
  };
}

export default async function Cardapio() {
  const menuItems = await getMenu();

  // Sem produtos habilitados ainda (ou backend fora do ar): mantém os
  // pratos estáticos atuais, a seção nunca aparece vazia.
  const rows =
    menuItems.length > 0
      ? menuItems.map(toRow)
      : PRATOS.map((prato) => ({
          key: prato.nome,
          icon: prato.icon,
          nome: prato.nome,
          descricao: prato.descricao,
          preco: prato.preco,
          imageUrl: undefined as string | undefined,
          imagePath: prato.imagePath,
        }));

  return (
    <section id="cardapio" className="bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Muito além da pesca, um restaurante completo"
          description="Pratos, porções, bebidas e sobremesas — com destaque pra essas especialidades da casa."
        />

        <div className="rounded-2xl border border-ink/10 bg-paper-soft p-3 sm:p-6">
          <ul className="divide-y divide-ink/10">
            {rows.map((row) => (
              <li key={row.key} className="flex items-center gap-4 py-4 first:pt-1 last:pb-1 sm:gap-5 sm:py-5">
                {row.imageUrl ? (
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                    <Image src={row.imageUrl} alt={row.nome} fill className="object-cover" />
                  </div>
                ) : (
                  <ImagePlaceholder
                    icon={row.icon}
                    imagePath={"imagePath" in row ? row.imagePath : undefined}
                    className="h-16 w-16 shrink-0 rounded-xl sm:h-20 sm:w-20"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-ink">
                    {row.nome}
                  </h3>
                  <p className="mt-1 text-sm text-bark/70">
                    {row.descricao}
                  </p>
                </div>
                {row.preco && (
                  <span className="shrink-0 text-lg font-semibold text-lake">
                    {row.preco}
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

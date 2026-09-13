import Image from "next/image";
import { ChefHat, Drumstick, Fish, Soup, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { getMenu, type MenuItem } from "@/lib/menu";
import { auth } from "@/auth";
import { getMenuUserConsent } from "@/lib/menu-users";
import CardapioAcesso from "@/components/sections/CardapioAcesso";
import MarketingConsentToggle from "@/components/sections/MarketingConsentToggle";
import Reveal from "@/components/ui/Reveal";
import { RevealGrid, RevealItem } from "@/components/ui/RevealGroup";

// Visitante sem login só vê uma prévia; ver a lista completa é o que
// converte a visita em lead (login com Google).
const PREVIEW_COUNT = 3;

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
    categoria: "Peixes",
  },
  {
    icon: Soup,
    nome: "Isca de Tilápia",
    descricao: "Crocante por fora, macia por dentro.",
    imagePath: "/images/cardapio-isca-tilapia.jpg",
    categoria: "Peixes",
  },
  {
    icon: Drumstick,
    nome: "Porções de Rã",
    descricao: "Um dos preferidos de quem visita a casa.",
    imagePath: "/images/cardapio-porcoes-ra.jpg",
    categoria: "Porções",
  },
  {
    icon: ChefHat,
    nome: "Prato Executivo",
    descricao: "Terça a sexta, exceto feriados.",
    preco: "R$ 27,90",
    imagePath: "/images/cardapio-executivo.jpg",
    categoria: "Pratos Executivos",
  },
];

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

type Row = {
  key: string;
  icon: LucideIcon;
  nome: string;
  descricao: string;
  preco?: string;
  imageUrl?: string | null;
  imagePath?: string;
  categoria: string;
};

// Normaliza os dois formatos possíveis (item real do /menu vs. o array
// estático de fallback) pro mesmo shape de renderização.
function toRow(item: MenuItem): Row {
  return {
    key: item.id,
    icon: iconForCategory(item.category),
    nome: item.name,
    descricao: item.description,
    preco: item.price ? formatPrice(item.price) : undefined,
    imageUrl: item.image,
    categoria: item.category,
  };
}

// Agrupa mantendo a ordem de primeira aparição das categorias, sem separar
// "Peixes" de "peixes" caso o cadastro no Estoque venha com capitalização
// diferente.
function groupByCategoria(rows: Row[]) {
  const order: string[] = [];
  const groups = new Map<string, { categoria: string; items: Row[] }>();

  for (const row of rows) {
    const key = row.categoria.trim().toLowerCase();
    if (!groups.has(key)) {
      groups.set(key, { categoria: row.categoria, items: [] });
      order.push(key);
    }
    groups.get(key)!.items.push(row);
  }

  return order.map((key) => groups.get(key)!);
}

export default async function Cardapio() {
  const [menuItems, session] = await Promise.all([getMenu(), auth()]);

  // Sem produtos habilitados ainda (ou backend fora do ar): mantém os
  // pratos estáticos atuais, a seção nunca aparece vazia.
  const rows: Row[] =
    menuItems.length > 0
      ? menuItems.map(toRow)
      : PRATOS.map((prato) => ({
          key: prato.nome,
          icon: prato.icon,
          nome: prato.nome,
          descricao: prato.descricao,
          preco: prato.preco,
          imagePath: prato.imagePath,
          categoria: prato.categoria,
        }));

  const isAuthenticated = Boolean(session?.user.googleId);
  const visibleRows = isAuthenticated ? rows : rows.slice(0, PREVIEW_COUNT);
  const categorias = groupByCategoria(visibleRows);
  const marketingConsent = isAuthenticated
    ? await getMenuUserConsent(session!.user.googleId)
    : false;

  return (
    <section id="cardapio" className="bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            title="Muito além da pesca, um restaurante completo"
            description="Pratos, porções, bebidas e sobremesas — com destaque pra essas especialidades da casa."
          />
        </Reveal>

        <div className="rounded-2xl border border-ink/10 bg-paper-soft p-3 sm:p-6">
          {categorias.map(({ categoria, items }, index) => (
            <div
              key={categoria}
              className={`mb-8 last:mb-0 ${index > 0 ? "border-t border-ink/10 pt-8" : ""}`}
            >
              <h3 className="mb-4 text-xs font-bold tracking-widest text-gold-deep uppercase sm:text-sm">
                {categoria}
              </h3>
              <RevealGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {items.map((row) => (
                  <RevealItem
                    key={row.key}
                    className="flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white"
                  >
                    <div className="relative aspect-square w-full shrink-0">
                      {row.imageUrl ? (
                        <Image src={row.imageUrl} alt={row.nome} fill className="object-cover" />
                      ) : (
                        <ImagePlaceholder
                          icon={row.icon}
                          imagePath={"imagePath" in row ? row.imagePath : undefined}
                          className="h-full w-full"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-1 p-3">
                      <h4 className="text-sm font-semibold text-ink sm:text-base">
                        {row.nome}
                      </h4>
                      <p className="line-clamp-2 text-xs text-bark/70 sm:text-sm">
                        {row.descricao}
                      </p>
                      {row.preco && (
                        <span className="mt-auto pt-1 text-sm font-semibold text-lake">
                          {row.preco}
                        </span>
                      )}
                    </div>
                  </RevealItem>
                ))}
              </RevealGrid>
            </div>
          ))}

          {isAuthenticated ? (
            <MarketingConsentToggle initialConsent={marketingConsent} />
          ) : (
            <CardapioAcesso hiddenCount={rows.length - visibleRows.length} />
          )}
        </div>
      </div>
    </section>
  );
}

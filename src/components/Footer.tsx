import { Fish, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#pesca", label: "Pesca" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy px-4 py-12 text-text-on-navy sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 font-heading text-xl font-bold">
            <Fish className="h-6 w-6 text-gold" />
            Pesqueiro Arruda&apos;s
          </div>
          <p className="mt-3 text-sm text-text-on-navy/70">
            Mais que um pesqueiro, lugar de memórias. Nossa família servindo a
            sua!
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gold uppercase">
            Links rápidos
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-text-on-navy/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gold uppercase">
            Contato
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-text-on-navy/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
              Rua Anna Moraes de Faria, 112, Santana de Parnaíba, SP
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-cyan" />
              <a href="tel:+5511972311736" className="hover:text-gold">
                (11) 97231-1736
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon className="h-4 w-4 shrink-0 text-cyan" />
              <a
                href="https://www.instagram.com/pesqueiroarrudas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                @pesqueiroarrudas
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-text-on-navy/60">
        © {year} Pesqueiro Arruda&apos;s. Todos os direitos reservados.
      </div>
    </footer>
  );
}

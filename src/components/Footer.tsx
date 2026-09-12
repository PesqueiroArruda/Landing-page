import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import Reveal from "@/components/ui/Reveal";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#pesca", label: "Pesca" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#kids", label: "Kids" },
  { href: "#eventos", label: "Eventos" },
  { href: "#reserva", label: "Reservar" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-4 py-14 text-paper sm:px-6">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/70">
              <Image
                src="/logo.jpeg"
                alt="Logo Pesqueiro Arruda's"
                fill
                sizes="48px"
                className="object-cover object-[50%_38%]"
              />
            </span>
            <span className="text-lg leading-none font-semibold">
              Pesqueiro <span className="font-script text-xl text-gold">Arruda&apos;s</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-paper/60">
            Mais que um pesqueiro, lugar de memórias. Nossa família servindo a
            sua.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold">Links rápidos</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-paper/70">
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
          <h3 className="text-sm font-semibold text-gold">Contato</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-paper/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
              Rua Anna Moraes de Faria, 112, Santana de Parnaíba, SP
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold/80" />
              <a href="tel:+5511972311736" className="hover:text-gold">
                (11) 97231-1736
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon className="h-4 w-4 shrink-0 text-gold/80" />
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
      </Reveal>

      <div className="mx-auto mt-10 max-w-6xl border-t border-paper/10 pt-6 text-center text-xs text-paper/50">
        © {year} Pesqueiro Arruda&apos;s. Todos os direitos reservados.
      </div>
    </footer>
  );
}

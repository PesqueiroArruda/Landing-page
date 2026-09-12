import Image from "next/image";
import Link from "next/link";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="border-b border-gold/20 bg-ink px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/70">
              <Image
                src="/logo.jpeg"
                alt="Logo Pesqueiro Arruda's"
                fill
                sizes="36px"
                className="object-cover object-[50%_38%]"
              />
            </span>
            <span className="text-lg leading-none font-semibold text-paper">
              Pesqueiro <span className="font-script text-xl text-gold">Arruda&apos;s</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-paper/75 transition-colors hover:text-gold"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>

      <footer className="border-t border-ink/10 px-4 py-8 text-center text-xs text-bark/50 sm:px-6">
        © {year} Pesqueiro Arruda&apos;s. Todos os direitos reservados.
      </footer>
    </div>
  );
}

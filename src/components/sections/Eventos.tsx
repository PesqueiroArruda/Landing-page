import Button from "@/components/ui/Button";
import { whatsappEventosLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import Waterline from "@/components/ui/Waterline";

export default function Eventos() {
  return (
    <section id="eventos" className="bg-woodgrain relative bg-lake px-4 pt-20 pb-28 text-paper sm:px-6 sm:pt-28 sm:pb-36">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-carved-light font-display text-3xl leading-[1.15] font-normal sm:text-4xl">
              Seu evento merece um lugar assim.
            </h2>
            <span aria-hidden className="mt-5 block h-1.5 w-9 rounded-sm bg-gold" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/75 sm:text-lg">
              Fale com a gente e organize sua comemoração à beira do lago.
            </p>
            <div className="mt-8">
              <Button href={whatsappEventosLink} variant="primary">
                Falar sobre meu evento
              </Button>
            </div>
          </Reveal>

          <Reveal className="border-l-2 border-gold/50 pl-8">
            <p className="font-readout text-xs tracking-[0.14em] text-paper/50 uppercase">
              Ocasiões que recebemos
            </p>
            <ul className="mt-4 flex flex-col gap-5">
              <li>
                <span className="text-lg font-semibold">Aniversários</span>
                <p className="mt-1 text-sm text-paper/70">
                  Comemore seu aniversário com a família toda, à beira do lago.
                </p>
              </li>
              <li>
                <span className="text-lg font-semibold">Eventos corporativos</span>
                <p className="mt-1 text-sm text-paper/70">
                  A confraternização de fim de ano da sua empresa fica ainda
                  melhor por aqui.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      <Waterline
        animated
        className="absolute right-0 bottom-0 left-0 h-10 w-full text-paper sm:h-14"
      />
    </section>
  );
}

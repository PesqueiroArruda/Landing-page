import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { RevealGrid, RevealItem } from "@/components/ui/RevealGroup";
import { formatarData, getProximosEventos } from "@/lib/eventos";
import { whatsappAgendaLink, whatsappEventoLink } from "@/lib/whatsapp";

export default function ProximosEventos() {
  const eventos = getProximosEventos();

  return (
    <section id="agenda" className="bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Agenda"
            title="Próximos shows no Arruda's"
            description="Música ao vivo aos domingos, a partir das 12h30. Reserve sua mesa pelo WhatsApp."
          />
        </Reveal>

        {eventos.length > 0 ? (
          <RevealGrid className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {eventos.map((evento) => {
              const data = formatarData(evento.data);
              return (
                <RevealItem key={evento.id} className="flex flex-col">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-ink/10 bg-ink-deep">
                    <Image
                      src={evento.cartaz.src}
                      alt={evento.cartaz.alt}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 640px) 45vw, 92vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    <div className="shrink-0 border-t-2 border-gold pt-2 text-center">
                      <p className="font-display text-4xl leading-none font-semibold text-ink">
                        {data.dia}
                      </p>
                      <p className="mt-1 text-xs font-bold tracking-widest text-gold-text uppercase">
                        {data.mes}
                      </p>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-ink">
                        {evento.artista}
                      </h3>
                      <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-bark/70">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays
                            className="h-4 w-4 text-lake"
                            aria-hidden
                          />
                          <span className="capitalize">{data.diaSemana}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-lake" aria-hidden />
                          {evento.horario}
                        </span>
                      </p>
                      {evento.destaque && (
                        <p className="mt-1 text-sm font-semibold text-lake">
                          {evento.destaque}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    href={whatsappEventoLink(evento.artista, data.completa)}
                    variant="secondary"
                    className="mt-5 self-start"
                  >
                    Reservar mesa
                  </Button>
                </RevealItem>
              );
            })}
          </RevealGrid>
        ) : (
          <Reveal>
            <div className="max-w-xl rounded-xl border border-ink/10 bg-white p-6 sm:p-8">
              <p className="text-base leading-relaxed text-bark/80">
                Ainda não fechamos os próximos shows. Chama a gente no WhatsApp
                que a gente te conta o que vem por aí.
              </p>
              <Button
                href={whatsappAgendaLink}
                variant="secondary"
                className="mt-5"
              >
                Perguntar sobre a agenda
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

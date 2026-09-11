import { Clock, MapPin, Phone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { whatsappReservaLink } from "@/lib/whatsapp";

const ENDERECO = "Rua Anna Moraes de Faria, 112, Santana de Parnaíba, SP";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ENDERECO
)}&output=embed`;

export default function Contato() {
  return (
    <section id="contato" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Localização e contato"
            title="Vem nos visitar"
            description="Terça a domingo, das 8h às 17h. Fechado às segundas, exceto feriados."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy">Endereço</h3>
                <p className="text-sm text-slate-600 sm:text-base">
                  {ENDERECO}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy">Horário</h3>
                <p className="text-sm text-slate-600 sm:text-base">
                  Terça a domingo, das 8h às 17h.
                  <br />
                  Fechado às segundas, exceto feriados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy">
                  Telefone / WhatsApp
                </h3>
                <a
                  href="tel:+5511972311736"
                  className="text-sm text-slate-600 hover:text-cyan sm:text-base"
                >
                  (11) 97231-1736
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                <InstagramIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy">Instagram</h3>
                <a
                  href="https://www.instagram.com/pesqueiroarrudas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-cyan sm:text-base"
                >
                  @pesqueiroarrudas
                </a>
              </div>
            </div>

            <div className="mt-2">
              <Button href={whatsappReservaLink} variant="primary">
                Reservar pelo WhatsApp
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <div className="aspect-4/3 w-full overflow-hidden rounded-3xl border border-slate-200 lg:aspect-auto lg:h-full">
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Pesqueiro Arruda's no Google Maps"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

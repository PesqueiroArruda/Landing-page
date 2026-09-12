import { Baby } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";

export default function AreaKids() {
  return (
    <section id="kids" className="bg-paper-soft px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <ImagePlaceholder
              icon={Baby}
              label="Área Kids"
              imagePath="/images/area-kids.jpg"
              className="aspect-4/3 w-full rounded-2xl"
            />
          </Reveal>
          <Reveal className="lg:order-1">
            <h2 className="text-3xl leading-[1.1] font-semibold text-ink sm:text-4xl">
              Nossa área Kids
            </h2>
            <span aria-hidden className="mt-4 block h-0.75 w-14 rounded-full bg-gold" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-bark/75 sm:text-lg">
              Espaço coberto com brinquedos e área infantil externa, pensado
              pra criançada se divertir em segurança enquanto os adultos
              aproveitam a pescaria ou relaxam à beira do lago.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-bark/75 sm:text-lg">
              Assim, o passeio em família fica completo: todo mundo se
              diverte do seu jeito, no mesmo lugar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

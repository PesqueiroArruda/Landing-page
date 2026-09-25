import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ChalkRule from "@/components/ui/ChalkRule";

export default function AreaKids() {
  return (
    <section id="kids" className="bg-chalkdust bg-bark px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm border border-paper/10">
              <Image
                src="/images/area-kids.jpg"
                alt="Playground da área Kids do Pesqueiro Arruda's, com escorregador, gangorras e balanços"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:order-1">
            <h2 className="text-chalk text-3xl leading-[1.2] font-normal text-paper sm:text-4xl">
              Nossa área Kids
            </h2>
            <ChalkRule className="text-gold" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              Espaço coberto com brinquedos e área infantil externa, pensado
              pra criançada se divertir em segurança enquanto os adultos
              aproveitam a pescaria ou relaxam à beira do lago.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
              Assim, o passeio em família fica completo: todo mundo se
              diverte do seu jeito, no mesmo lugar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

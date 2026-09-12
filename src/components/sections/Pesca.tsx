import { Fish } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Pesca() {
  return (
    <section id="pesca" className="bg-paper-soft px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ImagePlaceholder
            icon={Fish}
            imagePath="/images/pesca-esportiva.jpg"
            className="aspect-4/3 w-full rounded-2xl lg:order-2"
          />
          <div className="lg:order-1">
            <h2 className="text-3xl leading-[1.1] font-semibold text-ink sm:text-4xl">
              Pesca esportiva à beira do lago
            </h2>
            <span aria-hidden className="mt-4 block h-0.75 w-14 rounded-full bg-gold" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-bark/75 sm:text-lg">
              Pra quem curte o desafio da pescaria, com respeito ao esporte e
              ao lago. Traga sua vara, escolha seu lugar na margem e
              aproveite o dia inteiro pescando com a família.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

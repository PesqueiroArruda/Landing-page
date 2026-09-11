import { Fish } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Pesca() {
  return (
    <section id="pesca" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading eyebrow="Pesca" title="Pesca Esportiva à beira do lago" />
        </FadeIn>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <ImagePlaceholder
              icon={Fish}
              imagePath="/images/pesca-esportiva.jpg"
              className="aspect-4/3 w-full rounded-3xl"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Pra quem curte o desafio da pescaria, com respeito ao esporte e
              ao lago. Traga sua vara, escolha seu lugar no deck ou na margem
              e aproveite o dia inteiro pescando com a família.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/ui/Reveal";
import Carousel from "@/components/ui/Carousel";

const PESCA_IMAGES = [
  { src: "/images/pesca-1.jpg", alt: "Pescador à beira do lago do Pesqueiro Arruda's" },
  { src: "/images/pesca-2.jpg", alt: "Criança pescando na margem do lago" },
  { src: "/images/pesca-3.jpg", alt: "Criança pescando com molinete no Pesqueiro Arruda's" },
  { src: "/images/pesca-4.jpg", alt: "Pescador de pé lançando a linha no lago" },
  { src: "/images/pesca-5.jpg", alt: "Família pescando junta na margem do lago" },
  { src: "/images/pesca-6.jpg", alt: "Visitante pescando à beira do lago em dia de sol" },
  { src: "/images/pesca-7.jpg", alt: "Criança sorrindo com a vara de pescar" },
  { src: "/images/pesca-8.jpg", alt: "Pai e filha pescando sentados na margem do lago" },
  { src: "/images/pesca-9.jpg", alt: "Vista do lago do Pesqueiro Arruda's a partir de uma mesa na área coberta" },
  { src: "/images/pesca-10.jpg", alt: "Pescador sentado na margem do lago do Pesqueiro Arruda's" },
  { src: "/images/pesca-11.jpg", alt: "Visitante pescando em dia de sol no Pesqueiro Arruda's" },
  { src: "/images/pesca-12.jpg", alt: "Amigos pescando juntos na margem do lago" },
  { src: "/images/pesca-13.jpg", alt: "Pescador recolhendo o puçá com o peixe fisgado" },
];

export default function Pesca() {
  return (
    <section id="pesca" className="bg-paper-soft px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <Carousel images={PESCA_IMAGES} className="aspect-4/3 w-full" />
          </Reveal>
          <Reveal className="lg:order-1">
            <h2 className="text-3xl leading-[1.1] font-semibold text-ink sm:text-4xl">
              Pesca esportiva à beira do lago
            </h2>
            <span aria-hidden className="mt-4 block h-0.75 w-14 rounded-full bg-gold" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-bark/75 sm:text-lg">
              Pra quem curte o desafio da pescaria, com respeito ao esporte e
              ao lago. Traga sua vara, escolha seu lugar na margem e
              aproveite o dia inteiro pescando com a família.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

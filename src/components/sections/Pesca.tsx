import Image from "next/image";

const FOTOS = [
  { src: "/images/pesca-2.jpg", alt: "Criança pescando na margem do lago" },
  { src: "/images/pesca-5.jpg", alt: "Família pescando junta na margem do lago" },
  { src: "/images/pesca-13.jpg", alt: "Pescador recolhendo o puçá com o peixe fisgado" },
  { src: "/images/pesca-8.jpg", alt: "Pai e filha pescando sentados na margem do lago" },
  { src: "/images/pesca-4.jpg", alt: "Pescador de pé lançando a linha no lago" },
  { src: "/images/pesca-7.jpg", alt: "Criança sorrindo com a vara de pescar" },
  { src: "/images/pesca-12.jpg", alt: "Amigos pescando juntos na margem do lago" },
  { src: "/images/pesca-10.jpg", alt: "Pescador sentado na margem do lago do Pesqueiro Arruda's" },
  { src: "/images/pesca-3.jpg", alt: "Criança pescando com molinete no Pesqueiro Arruda's" },
  { src: "/images/pesca-11.jpg", alt: "Visitante pescando em dia de sol no Pesqueiro Arruda's" },
];

/** Ato 4 (pan): um trilho horizontal com as fotos reais da margem. */
export default function Pesca() {
  return (
    <section
      id="pesca"
      data-sc-act="pan"
      data-sc-span="3.2"
      className="theme-lake"
    >
      <div data-sc-stage>
        <div className="rail-photos" data-sc-pan="0.04">
          <div className="rail-lead sc-stack">
            <h2 className="act-title text-[clamp(2.2rem,1.4rem+3vw,4rem)]">
              Pesca esportiva à beira do lago
            </h2>
            <p className="max-w-[34ch] text-lg leading-relaxed text-(--sc-ink-soft)">
              Traga sua vara, escolha seu lugar na margem e passe o dia pescando
              com a família.
            </p>
          </div>

          {FOTOS.map((foto) => (
            <figure key={foto.src} className="rail-photo" data-sc-tilt="5">
              <div>
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 700px) 40vw, 18rem"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}

          <div className="rail-note sc-stack">
            <p className="act-lede">Com respeito ao esporte e ao lago.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

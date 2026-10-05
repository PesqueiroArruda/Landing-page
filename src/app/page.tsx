import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Cardapio from "@/components/sections/Cardapio";
import Pesca from "@/components/sections/Pesca";
import Estrutura from "@/components/sections/Estrutura";
import AreaKids from "@/components/sections/AreaKids";
import ProximosEventos from "@/components/sections/ProximosEventos";
import Eventos from "@/components/sections/Eventos";
import Reserva from "@/components/sections/Reserva";
import Contato from "@/components/sections/Contato";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pesqueiro Arruda's",
  description:
    "Pesca esportiva e restaurante à beira do lago em Santana de Parnaíba, SP. Tilápia na chapa, espaço kids e música ao vivo aos domingos.",
  url: siteUrl,
  image: `${siteUrl}/logo.jpeg`,
  telephone: "+55 11 91921-4978",
  servesCuisine: ["Peixes", "Frutos do mar", "Brasileira"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Anna Moraes de Faria, 112",
    addressLocality: "Santana de Parnaíba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: ["https://www.instagram.com/pesqueiroarrudas/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Sobre />
        <Cardapio />
        <Pesca />
        <Estrutura />
        <AreaKids />
        <ProximosEventos />
        <Eventos />
        <Reserva />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

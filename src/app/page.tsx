import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Cardapio from "@/components/sections/Cardapio";
import Pesca from "@/components/sections/Pesca";
import Estrutura from "@/components/sections/Estrutura";
import AreaKids from "@/components/sections/AreaKids";
import Eventos from "@/components/sections/Eventos";
import Reserva from "@/components/sections/Reserva";
import Contato from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Cardapio />
        <Pesca />
        <Estrutura />
        <AreaKids />
        <Eventos />
        <Reserva />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Cardapio from "@/components/sections/Cardapio";
import Pesca from "@/components/sections/Pesca";
import Estrutura from "@/components/sections/Estrutura";
import Eventos from "@/components/sections/Eventos";
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
        <Eventos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

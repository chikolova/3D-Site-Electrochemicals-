import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Industries from "@/components/sections/Industries";
import Processes from "@/components/sections/Processes";
import Products from "@/components/sections/Products";
import Anodes from "@/components/sections/Anodes";
import Installations from "@/components/sections/Installations";
import Equipment from "@/components/sections/Equipment";
import WaterTreatment from "@/components/sections/WaterTreatment";
import ClientService from "@/components/sections/ClientService";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Industries />
        <Processes />
        <Products />
        <Anodes />
        <Installations />
        <Equipment />
        <WaterTreatment />
        <ClientService />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

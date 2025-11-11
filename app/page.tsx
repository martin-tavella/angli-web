import About from "@/components/About";
import ClientShowcase from "@/components/ClientShowcase";
import Hero from "@/components/Hero";
import Midsection from "@/components/Midsection";
import OurWork from "@/components/OurWork";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Midsection />
        <OurWork />
        <ClientShowcase />
      </main>
    </div>
  );
}

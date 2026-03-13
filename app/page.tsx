import About from "@/components/About";
import ClientShowcase from "@/components/ClientShowcase";
import Hero from "@/components/Hero";
import Midsection from "@/components/Midsection";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <div>
        <main>
          <Hero />
          <About />
          <Midsection />
          <OurServices />
          <OurWork />
          <ClientShowcase />
        </main>
      </div>
    </>
  );
}

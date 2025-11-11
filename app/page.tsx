import About from "@/components/About";
import ClientShowcase from "@/components/ClientShowcase";
import Hero from "@/components/Hero";
import Midsection from "@/components/Midsection";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Midsection />
        <ClientShowcase />
      </main>
    </div>
  );
}

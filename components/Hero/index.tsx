/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import angli from "@/public/hero/hero-angli.png";
import draw1 from "@/public/hero/hero-draw-1.png";
import draw2 from "@/public/hero/hero-draw-2.png";
import draw3 from "@/public/hero/hero-draw-3.png";

const Hero = () => {
  return (
    <section className="min-w-full h-screen bg-[url('/backgrounds/FONDO_BLANCO.png')] bg-no-repeat bg-cover">
   
      <div className="flex justify-center items-center flex-col h-full gap-15"> 
        <div className="mb-10"> 
          <img
            src={angli.src}
            alt="Angli Estudio"
            className="w-full h-auto max-w-xl"
          />
        </div>
        <div className="flex justify-center items-end gap-5 px-5 lg:px-0 flex-nowrap"> 
          <img
            src={draw1.src}
            alt="TV Caricatura"
            className="w-full max-w-[120px]"
          />
          <img
            src={draw2.src}
            alt="Camara y Reel Caricatura"
            className="w-full max-w-[200px]" 
          />
          <img
            src={draw3.src}
            alt="Calendario Caricatura"
            className="w-full max-w-[120px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

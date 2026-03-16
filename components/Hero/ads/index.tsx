"use client"
import { manrope, vintageRotter } from "@/utils/fonts/fonts";
import btn from "@/public/ads/HABLEMOS_NARANJA.png";
import introPC from "@/public/ads/INTRO_PC.png";
import introMobile from "@/public/ads/INTRO_MOBILE.png";
import fondo from "@/public/backgrounds/FONDO_BLANCO.png";
import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";
import Image from "next/image";

const AdsHero = () => {
  const spansStyles = `${vintageRotter.className} font-normal text-[1.5em] text-[#ee6226] px-1`;

  return (
    <>
    <section className="relative w-full overflow-hidden flex flex-col"
    id="#"
    >
      {/* Background */}
      <Image src={fondo} alt="fondo" fill className="-z-10 object-cover" priority />

      {/* AJUSTE DE PADDING:
        - pt-32: Base para móviles pequeños.
        - sm:pt-40: Más espacio para tablets en vertical.
        - lg:pt-48: Espacio definitivo para PC donde el layout es horizontal.
      */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between pt-32 sm:pt-40 lg:pt-48 lg:pb-20">
        
        {/* Columna Izquierda: Textos */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <h2 className={`${manrope.className} text-[#4c80bf] text-5xl xl:text-6xl font-extrabold leading-tight mb-6`}>
            TU MARCA <br /> MERECE DESTACAR
          </h2>
          <Image src={star} width={30} height={30} alt="Estrella" className="mb-4 lg:hidden rotate-30 size-14" />

          <h3 className={`${manrope.className} text-[#1b1b1a] text-xl leading-8 lg:leading-normal lg:text-xl xl:text-2xl font-medium max-w-[500px] lg:max-w-none`}>
            En <span className={spansStyles}>Angli Estudio</span> somos tu{" "}
            <strong className="font-extrabold text-[#1b1b1a]">aliado estratégico</strong> en{" "}
            <strong className="font-extrabold text-[#1b1b1a]">comunicación, redes, diseño y contenido audiovisual.</strong>
          </h3>

          <button className="hidden lg:block mt-10 hover:scale-105 transition-transform cursor-pointer"
           onClick={()=>{
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'click_whatsapp'
              });
              window.open("http://wa.link/igfa2m");
            }}>
            <Image src={btn} width={200} height={55} alt="Hablemos" className="w-40 xl:w-48" />
          </button>
        </div>

        {/* Columna Derecha: Ilustración */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
          {/* Versión PC */}
          <div className="hidden lg:block w-[110%] xl:w-[120%] max-w-[800px] transform lg:translate-x-12">
            <Image
              src={introPC}
              alt="Servicios Angli Estudio"
              width={800}
              height={800}
              priority
              className="object-contain"
            />
          </div>

          {/* Versión Mobile/Tablet */}
          <div className="lg:hidden w-[90%] max-w-[450px] sm:max-w-[550px]">
            <Image
              src={introMobile}
              alt="Servicios Angli Estudio"
              width={550}
              height={550}
              className="object-contain"
            />
          </div>
        </div>

        {/* Botón Mobile */}
        <button className="lg:hidden mt-10 mb-16 self-center"
         onClick={()=>{
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'click_whatsapp'
              });
              window.open("http://wa.link/igfa2m");
            }}
        >
          <Image src={btn} width={180} height={50} alt="Hablemos" className="w-40" />
        </button>
      </div>
    </section>
    <div className="bg-[#4c80bf] h-2 w-full"></div>
    <div className="bg-[#ee6226] h-2 w-full"></div>
    <div className="bg-[#d95354] h-2 w-full -mb-1"></div>
    </>
  );
};

export default AdsHero;
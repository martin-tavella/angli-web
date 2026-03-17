"use client"
import Image from "next/image";
import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";
import btn from "@/public/ads/HABLEMOS_NARANJA.png";
import ClientGrids from "../ClientGrids";
import fondo from "@/public/backgrounds/FONDO_AZUL.png";
import { manrope } from "@/utils/fonts/fonts";

const AdsOurClients = () => {
  return (
    <>
      <section className={`relative w-full py-20 lg:py-32 overflow-hidden flex flex-col items-center ${manrope.className}`}
      id="clientes">
        
        {/* FONDO OPTIMIZADO */}
        <Image
          src={fondo}
          alt="Fondo azul"
          fill
          priority
          className="-z-10 object-cover"
        />

        {/* ENCABEZADO */}
        <div className="flex flex-col items-center z-10">
          <Image
            src={star}
            width={40}
            height={40}
            alt="Estrella"
            className="rotate-30 mb-2 lg:w-12 lg:h-12"
          />
          <h2 className="text-center text-[#f9f5ea] text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            NUESTROS CLIENTES
          </h2>

          <button
            className="hover:scale-105 transition-transform mb-12 lg:mb-20 cursor-pointer hablemos"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'click_whatsapp'
              });
              window.open("http://wa.link/igfa2m");
            }}
          >
            <Image
              src={btn}
              width={160}
              height={45}
              alt="Hablemos"
              className="w-40 lg:w-48"
            />
          </button>
        </div>

        {/* GRILLA DE LOGOS */}
        <div className="w-full max-w-[1200px] px-6 z-10">
          <ClientGrids />
        </div>

      </section>

      {/* SEPARADORES DE COLORES (FOOTER DE SECCIÓN) */}
      <div className="bg-[#ee6226] h-2.5 w-full relative z-20"></div>
      <div className="bg-[#d95354] h-2.5 w-full -mb-1 relative z-20"></div>
    </>
  );
};

export default AdsOurClients;
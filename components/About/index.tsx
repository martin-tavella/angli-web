/* eslint-disable @next/next/no-img-element */
"use client";
import { manrope } from "@/utils/fonts/fonts";
import { vintageRotter } from "@/utils/fonts/fonts";
import letterName from "@/public/about/CARTEL_NOMBRE.png";
import miscelanous from "@/public/about/MISCELANEA.png";
import contactButton from "@/public/about/BOTON_CONTACTO.png";
import { useState } from "react";
import Hook from "./hook";

const spansStyles = `${vintageRotter.className} text-5xl`;

const About = () => {
  const [showHook, setShowHook] = useState<boolean>(false);

  const handleToggleHook = () => {
    setShowHook(!showHook);
  };

  return (
    <div className="bg-[url('/backgrounds/FONDO_BLANCO.png')]">
    <section
      className={`h-[765px] bg-[url('/about/FONDO.png')] bg-no-repeat bg-cover bg-center ${manrope.className}`}
    >
      {/* Contenedor principal con posicionamiento y altura completa para centrar */}
      <div className="relative flex flex-col items-center justify-center h-full pt-10 pb-20">
        {/* Etiqueta _Nosotros (Mantener absoluta) */}
        <p className="absolute top-10 right-12 font-extralight text-[20px] text-[#f7ecd5]">
          _Nosotros
        </p>

        {/* Contenedor Central del contenido (Logo, Texto, Botón). 
          Hacemos que sea relativo para posicionar el botón. 
          Quitamos el flex/col para que el max-w funcione bien. */}
        <div className="relative flex flex-col items-center max-w-[500px] mx-auto">
          {/* Logo */}
          <div className="">
            <img
              src={letterName.src}
              alt="Angli Estudio since 2018"
              className="h-[90%] scale-75"
            />
          </div>

          {/* Contenedor del Texto y el Borde (miscelanous) */}
          {/* El borde miscelanous DEBE ser el fondo o superpuesto al texto */}
          <div className="relative text-center flex flex-col items-center justify-center">
            {/* El Borde (miscelanous.src) se coloca ABSOLUTO DETRÁS de todo */}
            {/* Ajusta top/left/right/bottom para que el borde se vea bien alrededor del texto */}
            <img
              src={miscelanous.src}
              alt="Borde decorativo"
              className="absolute w-500 h-[120%] scale-130 object-contain -top-[15%] -left-[2%]"
            />

            {/* Texto h3 */}
            <h3 className="text-[#f7ecd5] text-3xl font-extralight relative z-10">
              En <span className={spansStyles}>Angli Estudio</span> somos tu
              aliado <br /> estratégico en{" "}
              <span className={spansStyles}>comunicación</span> <br /> y{" "}
              <span className={spansStyles}>contenido audiovisual.</span>
            </h3>

            {/* Botón Contactanos (Lo colocamos al final, y centrado con un margen superior) */}
          
              <div className="relative z-10 mt-13 flex justify-end w-[140%]">
                  {!showHook ?  (
                <button onClick={handleToggleHook} className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img
                    src={contactButton.src}
                    alt="Contactanos"
                    className="h-16"
                  />
                </button>
                  ): (
                    <div className="h-16"/>
                  )}
              </div>   
          </div>
        </div>
      </div>
    </section>
    <Hook toggleHook={handleToggleHook} showHook={showHook}/>
    </div>
  );
};

export default About;

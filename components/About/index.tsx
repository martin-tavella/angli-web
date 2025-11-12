/* eslint-disable @next/next/no-img-element */
"use client";
import { manrope } from "@/utils/fonts/fonts";
import { vintageRotter } from "@/utils/fonts/fonts";
import letterName from "@/public/about/CARTEL_NOMBRE.png";
import miscelanous from "@/public/about/MISCELANEA.png";
import contactButton from "@/public/about/BOTON_CONTACTO.png";
import { useState } from "react";
import Hook from "./hook";

const spansStyles = `${vintageRotter.className} text-[32px] sm:text-4xl lg:text-5xl`;

const About = () => {
  const [showHook, setShowHook] = useState<boolean>(false);

  const handleToggleHook = () => {
    setShowHook(!showHook);
  };

  return (
    <div className="bg-[url('/backgrounds/FONDO_BLANCO.png')] bg-no-repeat bg-cover">
      <section
        id="nosotros"
        // CLAVE: Remover altura fija y dejar que el padding/contenido definan la altura
        className={`bg-[url('/about/FONDO.png')] bg-no-repeat bg-cover bg-center ${manrope.className} py-20 sm:py-24 md:py-32`}
      >
        {/* Contenedor principal con posicionamiento y altura completa para centrar */}
        <div className="relative flex flex-col items-center justify-center h-full">
          {/* Etiqueta _Nosotros (Mantener absoluta) */}
          <p className="absolute -top-10 right-4 sm:-top-14 sm:right-12 font-extralight text-[16px] sm:text-[20px] text-[#f7ecd5]">
            _Nosotros
          </p>

          {/* Contenedor Central del contenido (Logo, Texto, Botón) */}
          <div className="relative flex flex-col items-center max-w-sm sm:max-w-md lg:max-w-xl mx-auto px-4">
            {/* Logo */}
            <div className="mb-8">
              <img
                src={letterName.src}
                alt="Angli Estudio since 2018"
                // CLAVE: W-full y max-w para que se ajuste sin romper la línea
                className="w-full h-auto max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]"
              />
            </div>

            {/* Contenedor del Texto y el Borde (miscelanous) */}
            <div className="relative text-center flex flex-col items-center justify-center w-full">
              {/* El Borde (miscelanous.src) - Ajustado para no desbordar en móvil */}
              <img
                src={miscelanous.src}
                alt="Borde decorativo"
                // CLAVE: Usar porcentajes de ancho/alto y ajustes de posición fluidos
                className="absolute w-[110%] h-[150%] sm:h-[140%] object-contain 
                         -top-[20%] left-1/2 transform -translate-x-1/2"
                // Eliminé scale-130 y w-500 para controlarlo solo con W/H y porcentajes
              />

              {/* Texto h3 */}
              <h3 className="text-[#f7ecd5] text-xl sm:text-2xl font-extralight relative z-10 p-5">
                En <span className={spansStyles}>Angli Estudio</span> somos tu
                aliado <br /> estratégico en{" "}
                <span className={spansStyles}>comunicación</span> <br /> y{" "}
                <span className={spansStyles}>contenido audiovisual.</span>
              </h3>

              {/* Botón Contactanos (Posicionado a la derecha) */}
              <div className="relative z-10 mt-8 w-full flex justify-end">
                {!showHook ? (
                  <button
                    onClick={() => {
                      handleToggleHook();
                      window.location.href = "#hook";
                    }}
                    className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={contactButton.src}
                      alt="Contactanos"
                      // CLAVE: Reducir el tamaño de la imagen del botón en móvil
                      className="h-10 sm:h-12 lg:h-16"
                    />
                  </button>
                ) : (
                  <div className="h-10 sm:h-12 lg:h-16" /> // Placeholder con altura responsiva
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hook toggleHook={handleToggleHook} showHook={showHook} />
    </div>
  );
};

export default About;

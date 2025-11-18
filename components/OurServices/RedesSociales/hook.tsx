"use client";

import Image from "next/image";
import { useState } from "react";
// Componentes de Info (asumimos que ya están preparados)
import Planificacion from "./infoSliders/planificacion";
import Paquete from "./infoSliders/paquete";
import DisenoFeed from "./infoSliders/disenoFeed";
import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png";

// --- DATOS DE CARICATURAS Y ESTADOS ---
type ActiveSliderId = "planificacion" | "paquete" | "disenoFeed";

// Mapeo de personajes a sus variantes de color y la sección de contenido
const CHARACTER_DATA = [
  {
    id: "planificacion" as ActiveSliderId,
    blue: "/ourServices/REDES/PERSONAJE_1_AZUL.png",
    orange: "/ourServices/REDES/PERSONAJE_1_NARANJA.png",
    alt: "Planificación Mensual",
    component: Planificacion,
  },
  {
    id: "disenoFeed" as ActiveSliderId,
    blue: "/ourServices/REDES/PERSONAJE_2_AZUL.png",
    orange: "/ourServices/REDES/PERSONAJE_2_NARANJA.png",
    alt: "Diseño de Feed",
    component: DisenoFeed,
  },
  {
    id: "paquete" as ActiveSliderId,
    blue: "/ourServices/REDES/PERSONAJE_3_AZUL.png",
    orange: "/ourServices/REDES/PERSONAJE_3_NARANJA.png",
    alt: "Paquete Emprendedores",
    component: Paquete,
  },
];

interface RedesHookProps {
  showHook: boolean;
  btnContact: { src: string };
  handleOnClick: () => void;
}

const RedesHook = ({ showHook, handleOnClick, btnContact }: RedesHookProps) => {
  // Estado para controlar qué sección de información se muestra
  const [activeSlider, setActiveSlider] =
    useState<ActiveSliderId>("planificacion");

  // Función para cambiar el slider activo (se llama al hacer clic en la caricatura)
  const handleSelect = (id: ActiveSliderId) => {
    setActiveSlider(id);
  };

  // Función para renderizar el componente de información actual
  const renderContent = () => {
    switch (activeSlider) {
      case "planificacion":
        return <Planificacion />;
      case "paquete":
        return <Paquete />;
      case "disenoFeed":
        return <DisenoFeed />;
      default:
        return null;
    }
  };

  return (
    <article
      className={`
             lg:max-w-[1010px] mx-auto rounded-b-3xl
             transition-all duration-800 ease-in-out overflow-hidden
              border-[#4d81c0]
             ${showHook ? "max-h-[1500px] border-[5px]" : "max-h-0 border-b-0 border-x-0"}
        `}
    >
      <div
        className={`
                relative
                bg-[url('/backgrounds/FONDO_BLANCO.png')]
                before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/20 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/20 after:to-transparent after:z-10 
                transition-all duration-500 forward
                ${showHook ? "py-8" : "py-0"}
            `}
      >
        {/* --- SECCIÓN DE SELECCIÓN DE CARICATURAS --- */}
        <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-8 mb-8 z-20 pt-10">
          {CHARACTER_DATA.map((char) => (
            <button
              key={char.id}
              onClick={() => handleSelect(char.id)}
              className="transition-all duration-500 ease-in-out focus:outline-none cursor-pointer"
              aria-label={`Seleccionar ${char.alt}`}
            >
              <Image
                src={char.id === activeSlider ? char.orange : char.blue}
                alt={char.alt}
                // CLAVE: Lógica de centrado y color
                className={`
                                    w-16 md:w-20 lg:w-24 h-auto 
                                    ${
                                      char.id === activeSlider
                                        ? "scale-125 z-10 opacity-100"
                                        : "opacity-70 scale-90"
                                    }
                                    transition-all duration-300
                                `}
                width={100} // Ajusta el tamaño base de la imagen
                height={100}
              />
            </button>
          ))}
        </div>

        {/* --- CONTENIDO DE INFORMACIÓN (Renderizado Condicional) --- */}
        <div className="px-4 sm:px-6">{renderContent()}</div>

        <div className="flex relative">
          <div className="w-[60%] sm:w-[40%] md:w-[45%] py-6" />

          <button className="cursor-pointer">
            <Image
              src={btnContact.src}
              alt="Contacto"
              width={392}
              height={113}
              className="w-[24%] md:w-[22%] lg:w-[19%] hover:scale-105 transition-transform duration-300 

                absolute bottom-3 right-[39%] lg:right-[40%]

                "
            />
          </button>

          <button onClick={handleOnClick} className="cursor-pointer">
            <Image
              src={reducir.src}
              alt="Contacto"
              width={211}
              height={193}
              className="w-[13%] md:w-[11%] lg:w-[8%] mx-auto hover:scale-105 transition-transform duration-300  absolute bottom-0 right-5"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default RedesHook;

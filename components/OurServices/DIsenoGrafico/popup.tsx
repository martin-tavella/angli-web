"use client";

import Image from "next/image";
import imgPopup from "@/public/ourServices/DISENO/BARRA_POPUP.png";
import titulo from "@/public/ourServices/DISENO/TITULO.png";
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png";
import btnContact from "@/public/ourServices/AUDIOVISUAL/BOTON_CONTACTO.png";
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png";
import { useState } from "react";
import DisenoHook from "./hook";

const DisenoGraficoPopup = () => {
  const [showHook, setShowHook] = useState(false);

  const handleOnClick = () => {
    setShowHook(!showHook);
  };

  return (
    <div className={`transition-all duration-500 ease-in-out
    ${showHook ? "mt-[30%] lg:mt-[50%]" : ""}
    `}>
      <article
        className={`flex flex-row items-center  text-[#f7ecd5] max-w-[365px] mx-auto sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] overflow-hidden 
      ${showHook ? "rounded-t-3xl" : "rounded-3xl"}
      `}
      >
        <Image
          src={imgPopup}
          width={533}
          height={1363}
          alt="Imagen Audiovisual"
          className="h-[173px] w-auto sm:h-[299px] md:h-[360px] lg:h-[481px] z-200 bg-[#ee6226] "
          priority
        />
        <div className="bg-[#ee6226] h-[173px] sm:h-[299px] md:h-[360px] lg:h-[481px] pt-3 lg:pt-5 animate-slide-in">
          <div className="relative flex justify-center flex-col gap-1 sm:gap-3 mb-5 sm:mb-10 md:mb-10 md:gap-2 lg:gap-3 lg:mb-14">
            <Image
              src={titulo.src}
              width={1328}
              height={319}
              alt="Audiovisual"
              className="w-[34%] sm:w-[36%] md:w-[40%] lg:w-[42%] mx-auto"
              priority
            />
            <p className="text-[7.6px] sm:text-[13px] md:text-[15px] lg:text-[20px] max-w-[88%] sm:max-w-[86%] md:max-w-[90%] lg:max-w-[85%] text-white mx-auto text-center font-extralight">
              El diseño gráfico es el lenguaje visual que define cómo tu marca
              se presenta al mundo. Desde tipografías, presentaciones
              corporativas, infografías, logos hasta paletas de colores, cada
              elemento transmite identidad y genera conexión con tu audiencia.
            </p>
            <p className="text-[6px] sm:text-[9px] md:text-[12px] lg:text-[14px] uppercase max-w-[80%]  sm:max-w-[73%] md:max-w-[75%] text-center mx-auto font-extralight sm:mb-1 md:mb-3 lg:mb-2">
              Entendemos que no se trata solo de estética, sino de comunicar con
              claridad y coherencia. Creamos piezas gráficas que potencian tu
              marca y logran que cada detalle hable por vos.
            </p>
            <Image
              src={miscelanious.src}
              width={2112}
              height={395}
              alt="miscelanio"
              className="w-[90%] sm:w-[95%] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-3"
            />
            <button
              className={`absolute -bottom-5 -right-5 sm:-bottom-10 sm:right-29 md:right-42 md:-bottom-11 lg:-bottom-13 lg:right-[35%] cursor-pointer hover:scale-105 transition-transform duration-300
              ${showHook ? "hidden" : ""}
              `}
              onClick={()=> window.open("https://wa.link/bw0sqj")}
            >
              <Image
                src={btnContact.src}
                alt="Contacto"
                width={392}
                height={113}
                className="w-[30%] max-h-[56px] sm:w-[50%] sm:max-h-[57px] md:w-[64%] md:max-h-[60px] lg:w-[74%] lg:max-h-[60px]"
              />
            </button>
            <button
              onClick={handleOnClick}
              className={`absolute -bottom-5 -right-14 sm:-bottom-10 sm:-right-10 md:-bottom-11 md:-right-5 lg:-bottom-15 lg:right-1 cursor-pointer hover:scale-105 transition-transform duration-300
              ${showHook ? "hidden" : ""}
              `}
            >
              <Image
                src={btnHook.src}
                alt="Contacto"
                width={211}
                height={193}
                className="w-[30%] max-h-[90px] sm:w-[45%] sm:max-h-[100px] md:w-[60%] md:max-h-[90px] lg:w-[80%] lg:max-h-[100px]"
              />
            </button>
          </div>
        </div>
      </article>
      <DisenoHook
        showHook={showHook}
        handleOnClick={handleOnClick}
        btnContact={btnContact}
      />
    </div>
  );
};

//chau
export default DisenoGraficoPopup;

"use client";

import Image from "next/image";
import imgPopup from "@/public/ourServices/PAID/BARRA_POPUP.png";
import titulo from "@/public/ourServices/PAID/TITULO.png";
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png";
import btnContact from "@/public/ourServices/AUDIOVISUAL/BOTON_CONTACTO.png";
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png";
import { useState } from "react";
import PaidHook from "./hook";

const PaidPopup = () => {
  const [showHook, setShowHook] = useState(false);

  const handleOnClick = () => {
    setShowHook(!showHook);
  };
  return (
    <div
      className={`transition-all duration-500 ease-in-out
    
    `}
    >
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
          className="h-[165px] sm:h-[286px] md:h-[345px] lg:h-[458px] w-auto bg-[#d85254] z-200"
        />
        <div className=" bg-[#d85254] h-[165px] sm:h-[286px] md:h-[345px] lg:h-[458px] pt-1 lg:pt-5 animate-slide-in">
          <div className="relative flex justify-center flex-col gap-1 sm:gap-1 mb-5 sm:mb-10 md:mb-12 md:gap-2 lg:gap-3 lg:mb-13">
            <Image
              src={titulo.src}
              width={1328}
              height={319}
              alt="Audiovisual"
              className="w-[34%] sm:w-[33%] mx-auto "
            />
            <p className="text-[7.6px] sm:text-[13px] md:text-[15px] lg:text-[20px] max-w-[88%] sm:max-w-[86%] md:max-w-[90%] lg:max-w-[85%] text-white mx-auto text-center font-extralight">
              La pauta publicitaria es la forma más directa de llegar a nuevas
              audiencias y acelerar el crecimiento de tu marca. A través de
              anuncios en Meta y Google Ads, logramos mayor alcance, visibilidad
              y conversiones.
            </p>
            <p className="text-[6px] sm:text-[9px] md:text-[12px] lg:text-[14px] uppercase max-w-[80%]  sm:max-w-[73%] md:max-w-[75%] text-center mx-auto font-extralight sm:mb-1 md:mb-3 lg:mb-2">
              En nuestra agencia entendemos la pauta como el complemento ideal
              del contenido: solo la ofrecemos junto a nuestro plan mensual de
              redes para potenciar cada marca.
            </p>
            <Image
              src={miscelanious.src}
              width={2112}
              height={395}
              alt="miscelanio"
              className="w-[90%] sm:w-[95%] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-3"
            />
            <button className={`absolute -bottom-5 -right-5 sm:-bottom-10 sm:right-29 md:right-42 md:-bottom-11 lg:-bottom-13 lg:right-[35%] cursor-pointer hover:scale-105 transition-transform duration-300
              ${showHook ? "hidden" : ""}
              `}
              >
              <Image
                src={btnContact.src}
                alt="Contacto"
                width={392}
                height={113}
                className="w-[30%] max-h-[56px] sm:w-[50%] sm:max-h-[57px] md:w-[64%] md:max-h-[60px] lg:w-[74%] lg:max-h-[60px]"
              />
            </button>
            <button className={`absolute -bottom-5 -right-14 sm:-bottom-10 sm:-right-10 md:-bottom-11 md:-right-5 lg:-bottom-15 lg:right-1 cursor-pointer hover:scale-105 transition-transform duration-300
            ${showHook ? "hidden" : ""}
            `}
            onClick={handleOnClick}
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
       <PaidHook
        showHook={showHook}
        handleOnClick={handleOnClick}
        btnContact={btnContact}
      />
    </div>
  );
};
export default PaidPopup;

//

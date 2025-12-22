import Image from "next/image";
import titulo from "@/public/ourServices/DISENO/TITULO.png";
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png";
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png";
import { useState } from "react";
import DisenoMobileHook from "./mobileHook";
import x from "@/public/ourServices/x.png";
// import DireccionMobileHook from "./mobileHook";

const DisenoMobilePopup = ({onClose}: {onClose: () => void}) =>{
  const [showMobileHook, setShowMobileHook] = useState(false);

  const handleOnClick = () => {
    setShowMobileHook(!showMobileHook);
  };
  return (
    <div>
      <article
        className={`bg-[#ee6226] p-5 relative ${
          showMobileHook ? "rounded-t-xl" : "rounded-xl"
        } pb-20 md:pb-27 max-w-full md:max-w-[80%] mx-auto`}
      >
        <button className="text-white font-light text-[3rem] absolute top-3 right-3 cursor-pointer"
        onClick={onClose}
        >
          <img src={x.src} alt="X" className="h-10 w-auto sm:h-13"/>
        </button>
        <Image
          src={titulo.src}
          width={1328}
          height={319}
          alt="Audiovisual"
          className="w-[70%] sm:w-[50%] md:w-[75%] mx-auto"
          priority
        />{" "}
        <p className="text-[14px] sm:text-[19px] md:text-[23px] lg:text-[23px] max-w-[85%] mx-auto text-center font-medium text-white py-3 md:py-6 leading-4.5 md:leading-6">
          El diseño gráfico es el lenguaje visual que define cómo tu marca
              se presenta al mundo. Desde tipografías, presentaciones
              corporativas, infografías, logos hasta paletas de colores, cada
              elemento transmite identidad y genera conexión con tu audiencia.
        </p>
        <p className="text-[13px] sm:text-[16px] md:text-[20px] lg:text-[16px] max-w-[90%] text-center mx-auto font-bold mb-1 sm:mb-1 lg:mb-3 text-[#f7ecd5] uppercase leading-4.5 md:leading-5">
          Entendemos que no se trata solo de estética, sino de comunicar con
              claridad y coherencia. Creamos piezas gráficas que potencian tu
              marca y logran que cada detalle hable por vos.
        </p>
        <div className={`relative ${showMobileHook ? "hidden" : ""}`}>
          <Image
            src={miscelanious.src}
            width={2112}
            height={395}
            alt="miscelanio"
            className="w-full absolute -bottom-11 sm:-bottom-12 md:-bottom-16 lg:-bottom-9 -right-1 left-0"
          />
          <button
            onClick={handleOnClick}
            className={`absolute -bottom-17 md:-bottom-23 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-105 transition-transform duration-300
            `}
          >
            <Image
              src={btnHook.src}
              alt="Contacto"
              width={211}
              height={193}
              className="w-15 h-auto md:w-20 lg:w-[80%] lg:max-h-[100px]"
            />
          </button>
        </div>
      </article>
      <DisenoMobileHook
        showMobileHook={showMobileHook}
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

export default DisenoMobilePopup;

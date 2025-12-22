import Image from "next/image";
import titulo from "@/public/ourServices/REDES/TITULO_POPUP.png";
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png";
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png";
import { useState } from "react";
import RedesMobileHook from "./mobileHook";
import x from "@/public/ourServices/x.png";
// import DireccionMobileHook from "./mobileHook";

const RedesMobilePopup = ({ onClose }: { onClose: () => void }) => {
  const [showMobileHook, setShowMobileHook] = useState(false);

  const handleOnClick = () => {
    setShowMobileHook(!showMobileHook);
  };
  return (
    <div>
      <article
        className={`bg-[#4d81c0] relative p-5 ${
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
          className="w-[85%] sm:w-[63%] md:w-[70%] mx-auto"
          priority
        />{" "}
        <p className="text-[14px] sm:text-[17px] md:text-[23px] lg:text-[23px] max-w-[90%] mx-auto text-center font-medium text-white py-3 md:py-6 leading-4.5 md:leading-6">
            No se trata solo de publicar, sino de construir una presencia
              coherente, atractiva y constante que conecte con tu audiencia.
              Potenciamos tu presencia digital con diferentes servicios para
              redes, desde diseño de feeds hasta una gestión integral de redes.
        </p>
        <p className="text-[13px] sm:text-[14px] md:text-[20px] lg:text-[16px] max-w-[91%] text-center mx-auto font-bold mb-1 sm:mb-1 lg:mb-3 text-white uppercase leading-4.5 md:leading-5">
          Transformamos tus perfiles en un espacio coherente y profesional
              que hace crecer tu marca.
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
      <RedesMobileHook
        showMobileHook={showMobileHook}
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

export default RedesMobilePopup;

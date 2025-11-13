import Image from "next/image";
import imgPopup from "@/public/ourServices/REDES/BARRA_POPUP.png";
import titulo from "@/public/ourServices/REDES/TITULO_POPUP.png";
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png";
import btnContact from "@/public/ourServices/AUDIOVISUAL/BOTON_CONTACTO.png";
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png";

const RedesSocialesPopup = () => {
  return (
    <article className="flex flex-row items-center rounded-3xl text-[#f7ecd5] max-w-[365px] mx-auto sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] overflow-hidden">
      <Image
        src={imgPopup}
        width={533}
        height={1363}
        alt="Imagen Audiovisual"
        className="w-[18%] h-auto z-200 bg-[#4c80bf]"
      />
      <div className="bg-[#4c80bf] h-[165px] sm:h-[284px] md:h-[344px] lg:h-[456px] pt-3 sm:pt-2 md:pt-3 lg:pt-5 animate-slide-in -ml-1">
      <div className="relative flex justify-center flex-col gap-1 sm:gap-3 mb-5 sm:mb-10 md:mb-10 md:gap-2 lg:gap-3 lg:mb-13">
        <Image
          src={titulo.src}
          width={1328}
          height={319}
          alt="Audiovisual"
          className="w-[34%] sm:w-[36%] md:w-[40%] lg:w-[42%] mx-auto"
        />
        <p className="text-[7.6px] sm:text-[13px] md:text-[15px] lg:text-[20px] max-w-[88%] sm:max-w-[86%] md:max-w-[90%] lg:max-w-[85%] text-white mx-auto text-center font-extralight">
          No se trata solo de publicar, sino de construir una presencia
          coherente, atractiva y constante que conecte con tu audiencia.
          Potenciamos tu presencia digital con diferentes servicios para redes,
          desde diseño de feeds hasta una gestión integral de redes.
        </p>
        <p className="text-[6px] sm:text-[9px] md:text-[12px] lg:text-[14px] uppercase max-w-[80%]  sm:max-w-[73%] md:max-w-[75%] text-center mx-auto font-extralight sm:mb-1 md:mb-3 lg:mb-2">
          Transformamos tus perfiles en un espacio coherente y profesional que hace crecer tu marca.
        </p>
        <Image
          src={miscelanious.src}
          width={2112}
          height={395}
          alt="miscelanio"
          className="w-[90%] sm:w-[95%] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-3"
        />
        <button className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:right-29 md:right-42 md:-bottom-11 lg:-bottom-13 lg:right-[35%] cursor-pointer hover:scale-105 transition-transform duration-300">
          <Image
            src={btnContact.src}
            alt="Contacto"
            width={392}
            height={113}
            className="w-[30%] max-h-[56px] sm:w-[50%] sm:max-h-[57px] md:w-[64%] md:max-h-[60px] lg:w-[74%] lg:max-h-[60px]"
          />
        </button>
        <button className="absolute -bottom-5 -right-14 sm:-bottom-10 sm:-right-10 md:-bottom-11 md:-right-5 lg:-bottom-15 lg:right-1 cursor-pointer hover:scale-105 transition-transform duration-300">
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
  );
};
export default RedesSocialesPopup;

//

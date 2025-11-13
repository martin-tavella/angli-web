import Image from "next/image";
import imgPopup from "@/public/ourServices/DIRECCION/BARRA_POPUP.png";
import titulo from "@/public/ourServices/DIRECCION/TITULO.png";
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png";
import btnContact from "@/public/ourServices/AUDIOVISUAL/BOTON_CONTACTO.png";
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png";

const DireccionPopup = () => {
  return (
    <article className="flex flex-row items-center rounded-3xl text-[#f7ecd5] max-w-[365px] mx-auto sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px]  overflow-hidden">
      <Image
        src={imgPopup}
        width={533}
        height={1363}
        alt="Imagen Dirección de Arte"
        className="w-[18%] z-200 h-auto bg-[#d85254]"
      />
       <div className="bg-[#d85254] h-[165px] sm:h-[285px] md:h-[345px] lg:h-[459px] pt-3 sm:pt-5 md:pt-7 lg:pt-10 animate-slide-in">
      <div className="relative flex justify-center flex-col gap-1 mb-3 sm:gap-3 sm:mb-7 md:gap-2 lg:gap-5">
        <Image
          src={titulo.src}
          width={1328}
          height={319}
          alt="Audiovisual"
          className="w-[43%] sm:w-[45%] lg:w-[42%] mx-auto"
        />
        <p className="text-[8px] sm:text-[13px] md:text-[16px] lg:text-[20px] max-w-[86%] sm:max-w-[86%] md:max-w-[90%] lg:max-w-[85%] text-white mx-auto text-center font-extralight">
          La dirección de arte es la que aporta coherencia estética, selecciona
          materiales, colores y texturas para construir escenarios con concepto,
          y le da a cada producción una atmósfera única que potencia la esencia
          de la marca.
        </p>
        <p className="text-[6px] sm:text-[9px] md:text-[12px] lg:text-[14px] uppercase max-w-[55%] sm:max-w-[53%] md:max-w-[56%] lg:max-w-[60%] text-center mx-auto font-extralight sm:mb-1 md:mb-3">
          En nuestra agencia no hacemos solo contenido: creamos impacto visual
          donde los detalles marcan la diferencia.
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
export default DireccionPopup;

//

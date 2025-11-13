import Image from "next/image";
import imgPopup from "@/public/ourServices/CONSULTORIAS/BARRA_POPUP.png";
import titulo from "@/public/ourServices/CONSULTORIAS/TITULO.png";
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png";
import btnContact from "@/public/ourServices/AUDIOVISUAL/BOTON_CONTACTO.png";
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png";

const ConsultoriasPopup = () => {
  return (
    <article className="bg-[#ee6226] flex flex-row items-center rounded-3xl xl:rounded-4xl text-[#f7ecd5] max-w-[365px] mx-auto sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1270px]">
      <Image
        src={imgPopup}
        width={533}
        height={1363}
        alt="Imagen Audiovisual"
        className="w-[18%] h-auto"
      />
      <div className="relative flex justify-center flex-col gap-2 sm:gap-3 mb-2 sm:mb-10 md:mb-10 md:gap-8 lg:gap-10 lg:mb-13 xl:gap-13 xl:mb-10">
        <Image
          src={titulo.src}
          width={1328}
          height={319}
          alt="Audiovisual"
          className="w-[58%] lg:w-[55%] xl:w-[50%] mx-auto"
        />
        <p className="text-[8px] sm:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[25px] max-w-[88%] sm:max-w-[86%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[83%] mb-2 md:mb-6 lg:mb-8 xl:mb-10 text-[#f7ecd5] mx-auto text-center font-extralight">
          Servicio integral pensado para empresas, marcas personales y emprendimientos que buscan ordenar, profesionalizar o reestructurar su estrategia digital, sin necesidad de delegar completamente la ejecución.
        </p>
        <Image
          src={miscelanious.src}
          width={2112}
          height={395}
          alt="miscelanio"
          className="w-[90%] sm:w-[95%] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-3 xl:-bottom-13 xl:w-[93%] xl:right-6"
        />
        <button className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:right-29 md:right-42 md:-bottom-11 lg:-bottom-13 lg:right-[35%] xl:-bottom-18 xl:right-[40.2%] cursor-pointer hover:scale-105 transition-transform duration-300">
          <Image
            src={btnContact.src}
            alt="Contacto"
            width={392}
            height={113}
            className="w-[30%] max-h-[56px] sm:w-[50%] sm:max-h-[57px] md:w-[64%] md:max-h-[60px] lg:w-[74%] lg:max-h-[60px] xl:w-[90%] xl:max-h-[51px] "
          />
        </button>
        <button className="absolute -bottom-5 -right-14 sm:-bottom-10 sm:-right-10 md:-bottom-11 md:-right-5 lg:-bottom-15 lg:right-1 xl:-bottom-19 xl:right-8 cursor-pointer hover:scale-105 transition-transform duration-300">
          <Image
            src={btnHook.src}
            alt="Contacto"
            width={211}
            height={193}
            className="w-[30%] max-h-[90px] sm:w-[45%] sm:max-h-[100px] md:w-[60%] md:max-h-[90px] lg:w-[80%] lg:max-h-[100px] xl:w-[93%] xl:max-h-[90px]"
          />
        </button>
      </div>
    </article>
  );
};
export default ConsultoriasPopup;
//

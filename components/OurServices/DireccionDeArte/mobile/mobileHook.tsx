import Image from "next/image";
import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png";
import fondoRojo from "@/public/backgrounds/FONDO_ROJO.png";
import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";
import { MobileHookProps } from "../../hook.types";

const DireccionMobileHook = ({
  showMobileHook,
  handleOnClick,
}: MobileHookProps) => {
  return (
    <article
      className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      border-x-2 border-[#d85254] md:max-w-[80%] relative -mt-1
      ${
        showMobileHook
          ? "max-h-[350px] sm:max-h-[320px]"
          : "max-h-0 border-b-0 border-x-0"
      }
    `}
    >
      <Image
        src={fondoRojo}
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="py-3 border-b-2 border-[#d85254] pb-5 relative">
        <Image
          src={star.src}
          alt="Listado de Servicios"
          width={113}
          height={119}
          className="w-[8%] sm:w-[6%] md:w-[7%] mx-auto pt-1"
        />
        <ul className="text-center uppercase text-[#f7ecd5] font-semibold flex flex-col text-[14px] sm:text-[100%] gap-3 sm:gap-4 md:gap-3 max-w-[80%] sm:max-w-[65%] mx-auto pt-4 pb-13 sm:pb-12">
          <li>
            Encargada de que la escena tenga coherencia, sentido e impacto
            visual.
          </li>
          <li>Scouting de modelos</li>
          <li>Scouting de locaciones</li>
          <li>Adquisición de props</li>
        </ul>
        <button
          onClick={handleOnClick}
          className="z-50 cursor-pointer mx-auto absolute bottom-1 -right-8 sm:-right-4 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={reducir.src}
            alt="Contacto"
            width={211}
            height={193}
            className="w-[55%] sm:w-[75%]"
          />
        </button>
      </div>
    </article>
  );
};

export default DireccionMobileHook;

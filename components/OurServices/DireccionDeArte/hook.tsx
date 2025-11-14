import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";

import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png"
import Image from "next/image";

interface AudiovisualHookProps {
  showHook: boolean;
  btnContact: {src: string}
  handleOnClick: () => void;
}

const DireccionHook = ({ showHook, handleOnClick, btnContact }: AudiovisualHookProps) => {
  return (
    <article className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      border-x-[5px] border-[#d85254]
      ${showHook ? "max-h-[320px]" : "max-h-0 border-b-0 border-x-0"}
    `}>
      <div className="bg-[#b63436] py-3 border-b-2 border-[#d85254]">
        <Image
        src={star.src}
        alt="Listado de Servicios"
        width={113}
        height={119}
        className="w-[8%] sm:w-[6%] md:w-[4%] mx-auto pt-1"
        
        />
        <ul className="text-center uppercase text-[#f7ecd5] font-extralight flex flex-col text-[10px] sm:text-[100%] gap-1 sm:gap-2 md:gap-3 max-w-[50%] mx-auto pt-4 pb-7">
          <li>Encargada de que la escena tenga coherencia,
sentido e impacto visual.</li>
          <li>Scouting de modelos</li>
          <li>Scouting de locaciones</li>
          <li>Adquisición de props</li>
        </ul>
        <div className="flex relative">
        <div className="w-[60%] sm:w-[40%] md:w-[45%] py-6"/>
        <button>
             <Image
                src={btnContact.src}
                alt="Contacto"
                width={392}
                height={113} 
                className="w-[18%] sm:w-[15%] md:w-[13%] lg:w-[13%] hover:scale-105 transition-transform duration-300 cursor-pointer
                absolute bottom-3 right-[44%]
                "
                />
        </button>
        <button onClick={handleOnClick} className="">
               <Image
                src={reducir.src}
                alt="Contacto"
                width={211}
                height={193} 
                className="w-[14%] sm:w-[10%] md:w-[8%] lg:w-[8%] mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer absolute bottom-0 right-5"
                />
        </button>
        </div>
      </div>
    </article>
  );
};

export default DireccionHook;

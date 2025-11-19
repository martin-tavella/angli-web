import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";

import fondoRojo from "@/public/backgrounds/FONDO_ROJO.png";
import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png"
import Image from "next/image";

interface DireccionHookProps {
  showHook: boolean;
  btnContact: {src: string}
  handleOnClick: () => void;
}

const DireccionHook = ({ showHook, handleOnClick, btnContact }: DireccionHookProps) => {
  return (
    <article className={`
      relative lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      ${showHook ? "max-h-[340px] border-x-[5px] border-[#d85254]" : "max-h-0 border-b-0 border-x-0"}
    `}>
      <Image
        src={fondoRojo}
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className=" py-3 border-b-2 border-[#d85254]">
        <Image
        src={star.src}
        alt="Listado de Servicios"
        width={113}
        height={119}
        className="w-[8%] sm:w-[6%] md:w-[4%] mx-auto pt-1"
        
        />
        <ul className="text-center uppercase text-[#f7ecd5] font-extralight flex flex-col text-[10px] sm:text-[100%] gap-1 sm:gap-2 md:gap-3 max-w-[50%] mx-auto pt-4 pb-13 sm:pb-22">
          <li>Encargada de que la escena tenga coherencia,
sentido e impacto visual.</li>
          <li>Scouting de modelos</li>
          <li>Scouting de locaciones</li>
          <li>Adquisición de props</li>
        </ul>
        <div className="flex relative">
        <button className="cursor-pointer"
          
          onClick={()=> window.open("https://wa.link/bw0sqj")}>
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

export default DireccionHook;

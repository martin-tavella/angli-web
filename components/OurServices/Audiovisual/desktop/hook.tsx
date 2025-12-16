import imgHook from "@/public/ourServices/AUDIOVISUAL/PLACA_COMPLETA.png";
import listado from "@/public/ourServices/AUDIOVISUAL/LISTADO.png";
import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png"
import Image from "next/image";

interface AudiovisualHookProps {
  showHook: boolean;
  btnContact: {src: string}
  handleOnClick: () => void;
}

const AudiovisualHook = ({ showHook, handleOnClick, btnContact }: AudiovisualHookProps) => {
  return (
    <article className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      border-x-[5px] border-[#4d81c0]
      ${showHook ? "max-h-[1100px]" : "max-h-0 border-b-0 border-x-0"}
    `}>
      <div className={`
      relative
      bg-[url('/backgrounds/FONDO_BLANCO.png')]
      before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10 
      transition-all duration-500 forward
      ${showHook ? 'py-8' : 'py-0'}
      `}>
        <Image
          src={imgHook.src}
          alt="Placa de equipo"
          width={2358}
          height={1315}
          className="w-[90%] mx-auto"
        />
      </div>
      <div className="bg-[url('/about/FONDO.png')] py-3 border-b-2 border-[#4d81c0]">
        <Image
        src={listado.src}
        alt="Listado de Servicios"
        width={2675}
        height={837}
        className="w-[90%] mx-auto py-10"
        
        />
        <div className="flex relative pt-3 pb-10">
          <button className="cursor-pointer"
          onClick={()=> window.open("https://wa.link/bw0sqj")}
          >
            <Image
              src={btnContact.src}
              alt="Contacto"
              width={392}
              height={113}
              className="z-50  w-[24%] md:w-[22%] lg:w-[19%] hover:scale-105 transition-transform duration-300 

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
              className=" z-50 w-[13%] md:w-[11%] lg:w-[8%] mx-auto absolute bottom-0 right-5 hover:scale-105 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default AudiovisualHook;

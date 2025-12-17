import Image from "next/image";
import imgHook from "@/public/ourServices/AUDIOVISUAL/PLACA_COMPLETA.png";
import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png"
import { MobileHookProps } from "../../hook.types";



const AudiovisualMobileHook = ({
  showMobileHook,
  handleOnClick,
}: MobileHookProps) => {
  return (
    <article
      className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      border-x-[2px] border-[#4d81c0] md:max-w-[80%]
      ${showMobileHook ? "max-h-[900px] sm:max-h-[1100px]" : "max-h-0 border-b-0 border-x-0"}
    `}
    >
      <div
        className={`
      relative
      bg-[url('/backgrounds/FONDO_BLANCO.png')]
      before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10 
      transition-all duration-500 forward
      ${showMobileHook ? "py-8" : "py-0"}
      `}
      >
        <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-[43%]">
            <p className="text-[#EA6026] text-[1.5rem] sm:text-[2.8rem] 
            md:text-[2.4rem]
            font-bold text-center leading-6 sm:leading-12 md:leading-10">
                Equipo<br></br> Profesional
            </p>
        </div>
        <Image
          src={imgHook.src}
          alt="Placa de equipo"
          width={2358}
          height={1315}
          className="w-[95%] mx-auto"
        />
      </div>
      <div className="bg-[url('/about/FONDO.png')] py-3 border-b-2 border-[#4d81c0] pb-14 relative">
            <ul className="text-white text-[10px] sm:text-[1rem] md:text-[1rem] font-bold text-center leading-6 sm:leading-8 px-4 py-2">
                <li>FOTOGRAFÍA Y VIDEO INSTITUCIONAL</li>
                <li>FOTOGRAFÍA Y VIDEO PARA PLANTAS DE PRODUCCIÓN</li>
                <li>FOTOGRAFÍA Y VIDEO PARA LOCALES</li>
                <li>FOTOGRAFÍA Y VIDEO AÉREO CON DRONE</li>
                <li>FOTOGRAFÍA DE PRODUCTO Y GASTRONÓMICA PARA REDES</li>
                <li>FOTOGRAFÍA Y VIDEO DE CAPACITACIONES EMPRESARIALES</li>
                <li>FILMACIÓN DE CURSOS ONLINE Y COBERTURA DE CURSOS PRESENCIALES</li>
                <li>FOTOGRAFÍA BEAUTY</li>
                <li>COBERTURA DE APERTURA DE LOCALES</li>
                <li>FOTOGRAFÍA Y VIDEO DE EVENTOS CORPORATIVOS</li>
                <li>FOTOGRAFÍA Y VIDEO DE EXPOSICIONES CORPORATIVAS</li>
                <li>REAL STATE</li> 
                <li>FOTOGRAFÍA Y VIDEO DE ARQUITECTURA</li>
                <li>VIDEOS DE RECETAS</li>
                <li>FOTOGRAFÍA Y VIDEO PARA REDES SOCIALES</li>
                <li>FOTOGRAFÍA Y VIDEO DE PROFESIONALES, CONSULTORIOS Y OFICINAS</li>
                <li>FOTOGRAFÍA Y VIDEO DE PRODUCTOS EN ESCENA</li>
            </ul>
              <button onClick={handleOnClick} className="cursor-pointer mx-auto absolute bottom-1 -right-8 hover:scale-105 transition-transform duration-300">
            <Image
              src={reducir.src}
              alt="Contacto"
              width={211}
              height={193}
              className="z-50 w-[55%]" 
            />
          </button>
      </div>
    </article>
  );
};

export default AudiovisualMobileHook;

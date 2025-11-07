/* eslint-disable @next/next/no-img-element */
import disabledContact from "@/public/about/BOTON_CONTACTO2.png";
import bg from "@/public/about/FONDO_2.png";
import brendaLean from "@/public/about/BRENDA_LEAN.png";
import brendaLetter from "@/public/about/BRENDA_LETTER.png";
import leanLetter from "@/public/about/LEAN_LETTER.png";
import reduceBtn from "@/public/about/BOTON_REDUCIR.png";
import { manrope, vintageRotter } from "@/utils/fonts/fonts";
import "./breakpoint.css";

const h4Styles = `${vintageRotter.className} text-[65px] text-[#d85254] font-semibold my-3`;
const spanStyles = "text-[#EE6226]";

const Hook = ({ toggleHook, showHook }) => {
  return (
   <div
      className={`
        ${manrope.className} 
        bg-[url('/backgrounds/FONDO_BLANCO.png')] 
        flex justify-center items-center flex-col gap-8 
        py-0 px-5 max-w-[1920px] mx-auto 
        
        transition-all duration-700 ease-in-out overflow-hidden
        
        ${showHook ? "max-h-[3000px] pt-10 pb-10" : "max-h-0"} 
        
        w-full
      `}
    >
      <div className="mx-[15%] text-[32px] font-light my-25">
        {/* ... Contenido de texto (párrafos y h4) ... */}
        
        <div className="mb-5">
          <p>
            Contamos con un <span className={spanStyles}>equipo de profesionales</span> con
            experiencia y conocimientos en <span className={spanStyles}>
              marketing, diseño, comunicación y producción audiovisual,
            </span>{" "}
            que trabajan de manera integrada con una visión 360°, siempre
            enfocados en el crecimiento y los objetivos de tu marca.
          </p>
        </div>
        <div>
          <h4 className={h4Styles}>¿Qué hacemos?</h4>
          <p>
            Nos especializamos en <span className={spanStyles}>
              crear contenido visual de alta calidad
            </span>{" "}
            que conecta, transmite, y genera impacto; en <span className={spanStyles}>realizar diseños</span> que vayan de la
            mano de tu identidad visual y transmitan profesionalismo en <span className={spanStyles}>comunicar y planificar</span> para
            llegar a tu audiencia
          </p>
        </div>
        <div>
          <h4 className={h4Styles}>¿Cómo lo hacemos?</h4>
          <p className="mb-10">
            Trabajamos codo a codo con vos, escuchando tus necesidades y
            expectativas, para diseñar soluciones a medida que no solo
            representen a tu marca, sino que la hagan ver profesional y la
            ayuden a crecer en el mercado.
          </p>
          <p>
            En cada proyecto, nos involucramos como parte de tu equipo,
            entendiendo tus objetivos y alineando nuestra estrategia para que
            cada pieza de comunicación sea coherente, efectiva y memorable.
          </p>
        </div>
      </div>
    
      {/* Contenedor de las imágenes (Contactanos) */}
      <section className="w-full flex items-end justify-center">
        <div className="relative w-full flex items-end justify-center bg-[url('/about/FONDO_2.png')] bg-no-repeat bg-cover bg-center"> 
          
          {/* Imágenes de Contactanos */}
          <div className="flex justify-center items-end w-full">
            <img 
              src={brendaLean.src} 
              alt="Brenda y Leandro" 
              className={"w-[53%] h-auto z-10 mt-[18px] mr-23"}
            />
            
            <img 
              src={disabledContact.src} 
              alt="Contactanos" 
              className="absolute z-20 -top-13 left-1/2 -translate-x-1/2 w-[300px]"
            />

            <img 
              src={brendaLetter.src} 
              alt="Cartel Brenda" 
              className="absolute z-20 top-[26%] right-[21%] w-[16%]" 
            />

            <img 
              src={leanLetter.src} 
              alt="Cartel Leandro" 
              className="absolute z-20 bottom-[30%] left-[18%] w-[16%]"
            />

            {/* Botón de cierre: llama a toggleHook */}
            <button onClick={toggleHook} className="absolute z-30 bottom-[20%] right-[1%] cursor-pointer">
              <img 
                src={reduceBtn.src} 
                alt="Reducir" 
                className="w-[50%] h-auto"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hook;

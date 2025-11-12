/* eslint-disable @next/next/no-img-element */
import disabledContact from "@/public/about/BOTON_CONTACTO2.png";
import bg from "@/public/about/FONDO_2.png";
import brendaLean from "@/public/about/BRENDA_LEAN.png";
import brendaLetter from "@/public/about/BRENDA_LETTER.png";
import leanLetter from "@/public/about/LEAN_LETTER.png";
import reduceBtn from "@/public/about/BOTON_REDUCIR.png";
import { manrope, vintageRotter } from "@/utils/fonts/fonts";
import "./breakpoint.css";

const h4Styles = `${vintageRotter.className} 
text-[#d85254]
                  text-4xl sm:text-5xl lg:text-6xl 
                  mb-4 mt-8`;
const spanStyles = "text-[#EE6226]";

interface HookProps {
  toggleHook: () => void;
  showHook: boolean;
}

const Hook = ({ toggleHook, showHook }: HookProps) => {
  return (
    <div id="hook"
      className={`
        ${manrope.className} 
        flex justify-center items-center flex-col gap-8 
        py-0 px-5 mx-auto 
        
        about-container 
        transition-all duration-700 ease-in-out overflow-hidden
        
        ${showHook ? "max-h-[3000px] pt-10" : "max-h-0"} 
        
        w-full
      `}
    >
      {/* Contenedor del Texto */}
      <div  className="mx-4 sm:mx-10 lg:mx-[15%] text-base sm:text-xl lg:text-[28px] xl:max-w-[800px] font-light my-8">
        {" "}
        {/* CLAVE: Reducir tamaño y margen */}
        {/* Párrafos principales (Texto del Hook) */}
        <div className="mb-5">
          <p>
            Contamos con un{" "}
            <span className={spanStyles}>equipo de profesionales</span> con
            experiencia y conocimientos en{" "}
            <span className={spanStyles}>
              marketing, diseño, comunicación y producción audiovisual,
            </span>{" "}
            que trabajan de manera integrada con una visión 360°, siempre
            enfocados en el crecimiento y los objetivos de tu marca.
          </p>
        </div>
        {/* Sección ¿Qué hacemos? */}
        <div>
          <h4 className={h4Styles}>¿Qué hacemos?</h4>
          <p>
            Nos especializamos en{" "}
            <span className={spanStyles}>
              crear contenido visual de alta calidad
            </span>{" "}
            que conecta, transmite, y genera impacto; en{" "}
            <span className={spanStyles}>realizar diseños</span> que vayan de la
            mano de tu identidad visual y transmitan profesionalismo en{" "}
            <span className={spanStyles}>comunicar y planificar</span> para
            llegar a tu audiencia
          </p>
        </div>
        {/* Sección ¿Cómo lo hacemos? */}
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

      {/* Contenedor de las imágenes (Contactanos) - Se mantiene igual */}
      <section className="w-full flex items-end justify-center max-w-[1240px] mx-auto">
        {/* ... (código de imágenes con posicionamiento absoluto) ... */}
        <div className="relative w-full flex items-end justify-center bg-[url('/about/FONDO_2.png')] bg-no-repeat bg-cover bg-center">
          <div className="flex justify-center items-end w-full">
            <img
              src={brendaLean.src}
              alt="Brenda y Leandro"
              className={"w-[50%] h-auto z-10 mt-[34px] mr-0 sm:mr-15"}
            />

            <img
              src={disabledContact.src}
              alt="Contactanos"
              className="absolute z-20 -top-4 left-1/2 -translate-x-1/2 w-30 sm:w-[200px] sm:-top-7 xl:w-[300px] xl:-top-12"
            />

            <img
              src={brendaLetter.src}
              alt="Cartel Brenda"
              className="absolute z-20 top-[26%] right-[21%] w-[16%] letter"
            />

            <img
              src={leanLetter.src}
              alt="Cartel Leandro"
              className="absolute z-20 bottom-[30%] left-[18%] w-[16%] letter"
            />

            <button
              onClick={() => {
                toggleHook()
                window.location.href = "#nosotros"
              }}
              className="btn-hook absolute z-30 bottom-[20%] hover:scale-110 -right-[43%] sm:-right-[11%] md:-right-[6%] cursor-pointer transition-all duration-300"
            >
              <img
                src={reduceBtn.src}
                alt="Reducir"
                className="w-[16%] sm:w-[21%] md:w-[32%] h-auto"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hook;

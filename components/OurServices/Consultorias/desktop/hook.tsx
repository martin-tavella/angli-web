import item1 from "@/public/ourServices/CONSULTORIAS/CARTEL_1.png";
import item2 from "@/public/ourServices/CONSULTORIAS/CARTEL_2.png";
import item3 from "@/public/ourServices/CONSULTORIAS/CARTEL_3.png";
import item4 from "@/public/ourServices/CONSULTORIAS/CARTEL_4.png";

import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png";
import { manrope } from "@/utils/fonts/fonts";
import Image from "next/image";

interface ConsultoriasHookProps {
  showHook: boolean;
  btnContact: { src: string };
  handleOnClick: () => void;
}

const ConsultoriasHook = ({
  showHook,
  handleOnClick,
  btnContact,
}: ConsultoriasHookProps) => {
  return (
    <article
      className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      ] border-[#d85254]
      ${
        showHook
          ? "max-h-[1100px] sm:max-h-[1150px] md:max-h-[1300px] lg:max-h-[1150px] border-[5px]"
          : "max-h-0 border-b-0 border-x-0"
      }
    `}
    >
      <div
        className={`${manrope.className} bg-[url('/backgrounds/FONDO_BLANCO.png')] relative before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/20 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/20 after:to-transparent after:z-10 
                transition-all duration-500 forward`}
      >
        <div className="max-w-[90%] mx-auto pt-10">
          <ul className="flex flex-col justify-center text-center gap-5 sm:gap-10">
            <li>
              <Image
                src={item1.src}
                alt="Etapa 1"
                width={551}
                height={205}
                className="w-[20%] mx-auto"
              />
              <span className="text-[#4d81c0] text-[13px] sm:text-[1.2rem] md:text-2xl text-center font-extralight uppercase">
                -reunión inicial de diagnóstico y seteo de objetivos-
              </span>
              <p className="text-center text-[12px] sm:text-[16px] md:text-xl font-extralight max-w-[77%] mx-auto">
                60 y 90 minutos donde se realiza un relevamiento completo de la
                marca para construir una hoja de ruta clara y realista que guíe
                el trabajo posterior.
              </p>
            </li>
            <li>
              <Image
                src={item2.src}
                alt="Etapa 2"
                width={551}
                height={205}
                className="w-[20%] mx-auto"
              />
              <span className="text-[#4d81c0] text-[13px] sm:text-[1.2rem] md:text-2xl text-center font-extralight uppercase">
                -documento entregable de análisis y sugerencias-
              </span>
              <div className="flex flex-col">
              <p className="text-center text-[12px] sm:text-[16px] md:text-xl font-extralight max-w-[77%] mx-auto pt-1">
                A partir de la reunión inicial se elabora un informe
                personalizado con:{" "}
              </p>
              <span className="text-center text-[10px] sm:text-[1rem] font-extralight max-w-[77%] mx-auto mt-5">
                EVALUACIÓN DEL ECOSISTEMA DIGITAL . ANÁLISIS DEL PÚBLICO,
                POSICIONAMIENTO Y MENSAJES ACTUALES . RECOMENDACIONES
                ESTRATÉGICAS CONCRETAS Y ACCIONABLES . PRIORIZACIÓN DE TAREAS Y
                PLAN DE ACCIÓN INICIAL.
              </span>
              </div>
            </li>
            <li>
              <Image
                src={item3.src}
                alt="Etapa 3"
                width={551}
                height={205}
                className="w-[20%] mx-auto"
              />
              <span className="text-[#4d81c0] text-[13px] sm:text-[1.2rem] md:text-2xl text-center font-extralight">
                -REUNIÓN DE CONSULTORIO -<br></br> (1 o 2 según necesidad)
              </span>
              <p className="text-center text-[12px] sm:text-[16px] md:text-xl font-extralight max-w-[77%] mx-auto">
                Sesiones de trabajo de 120 minutos cada una (individuales o
                grupales) donde se acompaña la implementación de las
                recomendaciones, se ajustan estrategias y se resuelven dudas
                operativas o de planificación.
              </p>
            </li>
            <li>
              <Image
                src={item4.src}
                alt="Etapa 4"
                width={551}
                height={205}
                className="w-[20%] mx-auto"
              />
              <span className="text-[#4d81c0] text-[13px] sm:text-[1.2rem] md:text-2xl text-center font-extralight uppercase">
                -SOPORTE Y SEGUIMIENTO POSTERIOR -
              </span>
              <p className="text-center text-[12px] sm:text-[16px] md:text-xl font-extralight max-w-[77%] mx-auto">
                Durante el mes siguiente a las reuniones, el cliente cuenta con
                un acompañamiento por correo o mensajes para resolver consultas
                puntuales, validar decisiones estratégicas o recibir feedback
                sobre avances.
              </p>
            </li>
          </ul>
          <p className="uppercase text-[#ee6226] text-center text-[12px] sm:text-[15px] md:text-xl font-extralight max-w-[70%] mx-auto py-6 sm:pb-10">
            modalidad virtual . documento estratégico entregable en formato pdf
            . grabación de las reuniones . acceso a soporte durante 30 días
            posteriores a la última sesión.
          </p>
        </div>
        <div className="flex relative pt-3 pb-10">
          <button className="cursor-pointer"
          onClick={()=> window.open("https://wa.link/bw0sqj")}>
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

export default ConsultoriasHook;

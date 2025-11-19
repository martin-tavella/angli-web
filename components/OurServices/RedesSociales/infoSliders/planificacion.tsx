import title from "@/public/ourServices/REDES/planificacion_titulo.png";
import Image from "next/image";
import { manrope, vintageRotter } from "@/utils/fonts/fonts";
import item1 from "@/public/ourServices/REDES/item_1.png";
import item2 from "@/public/ourServices/REDES/item_2.png";
import item3 from "@/public/ourServices/REDES/item_3.png";

const Planificacion = () => {
  return (
    <div className={`${manrope.className}`}>
      <div className="mx-auto w-[80%] flex flex-col gap-1">
        <Image
          src={title.src}
          alt="Nuestros Servicios"
          width={1751}
          height={274}
          className="w-[85%] sm:w-[75%] mx-auto"
        />
        <span className="text-[#4d81c0] text-[16px] sm:text-2xl text-center font-extralight">
          -LEVEL UP-
        </span>
        <p className="text-center text-[12px] sm:text-xl font-extralight">
          Nuestro servicio de planificación mensual es la forma más completa y
          organizada de gestionar tu presencia digital. No se trata solo de
          publicar contenido: es un proceso pensado para que tu marca tenga
          coherencia, estrategia y una identidad profesional en redes.
        </p>
      </div>
      <div className="pt-5">
        <h4
          className={`${vintageRotter.className} text-[#4d81c0] text-2xl sm:text-4xl text-center font-extralight`}
        >
          ¿Como funciona?
        </h4>
        <div className="flex flex-nowrap max-w-[80%] mx-auto gap-5 pt-5">
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item1.src}
              alt="1"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">Planificación estratégica
y calendario de contenido</span>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item2.src}
              alt="2"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">Producción audiovisual en una jornada</span>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item3.src}
              alt="3"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">Diseño gráfico e identidad visual
</span>
          </div>
        </div>
          <p className="text-center max-w-[75%] mx-auto py-4 sm:py-10 font-extralight text-[#4d81c0] text-[12px] sm:text-xl">En resumen, la planificación mensual es un paquete integral que combina estrategia, producción audiovisual y diseño gráfico en un solo servicio. Con este sistema, tu marca gana en organización, coherencia y presencia digital profesional.</p>
      </div>
    </div>
  );
};
export default Planificacion;

//

import title from "@/public/ourServices/REDES/diseno_titulo.png";
import Image from "next/image";
import { manrope, vintageRotter } from "@/utils/fonts/fonts";
import item1 from "@/public/ourServices/REDES/item_1.png";
import item2 from "@/public/ourServices/REDES/item_2.png";

const DisenoFeed = () => {
  return (
    <div className={`${manrope.className}`}>
      <div className="mx-auto w-[80%] flex flex-col gap-1">
        <Image
          src={title.src}
          alt="Nuestros Servicios"
          width={1751}
          height={274}
          className="w-[85%] sm:w-[63%] mx-auto"
        />
        <p className="text-center text-[12px] sm:text-xl font-extralight">
          En redes sociales, la primera impresión lo es todo. Un feed prolijo,
          atractivo y alineado con la identidad visual de tu marca transmite
          confianza, profesionalismo y hace que tu público quiera quedarse a
          explorar tu contenido. Trabajamos con tu propio contenido, ya que nos
          compartís las fotos que ya tiene tu marca y, a partir de ese material,
          nuestro equipo de diseño gráfico interviene y transforma esas imágenes
          para darles coherencia y estilo.
        </p>
      </div>
      <div className="pt-8">
        <h4
          className={`${vintageRotter.className} text-[#4d81c0] text-2xl sm:text-4xl text-center font-extralight`}
        >
          ¿Como funciona?
        </h4>
        <div className="flex flex-nowrap justify-center max-w-[60%] mx-auto gap-10 pt-5">
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item1.src}
              alt="1"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
              Placas diseñadas para el feed (6)
            </span>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item2.src}
              alt="2"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
              Intervención de fotos (6)
            </span>
          </div>
        </div>
        <p className="text-center max-w-[75%] mx-auto py-4 sm:py-10 font-extralight text-[#4d81c0] text-[12px] sm:text-xl">
          En conjunto, estas piezas hacen que tu feed deje de ser solo una
          grilla de publicaciones y se convierta en un espacio cuidado,
          coherente y atractivo, que refuerza el mensaje de tu marca y genera
          mayor impacto en quienes visitan tu perfil.
        </p>
      </div>
    </div>
  );
};
export default DisenoFeed;

//

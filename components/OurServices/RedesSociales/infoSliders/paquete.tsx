import title from "@/public/ourServices/REDES/paquete_titulo.png";
import Image from "next/image";
import { manrope, vintageRotter } from "@/utils/fonts/fonts";
import item1 from "@/public/ourServices/REDES/item_1.png";
import item2 from "@/public/ourServices/REDES/item_2.png";
import item3 from "@/public/ourServices/REDES/item_3.png";
import item4 from "@/public/ourServices/REDES/item_4.png";

const Paquete = () => {
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
          -POP UP-
        </span>
        <p className="text-center text-[12px] sm:text-xl font-extralight">
          Los Reels se convirtieron en una de las herramientas más poderosas
          para ganar visibilidad, alcance y conexión con la audiencia en redes
          sociales. Por eso creamos un servicio especialmente diseñado para que
          tu marca aproveche al máximo este formato.
        </p>
      </div>
      <div className="pt-5">
        <h4
          className={`${vintageRotter.className} text-[#4d81c0] text-2xl sm:text-4xl text-center font-extralight`}
        >
          ¿Como funciona?
        </h4>
        <div className="flex flex-wrap justify-center sm:flex-nowrap max-w-[90%] mx-auto gap-5 pt-5">
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item1.src}
              alt="1"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
              Recepción de productos en nuestro estudio
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
              Producción de Reels en paquetes
            </span>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item3.src}
              alt="3"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
              Selección de temáticas en tendencia
            </span>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <Image
              src={item4.src}
              alt="4"
              width={201}
              height={201}
              className="w-[30%] mx-auto"
            />
            <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
              Devolución de productos
            </span>
          </div>
        </div>
        <p className="text-center max-w-[75%] mx-auto py-4 sm:py-10 font-extralight text-[#4d81c0] text-[12px] sm:text-xl">
          En resumen, este servicio combina creatividad y producción audiovisual
          profesional en un formato clave para crecer en redes. Con nuestros
          Reels temáticos, tu marca se asegura contenido dinámico, atractivo y
          pensado para captar la atención en segundos.
        </p>
      </div>
    </div>
  );
};
export default Paquete;

//

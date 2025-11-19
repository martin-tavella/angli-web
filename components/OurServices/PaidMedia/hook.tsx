import item1 from "@/public/ourServices/PAID/item_1.png";
import item2 from "@/public/ourServices/PAID/item_2.png";
import item3 from "@/public/ourServices/REDES/item_3.png";
import title from "@/public/ourServices/PAID/ILUSTRACION.png";
import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png";
import { manrope } from "@/utils/fonts/fonts";
import { vintageRotter } from "@/utils/fonts/fonts";
import Image from "next/image";

interface PaidHookProps {
  showHook: boolean;
  btnContact: { src: string };
  handleOnClick: () => void;
}

const PaidHook = ({ showHook, handleOnClick, btnContact }: PaidHookProps) => {
  return (
    <article
      className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      ] border-[#d85254]
      ${showHook ? "max-h-[700px] sm:max-h-[1100px] md:max-h-[830px] border-[5px]" : "max-h-0 border-b-0 border-x-0"}
    `}
    >
      <div
        className={`${manrope.className} bg-[url('/backgrounds/FONDO_BLANCO.png')] relative before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/20 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/20 after:to-transparent after:z-10 
                transition-all duration-500 forward`}
      >
        <div className="mx-auto w-[80%] flex flex-col gap-1 py-10">
          <Image
            src={title.src}
            alt="Nuestros Servicios"
            width={1751}
            height={274}
            className="w-[25%] sm:w-[20%] mx-auto py-2"
          />
          <p className="text-center text-[12px] sm:text-xl font-extralight">
            Tomamos el contenido estratégico y de calidad que realizamos para
            impulsarlo mediante campañas. Por eso ofrecemos nuestro servicio de
            Paid Media, pensado exclusivamente para quienes contratan nuestras
            planificaciones mensuales de contenido.
          </p>
        </div>
        <div className="sm:pt-5">
          <h4
            className={`${vintageRotter.className} text-[#4d81c0] text-2xl sm:text-4xl text-center font-extralight`}
          >
            ¿Como funciona?
          </h4>
          <div className="flex flex-nowrap max-w-[80%] mx-auto gap-2 sm:gap-5 pt-5">
            <div className="w-[40%] flex flex-col gap-3">
              <Image
                src={item1.src}
                alt="1"
                width={201}
                height={201}
                className="h-[40px] sm:h-[65px] md:h-[70px] lg:h-[85px] w-auto  mx-auto"
              />
              <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
                ES UN Complemento de la planificación mensual
              </span>
            </div>
            <div className="w-[40%] flex flex-col gap-3">
              <Image
                src={item2.src}
                alt="2"
                width={201}
                height={201}
                className="h-[40px] sm:h-[65px] md:h-[70px] lg:h-[85px] w-auto mx-auto"
              />
              <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
                Campañas en Meta y Ads
              </span>
            </div>
            <div className="w-[40%] flex flex-col gap-3">
              <Image
                src={item3.src}
                alt="3"
                width={201}
                height={201}
                className="h-[40px]  sm:h-[65px] md:h-[70px] lg:h-[85px] w-auto mx-auto"
              />
              <span className="uppercase font-extralight text-center text-[10px] sm:text-[16px]">
                Potenciar tu presencia digital
              </span>
            </div>
          </div>
          <p className="text-center max-w-[75%] mx-auto pt-4 sm:py-10 font-extralight text-[#d85254] text-[12px] sm:text-xl">
            Creemos que la publicidad digital funciona mejor cuando se apoya en
            contenido de calidad, profesional y alineado a la identidad de tu
            marca. De esta manera, cada anuncio que impulsamos tiene detrás una
            estrategia sólida y un material visual cuidado, pensado para captar
            la atención y generar interés real.
          </p>
        </div>
        <div className="flex relative pt-3 pb-10">

          <button className="cursor-pointer">
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

export default PaidHook;

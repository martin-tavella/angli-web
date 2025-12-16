import personaje from "@/public/ourServices/DISENO/PERSONAJE.png";
import reducir from "@/public/ourServices/AUDIOVISUAL/BOTON_REDUCIR.png";
import Image from "next/image";

interface DireccionHookProps {
  showHook: boolean;
  btnContact: { src: string };
  handleOnClick: () => void;
}

const DisenoHook = ({
  showHook,
  handleOnClick,
  btnContact,
}: DireccionHookProps) => {
  const h5Styles = "text-[#d85254] uppercase text-[120%] pb-2";

  return (
    <article
      className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      border-x-[5px] border-[#ee6226]
      ${showHook ? "max-h-[980px]" : "max-h-0 border-b-0 border-x-0"}
    `}
    >
      <div
        className="
      relative
      bg-[url('/backgrounds/FONDO_BLANCO.png')]  bg-no-repeat bg-cover py-3 border-b-2 border-[#ee6226]
      before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/15 before:to-transparent before:z-10
      transition-all duration-500 forward 
      "
      >
        <Image
          src={personaje.src}
          alt="Listado de Servicios"
          width={113}
          height={119}
          className="w-[14%] sm:w-[15%] md:w-[13%] mx-auto pt-3"
        />
        <ul className="text-center uppercase text-[#4d4d4d] font-extralight flex flex-col text-[10px] sm:text-[100%] gap-1 max-w-[70%]
         sm:gap-2 md:gap-5 lg:max-w-[50%] mx-auto pt-4 pb-13 sm:pb-23">
          <li>
            <h5 className={h5Styles}>-MARCA-</h5>
            <p>
              Branding y Rebranding + Brandboard (Contamos con mini brand y full
              brand).
            </p>
          </li>
          <li>
            <h5 className={h5Styles}>
              -Diseño comercial corporativo- (y para emprendedores)
            </h5>
            <p>
              Diseño de documentos (PDF’S)_ Infografías para explicar procesos o
              productos_ Catálogos digitales e impresos (productos o
              servicios)_Plantillas de presupuestos, cotizaciones y facturas con
              diseño corporativo.
            </p>
          </li>
          <li>
            <h5 className={h5Styles}>-DISEÑO PUBLICITARIO DIGITAL-</h5>
            <p>
              Banners digitales para web _ Piezas para email marketing (headers, firmas, plantillas de newsletter)._ Flyers digitales para lanzamientos/promociones.
            </p>
          </li>
          <li>
            <h5 className={h5Styles}>-DISEÑO EDITORIAL Y CORPORATIVO-</h5>
            <p>
              Diseño de ebooks o guías _ Diseños para informes anuales o reportes de gestión.
            </p>
          </li>
          <li>
            <h5 className={h5Styles}>-DISEÑOs para eventos y productos-</h5>
            <p>Merchandising (remeras, tazas, bolsas, stickers)_ Invitaciones corporativas digitales._ Stands y material POP (roll-ups, banners, cartelería).</p>
          </li>
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

export default DisenoHook;

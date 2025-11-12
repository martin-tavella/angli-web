import Image from "next/image";
import title from "@/public/ourServices/IMAGEN_TITULO.png";
import ServiceGridMobile from "./btnDisplay/mobile";
import ServiceGridDesktop from "./btnDisplay/desktop";


const OurServices = () => {
    return (
        <section id="servicios">
            <div className="relative bg-[url('/backgrounds/FONDO_BLANCO.png')] h-full flex-col items-center justify-center pb-20">
                <Image src={title.src} alt="Nuestros Servicios" width={1920} height={1080} className="mx-auto w-[53%] sm:w-[47%] md:w-[45%] lg:w-[40%] xl:w-[35%] max-w-[500px]  pt-15 sm:pt-18  md:pt-20"/>
                <p className="absolute top-10 right-4 sm:right-12 font-extralight text-[17px] sm:text-[20px] text-[#4D81C0]">_Servicios</p>
                <ServiceGridMobile />
                <ServiceGridDesktop />
            </div>
        </section>
    )
};
export default OurServices;
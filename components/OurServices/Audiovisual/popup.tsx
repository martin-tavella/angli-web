import Image from "next/image"
import imgPopup from "@/public/ourServices/AUDIOVISUAL/BARRA_POPUP.png"
import titulo from "@/public/ourServices/AUDIOVISUAL/TITULO.png"
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png"
import btnContact from "@/public/ourServices/AUDIOVISUAL/BOTON_CONTACTO.png"
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png"


const AudiovisualPopup = () => {
    return (
        <article className="bg- flex flex-row items-center rounded-3xl text-[#f7ecd5] max-w-[365px] mx-auto sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] overflow-hidden animate-popup">
            <Image src={imgPopup} width={533} height={1363} alt="Imagen Audiovisual" className="w-[18%] h-auto z-200 bg-[#4c80c0]"  />
            <div className="bg-[#4c80c0] h-[164px] sm:h-[284px] md:h-[343px] lg:h-[456px] pt-3 sm:pt-5 md:pt-7 lg:pt-10 animate-slide-in">
            <div className="relative flex justify-center flex-col gap-1 mb-2 sm:gap-4 sm:mb-4 lg:gap-5 z-150">
                <Image src={titulo.src}  width={1328} height={319} alt="Audiovisual" className="w-[50%] sm:w-[53%] mx-auto"/>
                <p className="text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] max-w-[80%] mx-auto text-center font-extralight">
                    Nos especializamos en crear contenido audiovisual de alta calidad para potenciar tu marca, fortalecer tu identidad y ayudarte a alcanzar tus objetivos.
                </p>
                <p className="text-[6px] sm:text-[10px] md:text-[13px] lg:text-[16px] uppercase max-w-[60%] text-center mx-auto font-extralight mb-1 sm:mb-1 lg:mb-3" >
                    Trabajamos juntos * escuchamos tus necesidades y expectativas * desarrollamos soluciones a medida que impacten visualmente.
                </p>
                <Image src={miscelanious.src}  width={2112} height={395} alt="miscelanio" className="w-[90%] sm:w-[95%] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-3"/>
                <button className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:right-25 md:right-42 md:-bottom-11 lg:-bottom-13 lg:right-[35%] cursor-pointer hover:scale-105 transition-transform duration-300">
                    <Image src={btnContact.src} alt="Contacto" width={392} height={113} className="w-[30%] max-h-[56px] sm:w-[50%] sm:max-h-[57px] md:w-[64%] md:max-h-[60px] lg:w-[74%] lg:max-h-[60px] "/>
                </button>
                <button className="absolute -bottom-5 -right-14 sm:-bottom-10 sm:-right-10 md:-bottom-11 md:-right-5 lg:-bottom-15 lg:right-1 cursor-pointer hover:scale-105 transition-transform duration-300">
                    <Image src={btnHook.src} alt="Contacto" width={211} height={193} className="w-[30%] max-h-[90px] sm:w-[45%] sm:max-h-[100px] md:w-[60%] md:max-h-[90px] lg:w-[80%] lg:max-h-[100px]" />
                </button>
            </div>
            </div>
        </article>
    )
};
export default AudiovisualPopup;

//
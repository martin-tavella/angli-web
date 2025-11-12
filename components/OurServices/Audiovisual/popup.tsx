import Image from "next/image"
import imgPopup from "@/public/ourServices/AUDIOVISUAL/BARRA_POPUP.png"
import titulo from "@/public/ourServices/AUDIOVISUAL/TITULO.png"
import miscelanious from "@/public/ourServices/AUDIOVISUAL/MISCELANEA.png"
import btnContact from "@/public/ourServices/AUDIOVISUAL/BOTON_CONTACTO.png"
import btnHook from "@/public/ourServices/AUDIOVISUAL/BOTON_AMPLIAR.png"


const AudiovisualPopup = () => {
    return (
        <article className="bg-[#4c80c0] flex flex-row items-center rounded-3xl xl:rounded-4xl text-[#f7ecd5] max-w-[365px] mx-auto sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1270px]">
            <Image src={imgPopup} width={533} height={1363} alt="Imagen Audiovisual" className="w-[22%] h-auto"  />
            <div className="relative flex justify-center flex-col gap-2 sm:gap-6 lg:gap-10 xl:gap-14">
                <Image src={titulo.src}  width={1328} height={319} alt="Audiovisual" className="w-[65%] sm:w-[70%] md:w-[75%] xl:w-[70%] mx-auto"/>
                <p className="text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] xl:text-[27px] max-w-[80%] mx-auto text-center font-extralight">
                    Nos especializamos en crear contenido audiovisual de alta calidad para potenciar tu marca, fortalecer tu identidad y ayudarte a alcanzar tus objetivos.
                </p>
                <p className="text-[6px] sm:text-[10px] md:text-[13px] lg:text-[16px] xl:text-[20px] uppercase max-w-[60%] text-center mx-auto font-extralight">
                    Trabajamos juntos * escuchamos tus necesidades y expectativas * desarrollamos soluciones a medida que impacten visualmente.
                </p>
                <Image src={miscelanious.src}  width={2112} height={395} alt="miscelanio" className="w-[90%] sm:w-[95%] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-3 xl:-bottom-13 xl:w-[93%] xl:right-6"/>
                <button className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:right-25 md:right-42 md:-bottom-11 lg:-bottom-13 lg:right-[35%] xl:-bottom-18 xl:right-[40.2%] cursor-pointer hover:scale-105 transition-all duration-300">
                    <Image src={btnContact.src} alt="Contacto" width={392} height={113} className="w-[30%] sm:w-[50%] md:w-[64%] lg:w-[74%] xl:w-[90%]"/>
                </button>
                <button className="absolute -bottom-5 -right-14 sm:-bottom-10 sm:-right-10 md:-bottom-11 md:-right-5 lg:-bottom-15 lg:right-1 xl:-bottom-19 xl:right-8 cursor-pointer hover:scale-105 transition-all duration-300">
                    <Image src={btnHook.src} alt="Contacto" width={211} height={193} className="w-[30%] sm:w-[45%] md:w-[60%] lg:w-[80%] xl:w-[93%]" />
                </button>
            </div>
        </article>
    )
};
export default AudiovisualPopup;

//
"use client"
import Image from "next/image";
import { manrope } from "@/utils/fonts/fonts";
import sticker1 from "@/public/ads/stickers/1.svg";
import sticker2 from "@/public/ads/stickers/2.svg";
import sticker3 from "@/public/ads/stickers/3.svg";
import sticker4 from "@/public/ads/stickers/4.svg";
import sticker5 from "@/public/ads/stickers/5.svg";
import sticker6 from "@/public/ads/stickers/6.svg";
import btn from "@/public/ads/HABLEMOS_NARANJA.png";
import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";

const services = [
  { title: "AUDIOVISUAL", sticker: sticker1, description: "Nos especializamos en crear contenido audiovisual de alta calidad para potenciar tu marca, fortalecer tu identidad y ayudarte a alcanzar tus objetivos." },
  { title: "GESTIÓN DE REDES", sticker: sticker2, description: "No se trata solo de publicar, sino de construir una presencia coherente, atractiva y constante que conecte con tu audiencia. Te ayudamos a potenciarte." },
  { title: "DIRECCIÓN DE ARTE", sticker: sticker3, description: "Aportamos coherencia estética y definimos materiales, colores y texturas para crear escenarios con concepto y una atmósfera única que refuerza la esencia de la producción." },
  { title: "DISEÑO GRÁFICO", sticker: sticker4, description: "Creamos piezas gráficas que potencian tu marca y logran que cada detalle hable por vos. No es estética, es comunicación clara y coherente." },
  { title: "CONSULTORÍAS", sticker: sticker5, description: "Servicio integral para empresas, marcas personales y emprendimientos que buscan ordenar y profesionalizar su estrategia digital sin delegar por completo la ejecución." },
  { title: "PAID MEDIA", sticker: sticker6, description: "Entendemos la pauta como el complemento ideal del contenido: solo la ofrecemos junto a nuestro plan mensual de redes para potenciar cada marca." },
];

const AdsOurServices = () => {
  return (
    <section className={`bg-[#f8f4eb] py-16 lg:py-24 ${manrope.className}`}>
      {/* Encabezado */}
      <div className="flex flex-col items-center mb-16 lg:mb-24">
        <Image src={star} width={40} height={40} alt="Estrella" className="rotate-30 mb-2" />
        <h2 className="text-[#4c80bf] text-3xl lg:text-5xl font-extrabold tracking-tight text-center">
          NUESTROS SERVICIOS
        </h2>
      </div>

      {/* --- VISTA DESKTOP (Grid Optimizado) --- */}
      <div className="hidden lg:grid grid-cols-3 gap-x-12 gap-y-24 max-w-[1250px] mx-auto px-10">
        {services.map((service, index) => (
          <article key={index} className="flex flex-col h-full">
            {/* 1. Contenedor de Sticker con altura fija para equilibrar la fila */}
            <div className={`h-[220px] w-full mb-8 flex items-center justify-center
                ${index == 1 || index == 3 || index == 5? "scale-130" : ""}
                `}>
              <Image 
                src={service.sticker} 
                alt={service.title} 
                width={220} 
                height={220} 
                className="object-contain hover:rotate-2 transition-transform duration-300" 
              />
            </div>

            {/* 2. Contenedor de Texto con min-height para que los botones se alineen */}
            <div className="flex flex-col flex-grow">
              <p className="text-[#707171] text-[1.05rem] leading-relaxed font-semibold mb-8 max-w-[340px] min-h-[100px]">
                {service.description}
              </p>

              {/* 3. Botón siempre al final del bloque de texto */}
              <button 
                className="w-fit hover:scale-105 transition-transform cursor-pointer mt-auto"
                onClick={() => window.open("http://wa.link/igfa2m")}
              >
                <Image 
                  src={btn} 
                  width={140} 
                  height={45} 
                  alt="Hablemos" 
                  className="w-32 lg:w-36"
                />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* --- VISTA MOBILE (Mantener igual o similar) --- */}
      <div className="flex flex-col gap-14 max-w-sm mx-auto lg:hidden px-4">
        {services.map((service, index) => (
          <article key={index} className="flex items-start gap-5">
            <div className="flex-shrink-0 w-28">
              <Image src={service.sticker} alt={service.title} width={120} height={120} className="object-contain" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#707171] text-sm leading-relaxed font-medium">
                {service.description}
              </p>
              <button onClick={() => window.open("http://wa.link/igfa2m")}>
                <Image src={btn} width={110} height={35} alt="Hablemos" className="w-28" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AdsOurServices;
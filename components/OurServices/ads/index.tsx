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
  {
    title: "AUDIOVISUAL",
    sticker: sticker1,
    description: "Nos especializamos en crear contenido audiovisual de alta calidad para potenciar tu marca, fortalecer tu identidad y ayudarte a alcanzar tus objetivos.",
  },
  {
    title: "GESTIÓN DE REDES",
    sticker: sticker2,
    description: "No se trata solo de publicar, sino de construir una presencia coherente, atractiva y constante que conecte con tu audiencia. Te ayudamos a potenciarte.",
  },
  {
    title: "DIRECCIÓN DE ARTE",
    sticker: sticker3,
    description: "Aportamos coherencia estética y definimos materiales, colores y texturas para crear escenarios con concepto y una atmósfera única que refuerza la esencia de la producción.",
  },
  {
    title: "DISEÑO GRÁFICO",
    sticker: sticker4,
    description: "Creamos piezas gráficas que potencian tu marca y logran que cada detalle hable por vos. No es estética, es comunicación clara y coherente.",
  },
  {
    title: "CONSULTORÍAS",
    sticker: sticker5,
    description: "Servicio integral para empresas, marcas personales y emprendimientos que buscan ordenar y profesionalizar su estrategia digital sin delegar por completo la ejecución.",
  },
  {
    title: "PAID MEDIA",
    sticker: sticker6,
    description: "Entendemos la pauta como el complemento ideal del contenido: solo la ofrecemos junto a nuestro plan mensual de redes para potenciar cada marca.",
  },
];

const AdsOurServices = () => {
  return (
    <section className={`bg-[#f8f4eb] py-16 px-6 lg:hidden ${manrope.className}`}>
      {/* Encabezado */}
      <div className="flex flex-col items-center mb-12">
        <Image src={star} width={30} height={30} alt="Estrella" className="mb-0 rotate-30" />
        <h2 className="text-[#4c80bf] text-3xl font-extrabold tracking-tight">
          NUESTROS SERVICIOS
        </h2>
      </div>

      {/* Lista de Servicios */}
      <div className="flex flex-col gap-12 max-w-md mx-auto">
        {services.map((service, index) => (
          <article key={index} className="flex items-start gap-4">
            {/* Sticker */}
            <div className="flex-shrink-0 w-32 sm:w-40">
              <Image
                src={service.sticker}
                alt={service.title}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>

            {/* Texto y Botón */}
            <div className="flex flex-col gap-3 pt-2">
              <p className="text-[#707171] text-sm sm:text-base leading-relaxed font-medium">
                {service.description}
              </p>
              
              <button 
                className="w-fit hover:scale-105 transition-transform cursor-pointer"
                onClick={() => window.open("http://wa.link/igfa2m")}
              >
                <Image 
                    src={btn} 
                    width={110} 
                    height={35} 
                    alt="Hablemos" 
                    className="w-24 sm:w-28"
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AdsOurServices;
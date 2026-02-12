"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { manrope } from "@/utils/fonts/fonts";
import Image from "next/image";
import btn from "@/public/ads/HABLEMOS_AZUL.png";
import collageMobile from "@/public/ads/COLLAGE_MOBILE.png";
import celu1 from "@/public/ads/CELU_1.png";
import celu2 from "@/public/ads/CELU_2.png";
import celu3 from "@/public/ads/CELU_3.png";
import collagePC from "@/public/ads/COLLAGE_PC.png";
import star from "@/public/ads/ESTRELLA_AZUL.png";
import fondo from "@/public/ads/FONDO_NARANJA.png"; // Tu fondo importado

const OurWork = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 70, damping: 20, restDelta: 0.001 };

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [80, -160]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [-60, 140]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [110, -160]), springConfig);

  return (
    <>
    <section
      ref={containerRef}
      // Quitamos bg-[#ee6226] para que se vea la imagen de fondo
      className={`relative w-full py-24 overflow-hidden ${manrope.className}`}
    >
      {/* BACKGROUND OPTIMIZADO */}
      <Image
        src={fondo}
        alt="background"
        fill
        priority
        quality={100}
        className="-z-20 object-cover" // -z-20 para que esté detrás de todo
      />

      <div className="relative z-10 flex flex-col items-center">
        <Image src={star} width={50} height={50} alt="Estrella" className="rotate-30 pb-2" />
        
        <h2 className="text-center text-[#f9f5ea] text-4xl font-extrabold mb-6 tracking-tight lg:text-5xl lg:mb-13">
          NUESTROS TRABAJOS
        </h2>

        <button 
          className="hover:scale-105 transition-transform mb-5 lg:mb-13 cursor-pointer"
          onClick={() => { window.open("http://wa.link/igfa2m") }}
        >
          <Image src={btn} width={160} height={45} alt="Hablemos" className="lg:w-45" />
        </button>

        {/* --- CONTENEDOR MOBILE --- */}
        <div className="relative w-[92%] max-w-[90%] sm:max-w-[94%] aspect-[3/4] lg:hidden">
          <div className="relative w-full h-full">
            <Image
              src={collageMobile}
              alt="Collage de trabajos"
              fill
              className="object-contain"
              priority
            />
          </div>

          <motion.div
            style={{ y: y1 }}
            className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[30%] sm:w-[25%] md:w-[28%] z-30 drop-shadow-2xl"
          >
            <Image src={celu1} alt="Trabajo principal" width={220} height={440} priority />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute top-[28%] -right-2 md:right-1 w-[38%] sm:w-[33%] md:w-[35%] md:scale-105 z-20 drop-shadow-xl"
          >
            <Image src={celu2} alt="Trabajo 2" width={200} height={400} />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="absolute bottom-[8%] -left-2 md:left-9 w-[38%] sm:w-[33%] md:scale-110 z-20 drop-shadow-xl"
          >
            <Image src={celu3} alt="Trabajo 3" width={180} height={360} />
          </motion.div>
        </div>

        {/* --- CONTENEDOR DESKTOP --- */}
        <div className="hidden lg:block relative w-full max-w-[1920px] mx-10 aspect-[21/9]">
          <div className="relative w-full h-full transform scale-105">
            <Image
              src={collagePC}
              alt="Nuestros Trabajos"
              fill
              className="object-contain"
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 1920px"
            />
          </div>

          <motion.div
            style={{ y: y1 }}
            className="absolute top-[3%] left-[23%] w-[14%] z-30 drop-shadow-2xl"
          >
            <Image src={celu1} alt="Celu PC 1" width={300} height={600} />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute top-[15%] right-[20%] w-[17%] z-20 drop-shadow-xl rotate-2"
          >
            <Image src={celu2} alt="Celu PC 2" width={280} height={560} />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="absolute top-[50%] left-[27%] w-[19%] z-20 drop-shadow-xl -rotate-10"
          >
            <Image src={celu3} alt="Celu PC 3" width={250} height={500} />
          </motion.div>
        </div>
      </div>
    </section>
    <div className="bg-[#4c80bf] h-2 w-full"></div>
    <div className="bg-[#ee6226] h-2 w-full"></div>
    <div className="bg-[#d95354] h-2 w-full -mb-1"></div>
    </>
  );
};

export default OurWork;
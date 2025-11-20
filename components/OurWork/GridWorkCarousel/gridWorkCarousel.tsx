"use client";
import collage1 from "@/public/ourWork/COLLAGE_1.png";
import collage2 from "@/public/ourWork/COLLAGE_2.png";
import collage3 from "@/public/ourWork/COLLAGE_3.png";
import collage4 from "@/public/ourWork/COLLAGE_4.png";
import collage5 from "@/public/ourWork/COLLAGE_5.png";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./breakpoints.css";
import Image from "next/image";

const gridImages = [collage1, collage2, collage3, collage4, collage5];



const GridWorkCarouselEmbla = () => {
  // Configura Autoplay para que se ejecute cada 5 segundos
  const autoplayOptions = { delay: 6000, stopOnInteraction: false }; 
  
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 100, // 500ms para el slide rápido
    },
    [Autoplay(autoplayOptions)]
  );

  // En el componente GridCarouselEmbla
  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor de Embla que actúa como viewport */}
      <div
        className="embla__viewport w-full h-[540px] sm:h-[700px] md:h-[800px] xl:h-[950px] overflow-hidden bg-[#d85554] before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10"
        ref={emblaRef}
      >
        {/* Contenedor interno de Embla que se desplaza */}
        <div className="embla__container flex h-full">
          {gridImages.map((imageSrc, index) => (
            // Cada imagen es un slide__slide
            <div className="embla__slide relative shrink-0 w-full h-full" key={index}>
              <Image
                src={imageSrc}
                alt={`Grilla de Trabajos ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                priority={index === 0}
                sizes="100vw"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridWorkCarouselEmbla;

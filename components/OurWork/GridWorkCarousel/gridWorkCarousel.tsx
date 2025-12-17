"use client";
import { useEffect } from "react"; // Importamos useEffect
import collage1 from "@/public/ourWork/COLLAGE_1.png";
import collage2 from "@/public/ourWork/COLLAGE_2.png";
import collage3 from "@/public/ourWork/COLLAGE_3.png";
import collage4 from "@/public/ourWork/COLLAGE_4.png";
import collage5 from "@/public/ourWork/COLLAGE_5.png";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./breakpoints.css";
import Image from "next/image";
import { useDotButton } from "@/hooks/useDotButton";

const gridImages = [collage1, collage2, collage3, collage4, collage5];

const GridWorkCarouselEmbla = () => {
  const autoplayOptions = { delay: 6000, stopOnInteraction: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30, // Reducimos un poco para mayor fluidez
    },
    [Autoplay(autoplayOptions)]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  // --- SOLUCIÓN AL BUG DE CARGA ---
  useEffect(() => {
    if (emblaApi) {
      // Forzamos a Embla a reconocer el tamaño real del contenedor
      // Esto soluciona que la imagen aparezca solo al abrir el inspector
      const timer = setTimeout(() => {
        emblaApi.reInit();
      }, 500); 
      
      return () => clearTimeout(timer);
    }
  }, [emblaApi]);

  const dotsToRender = scrollSnaps.length > 0 ? scrollSnaps : gridImages;

  return (
    <div className="relative w-full pb-11 sm:pb-14 before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10 bg-[#d85554]">
      <div className="relative w-full overflow-hidden">
        <div
          className="embla__viewport w-full h-[540px] sm:h-[700px] md:h-[800px] overflow-hidden bg-[#d85554] custom"
          ref={emblaRef}
        >
          <div className="embla__container flex h-full">
            {gridImages.map((imageSrc, index) => (
              <div
                className="embla__slide relative shrink-0 w-full h-full"
                key={index}
              >
                <Image
                  src={imageSrc}
                  alt={`Grilla de Trabajos ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  // Cambiamos a priority={true} para que Next.js no espere al scroll
                  // y las imágenes estén disponibles inmediatamente para Embla
                  priority={true} 
                  sizes="100vw"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {dotsToRender.length > 0 && (
        <div className="absolute bottom-4 sm:bottom-5 w-full z-20">
          <div className="flex justify-center mt-4">
            {dotsToRender.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && onDotButtonClick(index)}
                className={`
                  w-3 h-3 sm:w-3.5 sm:h-3.5 mx-1.5 rounded-full border-2 
                  transition-all duration-300 ease-in-out
                  ${index === selectedIndex
                    ? "bg-[#4d80be] border-[#4d80be] scale-110"
                    : "bg-[#4d80be] border-[#4d80be] opacity-50"}
                `}
                disabled={!emblaApi}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GridWorkCarouselEmbla;
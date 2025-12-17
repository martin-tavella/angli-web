"use client";
import { useEffect, useCallback } from "react"; // 1. Importar useEffect
import collage1 from "@/public/midsection/COLLAGE_1.png";
import collage2 from "@/public/midsection/COLLAGE_2.png";
import collage3 from "@/public/midsection/COLLAGE_3.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import boton1 from "@/public/midsection/BOTON_1.png";
import "./breakpoints.css";
import Image from "next/image";
import { useDotButton } from "@/hooks/useDotButton";

const gridImages = [collage1, collage2, collage3];

const GridCarouselEmbla = () => {
  const autoplayOptions = { delay: 6000, stopOnInteraction: true };
  
  // 2. Añadimos la opción 'watchSlides' para mejorar la detección
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30, // Un poco más rápido para evitar lag visual
    },
    [Autoplay(autoplayOptions)]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  // --- EL FIX PARA PRODUCCIÓN ---
  // Este efecto fuerza a Embla a recalcular todo apenas el navegador esté listo.
  // Es el equivalente manual a lo que sucede cuando abres la consola de Google.
  useEffect(() => {
    if (emblaApi) {
      const timer = setTimeout(() => {
        emblaApi.reInit(); // Recalcula dimensiones
      }, 500); // Un pequeño delay para asegurar que el CSS cargó
      return () => clearTimeout(timer);
    }
  }, [emblaApi]);

  const dotsToRender = scrollSnaps.length > 0 ? scrollSnaps : gridImages;

  return (
    <div className="relative w-full bg-[#4d80be] pb-9 sm:pb-14 before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10">
      
      <div className="relative block w-full overflow-hidden">
        <div className="embla__viewport w-full overflow-hidden bg-[#4d80be]" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {gridImages.map((imageSrc, index) => (
              <div
                className="relative shrink-0 w-full h-full max-w-[3000px]"
                key={`desktop-${index}`}
              >
                <Image
                  src={imageSrc}
                  alt={`Grilla de Trabajos ${index + 1}`}
                  style={{ objectFit: "contain" }}
                  className="img-grid h-full w-full"
                  // 3. Importante: Cargamos las 3 con prioridad o al menos la 1ra y 2da 
                  // para evitar que el Lazy Loading las esconda
                  priority={true} 
                  sizes="100vw"
                  quality={85} // Subimos un poco la calidad para que no se vea borroso al estirar
                />

                <button
                  className="btn-grid absolute bottom-[3%] right-[5%] h-20 sm:h-30 xl:h-30 z-[50] cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    window.location.href = "/#trabajos";
                  }}
                >
                  <Image
                    src={boton1}
                    alt="Ver Más"
                    className="w-25 md:w-35 lg:w-40"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {dotsToRender.length > 0 && (
        <div className="absolute bottom-3 sm:bottom-5 w-full z-20">
          <div className="flex justify-center mt-4">
            {dotsToRender.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && onDotButtonClick(index)}
                className={`
                  w-3 h-3 sm:w-3.5 sm:h-3.5 mx-1.5 rounded-full border-2 
                  transition-all duration-300 ease-in-out
                  ${index === selectedIndex
                    ? "bg-[#db4e54] border-[#db4e54] scale-110"
                    : "bg-[#db4e54] border-[#db4e54] opacity-50"}
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

export default GridCarouselEmbla;
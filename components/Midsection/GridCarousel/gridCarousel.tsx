"use client";
import collage1 from "@/public/midsection/COLLAGE_1.png";
import collage2 from "@/public/midsection/COLLAGE_2.png";
import collage3 from "@/public/midsection/COLLAGE_3.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import boton1 from "@/public/midsection/BOTON_1.png";
import "./breakpoints.css";
import Image from "next/image";
// Importamos el hook de los puntos de navegación
import { useDotButton } from "@/hooks/useDotButton";

const gridImages = [collage1, collage2, collage3];

const GridCarouselEmbla = () => {
  const autoplayOptions = { delay: 6000, stopOnInteraction: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    // Necesitamos emblaApi
    {
      loop: true,
      duration: 100,
    },
    [Autoplay(autoplayOptions)]
  );

  // Usamos el hook para obtener la lógica de los puntos
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // CLAVE: Determinar la lista de puntos a renderizar. Si scrollSnaps está vacío (antes de inicializar),
  // usamos la lista de imágenes para renderizar los placeholders.
  const dotsToRender = scrollSnaps.length > 0 ? scrollSnaps : gridImages;

  return (
    <div className="relative w-full bg-[#4d80be] pb-9 sm:pb-14 relative before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10">
      {/* Carrusel (Viewport) */}
      <div className="relative block w-full overflow-hidden">
        <div
          // CLAVE: El viewport actúa como el contenedor para el posicionamiento ABSOLUTO del botón
          // CLAVE: El fondo del carrusel es azul oscuro
          className="embla__viewport w-full overflow-hidden bg-[#4d80be] "
          ref={emblaRef}
        >
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
                  priority={index === 0}
                  sizes="100vw"
                  quality={75}
                />

                {/* Botón Ver Más */}
                <button
                  className="btn-grid absolute bottom-[3%] right-[5%] h-20 sm:h-30 xl:h-30 z-500 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    window.location.href = "/#trabajos";
                    console.log("Redirigiendo a Trabajos...");
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

      {/* --- PUNTOS DE NAVEGACIÓN (DOTS) --- */}
      {/* Eliminamos la dependencia de emblaApi. Solo necesitamos que dotsToRender tenga contenido. */}
      {dotsToRender.length > 0 && (
        <div className="absolute bottom-3 sm:bottom-5 w-full z-20">
          <div className="flex justify-center mt-4">
            {" "}
            {/* CLAVE: Fondo crema */}
            {dotsToRender.map((_, index) => (
              <button
                key={index}
                // Llamamos a la función de Embla, pero solo si la API está lista
                onClick={() => emblaApi && onDotButtonClick(index)}
                className={`
                w-3 h-3 sm:w-3.5 sm:h-3.5 mx-1.5 rounded-full border-2 
                transition-all duration-300 ease-in-out
                ${
                  index === selectedIndex
                    ? "bg-[#db4e54] border-[#db4e54] scale-110" // Activo: Relleno azul, borde azul
                    : "bg-[#db4e54] border-[#db4e54] opacity-50"
                } // Inactivo: Transparente, borde azul
              `}
                // Deshabilitamos el botón si la API aún no está lista para evitar errores
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

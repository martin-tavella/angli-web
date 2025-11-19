"use client";
import collage1 from "@/public/midsection/COLLAGE_1.png";
import collage2 from "@/public/midsection/COLLAGE_2.png";
import collage3 from "@/public/midsection/COLLAGE_3.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import boton1 from "@/public/midsection/BOTON_1.png";
import "./breakpoints.css";
import Image from "next/image";

const gridImages = [collage1, collage2, collage3];

const GridCarouselEmbla = () => {
  const autoplayOptions = { delay: 6000, stopOnInteraction: false };
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 100,
    },
    [Autoplay(autoplayOptions)]
  );

  // Clases de posicionamiento del botón (simplificadas)

  return (
    <div className="relative w-full">
      {/* 2. VISTA ESCRITORIO (CARROUSEL/EMBLA) - Oculto hasta md */}
      <div className="relative block w-full overflow-hidden">
        <div
          // CLAVE: Convertimos el viewport en RELATIVE para posicionar el botón.
          className="embla__viewport w-full overflow-hidden bg-[#4d80be] relative before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10"
          ref={emblaRef}
        >
          <div className="embla__container flex h-full">
            {gridImages.map((imageSrc, index) => (
              <div
                className="relative shrink-0 w-full h-full max-w-[1777px]"
                key={`desktop-${index}`}
              >
                <Image
                  src={imageSrc}
                  alt={`Grilla de Trabajos ${index + 1}`}
                  style={{ objectFit: "contain" }}
                  className="img-grid h-full w-full"
                  priority={index === 0} // Prioriza la primera imagen
                  sizes="100vw"
                  quality={85}
                />
                <button className="btn-grid absolute bottom-[3%] right-[5%] h-20 sm:h-30 xl:h-30 z-20 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <Image src={boton1} alt="Ver Más" className="w-25 md:w-35 lg:w-40" />
            </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCarouselEmbla;

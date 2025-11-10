"use client";
import collage1 from "@/public/midsection/COLLAGE_1.png";
import collage2 from "@/public/midsection/COLLAGE_2.png";
import collage3 from "@/public/midsection/COLLAGE_3.png";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import boton1 from "@/public/midsection/BOTON_1.png";
import "./breakpoints.css";

// Asegúrate de que las rutas de tus imágenes sean correctas
// const workImages = [...]

const gridImages = [collage1.src, collage2.src, collage3.src];



const GridCarouselEmbla = () => {
  // Configura Autoplay para que se ejecute cada 5 segundos
  const autoplayOptions = { delay: 6000, stopOnInteraction: false }; 
  
  // Inicializa Embla con el plugin de Autoplay
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    duration: 100 // 500ms para el slide rápido
  }, [Autoplay(autoplayOptions)]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor de Embla que actúa como viewport */}
      <div className="embla__viewport w-full h-[650px] carousel-container overflow-hidden" ref={emblaRef}>
        {/* Contenedor interno de Embla que se desplaza */}
        <div className="embla__container flex h-full">
          {gridImages.map((imageSrc, index) => (
            // Cada imagen es un slide__slide
            <div className="embla__slide shrink-0 w-full h-full" key={index}>
              <img
                src={imageSrc}
                alt={`Grilla de Trabajos ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Botón "Ver Más" - se mantiene con position absolute fuera del carrusel */}
      <button className="absolute bottom-10 right-10 z-20 cursor-pointer">
        <img src={boton1.src} alt="Ver Más" className="w-40"/>
      </button>
    </div>
  );
};

export default GridCarouselEmbla;

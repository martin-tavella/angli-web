"use client";
import collage1 from "@/public/OurWork/COLLAGE_1.png";
import collage2 from "@/public/OurWork/COLLAGE_2.png";
import collage3 from "@/public/OurWork/COLLAGE_3.png";
import collage4 from "@/public/OurWork/COLLAGE_4.png";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import boton1 from "@/public/midsection/BOTON_1.png";
import "./breakpoints.css";

// Asegúrate de que las rutas de tus imágenes sean correctas
// const workImages = [...]

const gridImages = [collage1.src, collage2.src, collage3.src, collage4.src];



const GridWorkCarouselEmbla = () => {
  // Configura Autoplay para que se ejecute cada 5 segundos
  const autoplayOptions = { delay: 6000, stopOnInteraction: false }; 
  
  // Inicializa Embla con el plugin de Autoplay
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    duration: 100 // 500ms para el slide rápido
  }, [Autoplay(autoplayOptions)]);

  // En el componente GridCarouselEmbla
return (
  <div className="relative w-full overflow-hidden">
    {/* Contenedor de Embla que actúa como viewport */}
    <div 
      // CLAVE 1: Usar una altura fija/responsiva que se ajuste bien a la proporción (ej: h-[600px] en móvil, xl:h-[950px] en desktop)
      // CLAVE 2: Asegúrate de que el contenedor no tenga un aspect-ratio que lo fuerce
      className="embla__viewport w-full h-[600px] xl:h-[950px] grid-cont overflow-hidden bg-[#d85554]" 
      ref={emblaRef}
    >
      {/* Contenedor interno de Embla que se desplaza */}
      <div className="embla__container flex h-full">
        {gridImages.map((imageSrc, index) => (
          // Cada imagen es un slide__slide
          <div className="embla__slide shrink-0 w-full h-full" key={index}>
            <img
              src={imageSrc}
              alt={`Grilla de Trabajos ${index + 1}`}
              // CLAVE 4: object-contain para no recortar la imagen
              className="w-full h-full object-contain" 
            />
          </div>
        ))}
      </div>
    </div>

  </div>
);
};

export default GridWorkCarouselEmbla;

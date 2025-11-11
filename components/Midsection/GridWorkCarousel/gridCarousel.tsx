"use client";
import collage1 from "@/public/midsection/COLLAGE_1.png";
import collage2 from "@/public/midsection/COLLAGE_2.png";
import collage3 from "@/public/midsection/COLLAGE_3.png";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import boton1 from "@/public/midsection/BOTON_1.png";
import "./breakpoints.css";

const gridImages = [collage1.src, collage2.src, collage3.src];




const GridCarouselEmbla = () => {
    // ... setup de Embla (si lo mantienes para el modo desktop) ...
    const [emblaRef] = useEmblaCarousel({ /* ... */ }, [Autoplay({ /* ... */ })]); 

    return (
        <div className="relative w-full">
            {/* 1. VISTA MÓVIL (PILA VERTICAL) - Visible hasta md */}
            <div className="md:hidden flex flex-col items-center">
                {gridImages.map((imageSrc, index) => (
                    <img
                        key={`mobile-${index}`}
                        src={imageSrc}
                        alt={`Grilla de Trabajos ${index + 1}`}
                        className="w-full h-full object-cover shadow-lg"
                    />
                ))}
            </div>

            {/* 2. VISTA ESCRITORIO (CARROUSEL/EMBLA) - Oculto hasta md */}
            <div className="hidden md:block w-full overflow-hidden">
                <div 
                    className="embla__viewport w-full grid-cont overflow-hidden bg-[#4d80be]" 
                    ref={emblaRef}
                >
                    <div className="embla__container flex h-full">
                        {gridImages.map((imageSrc, index) => (
                            <div className="embla__slide shrink-0 w-full h-full" key={`desktop-${index}`}>
                                <img
                                    src={imageSrc}
                                    alt={`Grilla de Trabajos ${index + 1}`}
                                    // Usamos object-contain para no cortar, aunque pueda haber franjas
                                    className="w-full h-full object-contain" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
               {/* Botón Ver Más para Desktop */}
                <button className="absolute md:hidden bottom-0 right-0 lg:bottom-10 lg:right-10 z-50 cursor-pointer">
                    <img src={boton1.src} alt="Ver Más" className="w-28 md:w-32 lg:w-40"/>
                </button>

                {/* Botón Ver Más para Desktop */}
                <button className="absolute bottom-3 right-4 md:bottom-6 md:right-6 lg:bottom-10 lg:right-10 z-20 cursor-pointer">
                    <img src={boton1.src} alt="Ver Más" className="w-28 md:w-32 lg:w-40"/>
                </button>
            </div>
        </div>
    );
};

export default GridCarouselEmbla;
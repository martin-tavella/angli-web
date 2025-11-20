"use client"

import Autoplay from 'embla-carousel-autoplay';
import chunkAndPadClients from './utils/clientSlides';

import useEmblaCarousel from 'embla-carousel-react';
import "./breakpoints.css";
import { useEffect, useState } from 'react';
import { Client } from './utils/client.type';
import useWindowWidth from '@/hooks/useWindowWidth';

const ClientGrids = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [clientSlides, setClientSlides] = useState<any[]>([])
    const windowWidth = useWindowWidth()

    useEffect(()=> {
        if (windowWidth > 1023) {
            setClientSlides(chunkAndPadClients(15))
        } else if (windowWidth < 640){
            setClientSlides(chunkAndPadClients(9))
        } 
        else {
            setClientSlides(chunkAndPadClients(12))
        }
    },[windowWidth, chunkAndPadClients])
    // Configuración para que el carrusel tenga paginación con flechas (si las quieres agregar)
    const autoplayOptions = { delay: 5000, stopOnInteraction: false }; 
      
      // Inicializa Embla con el plugin de Autoplay
      const [emblaRef] = useEmblaCarousel({ 
        loop: true,
        duration: 100 // 500ms para el slide rápido
      }, [Autoplay(autoplayOptions)]);

    return (
       <section className="pt-12 pb-20 rounded-t-[50px] overflow-hidden">
            <div className="client-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Contenedor del Carrusel (Embla Viewport) */}
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                        
                        {clientSlides.map((slideClients: Client[], slideIndex: number) => (
                            <div key={slideIndex} className="embla__slide shrink-0 w-full min-w-0">
                                <div 
                                    // CLAVE: Definición Responsiva de la Grilla (3 columnas en móvil, 5 en desktop)
                                    className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 
                                               gap-y-0 gap-x-0 sm:gap-x-4 lg:gap-y-12 lg:gap-x-6 
                                               justify-items-center items-center h-[370px] sm:h-[490px]"
                                >
                                    {slideClients.map((client: Client, logoIndex: number) => (
                                        // CLAVE: max-w se ajusta para no forzar el tamaño de la grilla
                                        <div key={logoIndex} className="w-full max-w-[120px] sm:max-w-[140px] flex justify-center items-center px-2">
                                            
                                            {client.isPlaceholder ? (
                                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full">
                                                    {/* Círculo azul */}
                                                </div>
                                            ) : (
                                                <img
                                                    src={client.logo!}
                                                    alt={client.name}
                                                    // Max-height también debe ser responsivo o simplemente max-h-full
                                                    className="w-full h-auto object-contain max-h-[100px] sm:max-h-[120px] transition-transform duration-300 hover:scale-105"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientGrids;
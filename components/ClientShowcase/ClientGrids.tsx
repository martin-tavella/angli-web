"use client"

import Autoplay from 'embla-carousel-autoplay';
import { clientSlides } from './utils/clientSlides';

import useEmblaCarousel from 'embla-carousel-react';
import "./breakpoints.css";

const ClientGrids = () => {
    // Configuración para que el carrusel tenga paginación con flechas (si las quieres agregar)
    const autoplayOptions = { delay: 6000, stopOnInteraction: false }; 
      
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
                    
                    {clientSlides.map((slideClients, slideIndex) => (
                        <div key={slideIndex} className="embla__slide shrink-0 w-full min-w-0">
                            <div 
                                className="grid grid-cols-5 gap-y-12 gap-x-6 justify-items-center items-center p-4 
                                           h-full"
                            >
                                {/* Mapea los 10 logos (o placeholders) dentro de la diapositiva */}
                                {slideClients.map((client, logoIndex) => (
                                    <div key={logoIndex} className="w-full max-w-[200px] h-full flex justify-center items-center p-2">
                                        
                                        {/* LÓGICA DE RENDERING CONDICIONAL */}
                                        {client.isPlaceholder ? (
                                            // Renderiza el círculo azul con borde
                                            <div className="w-[140px] h-[140px] border border-blue-500 rounded-full">
                                                {/* Este div representa el círculo azul que viste en la imagen */}
                                            </div>
                                        ) : (
                                            // Renderiza el logo real
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className="w-full h-auto object-contain max-h-[140px] transition-transform duration-300 hover:scale-105"
                                            />
                                        )}
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                {/* Botón "Ver Más" fuera del carrusel */}
                <div className="text-center mt-12 flex justify-end">
                   {/* Botón "Ver Más" simulado */}
                   <button className="cursor-pointer hover:scale-108 transition-transform duration-300">
                      <img src="/midsection/BOTON_1.png" alt="Ver Más" className="w-45"/>
                   </button>
                </div>
            </div>
        </section>
    );
};

export default ClientGrids;
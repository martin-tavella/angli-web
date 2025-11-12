const ServiceGridDesktop = () => {
    
    // Asumo que tienes un array con las 6 rutas de tus imágenes de servicio COMPLETAS (397x999)
    const servicesImages = [
        "/ourServices/btnDesktop/AUDIOVISUAL.png", // Imagen 1
        "/ourServices/btnDesktop/DIRECCION.png", // Imagen 2
        "/ourServices/btnDesktop/DISENO.png", // Imagen 3
        "/ourServices/btnDesktop/GESTION.png", // Imagen 4
        "/ourServices/btnDesktop/PAID.png", // Imagen 5
        "/ourServices/btnDesktop/CONSULTORIAS.png", // Imagen 6
    ];

    return (
        <div className={`hidden lg:block py-16 md:py-24 px-4 sm:px-6`}>
            
            {/* Contenedor de la Grilla (Centrado y limitado) */}
            <div className="lg:max-w-6xl xl:max-w-7xl mx-auto">
                
                {/* Estructura de la Grilla: Fija en 6 columnas para escritorio */}
                <div 
                    className="grid grid-cols-6 
                             lg:gap-3 xl:gap-5" 
                >
                    {servicesImages.map((imageSrc, index) => (
                        <div 
                            key={index}
                            // CLAVE: Usamos la proporción exacta 397/999 (aprox. 1/2.5)
                            className="group overflow-hidden
                                       aspect-[397/999] sm:aspect-[397/999] transition-transform duration-500 hover:scale-105 cursor-pointer" 
                        >
                            <img
                                src={imageSrc}
                                alt={`Servicio ${index + 1}`}
                                // object-cover para que la imagen llene el área de la celda
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceGridDesktop;
const ServiceGridMobile = ({
  setPopupVisible,
}: {
  setPopupVisible: (popup: string | null) => void;
}) => {
  // Asumo que tienes un array con las rutas de tus 6 imágenes de servicio COMPLETAS
  const servicesImages = [
    "/ourServices/btnMobile/AUDIOVISUAL.png", // Imagen 1 (Completa)
    "/ourServices/btnMobile/DIRECCION.png", // Imagen 2 (Completa)
    "/ourServices/btnMobile/DISENO.png", // Imagen 3 (Completa)
    "/ourServices/btnMobile/GESTION.png", // Imagen 4 (Completa)
    "/ourServices/btnMobile/PAID.png", // Imagen 5 (Completa)
    "/ourServices/btnMobile/CONSULTORIAS.png", // Imagen 6 (Completa)
  ];

  const popups = [
    "audiovisual",
    "direccion",
    "diseno",
    "redes",
    "paid",
    "consultorias",
  ];

  return (
    <div className={`pb-20 pt-10 md:pb-25 md:pt-15 px-4 sm:px-6 lg:hidden`}>
      {/* Contenedor de la Grilla (Centrado y limitado) */}
      <div className="max-w-6xl mx-auto">
        {/* Estructura de la Grilla: CLAVE - Fija en 2 columnas para todos los tamaños */}
        <div
          // Fija la grilla a 2 columnas en móvil y tablet
          className="grid grid-cols-3 
                               gap-1 sm:gap-3 md:gap-5"
        >
          {servicesImages.map((imageSrc, index) => (
            <div
              key={index}
              onClick={() => {
                setPopupVisible(popups[index]);
              }}
              // Las imágenes son 854x1201 (rectangulares verticales)
              className="group overflow-hidden rounded-xl shadow-lg 
                                       aspect-[4/5] sm:aspect-[4/5]"
            >
              <img
                src={imageSrc}
                alt={`Servicio ${index + 1}`}
                // object-cover para que la imagen llene el área de la celda
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGridMobile;

/* eslint-disable @next/next/no-img-element */
import angli from "@/public/hero/hero-angli.png";
import draw1 from "@/public/hero/hero-draw-1.png";
import draw2 from "@/public/hero/hero-draw-2.png";
import draw3 from "@/public/hero/hero-draw-3.png";

const Hero = () => {
  return (
    //     <section className="min-w-full h-screen bg-[url('/backgrounds/FONDO_BLANCO.png')] bg-no-repeat bg-cover">

    //     {/* Contenedor Flex Principal: Centra todo el contenido */}
    //     <div className="flex justify-center items-center flex-col h-full
    //                     p-4 sm:p-8"> {/* Añadimos padding responsivo */}

    //         {/* Logo (Angli Estudio) */}
    //         <div className="mb-8 sm:mb-12 lg:mb-16"> {/* Usamos mb- responsivo */}
    //             <img
    //                 src={angli.src}
    //                 alt="Angli Estudio"
    //                 // CLAVE 1: Max-width más pequeño en móvil (sm:max-w-xl)
    //                 className="w-full h-auto max-w-sm sm:max-w-lg lg:max-w-xl"
    //             />
    //         </div>

    //         {/* Caricaturas (Contenedor Horizontal) */}
    //         <div className="flex justify-center items-end
    //                         gap-4 sm:gap-8 md:gap-12
    //                         px-2 sm:px-4 lg:px-0 flex-nowrap w-full max-w-2xl">

    //             {/* 1. Computadora/TV */}
    //             <img
    //                 src={draw1.src}
    //                 alt="TV Caricatura"
    //                 // CLAVE 2: Tamaño ajustado para ser responsivo dentro de su espacio
    //                 className="w-1/3 max-w-[80px] sm:max-w-[120px]"
    //             />

    //             {/* 2. Cámara (Más grande) */}
    //             <img
    //                 src={draw2.src}
    //                 alt="Camara y Reel Caricatura"
    //                 className="w-1/3 max-w-[150px] sm:max-w-[200px]"
    //             />

    //             {/* 3. Calendario */}
    //             <img
    //                 src={draw3.src}
    //                 alt="Calendario Caricatura"
    //                 className="w-1/3 max-w-[80px] sm:max-w-[120px]"
    //             />
    //         </div>
    //     </div>
    // </section>
    <section className="mx-auto h-full bg-[url('/backgrounds/FONDO_BLANCO.png')] pt-24 sm:pt-28">
      <video
        autoPlay
        loop
        muted
        playsInline // CRUCIAL para móviles
        poster="/videos/hero_placeholder.jpg" // Imagen estática mientras carga el video
        className="inset-0 w-full h-full object-cover z-0  mx-auto min-w-screen min-h-[62vw]  sm:max-w-[640px] lg:min-w-auto max-w-[375px] lg:max-w-5xl lg:min-h-[628px]"
      >
        {/* Usar WebM primero por ser más ligero */}
        <source src="/hero/animacion.webm" type="video/webm" />
        {/* Fallback a MP4 */}
        <source src="/hero/animacion.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </section>
  );
};

export default Hero;

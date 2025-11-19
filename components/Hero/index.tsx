import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative mx-auto h-full pt-24 sm:pt-28">
      <Image
        src="/backgrounds/FONDO_BLANCO.png"
        alt="Fondo de la sección principal"
        fill
        style={{ objectFit: "cover" }}
        className="-z-10"
        quality={75}
        priority
      />
      <video
        autoPlay
        loop
        muted
        playsInline // CRUCIAL para móviles
        className="relative inset-0 w-full h-full object-cover z-0 mx-auto min-w-screen min-h-[62vw] sm:max-w-[640px] lg:min-w-auto max-w-[375px] lg:max-w-5xl lg:min-h-[628px]"
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

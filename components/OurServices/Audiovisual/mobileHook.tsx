import Image from "next/image";
import imgHook from "@/public/ourServices/AUDIOVISUAL/PLACA_COMPLETA.png";

interface AudiovisualHookProps {
  showMobileHook: boolean;
  btnContact: { src: string };
  handleOnClick: () => void;
}

const AudiovisualMobileHook = ({
  showMobileHook,
  handleOnClick,
  btnContact,
}: AudiovisualHookProps) => {
  return (
    <article
      className={`
      lg:max-w-[1010px] mx-auto rounded-b-3xl
      transition-all duration-800 ease-in-out overflow-hidden
      border-x-[5px] border-[#4d81c0]
      ${showMobileHook ? "max-h-[1100px]" : "max-h-0 border-b-0 border-x-0"}
    `}
    >
      <div
        className={`
      relative
      bg-[url('/backgrounds/FONDO_BLANCO.png')]
      before:absolute before:top-0 before:left-0 before:w-full before:h-15 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-15 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-10 
      transition-all duration-500 forward
      ${showMobileHook ? "py-8" : "py-0"}
      `}
      >
        <Image
          src={imgHook.src}
          alt="Placa de equipo"
          width={2358}
          height={1315}
          className="w-[90%] mx-auto"
        />
      </div>
    </article>
  );
};

export default AudiovisualMobileHook;

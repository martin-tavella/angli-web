import { useEffect } from "react";
import AudiovisualPopup from "./Audiovisual/desktop/popup";
import DireccionPopup from "./DireccionDeArte/desktop/popup";
import DisenoGraficoPopup from "./DIsenoGrafico/desktop/popup";
import RedesSocialesPopup from "./RedesSociales/desktop/popup";
import PaidPopup from "./PaidMedia/desktop/popup";
import ConsultoriasPopup from "./Consultorias/desktop/popup";
import useWindowWidth from "@/hooks/useWindowWidth";
import "./slideIn.css"
import AudiovisualMobilePopup from "./Audiovisual/mobile/mobilePopup";
import DireccionMobilePopup from "./DireccionDeArte/mobile/mobilePopup";
import DisenoMobilePopup from "./DIsenoGrafico/mobile/mobilePopup";
import RedesMobilePopup from "./RedesSociales/mobile/mobilePopup";
import PaidMobilePopup from "./PaidMedia/mobile/mobilePopup";
import ConsultoriasMobilePopup from "./Consultorias/mobile/mobilePopup";

interface ModalWrapperProps {
  popupVisible: string | null;
  onClose: () => void;
}

const ModalWrapper = ({ popupVisible, onClose }: ModalWrapperProps) => {
  useEffect(() => {
    if (popupVisible) {
      // Bloquea el scroll de la página cuando el popup está visible
      document.body.style.overflow = "hidden";
    } else {
      // Restaura el scroll cuando el popup está cerrado
      document.body.style.overflow = "unset"; // 'unset' es más seguro que 'auto'
    }

    // Cleanup function: Asegura que el scroll se restablezca si el componente se desmonta
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [popupVisible]);

  const width = useWindowWidth()

  if (popupVisible === null) return null;
  const getPopup = () => {
    switch (popupVisible) {
      case "audiovisual":
        if (width <= 1023) return <AudiovisualMobilePopup onClose={onClose} />
        else return <AudiovisualPopup />;
      case "direccion":
         if (width <= 1023) return <DireccionMobilePopup onClose={onClose} />
         else return <DireccionPopup />;
      case "diseno":
        if (width <= 1023) return <DisenoMobilePopup onClose={onClose} />
         else return <DisenoGraficoPopup />;
      case "redes":
        if (width <= 1023) return <RedesMobilePopup onClose={onClose} />
        else return <RedesSocialesPopup />;
      case "paid":
        if (width <= 1023) return <PaidMobilePopup onClose={onClose} />
        else return <PaidPopup />;
      case "consultorias":
        if (width <= 1023) return <ConsultoriasMobilePopup onClose={onClose} />
       else return <ConsultoriasPopup />;
      default:
        break;
    }
  };

  return (
    // Contenedor principal: Fijo, cubre toda la pantalla (el Overlay)
    // CLAVE: backdrop-blur-sm para un efecto moderno
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto
                 bg-black/20 backdrop-blur-xs p-4"
    >
      {/* Overlay para cerrar al hacer clic fuera del popup */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Contenido del Popup (tu componente AudiovisualPopup) 
          Añadimos z-20 para asegurar que esté encima del overlay
      */}
      <div className={`${width <= 1023 ? "": "max-w-[365px] sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] z-20"}`}>
        {getPopup()}
      </div>
    </div>
  );
};

export default ModalWrapper;

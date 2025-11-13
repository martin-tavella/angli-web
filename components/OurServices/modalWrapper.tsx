import { useEffect } from "react";
import AudiovisualPopup from "./Audiovisual/popup";
import DireccionPopup from "./DireccionDeArte/popup";
import DisenoGraficoPopup from "./DisenoGrafico/popup";
import RedesSocialesPopup from "./RedesSociales/popup";
import PaidPopup from "./PaidMedia/popup";
import ConsultoriasPopup from "./Consultorias/popup";

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

  if (popupVisible === null) return null;
  const getPopup = () => {
    switch (popupVisible) {
      case "audiovisual":
        return <AudiovisualPopup />;
      case "direccion":
        return <DireccionPopup />;
      case "diseno":
        return <DisenoGraficoPopup />;
      case "redes":
        return <RedesSocialesPopup />;
      case "paid":
        return <PaidPopup />;
      case "consultorias":
        return <ConsultoriasPopup />;
      default:
        break;
    }
  };

  return (
    // Contenedor principal: Fijo, cubre toda la pantalla (el Overlay)
    // CLAVE: backdrop-blur-sm para un efecto moderno
    <div
      className="fixed inset-0 z-100 flex items-center justify-center 
                 bg-black/20 backdrop-blur-xs"
    >
      {/* Overlay para cerrar al hacer clic fuera del popup */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Contenido del Popup (tu componente AudiovisualPopup) 
          Añadimos z-20 para asegurar que esté encima del overlay
      */}
      <div className="max-w-[365px] sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1270px] z-20">
        {getPopup()}
      </div>
    </div>
  );
};

export default ModalWrapper;

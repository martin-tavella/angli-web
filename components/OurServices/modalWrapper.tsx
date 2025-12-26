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
  const width = useWindowWidth();

  useEffect(() => {
    if (popupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [popupVisible]);

  if (!popupVisible) return null;

  const getPopup = () => {
    const isMobile = width <= 1023;
    
    switch (popupVisible) {
      case "audiovisual":
        return isMobile ? <AudiovisualMobilePopup onClose={onClose} /> : <AudiovisualPopup />;
      case "direccion":
        return isMobile ? <DireccionMobilePopup onClose={onClose} /> : <DireccionPopup />;
      case "diseno":
        return isMobile ? <DisenoMobilePopup onClose={onClose} /> : <DisenoGraficoPopup />;
      case "redes":
        return isMobile ? <RedesMobilePopup onClose={onClose} /> : <RedesSocialesPopup />;
      case "paid":
        return isMobile ? <PaidMobilePopup onClose={onClose} /> : <PaidPopup />;
      case "consultorias":
        return isMobile ? <ConsultoriasMobilePopup onClose={onClose} /> : <ConsultoriasPopup />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/20 backdrop-blur-xs p-4">
      <div className="absolute inset-0" onClick={onClose} />

      <div className={`${width <= 1023 ? "" : "max-w-[365px] sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1010px] z-20"}`}>
        {getPopup()}
      </div>
    </div>
  );
};

export default ModalWrapper;
import AudiovisualPopup from "./Audiovisual/popup";

interface ModalWrapperProps {
    popupVisible:
    | "audiovisual"
    | "consultorias"
    | "direccion"
    | "diseno"
    | "gestion"
    | "paid"
    | null;
    onClose: () => void;
}

const ModalWrapper = ({ popupVisible, onClose }: ModalWrapperProps) => {
  if (popupVisible === null) return null;
  const getPopup = () => {
    switch (popupVisible) {
      case "audiovisual":
        return <AudiovisualPopup />;
        default:
            break;
    }
  }

  return (
    // Contenedor principal: Fijo, cubre toda la pantalla (el Overlay)
    // CLAVE: backdrop-blur-sm para un efecto moderno
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center 
                 bg-black/20 backdrop-blur-xs"
    >
      {/* Overlay para cerrar al hacer clic fuera del popup */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
      />
      
      {/* Contenido del Popup (tu componente AudiovisualPopup) 
          Añadimos z-20 para asegurar que esté encima del overlay
      */}
        {getPopup()}
    </div>
  );
};

export default ModalWrapper;
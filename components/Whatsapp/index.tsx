"use client"
import Image from "next/image";
import wpp from "@/public/wpp/btn-wpp.png";

const WhatsappBubble = () => {
  return (
    <button className="fixed bottom-5 sm:right-10 right-5 z-50 cursor-pointer hover:scale-105 transition-transform duration-200"
    onClick={
        () => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'click_whatsapp'
            });
            window.open("http://wa.link/igfa2m")
        }
    }
    >
      <Image
        src={wpp.src}
        width={500}
        height={500}
        alt="Botón Whatsapp"
        className="size-18 sm:size-25"
      />
    </button>
  );
};

export default WhatsappBubble;

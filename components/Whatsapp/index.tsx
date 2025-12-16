"use client"
import Image from "next/image";
import wpp from "@/public/wpp/btn-wpp.png";

const WhatsappBubble = () => {
  return (
    <button className="fixed bottom-5 sm:right-10 right-5 z-50 cursor-pointer hover:scale-105 transition-transform duration-200"
    onClick={
        () => {
            window.open("https://wa.link/bw0sqj")
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

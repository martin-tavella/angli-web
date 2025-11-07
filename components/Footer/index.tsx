/* eslint-disable @next/next/no-img-element */
import { manrope, vintageRotter } from "@/utils/fonts/fonts";
import stickerAngli from "@/public/footer/STICKER_ANGLI.png";
import comillas from "@/public/footer/COMILLAS.png";
import logoInstagram from "@/public/footer/LOGO_INSTAGRAM.png";
import logoBehance from "@/public/footer/LOGO_BEHANCE.png";
import logoMail from "@/public/footer/LOGO_MAIL.png";
import logoWhatsapp from "@/public/footer/LOGO_WHATSAPP.png";
import angliBlanco from "@/public/footer/ANGLI_BLANCO.png";
import copy from "@/public/footer/COPY.png";
import "./custom.css";

const Footer = () => {
  return (
    <footer>
      <div
        className={`relative bg-[url('/backgrounds/FONDO_AZUL.png')] bg-cover bg-center w-full flex justify-center items-center py-10 px-5  text-[#f7ecd5] ${manrope.className}`}
      >
        <p className="absolute top-10 right-12 font-extralight text-[20px] text-[#f7ecd5]">
          _Hablemos
        </p>
        <div className="flex flex-col gap-10 max-w-[1200px] mx-auto contact-container py-20">
          <div className="flex justify-between gap-60 items-center">
            <img
              src={stickerAngli.src}
              alt="Sticker Angli Estudio"
              className="w-[40%]"
            />
            <div className="max-w-[600px] flex text-[22px] leading-7 gap-3 font-extralight">
              <img src={comillas.src} alt="Comilla" className="w-5 h-5" />
              Escribinos a nuestros números de WhatsApp, conversemos lo que
              necesita tu marca, armamos un presupuesto personalizado ¡Y
              comenzamos a trabajar juntos!
              <div className="w-full flex items-end">
                <img
                  src={comillas.src}
                  alt="Comilla"
                  className="rotate-180 w-5 h-5"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-60">
            <div>
              <h4 className={`${vintageRotter.className} text-[75px]`}>
                Conocenos
              </h4>
              <ul>
                <li>
                  <a className="flex gap-3 items-center">
                    <img
                      src={logoInstagram.src}
                      alt="Logo Instagram"
                      className="w-15 h-15"
                    />{" "}
                    @angliestudio
                  </a>
                </li>
                <li>
                  <a className="flex gap-3 items-center">
                    <img
                      src={logoBehance.src}
                      alt="Logo Behance"
                      className="w-15 h-15"
                    />{" "}
                    https://www.behance.net/angliestudio
                  </a>
                </li>
                <li>
                  <a className="flex gap-3 items-center">
                    <img
                      src={logoMail.src}
                      alt="Logo Mail"
                      className="w-15 h-15"
                    />{" "}
                    infoangliestudio@gmail.com
                  </a>
                </li>
                <li>
                  <a className="flex gap-3 items-center">
                    <img
                      src={logoWhatsapp.src}
                      alt="Logo Whatsapp"
                      className="w-15 h-15"
                    />{" "}
                    +54 1166636817 | +54 116 36470650
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`${vintageRotter.className} text-[75px]`}>
                Donde encontrarnos
              </h4>
              <ul className="font-extralight text-[22px] leading-7">
                <li>ARGENTINA</li>
                <li>Villa Crespo_CABA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black py-3">
        <p className="flex justify-center items-center text-[26px] font-extralight  gap-5 text-[#f7ecd5] credit track">
          <img
            src={angliBlanco.src}
            alt="Logo Angli Blanco"
            className="w-auto h-10 mr-3 mt-1"
          />
          DESARROLLADO POR ANGLI ESTUDIO
          <img
            src={copy.src}
            alt="Logo Angli Blanco"
            className="w-auto h-10 mr-3 mt-1"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;

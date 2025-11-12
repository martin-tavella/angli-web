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
    <footer id="hablemos">
      {/* Contenedor Principal (Azul) */}
      <div
        className={`relative bg-[url('/backgrounds/FONDO_AZUL.png')] bg-cover bg-center w-full 
                    py-10 px-5 text-[#f7ecd5] ${manrope.className}`}
      >
        {/* Etiqueta ABSOLUTE _Hablemos */}
        <p className="absolute top-10 right-4 sm:right-12 font-extralight text-[20px] text-[#f7ecd5]">
          _Hablemos
        </p>

        {/* Contenido Principal (Sticker, Texto, Conocenos, Dónde) */}
        <div className="flex flex-col gap-10 max-w-[1200px] mx-auto contact-container py-10 md:py-20">
          {/* PRIMERA FILA: Logo Sticker + Texto Comillas */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center gap-6 md:gap-10">
            <img
              src={stickerAngli.src}
              alt="Sticker Angli Estudio"
              // En móvil ocupa todo el ancho, en desktop solo una parte
              className="mt-10 lg:mt-0 w-full max-w-[270px] md:max-w-[300px] lg:w-[40%]"
            />

            {/* Texto Comillas */}
            <div className="pl-10 sm:pl-30 max-w-[600px] flex text-[18px] sm:text-[20px] md:[22px] leading-7 gap-3 font-extralight mt-4 md:mt-0">
              <img
                src={comillas.src}
                alt="Comilla"
                className="w-5 h-5 flex-shrink-0"
              />
              Escribinos a nuestros números de WhatsApp, conversemos lo que
              necesita tu marca, armamos un presupuesto personalizado ¡Y
              comenzamos a trabajar juntos!
              <div className="w-full flex items-end">
                <img
                  src={comillas.src}
                  alt="Comilla"
                  className="rotate-180 w-5 h-5 flex-shrink-0"
                />
              </div>
            </div>
          </div>

          {/* SEGUNDA FILA: Conocenos + Donde Encontrarnos */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mt-10 md:mt-0">
            {/* 1. Conocenos */}
            <div className="w-2/3 md:w-1/2">
              <h4
                className={`${vintageRotter.className} text-[50px] sm:text-[70px] mb-4`}
              >
                Conocenos
              </h4>
              <ul className="flex flex-col gap-1 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                {/* Se ajusta el tamaño de los iconos y el texto */}
                <li>
                  <a
                    className="flex gap-3 items-center"
                    href="https://www.instagram.com/angliestudio/"
                    target="_blank"
                  >
                    <img
                      src={logoInstagram.src}
                      alt="Logo Instagram"
                      className="w-6 h-6"
                    />{" "}
                    @angliestudio
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-3 items-center"
                    href="https://www.behance.net/angliestudio"
                    target="_blank"
                  >
                    <img
                      src={logoBehance.src}
                      alt="Logo Behance"
                      className="w-6 h-6"
                    />{" "}
                    www.behance.net/angliestudio
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-3 items-center"
                    href="mailto:infoangliestudio@gmail.com"
                    target="_blank"
                  >
                    <img
                      src={logoMail.src}
                      alt="Logo Mail"
                      className="w-6 h-6"
                    />{" "}
                    infoangliestudio@gmail.com
                  </a>
                </li>

                <li>
                  <a href="https://wa.link/bw0sqj" target="_blank">
                    <div className="flex gap-3 items-center">
                      <img
                        src={logoWhatsapp.src}
                        alt="Logo Whatsapp"
                        className="w-6 h-6"
                      />{" "}
                      +54 1166636817 | +54 116 36470650
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* 2. Donde encontrarnos */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              {" "}
              {/* Añadimos margen top en móvil */}
              <h4
                className={`${vintageRotter.className} text-[50px] sm:text-[70px] mb-4`}
              >
                Donde encontrarnos
              </h4>
              <ul className="font-extralight text-[18px] md:text-[22px] leading-7">
                <li>ARGENTINA</li>
                <li>Villa Crespo_CABA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CREDITOS: Footer Negro */}
      <div className=" bg-black py-3">
        <p className="flex justify-center items-center text-[14px] sm:text-[18px] lg:text-[26px] font-extralight gap-2 sm:gap-5 text-[#f7ecd5] tracking-wide">
          <img
            src={angliBlanco.src}
            alt="Logo Angli Blanco"
            className="w-auto h-6 sm:h-10 mr-1 sm:mr-3"
          />
          DESARROLLADO POR ANGLI ESTUDIO
          <img
            src={copy.src}
            alt="Copyright"
            className="w-auto h-6 sm:h-10 mr-1 sm:mr-3"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;

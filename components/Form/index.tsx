"use client";
import { useState } from "react";
import Image from "next/image";
import angli from "@/public/ads/angli.png";
import marco from "@/public/ads/marco.png";
import behance from "@/public/footer/LOGO_BEHANCE.png";
import instagram from "@/public/footer/LOGO_INSTAGRAM.png";
import mail from "@/public/footer/LOGO_MAIL.png";
import whatsapp from "@/public/footer/LOGO_WHATSAPP.png";
import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";
import { vintageRotter, manrope } from "@/utils/fonts/fonts";

const LabelWithStar = ({ children }) => (
  <label className="text-[#4c80bf] text-[11px] md:text-sm xl:text-lg font-bold flex items-center gap-1.5 mb-1">
    <img src={star.src} alt="star" className="w-2.5 h-2.5 xl:w-4 xl:h-4 object-contain" />
    {children}
  </label>
);

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    marca: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  const socialLinks = [
    { icon: instagram, text: "@angliestudio" },
    { icon: behance, text: "https://www.behance.net/angliestudio" },
    { icon: mail, text: "infoangliestudio@gmail.com" },
    { icon: whatsapp, text: "+54 1166636817 • +54 116 36470650" },
  ];

  return (
    <section className="bg-[#f8f4eb] py-25 px-6 lg:px-15 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
      
      {/* LADO IZQUIERDO: Logo y Redes (Visible en LG al costado) */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-12">
          <Image src={angli} alt="Angli Estudio" width={280} className="mb-4" />
          <h4 className={`${vintageRotter.className} text-[#ee6226] text-6xl lg:pt-4  italic`}>
            ¡Hablemos!
          </h4>
        </div>

        {/* Lista de Redes Sociales (Estilo Desktop) */}
        <div className="hidden lg:flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-2 text-[#4c80bf] font-medium text-sm">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={link.icon} alt="icon" width={30} height={30} className="object-contain w-30" />
              </div>
              <span>{link.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* LADO DERECHO: Contenedor del Formulario */}
      <div className="relative w-full max-w-[500px] lg:max-w-[800px] aspect-square lg:aspect-[1.2/1] flex items-center justify-center p-4">
        {/* Imagen de fondo (Marco) */}
        <div className="absolute inset-0 z-0">
          <Image src={marco} alt="marco" fill className="object-contain" priority />
        </div>

        <form
          onSubmit={handleSubmit}
          className={`relative z-10 w-full max-w-[85%] lg:max-w-[90%] flex flex-col gap-6 lg:gap-[3em] ${manrope.className} pt-4 lg:pt-0`}
        >
          {/* Fila 1 */}
          <div className="grid grid-cols-2 gap-6 lg:gap-12">
            <div className="flex flex-col">
              <LabelWithStar>Nombre*</LabelWithStar>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
            </div>
            <div className="flex flex-col">
              <LabelWithStar>Apellido*</LabelWithStar>
              <input
                type="text"
                name="apellido"
                required
                value={formData.apellido}
                onChange={handleChange}
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
            </div>
          </div>

          {/* Fila 2 */}
          <div className="grid grid-cols-2 gap-6 lg:gap-12">
            <div className="flex flex-col">
              <LabelWithStar>E-mail*</LabelWithStar>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
            </div>
            <div className="flex flex-col">
              <LabelWithStar>Teléfono</LabelWithStar>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
            </div>
          </div>

          {/* Fila 3 */}
          <div className="flex flex-col">
            <LabelWithStar>Nombre de la marca o emprendimiento</LabelWithStar>
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
            />
          </div>

          {/* Fila 4 (Mensaje) */}
          <div className="flex-col hidden sm:flex">
            <LabelWithStar>¿En qué podemos ayudarte?</LabelWithStar>
            <textarea
              name="mensaje"
              rows="3"
              value={formData.mensaje}
              onChange={handleChange}
              className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base resize-none text-[#4c80bf]"
            />
          </div>

           <div className="flex flex-col sm:hidden">
            <LabelWithStar>¿En qué podemos ayudarte?</LabelWithStar>
            <textarea
              name="mensaje"
              rows="1"
              value={formData.mensaje}
              onChange={handleChange}
              className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base resize-none text-[#4c80bf]"
            />
          </div>

          {/* Botón con tamaño responsivo */}
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-[#ee6226] text-white px-6 py-1.5 lg:px-10 lg:py-2 rounded-xl lg:rounded-2xl text-sm lg:text-lg font-bold shadow-[0px_3px_0px_0px_#c34a1a] lg:shadow-[0px_4px_0px_0px_#c34a1a] hover:translate-y-[1px] lg:hover:translate-y-[2px] transition-all"
            >
              _Enviar
            </button>
          </div>
        </form>
      </div>

      {/* Redes Sociales (Versión Mobile: Solo iconos abajo) */}
      <div className="flex lg:hidden gap-8 mt-0">
        {socialLinks.map((link, index) => (
          <Image
            key={index}
            src={link.icon}
            alt="Social"
            width={35}
            height={35}
            className="cursor-pointer hover:scale-110 transition-transform w-12"
          />
        ))}
      </div>
    </section>
  );
};

export default Form;
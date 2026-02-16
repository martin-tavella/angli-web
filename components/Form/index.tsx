"use client";
import React, { useState } from "react";
import validateForm from "./validateForm";
import Image from "next/image";
import angli from "@/public/ads/angli.png";
import marco from "@/public/ads/marco.png";
import behance from "@/public/footer/LOGO_BEHANCE.png";
import instagram from "@/public/footer/LOGO_INSTAGRAM.png";
import mail from "@/public/footer/LOGO_MAIL.png";
import whatsapp from "@/public/footer/LOGO_WHATSAPP.png";
import star from "@/public/ourServices/DIRECCION/ESTRELLA.png";
import { vintageRotter, manrope } from "@/utils/fonts/fonts";
import fondo from "@/public/backgrounds/FONDO_BLANCO.png";

// Definimos la interfaz para los datos del formulario
export interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  marca: string;
  mensaje: string;
}

// Definimos la interfaz para los errores (claves dinámicas basadas en FormData)
interface FormErrors {
  [key: string]: string | undefined;
}

const LabelWithStar = ({ children }: { children: React.ReactNode }) => (
  <label className="text-[#4c80bf] text-[11px] md:text-sm xl:text-lg font-bold flex items-center gap-1.5 mb-1">
    <Image
      src={star}
      alt="star"
      className="w-2.5 h-2.5 xl:w-4 xl:h-4 object-contain"
    />
    {children}
  </label>
);

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    marca: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  // Tipado para inputs y textareas combinados
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Asumimos que validateForm devuelve un objeto compatible con FormErrors
    const validationErrors = validateForm(formData) as FormErrors;
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          marca: "",
          mensaje: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: instagram, text: "@angliestudio", url: "https://www.instagram.com/angliestudio" },
    { icon: behance, text: "https://www.behance.net/angliestudio", url: "https://www.behance.net/angliestudio" },
    { icon: mail, text: "infoangliestudio@gmail.com", url: "mailto:infoangliestudio@gmail.com" },
    { icon: whatsapp, text: "+54 1166636817 • +54 116 36470650", url: "http://wa.link/igfa2m" },
  ];

  return (
    <section 
      className="relative py-25 px-6 lg:px-15 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 xl:gap-30 overflow-hidden"
      id="hablemos"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={fondo}
          alt="background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      {/* LADO IZQUIERDO */}
      <div className="relative z-10 flex flex-col items-center lg:items-start w-full lg:w-auto">
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-12">
          <Image
            src={angli}
            alt="Angli Estudio"
            width={280}
            className="mb-4 w-[70%] sm:w-full"
          />
          <h4 className={`${vintageRotter.className} text-[#ee6226] text-5xl sm:text-6xl lg:pt-4 italic`}>
            ¡Hablemos!
          </h4>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#4c80bf] font-medium text-sm hover:opacity-70 transition-opacity"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={link.icon} alt="icon" width={30} height={30} className="object-contain" />
              </div>
              <span className="text-sm xl:text-lg">{link.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="relative z-10 w-full max-w-[500px] lg:max-w-[800px] aspect-square lg:aspect-[1.2/1] flex items-center justify-center p-4 -mt-8 sm:mt-0">
        <div className="absolute inset-0 z-0">
          <Image src={marco} alt="marco" fill className="object-contain" priority />
        </div>

        <form
          onSubmit={handleSubmit}
          className={`relative z-10 w-full max-w-[85%] lg:max-w-[90%] flex flex-col gap-4 lg:gap-[1.5em] xl:gap-[3em] ${manrope.className} pt-4 lg:pt-0`}
        >
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-2 gap-6 lg:gap-12">
            <div className="flex flex-col relative">
              <LabelWithStar>Nombre*</LabelWithStar>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                autoComplete="off"
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
              {errors.nombre && (
                <span className="text-red-500 text-[10px] sm:text-[13px] font-bold absolute -bottom-4 lg:-bottom-5 left-0 -z-10">
                  {errors.nombre}
                </span>
              )}
            </div>
            <div className="flex flex-col relative">
              <LabelWithStar>Apellido*</LabelWithStar>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                autoComplete="off"
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
              {errors.apellido && (
                <span className="text-red-500 text-[10px] sm:text-[13px] font-bold absolute -bottom-4 lg:-bottom-5 left-0 -z-10">
                  {errors.apellido}
                </span>
              )}
            </div>
          </div>

          {/* E-mail y Teléfono */}
          <div className="grid grid-cols-2 gap-6 lg:gap-12">
            <div className="flex flex-col relative">
              <LabelWithStar>E-mail*</LabelWithStar>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
              {errors.email && (
                <span className="text-red-500 text-[10px] sm:text-[13px] font-bold absolute -bottom-4 lg:-bottom-5 left-0 -z-10">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col relative">
              <LabelWithStar>Teléfono</LabelWithStar>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                autoComplete="off"
                className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
              />
              {errors.telefono && (
                <span className="text-red-500 text-[10px] sm:text-[13px] font-bold absolute -bottom-4 lg:-bottom-5 left-0 -z-10">
                  {errors.telefono}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col relative">
            <LabelWithStar>Nombre de la marca o emprendimiento</LabelWithStar>
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              autoComplete="off"
              className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base text-[#4c80bf]"
            />
          </div>

          {/* Textarea para Ayuda (Mobile / Desktop) */}
          <div className="flex flex-col relative sm:hidden">
            <LabelWithStar>¿En qué podemos ayudarte?*</LabelWithStar>
            <textarea
              name="mensaje"
              rows={1}
              value={formData.mensaje}
              onChange={handleChange}
              className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base resize-none text-[#4c80bf]"
              autoComplete="off"
            />
            {errors.mensaje && (
              <span className="text-red-500 text-[10px] sm:text-[13px] font-bold absolute -bottom-5 left-0 -z-10">
                {errors.mensaje}
              </span>
            )}
          </div>

          <div className="hidden flex-col relative sm:flex">
            <LabelWithStar>¿En qué podemos ayudarte?*</LabelWithStar>
            <textarea
              name="mensaje"
              rows={3}
              value={formData.mensaje}
              onChange={handleChange}
              autoComplete="off"
              className="bg-transparent border-b border-[#ee6226] outline-none py-1 text-sm lg:text-base resize-none text-[#4c80bf]"
            />
            {errors.mensaje && (
              <span className="text-red-500 text-[10px] sm:text-[13px] font-bold absolute -bottom-5 left-0 -z-10">
                {errors.mensaje}
              </span>
            )}
          </div>

          {/* Footer del Formulario */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-2 lg:mt-0">
            <div className="text-xs font-bold uppercase min-h-[1rem]">
              {submitStatus === "success" && (
                <span className="text-green-600">¡Mensaje enviado correctamente!</span>
              )}
              {submitStatus === "error" && Object.keys(errors).length === 0 && (
                <span className="text-red-500">Ocurrió un error. Intenta nuevamente.</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#ee6226] text-white px-6 py-1.5 lg:px-10 lg:py-2 rounded-xl lg:rounded-2xl text-sm lg:text-lg font-bold shadow-[0px_3px_0px_0px_#c34a1a] lg:shadow-[0px_4px_0px_0px_#c34a1a] transition-all cursor-pointer
                ${isSubmitting ? "opacity-50 cursor-not-allowed scale-95" : "hover:translate-y-[2px] active:scale-95"}
              `}
            >
              {isSubmitting ? "Enviando..." : "_Enviar"}
            </button>
          </div>
        </form>
      </div>

      {/* MOBILE REDES */}
      <div className="relative z-10 flex lg:hidden gap-8 mt-6">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={link.icon}
              alt="Social"
              width={48}
              height={48}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Form;

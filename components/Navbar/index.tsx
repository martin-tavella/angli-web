"use client";
import Image from "next/image";
import logo from "@/public/logo/navbar-logo.png";
import Link from "next/link";
import { manrope } from "@/utils/fonts/fonts";

import "./breakpoints.css";
import { useState } from "react";
import MobileNav from "./mobileNav";

const navItems = [
  { route: "", label: "Nosotros" },
  { route: "", label: "Servicios" },
  { route: "", label: "Trabajos" },
  { route: "", label: "Clientes" },
  { route: "", label: "Hablemos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[url('/backgrounds/FONDO_BLANCO.png')] bg-no-repeat bg-cover shadow-md">
      {/* Contenedor Interior: Limita el ancho y centra el contenido */}
      {/* Usamos max-w-screen-xl para un ancho grande y centrado */}
      <div className="max-w-screen-xl nav-cont  mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Altura de la Navbar (ej: h-20) */}
        <div className="flex mx-4 lg:mx-0 lg:gap-0 justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Image
            src={logo.src}
            alt="Angli logo"
            width={89}
            height={76}
            className="w-17 lg:w-20"
          />

          {/* Menú de Navegación (Visible solo en LG y superiores) */}
          <div className="hidden lg:flex items-center">
            {/* CLAVE 2: Reducir el gap entre ítems, pero el padding del link crea el espacio */}
            <ul className={`flex gap-0 ${manrope.className}`}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.route}
                    // CLAVE 3: AÑADIR PADDING HORIZONTAL AL LINK para crear el espacio visible
                    className="text-[#333333] font-extralight text-[1.3rem] xl:text-[1.6rem] hover:text-[#d95255] transition-all duration-300 relative group 
                                               px-6 xl:px-8 py-4"
                  >
                    {item.label}

                    {/* Separador Vertical (span) */}
                    {item.label !== "Hablemos" && (
                      <span
                        // CLAVE 4: Posicionar el borde en el borde DERECHO del link
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 
                                                       w-px h-13 bg-[#4C80BF]"
                      ></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Placeholder para el botón de hamburguesa (visible en menos de lg) */}
          <div className="lg:hidden">
            <MobileNav toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

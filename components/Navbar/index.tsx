"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook para detectar la ruta
import logo from "@/public/logo/navbar-logo.png";
import { manrope } from "@/utils/fonts/fonts";
import MobileNav from "./mobileNav";
import "./breakpoints.css";

// NavItems para la página principal
const mainNavItems = [
  { route: "#nosotros", label: "Nosotros" },
  { route: "#servicios", label: "Servicios" },
  { route: "#trabajos", label: "Trabajos" },
  { route: "#clientes", label: "Clientes" },
  { route: "#hablemos", label: "Hablemos" },
];

// NavItems específicos para la landing /ads (según tu diseño)
const adsNavItems = [
  { route: "/ads#trabajos", label: "Trabajos" },
  { route: "/ads#servicios", label: "Servicios" },
  { route: "/ads#clientes", label: "Clientes" },
  { route: "/ads#hablemos", label: "Hablemos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtenemos la ruta actual

  // Determinamos si estamos en la sección de ads
  const isAdsPage = pathname.startsWith("/ads");

  // Elegimos qué lista mostrar
  const navItems = isAdsPage ? adsNavItems : mainNavItems;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 shadow-md">
      <Image
        src="/backgrounds/FONDO_BLANCO.png"
        alt="fondo de la barra de navegación"
        fill
        style={{ objectFit: "cover" }}
        className="-z-10"
        quality={80}
        priority
      />

      <div className="max-w-screen-xl nav-cont mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex mx-4 lg:mx-0 lg:gap-0 justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          {isAdsPage ? (
            <a href="#">
              <Image
                src={logo.src}
                alt="Angli logo"
                width={89}
                height={76}
                priority
                className="w-17 lg:w-20"
              />
            </a>
          ) : (
            <a href="/">
              <Image
                src={logo.src}
                alt="Angli logo"
                width={89}
                height={76}
                priority
                className="w-17 lg:w-20"
              />
            </a>
          )}

          {/* Menú de Navegación Condicional */}
          <div className="hidden lg:flex items-center">
            <ul className={`flex gap-0 ${manrope.className}`}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.route}
                    // Aplicamos estilos condicionales si es necesario (ej: font-bold para ads)
                    className={`text-[#333333] ${isAdsPage ? "font-bold" : "font-extralight"} 
                               text-[1.3rem] xl:text-[1.6rem] hover:text-[#d95255] transition-all 
                               duration-300 relative group px-6 xl:px-8 py-4`}
                  >
                    {item.label}

                    {/* Separador Vertical (span) condicional al último item de la lista actual */}
                    {index !== navItems.length - 1 && (
                      <span
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 
                                   w-px h-13 bg-[#4C80BF]"
                      ></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden">
            <MobileNav toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

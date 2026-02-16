"use client";

import { manrope } from "@/utils/fonts/fonts";
import menu from "@/public/navbar/MENU.png";
import menuOpen from "@/public/navbar/MENU_DESPLEGADO.png";
import icon from "@/public/navbar/ICONO.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Importamos usePathname

// Define la estructura de los submenús (Popups de servicios)
interface SubmenuItem {
  label: string;
  popupId: string;
}

// Define la estructura principal de un ítem de navegación
interface NavItem {
  label: string;
  route: string;
  hasSubmenu: boolean;
  submenu?: SubmenuItem[]; // Opcional, solo presente si hasSubmenu es true
}

const mainNavItems: NavItem[] = [
  { label: "NOSOTROS", route: "#nosotros", hasSubmenu: false },
  {
    label: "SERVICIOS",
    route: "#servicios",
    hasSubmenu: true,
    submenu: [
      { label: "Producción Audiovisual", popupId: "audiovisual" },
      { label: "Dirección de Arte", popupId: "direccion" },
      { label: "Diseño Gráfico", popupId: "diseno" },
      { label: "Redes Sociales", popupId: "redes" },
      { label: "Paid Media", popupId: "paid" },
      { label: "Consultorías", popupId: "consultorias" },
    ],
  },
  { label: "NUESTROS TRABAJOS", route: "#trabajos", hasSubmenu: false },
  { label: "CLIENTES", route: "#clientes", hasSubmenu: false },
  { label: "HABLEMOS", route: "#hablemos", hasSubmenu: false },
];

// 2. Definimos los items para la landing /ads (sin submenús, según el estilo de landing page)
const adsNavItems: NavItem[] = [
  { label: "TRABAJOS", route: "/ads#trabajos", hasSubmenu: false },
  { label: "SERVICIOS", route: "/ads#servicios", hasSubmenu: false },
  { label: "CLIENTES", route: "/ads#clientes", hasSubmenu: false },
  { label: "HABLEMOS", route: "/ads#hablemos", hasSubmenu: false },
];

interface MobileNavProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const MobileNav = ({ toggleMenu, isOpen }: MobileNavProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Detectamos la ruta actual

  // 3. Lógica de renderizado condicional
  const isAdsPage = pathname.startsWith("/ads");
  const navItems: NavItem[] = isAdsPage ? adsNavItems : mainNavItems;

  return (
    <>
      {/* Botón Hamburguesa */}
      <button onClick={toggleMenu} aria-label="Abrir menú">
        <Image
          src={menu}
          alt="menu"
          width={32}
          height={32}
          className="w-8 h-auto"
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menú Deslizante */}
      <div
        className={`
          fixed top-0 right-0 h-full text-[#f7ecd5] shadow-lg z-50 
          transition-transform duration-500 ease-in-out
          w-[350px] sm:w-[400px] 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <Image
          src="/backgrounds/FONDO_AZUL.png"
          alt="fondo del menú"
          fill
          style={{ objectFit: "cover" }}
          className="-z-10"
          quality={75}
        />
        <header className="relative flex pl-8 pt-2 h-23 sm:h-27">
          <Image
            src="/backgrounds/FONDO_BLANCO.png"
            alt="fondo de la cabecera del menú"
            fill
            style={{ objectFit: "cover" }}
            className="-z-10"
            quality={75}
          />
          <button onClick={toggleMenu} aria-label="Cerrar menú">
            <Image
              src={menuOpen}
              alt="menu abierto"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
          </button>
        </header>
        <div className="bg-[url('/backgrounds/FONDO_ROJO.png')] h-1" />
        
        <div className={`p-8 pt-10 ${manrope.className}`}>
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={index} className="text-xl font-light tracking-wider">
                <a
                  href={item.route}
                  onClick={toggleMenu}
                  className="flex items-center gap-3"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-auto"
                  />
                  {/* Si es Ads Page, podemos aplicar un font-bold como en el diseño de desktop */}
                  <span className={isAdsPage ? "font-bold" : ""}>
                    {item.label}
                  </span>
                </a>

                {item.hasSubmenu && item.submenu && (
                  <ul className="pl-8 pt-2 space-y-1 text-base font-light opacity-80">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <button
                          onClick={() => {
                            router.push(`/?service=${sub.popupId}#servicios`);
                            toggleMenu();
                          }}
                          className="text-left w-full"
                        >
                          {sub.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
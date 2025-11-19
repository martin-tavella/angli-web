import { manrope } from "@/utils/fonts/fonts";
import menu from "@/public/navbar/MENU.png";
import menuOpen from "@/public/navbar/MENU_DESPLEGADO.png";
import icon from "@/public/navbar/ICONO.png";
import Image from "next/image";



const navItems = [
  { label: "NOSOTROS", route: "#nosotros", hasSubmenu: false },
  {
    label: "SERVICIOS",
    route: "#servicios",
    hasSubmenu: true,
    submenu: [
      "Producción Audiovisual",
      "Dirección de Arte",
      "Diseño Gráfico",
      "Redes",
      "Paid Media",
    ],
  },
  { label: "NUESTROS TRABAJOS", route: "#trabajos", hasSubmenu: false },
  { label: "CLIENTES", route: "#clientes", hasSubmenu: false },
  { label: "HABLEMOS", route: "#hablemos", hasSubmenu: false },
];

interface MobileNavProps {
  toggleMenu: () => void;
  isOpen: boolean;
}


const MobileNav = ({ toggleMenu, isOpen }: MobileNavProps) => {
  return (
    <>
    {/* 1. Botón Hamburguesa (Visible solo en pantallas pequeñas) */}
      <button onClick={toggleMenu} aria-label="Abrir menú">
        <Image src={menu} alt="menu" width={32} height={32} className="w-8 h-auto" />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleMenu} // Cierra al hacer clic en el overlay
        ></div>
      )}

      {/* 3. Menú Deslizante (Off-Canvas) */}
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
            <Image src={menuOpen} alt="menu abierto" width={32} height={32} className="w-8 h-auto" />
          </button>
        </header>
        <div className="bg-[url('/backgrounds/FONDO_ROJO.png')] h-1"/>
        <div className={`p-8 pt-10 ${manrope.className}`}>
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={index} className="text-xl font-light tracking-wider">
                <a
                  href={item.route}
                  onClick={toggleMenu}
                  className="flex items-center gap-3"
                >
                  <Image src={icon} alt="" width={20} height={20} className="w-5 h-auto" />
                  {item.label}
                </a>

                {item.hasSubmenu && (
                  <ul className="pl-8 pt-2 space-y-1 text-base font-light opacity-80">
                    {item.submenu!.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={`#${sub.toLowerCase().replace(/\s/g, "-")}`}
                          onClick={toggleMenu}
                        >
                          {sub}
                        </a>
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
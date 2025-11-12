import { manrope } from "@/utils/fonts/fonts";
import menu from "@/public/navbar/MENU.png";
import menuOpen from "@/public/navbar/MENU_DESPLEGADO.png";
import icon from "@/public/navbar/ICONO.png";



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
             <button onClick={toggleMenu}>
              <img src={menu.src} alt="menu" className="w-8" />
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
                    fixed top-0 right-0 h-full bg-[url('/backgrounds/FONDO_AZUL.png')] bg-cover bg-no-repeat 
                    text-[#f7ecd5] shadow-lg z-50 transition-transform duration-500 ease-in-out
                    w-[350px] sm:w-[400px] 
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
      >
        <header className="flex pl-8 pt-2 h-23 sm:h-27 bg-[url('/backgrounds/FONDO_BLANCO.png')] bg-cover bg-no-repeat">
            <button onClick={toggleMenu}>
              <img src={menuOpen.src} alt="menu" className="w-8" />
            </button>
        </header>
        <div className="bg-[url('/backgrounds/FONDO_ROJO.png')] h-1"/>
        <div className={`p-8 pt-10 ${manrope.className}`}>
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={index} className="text-xl font-light tracking-wider">
                {/* Enlace Principal */}
                <a
                  href={item.route}
                  onClick={toggleMenu}
                  className="flex items-center gap-3"
                >
                  {/* Ícono X de tu diseño (Simulado con un span) */}
                  <img src={icon.src} alt="icon" className="w-5"/>
                  {item.label}
                </a>

                {/* Submenú (Servicios) */}
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
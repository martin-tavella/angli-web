import Image from "next/image";
import logo from "@/public/logo/navbar-logo.png";
import Link from "next/link";
import { manrope } from "@/utils/fonts/fonts";


const navItems = [
  { route: "", label: "Nosotros" },
  { route: "", label: "Servicios" },
  { route: "", label: "Trabajos" },
  { route: "", label: "Clientes" },
  { route: "", label: "Hablemos" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 hhzbg-[url('@/public/backgrounds/FONDO_BLANCO.png')] bg-no-repeat bg-cover">
      <div className="mx-10 py-6 px-10 pt-8">
        <div className="flex justify-between items-center h-20">
          <Image src={logo.src} alt="Angli logo" width={89} height={76} />

          <div className="hidden lg:flex items-center gap-8">
            <ul className={`flex gap-14 ${manrope.className}`}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.route}
                    className="text-[#333333] font-extralight text-[1.6rem] hover:text-[#d95255] transition-all duration-300 relative group py-4"
                  >
                    {item.label}
                    <span className={`group-hover:w-full transition-all duration-300 ${item.label !== "Hablemos" && "border-r-[#4C80BF] border-r-2 py-3 pr-12"}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
    <nav className="relative">
      <div className="container mx-auto py-3 px-5 pt-8">
        <div className="flex justify-between items-center h-20">
          <Image src={logo.src} alt="Angli logo" width={88} height={75} />

          <div className="hidden lg:flex items-center gap-8">
            <ul className={`flex gap-14 ${manrope.className}`}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.route}
                    className="text-[#333333] font-extralight text-[1.7rem] hover:text-[#d95255] transition-all duration-300 relative group py-4"
                  >
                    {item.label}
                    <span className="group-hover:w-full transition-all duration-300 border-r-[#4C80BF] border-r-2 py-3 pr-12" />
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

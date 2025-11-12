import { manrope } from "@/utils/fonts/fonts";
import clientTitle from "@/public/clientShowcase/TITULO.png";
import ClientGrids from "./ClientGrids";


const ClientShowcase = () => {
  return (
    <section id="clientes"
      className={`relative bg-[url('/backgrounds/FONDO_BLANCO.png')] bg-no-repeat bg-cover min-h  min-h-[80dvh] ${manrope.className}`}
    >
      <p className="absolute top-10 right-12 font-extralight text-[20px] text-[#D85455]">
        _Clientes
      </p>
      <div className="flex justify-center flex-col max-w-7xl mx-auto pt-20 px-10">
        <img
          src={clientTitle.src}
          alt="Clientes"
          className="w-[80%] sm:w-[65%] md:w-[57%] lg:w-[47%]  xl:w-[40%] mt-5 mx-auto"
        />
        <ClientGrids />
      </div>
    </section>
  );
};
export default ClientShowcase;

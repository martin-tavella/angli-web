import { Marquee } from "@/components/ui/marquee";

const phrases = [
  { text: "ANGLI ESTUDIO", style: "normal" },
  { text: "*BEST AGENCY*", style: "emphasized" },
  { text: "ANGLI ESTUDIO", style: "normal" },
  { text: "*COOL IDEAS*", style: "emphasized" },
  { text: "ANGLI ESTUDIO", style: "normal" },
  { text: "*SINCE 2018*", style: "emphasized" },
];

interface TickerProps {
  color?: string;
}

const Ticker = ({ color }: TickerProps) => {
  // Clases base para todas las frases
  const baseClasses = "tracking-wider text-2xl";

  return (
    <div
      className={`xl:h-16 sm:h-12  h-10 text-[#F7ECD5] flex items-center ${
        color === "blue"
          ? "bg-[url('/backgrounds/FONDO_AZUL.png')]"
          : "bg-[url('/backgrounds/FONDO_ROJO.png')]"
      } shadow-[0_-4px_12px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] z-50`}
    >
      <Marquee>
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className={`
                            ${baseClasses} 
                            ${
                              phrase.style === "emphasized"
                                ? "font-extralight text-xl sm:text-2xl xl:text-3xl"
                                : "font-extralight text-[16px] xl:text-xl mt-2"
                            }
                        `}
          >
            {phrase.text}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Ticker;

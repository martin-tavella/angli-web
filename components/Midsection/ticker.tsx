import { Marquee } from "../ui/marquee";

const phrases = [
    { text: "ANGLI ESTUDIO", style: "normal" },
    { text: "*BEST AGENCY*", style: "emphasized" },
    { text: "ANGLI ESTUDIO", style: "normal" },
    { text: "*COOL IDEAS*", style: "emphasized" },
    { text: "ANGLI ESTUDIO", style: "normal" },
    { text: "*SINCE 2018*", style: "emphasized" },
];

const Ticker = () => {
    // Clases base para todas las frases
    const baseClasses = "tracking-wider text-2xl";
    
    return (
        <div className="bg-[url('/backgrounds/FONDO_AZUL.png')] h-16 text-[#F7ECD5] flex items-center">
            <Marquee
            >
                {phrases.map((phrase, index) => (
                    <div 
                        key={index} 
                        className={`
                            ${baseClasses} 
                            ${phrase.style === "emphasized" 
                                ? "font-extralight text-3xl"
                                : "font-extralight text-xl mt-2" 
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
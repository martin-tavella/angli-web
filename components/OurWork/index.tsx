import Ticker from "@/utils/ticker";
import GridWorkCarouselEmbla from "./GridWorkCarousel/gridWorkCarousel";
import titulo from "@/public/ourWork/TITULO.png";
import "./title-breakpoints.css";
import Image from "next/image";


const OurWork = () => {
    return (
        <section id="trabajos" className="relative">
            <Ticker color="red" />
            <Image 
                src={titulo} 
                alt="Nuestros trabajos" 
                className="absolute sm:-top-10 md:w-[42%] md:left-[31%] lg:w-[30%] lg:left-[36%] -top-5 left-[27%] w-[50%] z-40 title"
                quality={85}
                priority
            />
            <GridWorkCarouselEmbla />
            <Ticker color="red" />
        </section>
    )
}
export default OurWork;
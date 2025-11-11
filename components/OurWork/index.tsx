import Ticker from "@/utils/ticker";
import GridWorkCarouselEmbla from "./GridWorkCarousel/gridWorkCarousel";
import titulo from "@/public/ourWork/TITULO.png";
import "./title-breakpoints.css";


const OurWork = () => {
    return (
        <section className="relative">
            <Ticker color="red" />
            <img src={titulo.src} alt="Nuestros trabajos" className="absolute -top-10 left-[41%]  w-[20%] z-70 title"/>
            <GridWorkCarouselEmbla />
            <Ticker color="red" />
        </section>
    )
}
export default OurWork;
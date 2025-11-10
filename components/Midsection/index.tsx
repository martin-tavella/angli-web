import Image from "next/image";
import Ticker from "./ticker";
import PhotoMarquee from "./GridCarousel/gridCarousel";

const Midsection = () => {
    return (
        <>
        <Ticker />
        <PhotoMarquee />
        </>
    )
};
export default Midsection;
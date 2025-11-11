import Image from "next/image";
import Ticker from "@/utils/ticker";
import GridCarouselEmbla from "./GridWorkCarousel/gridCarousel";

const Midsection = () => {
    return (
        <div>
        <Ticker color="blue"/>
        <GridCarouselEmbla />
        </div>
    )
};
export default Midsection;
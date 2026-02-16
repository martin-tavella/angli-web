"use client"
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
const FooterWrapper = () => {
    const pathname = usePathname();
    if (pathname === "/ads") return null
    else return <Footer />
}

export default FooterWrapper;
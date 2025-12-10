import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer/";
import WhatsappBubble from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: "Angli Estudio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased selection:bg-[#f38556]`}
      >
        <Navbar />
        {children}
        <WhatsappBubble />
        <Footer />
      </body>
    </html>
  );
}

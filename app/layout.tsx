import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer/";
import WhatsappBubble from "@/components/Whatsapp";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "htpp://localhost:3000";


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  title: "Angli Estudio",
  description: "Realizamos contenido audiovisual para tu negocio",
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

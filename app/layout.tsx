import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer/";
import WhatsappBubble from "@/components/Whatsapp";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "htpp://localhost:3000";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE;
const GTM = process.env.NEXT_PUBLIC_GTM;


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: "Angli Estudio",
  description: "Realizamos contenido audiovisual para tu negocio",
  verification: {
    google: googleVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased selection:bg-[#f38556]`}>
        <GoogleTagManager gtmId={GTM!} />
        <Navbar />
        {children}
        <WhatsappBubble />
        <Footer />
      </body>
    </html>
  );
}

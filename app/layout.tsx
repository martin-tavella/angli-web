"use client";

import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar/";
import WhatsappBubble from "@/components/Whatsapp";
import FooterWrapper from "@/components/Footer/Wrapper";
import { usePathname } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "htpp://localhost:3000";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE;

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
  const pathname = usePathname();

  const gtmId = pathname.startsWith("/ads") ? process.env.NEXT_PUBLIC_GTM_ADS : process.env.NEXT_PUBLIC_GTM; 

  return (
    <html lang="en">
      <body className={`antialiased selection:bg-[#f38556]`}>
        <GoogleTagManager gtmId={gtmId!} />
        <Navbar />
        {children}
        <WhatsappBubble />
        <FooterWrapper />
      </body>
    </html>
  );
}

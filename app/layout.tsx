import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer/";

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
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./home.module.css";
import Footer from "@/components/footer/Footer";
import CustomNav from "@/components/Nadvar/Nadvar2";
import "./globals.css";
import { ProductProvider } from "@/context/produc";
import { CarritoProvider } from "@/context/carrito";
import { UserProvider } from "@/context/userContex";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple Zone",
  description:
    "Apple Zone es una plataforma de comercio electrónico dedicada a llevar la tecnología de vanguardia de Apple a todos los rincones de Argentina. Ofrecemos una amplia gama de productos, desde los últimos modelos de iPhone y MacBook hasta accesorios y dispositivos inteligentes. Nuestro compromiso es proporcionar a los argentinos acceso fácil y rápido a los productos de Apple más recientes, con un servicio al cliente excepcional y opciones de envío confiables.",
  keywords: [
    "Apple",
    "iPhone",
    "MacBook",
    "iPad",
    "Watch",
    "AirPods",
    "AirTag",
    "Apple TV",
    "Tecnologia",
    "Apple Store",
    "e-commers",
    "Argentina",
    "Apple Zone",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className="min-h-screen">
          <CarritoProvider>
            <UserProvider>
              <ProductProvider>
                <CustomNav />
                <main className=" ml-5 mr-5">{children}</main>
                <footer className="mt-40">
                  <Footer />
                </footer>
              </ProductProvider>
            </UserProvider>
          </CarritoProvider>
        </div>
      </body>
    </html>
  );
}

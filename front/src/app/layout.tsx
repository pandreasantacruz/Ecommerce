import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/navbar&footer/navbar";
import Footer from "./components/navbar&footer/footer";
import VisibleWrapper from "./components/wrapper/visibleWrapper";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";
import { FavoriteProvider } from "./context/favoriteContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
}) as unknown as { variable: string };

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E Tech",
  description: "Tech Ecommerce ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        {" "}
        <AuthProvider>
          <CartProvider>
            <VisibleWrapper>
              <Navbar />
            </VisibleWrapper>{" "}
            <FavoriteProvider>
              <div>{children}</div>
            </FavoriteProvider>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
            <VisibleWrapper>
              <Footer />
            </VisibleWrapper>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
//Toast container caja donde aparece el notificador
